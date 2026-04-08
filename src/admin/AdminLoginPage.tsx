import { FormEvent, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getSupabase, isSupabaseConfigured } from "../lib/supabaseClient";

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [alreadyIn, setAlreadyIn] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setReady(true);
      return;
    }

    const supabase = getSupabase();
    let cancelled = false;

    supabase.auth.getSession().then(({ data }) => {
      if (cancelled) {
        return;
      }
      const session = data.session;
      const allowed = import.meta.env.VITE_ADMIN_EMAIL?.trim();
      if (session) {
        if (!allowed || session.user.email?.toLowerCase() === allowed.toLowerCase()) {
          setAlreadyIn(true);
        }
      }
      setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    if (!isSupabaseConfigured()) {
      setError("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
      return;
    }

    setBusy(true);
    const supabase = getSupabase();
    const { error: signError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    setBusy(false);

    if (signError) {
      setError(signError.message);
      return;
    }

    const allowed = import.meta.env.VITE_ADMIN_EMAIL?.trim();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (allowed && session?.user.email?.toLowerCase() !== allowed.toLowerCase()) {
      await supabase.auth.signOut();
      setError("This account is not authorized for admin access.");
      return;
    }

    navigate("/admin", { replace: true });
  }

  if (!ready) {
    return (
      <div className="admin-panel">
        <p className="admin-muted">Loading…</p>
      </div>
    );
  }

  if (!isSupabaseConfigured()) {
    return (
      <div className="admin-panel admin-panel-wide">
        <p className="eyebrow">Admin</p>
        <h1 className="admin-title">Configuration required</h1>
        <p className="admin-muted">
          Add <code className="admin-code">VITE_SUPABASE_URL</code> and{" "}
          <code className="admin-code">VITE_SUPABASE_ANON_KEY</code> to your environment, then redeploy or restart
          the dev server.
        </p>
        <Link className="admin-back" to="/">
          Back to site
        </Link>
      </div>
    );
  }

  if (alreadyIn) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="admin-panel admin-panel-narrow">
      <p className="eyebrow">Admin</p>
      <h1 className="admin-title">Sign in</h1>
      <p className="admin-muted">Access is restricted to your team account.</p>

      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error ? <p className="admin-error">{error}</p> : null}
        <button className="button button-primary" type="submit" disabled={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <Link className="admin-back" to="/">
        Back to site
      </Link>
    </div>
  );
}

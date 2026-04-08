import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSupabase, isSupabaseConfigured } from "../lib/supabaseClient";

export type EnquiryRow = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: string;
};

export function AdminDashboardPage() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<EnquiryRow[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setLoadError("Supabase is not configured.");
      setLoading(false);
      return;
    }

    let cancelled = false;
    const supabase = getSupabase();

    supabase
      .from("enquiries")
      .select("id, name, email, company, message, created_at")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (cancelled) {
          return;
        }
        if (error) {
          setLoadError(error.message);
          setRows([]);
        } else {
          setRows((data ?? []) as EnquiryRow[]);
        }
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSignOut() {
    if (!isSupabaseConfigured()) {
      navigate("/admin/login", { replace: true });
      return;
    }
    setSigningOut(true);
    await getSupabase().auth.signOut();
    setSigningOut(false);
    navigate("/admin/login", { replace: true });
  }

  return (
    <div className="admin-panel admin-panel-wide">
      <div className="admin-toolbar">
        <div>
          <p className="eyebrow">Admin</p>
          <h1 className="admin-title">Enquiries</h1>
          <p className="admin-muted">Submissions from the contact form.</p>
        </div>
        <div className="admin-toolbar-actions">
          <button
            type="button"
            className="button button-secondary"
            onClick={handleSignOut}
            disabled={signingOut}
          >
            {signingOut ? "Signing out…" : "Sign out"}
          </button>
        </div>
      </div>

      {loading ? <p className="admin-muted">Loading enquiries…</p> : null}

      {loadError ? <p className="admin-error">{loadError}</p> : null}

      {!loading && !loadError && rows.length === 0 ? (
        <p className="admin-muted">No enquiries yet.</p>
      ) : null}

      {!loading && rows.length > 0 ? (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Received</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td className="admin-table-date">
                    {new Date(row.created_at).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                  <td>{row.name}</td>
                  <td>
                    <a className="admin-table-link" href={`mailto:${row.email}`}>
                      {row.email}
                    </a>
                  </td>
                  <td>{row.company ?? "—"}</td>
                  <td className="admin-table-message">{row.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      <Link className="admin-back" to="/">
        Back to site
      </Link>
    </div>
  );
}

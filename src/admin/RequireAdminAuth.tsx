import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";
import { getSupabase, isSupabaseConfigured } from "../lib/supabaseClient";

export function RequireAdminAuth({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null | undefined>(undefined);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setSession(null);
      return;
    }

    const supabase = getSupabase();
    let cancelled = false;

    supabase.auth.getSession().then(({ data }) => {
      if (!cancelled) {
        setSession(data.session ?? null);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  if (session === undefined) {
    return (
      <div className="admin-panel">
        <p className="admin-muted">Checking session…</p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  const allowed = import.meta.env.VITE_ADMIN_EMAIL?.trim();
  if (allowed && session.user.email?.toLowerCase() !== allowed.toLowerCase()) {
    void getSupabase().auth.signOut();
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}

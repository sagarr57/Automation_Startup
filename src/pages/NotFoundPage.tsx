import { NavLink } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="page-hero page-hero-centered">
      <p className="eyebrow">404 — Page Not Found</p>
      <h1>This page doesn't exist.</h1>
      <p className="page-copy">
        The page you're looking for may have moved or never existed. Head back to the homepage and
        you'll find everything you need.
      </p>
      <div className="page-hero-actions">
        <NavLink className="button button-primary" to="/">
          Back to homepage
        </NavLink>
      </div>
    </section>
  );
}

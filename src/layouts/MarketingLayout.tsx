import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AskDravyxChat from "../AskDravyxChat";
import { BrandLockup } from "../components/BrandLockup";
import { SocialIconLink } from "../components/SocialIconLink";
import { navigation } from "../siteData";

export function MarketingLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand-link" to="/">
          <BrandLockup full />
        </NavLink>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={mobileMenuOpen ? "site-nav site-nav-open" : "site-nav"}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? "nav-link nav-link-active" : "nav-link")}
          >
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <BrandLockup footer />
          <p>
            Dravyx AI helps service businesses automate lead response, follow-up, and reporting
            without making the customer experience feel robotic.
          </p>
        </div>
        <div className="footer-meta">
          <div className="footer-links">
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms-and-conditions">Terms &amp; Conditions</NavLink>
          </div>
          <div className="social-links">
            <SocialIconLink href="https://instagram.com" label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.2" />
              </svg>
            </SocialIconLink>
            <SocialIconLink href="https://linkedin.com" label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.8 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm-1.4 2h2.8v8.2H5.4v-8.2Zm4.6 0h2.7v1.1h.1c.4-.7 1.4-1.4 2.8-1.4 3 0 3.5 1.9 3.5 4.5v4h-2.8v-3.5c0-.8 0-1.9-1.2-1.9s-1.4.9-1.4 1.8v3.6H10v-8.2Z" />
              </svg>
            </SocialIconLink>
            <SocialIconLink href="https://x.com" label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 5h3.1l3.4 4.7L16.7 5H19l-5.3 6.1L20 19h-3.1l-3.8-5.2L8.6 19H6.3l5.6-6.5L6 5Z" />
              </svg>
            </SocialIconLink>
          </div>
          <p className="footer-note">© 2026 Dravyx AI. All rights reserved.</p>
        </div>
      </footer>

      <AskDravyxChat />
    </div>
  );
}

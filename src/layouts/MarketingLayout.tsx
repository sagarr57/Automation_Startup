import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AskDravyxChat from "../AskDravyxChat";
import { BrandLockup } from "../components/BrandLockup";
import { ScrollToTop } from "../components/ScrollToTop";
import { ContactReachLinks } from "../components/ContactReachLinks";
import { SocialIconLink } from "../components/SocialIconLink";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { contactChannels, navigation } from "../siteData";

export function MarketingLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <ScrollToTop />
      <header className="site-header">
        <NavLink className="brand-link" to="/">
          <BrandLockup full />
        </NavLink>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="site-nav"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="site-nav" className={mobileMenuOpen ? "site-nav site-nav-open" : "site-nav"}>
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
          <ContactReachLinks variant="footer" />
          <div className="social-links">
            <SocialIconLink href={contactChannels.instagram.href} label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.2" />
              </svg>
            </SocialIconLink>
          </div>
          <p className="footer-note">© 2026 Dravyx AI. All rights reserved.</p>
        </div>
      </footer>

      <WhatsAppButton />
      <AskDravyxChat />
    </div>
  );
}

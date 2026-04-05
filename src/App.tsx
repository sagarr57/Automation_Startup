import { FormEvent, ReactNode, useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  faqs,
  featuredMetrics,
  industries,
  integrationTools,
  navigation,
  processSteps,
  principles,
  resultStories,
  serviceCards,
  fitSignals,
} from "./siteData";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-copy">{description}</p>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="page-copy">{description}</p> : null}
    </div>
  );
}

function IntegrationsStrip() {
  return (
    <section className="logo-strip">
      <p className="eyebrow">Integrates With Your Stack</p>
      <div className="logo-strip-inner">
        {integrationTools.map((tool) => (
          <span key={tool} className="logo-pill">
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}

function BrandLockup({
  footer = false,
  full = false,
}: {
  footer?: boolean;
  full?: boolean;
}) {
  if (full) {
    return (
      <div className="brand brand-full">
        <img
          className="brand-full-mark"
          src="/logo/Dravyx_logo_transparent_cropped_white.png"
          alt="Dravyx AI logo"
        />
      </div>
    );
  }

  return (
    <div className={footer ? "brand brand-footer" : "brand"}>
      <img
        className="brand-mark"
        src="/logo/Dravyx_logo_transparent_cropped_white.png"
        alt="Dravyx AI logo"
      />
    </div>
  );
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

const seoByPath: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Dravyx AI | AI Automation for Dubai Service Businesses",
    description:
      "Dravyx AI helps Dubai service businesses automate lead response, follow-up, and reporting with clear, practical systems.",
  },
  "/services": {
    title: "Services | Dravyx AI Voice Agents and Workflow Automation",
    description:
      "Explore Dravyx AI services including AI voice agents, workflow automation, and strategic reporting for service businesses.",
  },
  "/results": {
    title: "Results | Dravyx AI Use Cases and Outcomes",
    description:
      "See how Dravyx AI helps improve response time, follow-up, bookings, and operational visibility for service-led businesses.",
  },
  "/how-it-works": {
    title: "How It Works | Dravyx AI",
    description:
      "Learn how Dravyx AI moves from strategy to launch with a simple, focused implementation process.",
  },
  "/about": {
    title: "About | Dravyx AI",
    description:
      "Learn how Dravyx AI approaches practical automation for service businesses with an outcome-first mindset.",
  },
  "/faq": {
    title: "FAQ | Dravyx AI",
    description:
      "Find answers about AI voice agents, workflow automation, setup time, tools, and how Dravyx AI works.",
  },
  "/contact": {
    title: "Contact | Dravyx AI",
    description:
      "Book a strategy call with Dravyx AI to choose the right first workflow for response, follow-up, and growth.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Dravyx AI",
    description:
      "Read the Dravyx AI privacy policy for website enquiries, data handling, and communication practices.",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | Dravyx AI",
    description:
      "Read the Dravyx AI terms and conditions for website use, enquiries, and project discussions.",
  },
};

function RouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const seo = seoByPath[location.pathname] ?? seoByPath["/"];
    document.title = seo.title;

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", seo.description);
    }
  }, [location.pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI Automation for Dubai Businesses</p>
          <h1>Turn missed enquiries and manual follow-up into booked business.</h1>
          <p className="page-copy">
            Dravyx AI helps service businesses reply faster, reduce manual work,
            and stay on top of leads, bookings, and follow-up.
          </p>
          <div className="hero-actions">
            <NavLink className="button button-primary" to="/contact">
              Book a strategy call
            </NavLink>
            <NavLink className="button button-secondary" to="/services">
              See services
            </NavLink>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-badge">Simple First Step</div>
          <h2>Start with one workflow that proves value fast.</h2>
          <p>We build one automation that delivers a clear result fast.</p>
          <div className="metric-stack">
            {featuredMetrics.map((item) => (
              <div className="metric-row" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-services-section">
        <div className="home-services-intro">
          <SectionIntro
            eyebrow="Services"
            title="What Dravyx AI helps you do."
            description="Three clear services designed to help you respond faster, reduce admin, and convert more enquiries."
          />
        </div>
        <div className="services-grid">
          {serviceCards.map((service) => (
            <article className="card feature-card" key={service.title}>
              <p className="mini-label">{service.index}</p>
              <h3>{service.title}</h3>
              <p className="card-tagline">{service.tagline}</p>
              <p>{service.summary}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="launch-window">{service.launchWindow}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-fit-section">
        <div className="home-fit-intro">
          <SectionIntro eyebrow="Best For" title="A strong fit if any of this sounds familiar." />
        </div>
        <div className="fit-list">
          {fitSignals.map((signal) => (
            <article className="fit-item" key={signal}>
              <span className="fit-dot" />
              <p>{signal}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-process-section">
        <div className="home-process-intro">
          <SectionIntro
            eyebrow="How It Works"
            title="A short path from first call to go-live."
            description="We keep the buying process simple and focused."
          />
        </div>
        <div className="process-preview">
          {processSteps.map((step) => (
            <article className="band-card" key={step.step}>
              <p className="mini-label">{step.step}</p>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <p className="eyebrow">Ready To Launch</p>
          <h2>Start with one workflow that improves response, follow-up, or booking.</h2>
        </div>
        <div className="cta-actions">
          <NavLink className="button button-primary" to="/contact">
            Book a strategy call
          </NavLink>
          <NavLink className="button button-secondary" to="/how-it-works">
            See how it works
          </NavLink>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services that help you reply faster, automate routine work, and track results."
        description="Dravyx AI keeps the offer simple: improve customer response, reduce manual work, and make performance easier to understand."
      />
      <section className="services-grid">
        {serviceCards.map((service) => (
          <article className="card large-card service-panel" key={service.title}>
            <p className="mini-label">{service.index}</p>
            <h2>{service.title}</h2>
            <p className="card-tagline">{service.tagline}</p>
            <p>{service.summary}</p>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="launch-window">{service.launchWindow}</p>
          </article>
        ))}
      </section>
      <section className="content-grid">
        <SectionIntro
          eyebrow="Use Cases"
          title="Where the service works especially well."
          description="These are strong starting points because the value is easy to see and easy to measure."
        />
        <div className="stack">
          {industries.map((industry) => (
            <article className="band-card" key={industry.name}>
              <h3>{industry.name}</h3>
              <p>
                {industry.problem}
              </p>
              <p>
                {industry.solution}
              </p>
              <p className="mini-copy">{industry.edge}</p>
            </article>
          ))}
        </div>
      </section>
      <IntegrationsStrip />
    </>
  );
}

function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Examples of where Dravyx AI creates practical business value."
        description="The focus stays simple: faster replies, cleaner follow-up, fewer missed opportunities, and better visibility into what is working."
      />
      <section className="card-grid">
        {resultStories.map((story) => (
          <article className="card" key={story.vertical}>
            <p className="mini-label">
              {story.category} / {story.vertical}
            </p>
            <h3>{story.headline}</h3>
            <p>{story.summary}</p>
            <ul>
              {story.metrics.map((metric) => (
                <li key={metric}>{metric}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="cta-banner page-cta">
        <div>
          <p className="eyebrow">Need Similar Results</p>
          <h2>Start with the workflow that affects enquiries, bookings, or follow-up first.</h2>
        </div>
        <div className="cta-actions">
          <NavLink className="button button-primary" to="/contact">
            Book a strategy call
          </NavLink>
        </div>
      </section>
    </>
  );
}

function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A simple path from idea to live automation."
        description="The process stays short, practical, and easy to understand."
      />
      <section className="process-grid">
        {processSteps.map((step) => (
          <article className="process-card" key={step.step}>
            <span>{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </section>
      <section className="cta-banner page-cta">
        <div>
          <p className="eyebrow">Ready To Start</p>
          <h2>We keep the first phase focused so you can go live without a long build cycle.</h2>
        </div>
        <div className="cta-actions">
          <NavLink className="button button-primary" to="/contact">
            Talk to Dravyx AI
          </NavLink>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Dravyx AI is built to make automation feel useful, clear, and commercially relevant."
        description="We focus on business outcomes first, then design the automation around the real workflow."
      />
      <section className="two-column">
        <article className="band-card">
          <h3>Built for service businesses</h3>
          <p>
            Dravyx AI is designed for teams that handle enquiries, bookings,
            follow-up, and front-office operations every day.
          </p>
        </article>
        <article className="band-card">
          <h3>Focused on real business value</h3>
          <p>
            The goal is simple: save time, respond faster, and make it easier to
            see what is working.
          </p>
        </article>
      </section>
      <section className="content-grid">
        <SectionIntro
          eyebrow="Principles"
          title="How the work is designed."
          description="A few rules keep the service clean and credible."
        />
        <div className="fit-list">
          {principles.map((principle) => (
            <article className="fit-item" key={principle}>
              <span className="fit-dot" />
              <p>{principle}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="feature-band compact">
        <SectionIntro
          eyebrow="Approach"
          title="Simple service. Clear delivery. Ongoing improvement."
          description="That is the standard Dravyx AI is built around."
        />
        <p className="page-copy">
          Good automation should make the business feel easier to run, not harder
          to understand.
        </p>
      </section>
    </>
  );
}

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions before starting."
        description="Straight answers on scope, timing, tools, and what the service actually does."
      />
      <section className="faq-list">
        {faqs.map((faq) => (
          <article className="faq-card" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a strategy call and choose the right first workflow."
        description="We will look at where you are losing time or leads, then map the best starting point."
      />
      <section className="contact-shell">
        <div className="contact-card">
          <h2>What happens on the call</h2>
          <ul>
            <li>Review the workflow that is costing you time or revenue</li>
            <li>Choose the best first channel: phone, WhatsApp, web chat, or forms</li>
            <li>Agree on scope, timeline, and success measures</li>
          </ul>
        </div>
        <div className="contact-card">
          <h2>Project enquiry</h2>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <label>
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="you@company.com" />
            </label>
            <label>
              <span>Company</span>
              <input type="text" placeholder="Company name" />
            </label>
            <label>
              <span>What do you want to automate first?</span>
              <textarea
                rows={5}
                placeholder="Lead response, reminders, CRM updates, reporting..."
              />
            </label>
            <button className="button button-primary" type="submit">
              Send enquiry
            </button>
          </form>
        </div>
        <div className="contact-card">
          <h2>Suggested contact details</h2>
          <p>Email: hello@dravyxai.com</p>
          <p>Location: Dubai, UAE</p>
          <p>Format: 30-minute strategy call</p>
          <p>Best for: real estate, clinics, concierge, and service-led teams</p>
        </div>
      </section>
    </>
  );
}

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How Dravyx AI handles website enquiries and shared information."
        description="This page is a simple public-facing privacy summary for website visitors and prospective clients."
      />
      <section className="stack">
        <article className="band-card">
          <h3>Information we collect</h3>
          <p>
            We may collect your name, email address, company details, and any
            project information you share through the contact form or direct
            outreach.
          </p>
        </article>
        <article className="band-card">
          <h3>How we use it</h3>
          <p>
            We use this information to respond to enquiries, discuss potential
            projects, improve our service, and communicate relevant updates.
          </p>
        </article>
        <article className="band-card">
          <h3>Data handling</h3>
          <p>
            We do not sell your information. Data is only shared with tools or
            service providers required to operate the website, communication, or
            project delivery workflow.
          </p>
        </article>
      </section>
    </>
  );
}

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Basic terms for using the Dravyx AI website and contacting the team."
        description="This page outlines simple public terms for website use, enquiries, and project discussions."
      />
      <section className="stack">
        <article className="band-card">
          <h3>Website use</h3>
          <p>
            The information on this website is provided for general business and
            service information. It may change as our offer evolves.
          </p>
        </article>
        <article className="band-card">
          <h3>Project discussions</h3>
          <p>
            Any proposal, scope, pricing, or implementation timeline is only
            final once agreed in writing between Dravyx AI and the client.
          </p>
        </article>
        <article className="band-card">
          <h3>Liability</h3>
          <p>
            We aim to keep the website accurate and available, but we do not
            guarantee uninterrupted access or suitability for every use case.
          </p>
        </article>
      </section>
    </>
  );
}

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <RouteSeo />
      <header className="site-header">
        <NavLink className="brand-link" to="/">
          <BrandLockup full />
        </NavLink>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((value) => !value)}
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
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <BrandLockup footer />
          <p>
            Dravyx AI helps service businesses automate lead response,
            follow-up, and reporting without making the customer experience feel robotic.
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
    </div>
  );
}

export default function App() {
  return <Layout />;
}

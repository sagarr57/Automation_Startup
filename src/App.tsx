import { FormEvent, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import {
  challengePoints,
  faqs,
  featuredMetrics,
  industries,
  integrationTools,
  navigation,
  processSteps,
  principles,
  realityChecks,
  resultStories,
  serviceCards,
  fitSignals,
  heroStats,
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

function StatStrip() {
  return (
    <section className="stat-strip">
      {heroStats.map(({ value, label }) => (
        <div key={label} className="stat-card">
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
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

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Autonomous AI Systems for Dubai</p>
          <h1>
            AI systems that help service businesses respond faster and operate cleaner.
          </h1>
          <p className="page-copy">
            We design voice agents, automations, and reporting layers that make
            growing teams feel more responsive, structured, and scalable.
          </p>
          <div className="hero-actions">
            <NavLink className="button button-primary" to="/contact">
              Book an AI strategy call
            </NavLink>
            <NavLink className="button button-secondary" to="/services">
              Explore services
            </NavLink>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-badge">Launch Offer</div>
          <h2>14-Day Lead Response Challenge</h2>
          <p>
            Start with one focused workflow and prove the value quickly.
          </p>
          <div className="metric-stack">
            {featuredMetrics.map((item) => (
              <div className="metric-row" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="pipeline-card">
            <span className="mini-label">Example flow</span>
            <div className="pipeline-step">
              <strong>Lead arrives</strong>
              <span>00:00</span>
            </div>
            <div className="pipeline-step">
              <strong>AI qualifies and routes</strong>
              <span>00:21</span>
            </div>
            <div className="pipeline-step">
              <strong>Booking pushed to CRM</strong>
              <span>00:47</span>
            </div>
          </div>
        </div>
      </section>

      <StatStrip />

      <IntegrationsStrip />

      <section className="content-grid">
        <SectionIntro
          eyebrow="Why Now"
          title="Start with the workflows where speed and clarity matter most."
          description="You do not need a huge AI transformation. You need one system that immediately improves response time, follow-up, or reporting."
        />
        <div className="two-card-grid">
          {realityChecks.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <SectionIntro
          eyebrow="Good Fit"
          title="Built for lean teams with real operational pressure."
          description="We keep the offer focused and practical so early clients understand the value quickly."
        />
        <div className="fit-list">
          {fitSignals.map((signal) => (
            <article className="fit-item" key={signal}>
              <span className="fit-dot" />
              <p>{signal}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <SectionIntro
          eyebrow="Services"
          title="Three focused capabilities."
          description="Minimal, clear, and commercially useful."
        />
        <div className="feature-card-grid">
          {serviceCards.map((service, index) => (
            <article
              className={index === 0 ? "card feature-card feature-card-wide" : "card feature-card"}
              key={service.title}
            >
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

      <section className="feature-band">
        <SectionIntro
          eyebrow="Launch Offer"
          title="A simple first engagement."
          description="Sell one measurable pilot first, then expand once the proof is visible."
        />
        <div className="challenge-grid">
          {challengePoints.map((point) => (
            <div className="challenge-card" key={point.title}>
              <strong>{point.title}</strong>
              <p>{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <SectionIntro
          eyebrow="Use Cases"
          title="Good first markets."
          description="Choose industries where response time and bookings are easy to measure."
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

      <section className="content-grid">
        <SectionIntro
          eyebrow="Results"
          title="Outcome-led positioning."
          description="Keep the proof simple and credible."
        />
        <div className="feature-card-grid results-card-grid">
          {resultStories.map((story, index) => (
            <article
              className={index === 0 ? "card result-card feature-card-wide" : "card result-card"}
              key={story.headline}
            >
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
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <p className="eyebrow">Ready to Launch</p>
          <h2>Start with one workflow that makes the business feel better immediately.</h2>
        </div>
        <div className="cta-actions">
          <NavLink className="button button-primary" to="/contact">
            Book a strategy call
          </NavLink>
          <NavLink className="button button-secondary" to="/results">
            See the result stories
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
        title="AI systems designed to capture demand, execute the work, and expose the ROI."
        description="A tight service mix for startups and service businesses that need cleaner operations without unnecessary complexity."
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
          title="Verticals we would prioritize first."
          description="Simple, measurable entry points are better than broad positioning."
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
        title="Position the work around outcomes, not tooling."
        description="Show proof in a way that feels believable, clean, and commercially relevant."
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
    </>
  );
}

function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A simple path from first call to a live autonomous workflow."
        description="Keep the buying journey short, calm, and clear."
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
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A technical-business duo built for outcome-first AI delivery."
        description="One side builds the systems. The other shapes the offer, sales process, and client communication."
      />
      <section className="two-column">
        <article className="band-card">
          <h3>Engineer</h3>
          <p>
            Designs the agent stack, orchestration, integrations, uptime model,
            and reporting data flow.
          </p>
        </article>
        <article className="band-card">
          <h3>Business Expert</h3>
          <p>
            Owns outreach, discovery, proposal framing, client communication,
            and the reporting narrative tied to ROI.
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
          eyebrow="Dubai Advantage"
          title="Relationship-led market, automation-backed delivery."
          description="The brand should feel local, calm, and premium."
        />
        <p className="page-copy">
          Buyers want a partner who can translate business pain into a practical
          system that works reliably once it goes live.
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
        title="Common questions prospects will ask before buying."
        description="This page helps you handle objections around timing, use cases, and whether AI complements or replaces the team."
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
        title="Book a strategy call and map the first autonomous win."
        description="A simple CTA page for outreach, referrals, and first conversations."
      />
      <section className="contact-shell">
        <div className="contact-card">
          <h2>What happens on the call</h2>
          <ul>
            <li>Review the business bottleneck with the highest commercial upside</li>
            <li>Choose the right first channel: WhatsApp, web chat, or phone</li>
            <li>Define integrations, KPIs, and pilot scope</li>
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
          <p>Email: hello@drash.ai</p>
          <p>Location: Dubai, UAE</p>
          <p>Format: 30-minute strategy call</p>
          <p>Best for: real estate, clinics, concierge, service-led operators</p>
        </div>
      </section>
    </>
  );
}

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/">
          <span>Drash</span>
          <small>Autonomous AI Systems</small>
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
        </nav>
        <NavLink
          className="button button-primary compact-button header-cta"
          to="/contact"
          onClick={() => setMobileMenuOpen(false)}
        >
          Start a project
        </NavLink>
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
        </Routes>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Drash</strong>
          <p>AI voice agents, automation, and strategic reporting for Dubai-based service businesses.</p>
        </div>
        <div className="footer-links">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return <Layout />;
}

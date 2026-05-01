import { NavLink } from "react-router-dom";
import { IntegrationsStrip } from "../components/IntegrationsStrip";
import { SectionIntro } from "../components/SectionIntro";
import { featuredMetrics, fitSignals, processSteps, serviceCards } from "../siteData";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI Automation for Dubai Businesses</p>
          <h1>Turn missed enquiries and manual follow-up into booked business.</h1>
          <p className="page-copy">
            Dravyx AI helps service businesses reply faster, reduce manual work, and stay on top of
            leads, bookings, and follow-up.
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

      <IntegrationsStrip compact />

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

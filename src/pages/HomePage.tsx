import { NavLink } from "react-router-dom";
import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { IntegrationsStrip } from "../components/IntegrationsStrip";
import { ProcessStepsGrid } from "../components/ProcessStepsGrid";
import { RoiEstimator } from "../components/RoiEstimator";
import { SectionBlock } from "../components/SectionBlock";
import { SectionIntro } from "../components/SectionIntro";
import { ServiceCard } from "../components/ServiceCard";
import { featuredMetrics, fitSignals, processSteps, serviceCards, waitingCosts } from "../siteData";

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
            <NavLink className="button button-primary" to={defaultPrimaryCta.to}>
              {defaultPrimaryCta.label}
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

      <SectionBlock
        className="home-services-section"
        intro={
          <SectionIntro
            eyebrow="Services"
            title="What Dravyx AI helps you do."
            description="Three clear services designed to help you respond faster, reduce admin, and convert more enquiries."
          />
        }
      >
        <div className="services-grid">
          {serviceCards.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        className="waiting-costs-section"
        intro={
          <SectionIntro
            eyebrow="The Cost of Waiting"
            title="Every week without automation is a week of lost leads."
            description="These are the numbers behind why Dubai service businesses are moving fast."
          />
        }
      >
        <div className="waiting-costs-grid">
          {waitingCosts.map((item) => (
            <div className="waiting-cost-card" key={item.label}>
              <strong className="waiting-cost-stat">{item.stat}</strong>
              <p className="waiting-cost-label">{item.label}</p>
              <p className="waiting-cost-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        className="home-fit-section"
        intro={
          <SectionIntro eyebrow="Best For" title="A strong fit if any of this sounds familiar." />
        }
      >
        <div className="fit-list">
          {fitSignals.map((signal) => (
            <article className="fit-item" key={signal}>
              <span className="fit-dot" />
              <p>{signal}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <RoiEstimator />

      <SectionBlock
        className="home-process-section"
        intro={
          <SectionIntro
            eyebrow="How It Works"
            title="A short path from first call to go-live."
            description="We keep the buying process simple and focused."
          />
        }
      >
        <ProcessStepsGrid steps={processSteps} layout="preview" />
      </SectionBlock>

      <CtaBanner
        eyebrow="Ready To Launch"
        title="Start with one workflow that improves response, follow-up, or booking."
        primary={defaultPrimaryCta}
        secondary={{ label: "See how it works", to: "/how-it-works" }}
      />
    </>
  );
}

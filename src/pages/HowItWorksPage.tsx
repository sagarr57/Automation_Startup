import { NavLink } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { processSteps } from "../siteData";

export function HowItWorksPage() {
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

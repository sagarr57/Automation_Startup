import { NavLink } from "react-router-dom";
import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { IntegrationsStrip } from "../components/IntegrationsStrip";
import { ProcessStepsGrid } from "../components/ProcessStepsGrid";
import { SectionBlock } from "../components/SectionBlock";
import { SectionIntro } from "../components/SectionIntro";
import { StackedServices } from "../components/StackedServices";
import { WorkTeasers } from "../components/WorkTeasers";
import { featuredMetrics, processSteps, serviceCards } from "../siteData";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow hero-fade" style={{ ["--d" as string]: "0ms" }}>
            Build. Automate. Scale. — Dubai & Beyond
          </p>
          <h1 className="split-reveal">
            <span className="split-line">
              <span>We build it.</span>
            </span>
            <span className="split-line">
              <span>
                Then we make it <em>run itself.</em>
              </span>
            </span>
          </h1>
          <p className="page-copy hero-fade" style={{ ["--d" as string]: "420ms" }}>
            Websites, apps, and CRMs with the automation built in. One partner, end to end.
          </p>
          <div className="hero-actions hero-fade" style={{ ["--d" as string]: "540ms" }}>
            <NavLink className="button button-primary" to={defaultPrimaryCta.to}>
              {defaultPrimaryCta.label}
            </NavLink>
            <NavLink className="button button-secondary" to="/work">
              See our work
            </NavLink>
          </div>
        </div>
        <div className="hero-panel hero-fade" style={{ ["--d" as string]: "660ms" }}>
          <div className="hero-badge">Simple First Step</div>
          <h2>Start with one workflow that proves value fast.</h2>
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
        intro={<SectionIntro eyebrow="Capabilities" title="What we build." />}
      >
        <StackedServices services={serviceCards} />
      </SectionBlock>

      <SectionBlock
        className="home-work-section"
        intro={
          <SectionIntro
            eyebrow="Selected Work"
            title="We don't publish vanity metrics. We publish our work."
          />
        }
      >
        <WorkTeasers />
      </SectionBlock>

      <SectionBlock
        className="home-process-section"
        intro={<SectionIntro eyebrow="How It Works" title="From first call to go-live." />}
      >
        <ProcessStepsGrid steps={processSteps.slice(0, 4)} layout="preview" />
      </SectionBlock>

      <CtaBanner
        eyebrow="Ready To Launch"
        title="Tell us what you want to build or automate."
        primary={defaultPrimaryCta}
      />
    </>
  );
}

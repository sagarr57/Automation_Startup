import { NavLink } from "react-router-dom";
import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { IntegrationsStrip } from "../components/IntegrationsStrip";
import { ProcessStepsGrid } from "../components/ProcessStepsGrid";
import { RoiEstimator } from "../components/RoiEstimator";
import { ScrubText } from "../components/ScrubText";
import { SectionBlock } from "../components/SectionBlock";
import { SectionIntro } from "../components/SectionIntro";
import { SectorMarquee } from "../components/SectorMarquee";
import { StackedServices } from "../components/StackedServices";
import { WorkTeasers } from "../components/WorkTeasers";
import { featuredMetrics, fitSignals, processSteps, serviceCards, waitingCosts } from "../siteData";
import { manifestoBlocks } from "../workData";

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
              <span>From the first line</span>
            </span>
            <span className="split-line">
              <span>of code to fully</span>
            </span>
            <span className="split-line">
              <span>
                <em>automated</em> results.
              </span>
            </span>
          </h1>
          <p className="page-copy hero-fade" style={{ ["--d" as string]: "520ms" }}>
            Dravyx AI builds your digital product (site, app, or CRM) and automates everything
            behind it. One partner, end to end.
          </p>
          <div className="hero-actions hero-fade" style={{ ["--d" as string]: "640ms" }}>
            <NavLink className="button button-primary" to={defaultPrimaryCta.to}>
              {defaultPrimaryCta.label}
            </NavLink>
            <NavLink className="button button-secondary" to="/work">
              See our work
            </NavLink>
          </div>
        </div>
        <div className="hero-panel hero-fade" style={{ ["--d" as string]: "760ms" }}>
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
        <a className="scroll-cue" href="#manifesto" aria-label="Scroll to content">
          <span className="scroll-cue-line" aria-hidden="true" />
          Scroll
        </a>
      </section>

      <IntegrationsStrip compact />

      <section className="manifesto" id="manifesto">
        {manifestoBlocks.map((block) => (
          <div className="manifesto-block" key={block.label}>
            <p className="manifesto-label">{block.label}</p>
            <ScrubText
              text={block.text}
              highlight={["gaps", "follow-up.", "launch", "day.", "same", "time,"]}
            />
          </div>
        ))}
      </section>

      <SectionBlock
        className="home-services-section"
        intro={
          <SectionIntro
            eyebrow="Capabilities"
            title="What we build, and what we automate."
            description="Four services, one team. Each one can stand alone, but they work best together."
          />
        }
      >
        <StackedServices services={serviceCards} />
      </SectionBlock>

      <SectionBlock
        className="home-work-section"
        intro={
          <SectionIntro
            eyebrow="Selected Work"
            title="We don't publish vanity metrics. We publish our work."
            description="Real platforms we designed, built, and automated. Open any of them to see what we built and how it runs itself."
          />
        }
      >
        <WorkTeasers />
        <div className="section-footer-link">
          <NavLink className="button button-secondary" to="/work">
            View all case studies →
          </NavLink>
        </div>
      </SectionBlock>

      <SectorMarquee />

      <SectionBlock
        className="waiting-costs-section"
        intro={
          <SectionIntro
            eyebrow="The Cost of Waiting"
            title="Every week without automation is a week of lost leads."
            description="The numbers behind why Dubai service businesses are moving fast."
          />
        }
      >
        <div className="waiting-costs-grid">
          {waitingCosts.map((item) => (
            <div className="waiting-cost-card spotlight" key={item.label}>
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

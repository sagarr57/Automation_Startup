import { NavLink } from "react-router-dom";
import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { PageTitleBlock } from "../components/PageTitleBlock";
import { SectionIntro } from "../components/SectionIntro";
import { principles } from "../siteData";

export function AboutPage() {
  return (
    <>
      <section className="about-top">
        <PageTitleBlock
          eyebrow="About"
          title="We are not a tech company. We are an automation partner."
          description="Dravyx AI is built around one belief: technology should make your business easier to run, not harder to understand. We do not sell platforms or push complexity. We find the one workflow that changes the most and build that first."
        />
        <div className="about-highlights">
          <article className="band-card">
            <h3>Built for service businesses</h3>
            <p>
              We focus on the businesses that handle enquiries, bookings, follow-up, and front-office
              operations every day — real estate, clinics, concierge, and professional services.
            </p>
          </article>
          <article className="band-card">
            <h3>Business outcomes first, always</h3>
            <p>
              We do not start with a tool. We start with your biggest bottleneck — the workflow
              closest to revenue — and build backwards from there.
            </p>
          </article>
          <article className="band-card">
            <h3>You will not need a developer</h3>
            <p>
              The systems we deliver run through the tools your team already uses. After we hand
              over, your staff runs it — no technical knowledge required.
            </p>
          </article>
        </div>
      </section>

      <section className="about-human-section feature-band">
        <div className="about-human-grid">
          <div>
            <p className="eyebrow">Why We Exist</p>
            <h2>Most businesses are losing revenue to problems that are entirely solvable.</h2>
            <p className="page-copy">
              A lead that does not hear back within the hour rarely converts. A missed call at 9pm
              is a booking that goes to a competitor. A reminder that never gets sent is a no-show
              that was never chased.
            </p>
            <p className="page-copy">
              These are not technology problems. They are workflow problems. We solve them with
              automation that fits your process — not the other way around.
            </p>
            <NavLink className="button button-primary page-title-action" to="/contact">
              {defaultPrimaryCta.label}
            </NavLink>
          </div>
          <div className="about-human-quotes">
            <blockquote className="about-quote-card">
              <p>
                "We don't start with the technology. We start with the question: what is
                costing you the most right now?"
              </p>
              <cite>— Dravyx AI founding team</cite>
            </blockquote>
            <blockquote className="about-quote-card">
              <p>
                "Our measure of success is simple: is the system still running and improving
                six months after launch?"
              </p>
              <cite>— Dravyx AI founding team</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="content-grid about-principles">
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

      <CtaBanner
        eyebrow="Work With Us"
        title="Start with one workflow that proves value before you scale anything else."
        primary={defaultPrimaryCta}
        secondary={{ label: "See how it works", to: "/how-it-works" }}
      />
    </>
  );
}

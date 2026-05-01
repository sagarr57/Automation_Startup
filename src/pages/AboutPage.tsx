import { SectionIntro } from "../components/SectionIntro";
import { principles } from "../siteData";

export function AboutPage() {
  return (
    <>
      <section className="about-top">
        <div className="about-intro">
          <p className="eyebrow">About</p>
          <h1>Dravyx AI is built to make automation feel useful, clear, and commercially relevant.</h1>
          <p className="page-copy">
            We focus on business outcomes first, then design the automation around the real workflow.
          </p>
        </div>
        <div className="about-highlights">
          <article className="band-card">
            <h3>Built for service businesses</h3>
            <p>
              Dravyx AI is designed for teams that handle enquiries, bookings, follow-up, and
              front-office operations every day.
            </p>
          </article>
          <article className="band-card">
            <h3>Focused on real business value</h3>
            <p>
              The goal is simple: save time, respond faster, and make it easier to see what is
              working.
            </p>
          </article>
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
      <section className="feature-band compact">
        <SectionIntro
          eyebrow="Approach"
          title="Simple service. Clear delivery. Ongoing improvement."
          description="That is the standard Dravyx AI is built around."
        />
        <p className="page-copy">
          Good automation should make the business feel easier to run, not harder to understand.
        </p>
      </section>
    </>
  );
}

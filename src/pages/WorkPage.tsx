import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { DeviceMockup } from "../components/DeviceMockup";
import { StatCounter } from "../components/StatCounter";
import { workProjects } from "../workData";

export function WorkPage() {
  return (
    <>
      <section className="page-hero work-hero">
        <p className="eyebrow">Selected Work</p>
        <h1 className="split-reveal">
          <span className="split-line">
            <span>We don't publish vanity metrics.</span>
          </span>
          <span className="split-line">
            <span>
              We publish <em>our work.</em>
            </span>
          </span>
        </h1>
        <p className="page-copy">
          Three recent builds: a community platform, a parts catalog, and a self-publishing media
          site. Each one shipped with the automation built in, not added later.
        </p>
        <nav className="work-jump" aria-label="Case studies">
          {workProjects.map((p, i) => (
            <a key={p.id} href={`#${p.id}`} className="work-jump-link">
              <span>0{i + 1}</span>
              {p.name}
            </a>
          ))}
        </nav>
      </section>

      {workProjects.map((project, i) => (
        <article
          key={project.id}
          id={project.id}
          className="case-study"
          style={{ ["--accent-project" as string]: project.accent }}
        >
          <header className="case-head">
            <p className="work-meta">
              <span className="work-index">0{i + 1}</span>
              <span>{project.sector}</span>
              <span className="work-dot" aria-hidden="true" />
              <span>{project.location}</span>
              <span className="work-dot" aria-hidden="true" />
              <span>{project.year}</span>
              <span className={project.url ? "status-pill status-live" : "status-pill"}>
                {project.status}
              </span>
            </p>
            <h2>{project.name}</h2>
            <p className="case-headline">{project.headline}</p>
          </header>

          <div className="case-media">
            <DeviceMockup project={project} parallax={0.1} eager={i === 0} />
          </div>

          <div className="case-stats">
            {project.stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>

          <div className="case-grid">
            <div className="case-col">
              <p className="mini-label">The brief</p>
              <p className="case-summary">{project.summary}</p>
              <p>{project.challenge}</p>
              {project.url ? (
                <a
                  className="button button-primary case-cta"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.urlLabel ?? "Visit site"} ↗
                </a>
              ) : null}
            </div>
            <div className="case-col">
              <p className="mini-label">What we built</p>
              <ul className="case-list">
                {project.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-col">
              <p className="mini-label">Automation built in</p>
              <ul className="case-list case-list-auto">
                {project.automation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mini-label case-stack-label">Stack</p>
              <div className="work-chips">
                {project.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}

      <CtaBanner
        eyebrow="Your Project Next"
        title="Have a site, app, or workflow that should run itself? Let's scope it."
        primary={defaultPrimaryCta}
        secondary={{ label: "See services", to: "/services" }}
      />
    </>
  );
}

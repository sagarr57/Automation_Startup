import { NavLink } from "react-router-dom";
import { workProjects } from "../workData";
import { DeviceMockup } from "./DeviceMockup";

/** Home-page "Selected Work" list: one row per project, alternating sides. */
export function WorkTeasers() {
  return (
    <div className="work-teasers">
      {workProjects.map((project, i) => (
        <article
          key={project.id}
          className={i % 2 ? "work-teaser work-teaser-flip spotlight" : "work-teaser spotlight"}
          style={{ ["--accent-project" as string]: project.accent }}
        >
          <div className="work-teaser-media">
            <DeviceMockup project={project} />
          </div>
          <div className="work-teaser-copy">
            <p className="work-meta">
              <span className="work-index">0{i + 1}</span>
              <span>{project.sector}</span>
              <span className="work-dot" aria-hidden="true" />
              <span>{project.location}</span>
            </p>
            <h3>{project.name}</h3>
            <p className="work-teaser-headline">{project.headline}</p>
            <div className="work-chips">
              {project.stack.slice(0, 3).map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="work-teaser-actions">
              <NavLink className="button button-secondary" to={`/work#${project.id}`}>
                Read case study
              </NavLink>
              {project.url ? (
                <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.urlLabel ?? "Visit site"} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="status-pill">{project.status}</span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

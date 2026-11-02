import { NavLink } from "react-router-dom";
import type { ServiceCard } from "../siteData";

/** Services as full-width sticky cards that stack over each other while scrolling. */
export function StackedServices({ services }: { services: ServiceCard[] }) {
  return (
    <div className="stack-cards">
      {services.map((service, i) => (
        <article
          className="stack-card spotlight"
          key={service.title}
          style={{ ["--i" as string]: i }}
        >
          <div className="stack-card-index" aria-hidden="true">
            {service.index}
          </div>
          <div className="stack-card-body">
            <p className="mini-label">What we do · {service.index}</p>
            <h3>{service.title}</h3>
            <p className="card-tagline">{service.tagline}</p>
            <p className="stack-card-summary">{service.summary}</p>
            <ul className="stack-card-points">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <NavLink className="text-link" to="/services">
              Know more <span aria-hidden="true">→</span>
            </NavLink>
          </div>
          <div className="stack-card-stat">
            <strong>{service.stat}</strong>
            <span>{service.statLabel}</span>
            <p className="launch-window">{service.launchWindow}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

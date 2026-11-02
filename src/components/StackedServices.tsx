import { NavLink } from "react-router-dom";
import type { ServiceCard } from "../siteData";
import { StackList } from "./StackList";

type StackedServicesProps = {
  services: ServiceCard[];
  /** Show the "Know more" link to /services (off on the Services page itself). */
  showLink?: boolean;
};

/** Services as cards that stack over each other while scrolling. */
export function StackedServices({ services, showLink = true }: StackedServicesProps) {
  return (
    <StackList>
      {services.map((service) => (
        <article className="stack-card stack-card-service spotlight" key={service.title}>
          <span className="stack-card-watermark" aria-hidden="true">
            {service.index}
          </span>
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
            {showLink && (
              <NavLink className="text-link" to="/services">
                Know more <span aria-hidden="true">→</span>
              </NavLink>
            )}
          </div>
          <div className="stack-card-stat">
            <strong>{service.stat}</strong>
            <span>{service.statLabel}</span>
            <p className="launch-window">{service.launchWindow}</p>
          </div>
        </article>
      ))}
    </StackList>
  );
}

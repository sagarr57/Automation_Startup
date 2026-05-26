import type { ServiceCard as ServiceCardData } from "../siteData";

type ServiceCardProps = {
  service: ServiceCardData;
  variant?: "compact" | "full";
};

export function ServiceCard({ service, variant = "compact" }: ServiceCardProps) {
  if (variant === "full") {
    return (
      <article className="card large-card service-panel">
        <p className="mini-label">{service.index}</p>
        <h2>{service.title}</h2>
        <p className="card-tagline">{service.tagline}</p>
        <p className="service-scenario">{service.scenario}</p>
        <p>{service.summary}</p>
        <ul>
          {service.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="launch-window">{service.launchWindow}</p>
      </article>
    );
  }

  return (
    <article className="card feature-card">
      <p className="mini-label">{service.index}</p>
      <h3>{service.title}</h3>
      <p className="card-tagline">{service.tagline}</p>
      <p className="service-scenario">{service.scenario}</p>
      <ul>
        {service.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="launch-window">{service.launchWindow}</p>
    </article>
  );
}

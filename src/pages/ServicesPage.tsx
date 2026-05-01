import { IntegrationsStrip } from "../components/IntegrationsStrip";
import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../components/SectionIntro";
import { industries, serviceCards } from "../siteData";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services that help you reply faster, automate routine work, and track results."
        description="Dravyx AI keeps the offer simple: improve customer response, reduce manual work, and make performance easier to understand."
      />
      <section className="services-grid">
        {serviceCards.map((service) => (
          <article className="card large-card service-panel" key={service.title}>
            <p className="mini-label">{service.index}</p>
            <h2>{service.title}</h2>
            <p className="card-tagline">{service.tagline}</p>
            <p>{service.summary}</p>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="launch-window">{service.launchWindow}</p>
          </article>
        ))}
      </section>
      <section className="content-grid">
        <SectionIntro
          eyebrow="Use Cases"
          title="Where the service works especially well."
          description="These are strong starting points because the value is easy to see and easy to measure."
        />
        <div className="stack">
          {industries.map((industry) => (
            <article className="band-card" key={industry.name}>
              <h3>{industry.name}</h3>
              <p>{industry.problem}</p>
              <p>{industry.solution}</p>
              <p className="mini-copy">{industry.edge}</p>
            </article>
          ))}
        </div>
      </section>
      <IntegrationsStrip />
    </>
  );
}

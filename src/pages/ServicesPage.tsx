import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../components/SectionIntro";
import { ServiceCard } from "../components/ServiceCard";
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
          <ServiceCard key={service.title} service={service} variant="full" />
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
      <CtaBanner
        eyebrow="Ready To Start"
        title="Pick the service that matches your biggest workflow gap and book a strategy call."
        primary={defaultPrimaryCta}
        secondary={{ label: "See results", to: "/results" }}
      />
    </>
  );
}

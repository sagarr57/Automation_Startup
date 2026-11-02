import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { StackedServices } from "../components/StackedServices";
import { serviceCards } from "../siteData";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four services. One team. Everything connected."
        description="Pick one, or combine them. Every build ships with the automation already wired in."
      />
      <section>
        <StackedServices services={serviceCards} showLink={false} />
      </section>
      <CtaBanner
        eyebrow="Ready To Start"
        title="Pick the gap that costs you most. We'll start there."
        primary={defaultPrimaryCta}
        secondary={{ label: "See our work", to: "/work" }}
      />
    </>
  );
}

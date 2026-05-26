import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { ProcessStepsGrid } from "../components/ProcessStepsGrid";
import { processSteps } from "../siteData";

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A simple path from idea to live automation."
        description="The process stays short, practical, and easy to understand."
      />
      <section>
        <ProcessStepsGrid steps={processSteps} />
      </section>
      <CtaBanner
        eyebrow="Ready To Start"
        title="We keep the first phase focused so you can go live without a long build cycle."
        primary={defaultPrimaryCta}
      />
    </>
  );
}

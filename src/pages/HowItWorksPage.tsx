import { CtaBanner, defaultPrimaryCta } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { ProcessStepsGrid } from "../components/ProcessStepsGrid";
import { processSteps } from "../siteData";

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Five steps from idea to live automation."
        description="Short, practical, and easy to follow."
      />
      <section>
        <ProcessStepsGrid steps={processSteps} layout="stack" />
      </section>
      <CtaBanner
        eyebrow="Ready To Start"
        title="Step one is a 30-minute call."
        primary={defaultPrimaryCta}
      />
    </>
  );
}

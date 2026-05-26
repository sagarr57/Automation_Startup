import type { ProcessStep } from "../siteData";

type ProcessStepsGridProps = {
  steps: ProcessStep[];
  layout?: "preview" | "grid";
};

export function ProcessStepsGrid({ steps, layout = "grid" }: ProcessStepsGridProps) {
  const gridClass = layout === "preview" ? "process-preview" : "process-grid";

  return (
    <div className={gridClass}>
      {steps.map((step) => (
        <article className="process-card" key={step.step}>
          <p className="mini-label">{step.step}</p>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      ))}
    </div>
  );
}

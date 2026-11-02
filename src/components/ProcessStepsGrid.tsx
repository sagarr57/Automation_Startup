import type { ProcessStep } from "../siteData";
import { StackList } from "./StackList";

type ProcessStepsGridProps = {
  steps: ProcessStep[];
  layout?: "preview" | "grid" | "stack";
};

export function ProcessStepsGrid({ steps, layout = "grid" }: ProcessStepsGridProps) {
  if (layout === "stack") {
    return (
      <StackList className="stack-list-steps">
        {steps.map((step, i) => (
          <article className="stack-card stack-card-step spotlight" key={step.step}>
            <span className="stack-card-watermark" aria-hidden="true">
              {step.step}
            </span>
            <div className="stack-card-index" aria-hidden="true">
              {step.step}
            </div>
            <div className="stack-card-body">
              <p className="mini-label">
                Step {step.step} of {String(steps.length).padStart(2, "0")}
              </p>
              <h3>{step.title}</h3>
              <p className="stack-card-summary">{step.text}</p>
            </div>
            <div className="step-progress" aria-hidden="true">
              <span style={{ width: `${((i + 1) / steps.length) * 100}%` }} />
            </div>
          </article>
        ))}
      </StackList>
    );
  }

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

import type { WorkStat } from "../workData";

/** A number that counts up when scrolled into view (handled by ScrollEffects). */
export function StatCounter({ stat }: { stat: WorkStat }) {
  const finalText = `${stat.prefix ?? ""}${stat.value.toLocaleString("en-US")}${stat.suffix ?? ""}`;
  return (
    <div className="stat-counter">
      <strong
        data-count={stat.value}
        data-prefix={stat.prefix}
        data-suffix={stat.suffix}
        aria-label={finalText}
      >
        {finalText}
      </strong>
      <span>{stat.label}</span>
    </div>
  );
}

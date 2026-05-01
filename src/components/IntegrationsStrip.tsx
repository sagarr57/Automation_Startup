import { integrationTools } from "../siteData";
import { ToolBadge } from "./ToolBadge";

export function IntegrationsStrip({ compact = false }: { compact?: boolean }) {
  const marqueeItems = [...integrationTools, ...integrationTools];

  return (
    <section className={compact ? "logo-strip logo-strip-compact" : "logo-strip"}>
      <div className="logo-strip-header">
        <p className="eyebrow">Integrations</p>
        <h2>We connect with the tools you already use.</h2>
      </div>
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {marqueeItems.map((tool, index) => (
            <span key={`${tool}-${index}`} className="logo-pill">
              <ToolBadge tool={tool} />
              <span>{tool}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

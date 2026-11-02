import type { WorkProject } from "../workData";

type DeviceMockupProps = {
  project: WorkProject;
  eager?: boolean;
};

function hostOf(project: WorkProject) {
  if (!project.url) return project.name;
  try {
    return new URL(project.url).host.replace(/^www\./, "");
  } catch {
    return project.url;
  }
}

/** Desktop browser frame with a phone frame overlapping the corner. */
export function DeviceMockup({ project, eager = false }: DeviceMockupProps) {
  const loading = eager ? "eager" : "lazy";

  return (
    <div className="device-mockup" style={{ ["--accent-project" as string]: project.accent }}>
      <div className="device-glow" aria-hidden="true" />
      <figure className="browser-frame">
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <div className="browser-url">{hostOf(project)}</div>
        </div>
        <img
          src={project.images.desktop}
          alt={project.images.desktopAlt}
          width={1440}
          height={900}
          loading={loading}
          decoding="async"
        />
      </figure>
      <figure className="phone-frame">
        <div className="phone-notch" aria-hidden="true" />
        <img
          src={project.images.mobile}
          alt={project.images.mobileAlt}
          width={390}
          height={844}
          loading={loading}
          decoding="async"
        />
      </figure>
    </div>
  );
}

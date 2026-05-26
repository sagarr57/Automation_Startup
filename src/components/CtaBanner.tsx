import { NavLink } from "react-router-dom";

type CtaLink = {
  label: string;
  to: string;
  variant?: "primary" | "secondary";
};

type CtaBannerProps = {
  eyebrow: string;
  title: string;
  primary: CtaLink;
  secondary?: CtaLink;
  className?: string;
};

export function CtaBanner({ eyebrow, title, primary, secondary, className = "" }: CtaBannerProps) {
  return (
    <section className={`cta-banner page-cta ${className}`.trim()}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="cta-actions">
        <NavLink
          className={`button button-${primary.variant ?? "primary"}`}
          to={primary.to}
        >
          {primary.label}
        </NavLink>
        {secondary ? (
          <NavLink
            className={`button button-${secondary.variant ?? "secondary"}`}
            to={secondary.to}
          >
            {secondary.label}
          </NavLink>
        ) : null}
      </div>
    </section>
  );
}

export const defaultPrimaryCta = {
  label: "Book Your AI Gameplan",
  to: "/contact",
} as const;

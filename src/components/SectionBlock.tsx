import { ReactNode } from "react";

type SectionBlockProps = {
  className?: string;
  intro?: ReactNode;
  children: ReactNode;
};

export function SectionBlock({ className = "", intro, children }: SectionBlockProps) {
  return (
    <section className={className}>
      {intro ? <div className="section-intro-wrap">{intro}</div> : null}
      {children}
    </section>
  );
}

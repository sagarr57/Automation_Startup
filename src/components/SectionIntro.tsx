type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="page-copy">{description}</p> : null}
    </div>
  );
}

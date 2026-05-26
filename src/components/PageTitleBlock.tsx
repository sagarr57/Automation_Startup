import { ReactNode } from "react";

type PageTitleBlockProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  headingLevel?: "h1" | "h2";
};

export function PageTitleBlock({
  eyebrow,
  title,
  description,
  children,
  headingLevel = "h1",
}: PageTitleBlockProps) {
  const Heading = headingLevel;

  return (
    <div className="page-title-block">
      <p className="eyebrow">{eyebrow}</p>
      <Heading>{title}</Heading>
      {description ? <p className="page-copy">{description}</p> : null}
      {children}
    </div>
  );
}

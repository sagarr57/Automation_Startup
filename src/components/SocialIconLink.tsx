import { ReactNode } from "react";

type SocialIconLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
};

export function SocialIconLink({ href, label, children }: SocialIconLinkProps) {
  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

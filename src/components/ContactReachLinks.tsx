import { contactChannels } from "../siteData";
import { EmailIcon, InstagramIcon, WhatsAppIcon } from "./ContactIcons";

type ContactReachLinksProps = {
  variant?: "footer" | "card";
};

export function ContactReachLinks({ variant = "card" }: ContactReachLinksProps) {
  if (variant === "footer") {
    return (
      <div className="footer-contact-links">
        <a
          className="footer-contact-item"
          href={contactChannels.email.href}
          aria-label="Email us"
        >
          <EmailIcon />
          {contactChannels.email.label}
        </a>
        <a
          className="footer-contact-item"
          href={contactChannels.whatsapp.href}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp us"
        >
          <WhatsAppIcon />
          {contactChannels.whatsapp.label}
        </a>
      </div>
    );
  }

  return (
    <div className="contact-reach-list">
      <a className="contact-reach-item" href={contactChannels.email.href}>
        <span className="contact-reach-icon" aria-hidden="true">
          <EmailIcon />
        </span>
        <span>{contactChannels.email.label}</span>
      </a>
      <a
        className="contact-reach-item"
        href={contactChannels.whatsapp.href}
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-reach-icon" aria-hidden="true">
          <WhatsAppIcon />
        </span>
        <span>{contactChannels.whatsapp.label}</span>
      </a>
      <a
        className="contact-reach-item"
        href={contactChannels.instagram.href}
        target="_blank"
        rel="noreferrer"
      >
        <span className="contact-reach-icon" aria-hidden="true">
          <InstagramIcon />
        </span>
        <span>{contactChannels.instagram.label}</span>
      </a>
    </div>
  );
}

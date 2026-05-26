import { useEffect, useRef } from "react";
import { calendlyUrl } from "../siteData";

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

/** Calendly inline embed URL — availability & time slots come from your Calendly event settings. */
const calendlyEmbedUrl =
  `${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0d121c&text_color=f4f0e8&primary_color=f2a65a`;

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        resize?: boolean;
      }) => void;
    };
  }
}

function loadCalendlyScript(): Promise<void> {
  if (window.Calendly) {
    return Promise.resolve();
  }

  const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT}"]`);
  if (existing) {
    return new Promise((resolve) => {
      if (window.Calendly) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed to load"));
    document.body.appendChild(script);
  });
}

export function CalendlyEmbed() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;

    loadCalendlyScript()
      .then(() => {
        if (cancelled || !hostRef.current || !window.Calendly) return;
        hostRef.current.replaceChildren();
        window.Calendly.initInlineWidget({
          url: calendlyEmbedUrl,
          parentElement: hostRef.current,
          resize: true,
        });
      })
      .catch(() => {
        /* Fallback: open scheduling page if widget script is blocked */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="calendly-wrap">
      <div ref={hostRef} className="calendly-inline-host" />
    </div>
  );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target route has rendered.
      const id = decodeURIComponent(hash.slice(1));
      const raf = requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "instant", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    return undefined;
  }, [pathname, hash]);

  return null;
}

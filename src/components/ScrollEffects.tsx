import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Site-wide scroll effects (no dependencies):
 *  - top scroll-progress bar
 *  - reveal-on-scroll for common blocks (auto-tagged) and anything with [data-reveal]
 *  - count-up numbers for [data-count]
 *  - parallax for [data-parallax="<speed>"]
 *  - scroll-linked horizontal drift for [data-scroll-x="<speed>"]
 *  - word-by-word highlight for .scrub-text
 *  - shrink/dim for sticky .stack-card elements as the next card covers them
 *  - pointer spotlight (--mx / --my) on .spotlight elements
 */

const AUTO_REVEAL = [
  ".section-intro-wrap",
  ".page-hero",
  ".card",
  ".waiting-cost-card",
  ".fit-item",
  ".process-card",
  ".faq-card",
  ".cta-banner",
  ".logo-strip",
  ".work-teaser",
  ".case-head",
  ".case-media",
  ".case-stats",
  ".case-grid",
  ".sector-marquee",
  ".roi-estimator",
  ".manifesto-block",
].join(",");

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function formatCount(value: number, el: HTMLElement) {
  const prefix = el.dataset.prefix ?? "";
  const suffix = el.dataset.suffix ?? "";
  return `${prefix}${Math.round(value).toLocaleString("en-US")}${suffix}`;
}

function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const duration = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = formatCount(target * eased, el);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function ScrollEffects() {
  const { pathname } = useLocation();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const root = document.documentElement;
    root.classList.add("fx-ready");

    // ---- Reveal + counters --------------------------------------------------
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          if (el.dataset.count && !el.dataset.counted) {
            el.dataset.counted = "1";
            if (!reduced) animateCount(el);
          }
          revealObserver.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    // Bound per effect run (StrictMode/route changes re-run this effect with a fresh observer).
    const bound = new WeakSet<Element>();
    const bind = (el: Element) => {
      if (bound.has(el)) return false;
      bound.add(el);
      return true;
    };

    const scan = () => {
      const main = document.querySelector(".main-content");
      if (!main) return;

      main.querySelectorAll<HTMLElement>(AUTO_REVEAL).forEach((el) => {
        if (!bind(el) || reduced || el.classList.contains("is-visible")) return;
        // Stagger siblings that share a parent grid.
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children).filter((c) => c.matches(AUTO_REVEAL))
          : [];
        const index = Math.max(0, siblings.indexOf(el));
        el.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 80}ms`);
        el.classList.add("reveal");
        revealObserver.observe(el);
      });

      main.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (!bind(el) || reduced || el.classList.contains("is-visible")) return;
        el.classList.add("reveal");
        revealObserver.observe(el);
      });

      main.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        if (!bind(el) || reduced || el.dataset.counted) return;
        el.textContent = formatCount(0, el);
        revealObserver.observe(el);
      });
    };

    scan();
    // Lazy content (e.g. chat, Calendly, route transitions) — rescan on DOM changes.
    const mutationObserver = new MutationObserver(() => scan());
    const main = document.querySelector(".main-content");
    if (main) mutationObserver.observe(main, { childList: true, subtree: true });

    // ---- Scroll-linked effects ----------------------------------------------
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const scrollMax = document.documentElement.scrollHeight - vh;
      const progress = scrollMax > 0 ? window.scrollY / scrollMax : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      root.classList.toggle("is-scrolled", window.scrollY > 24);

      if (reduced) return;

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.1;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });

      document.querySelectorAll<HTMLElement>("[data-scroll-x]").forEach((el) => {
        const speed = Number(el.dataset.scrollX) || 0.3;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const offset = (vh - rect.top) * speed;
        el.style.transform = `translate3d(${(-offset).toFixed(1)}px, 0, 0)`;
      });

      document.querySelectorAll<HTMLElement>(".scrub-text").forEach((el) => {
        const rect = el.getBoundingClientRect();
        // 0 when the block's top reaches 85% of viewport, 1 when its bottom reaches 45%.
        const start = vh * 0.85;
        const end = vh * 0.45;
        const total = start - end + rect.height;
        const p = Math.min(1, Math.max(0, (start - rect.top) / total));
        const words = el.querySelectorAll<HTMLElement>(".scrub-word");
        const lit = Math.round(p * words.length);
        words.forEach((w, i) => w.classList.toggle("is-lit", i < lit));
      });

      const stackCards = Array.from(document.querySelectorAll<HTMLElement>(".stack-card"));
      stackCards.forEach((card, i) => {
        const next = stackCards[i + 1];
        if (!next || !window.matchMedia("(min-width: 821px)").matches) {
          card.style.removeProperty("--stack-p");
          return;
        }
        const gap = next.getBoundingClientRect().top - card.getBoundingClientRect().top;
        const p = Math.min(1, Math.max(0, 1 - gap / card.offsetHeight));
        card.style.setProperty("--stack-p", p.toFixed(3));
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // ---- Pointer spotlight --------------------------------------------------
    const onPointerMove = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(".spotlight");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      target.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" ref={barRef} />
    </div>
  );
}

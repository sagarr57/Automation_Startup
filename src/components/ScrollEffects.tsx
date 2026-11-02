import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Lightweight site-wide scroll effects (no dependencies):
 *  - top scroll-progress bar + header state
 *  - fade-up reveal for common blocks
 *  - count-up numbers for [data-count]
 *  - stacking cards (.stack-list): cards underneath shrink/dim as new ones slide over
 *  - pointer spotlight (--mx / --my) on .spotlight elements
 */

const AUTO_REVEAL = [
  ".section-intro-wrap",
  ".page-hero",
  ".card",
  ".band-card",
  ".process-card",
  ".faq-card",
  ".cta-banner",
  ".logo-strip",
  ".work-teaser",
  ".case-head",
  ".case-media",
  ".case-stats",
  ".case-grid",
  ".roi-estimator",
].join(",");

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function formatCount(value: number, el: HTMLElement) {
  return `${el.dataset.prefix ?? ""}${Math.round(value).toLocaleString("en-US")}${el.dataset.suffix ?? ""}`;
}

function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / 1200);
    el.textContent = formatCount(target * (1 - Math.pow(1 - t, 4)), el);
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

    // ---- Reveal + counters (IntersectionObserver, no per-frame work) -------
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          if (el.dataset.count && !el.dataset.counted) {
            el.dataset.counted = "1";
            animateCount(el);
          }
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.1 },
    );

    // Bound per effect run (StrictMode / route changes re-run with a fresh observer).
    const bound = new WeakSet<Element>();
    let stackLists: HTMLElement[][] = [];

    const scan = () => {
      const main = document.querySelector(".main-content");
      if (!main) return;

      if (!reduced) {
        main.querySelectorAll<HTMLElement>(AUTO_REVEAL).forEach((el) => {
          if (bound.has(el) || el.classList.contains("is-visible")) return;
          bound.add(el);
          const siblings = el.parentElement
            ? Array.from(el.parentElement.children).filter((c) => c.matches(AUTO_REVEAL))
            : [];
          const index = Math.max(0, siblings.indexOf(el));
          el.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 70}ms`);
          el.classList.add("reveal");
          observer.observe(el);
        });

        main.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          if (bound.has(el) || el.dataset.counted) return;
          bound.add(el);
          el.textContent = formatCount(0, el);
          observer.observe(el);
        });
      }

      stackLists = Array.from(main.querySelectorAll<HTMLElement>(".stack-list")).map((list) =>
        Array.from(list.querySelectorAll<HTMLElement>(":scope > .stack-item")),
      );
    };

    scan();
    const mutationObserver = new MutationObserver(scan);
    const main = document.querySelector(".main-content");
    if (main) mutationObserver.observe(main, { childList: true, subtree: true });

    // ---- Scroll-linked work (one rAF per frame, cached element lists) -------
    let frame = 0;
    const updateStacks = () => {
      for (const items of stackLists) {
        if (!items.length) continue;
        const sticky = getComputedStyle(items[0]).position === "sticky";
        const offset =
          parseFloat(getComputedStyle(items[0].parentElement!).getPropertyValue("--stack-offset")) || 0;
        // How far each card j (j >= 1) has slid over the one before it, 0..1.
        const arrival = items.map((item, j) => {
          if (!sticky || j === 0) return 0;
          const prev = items[j - 1];
          const d = item.getBoundingClientRect().top - prev.getBoundingClientRect().top;
          return Math.min(1, Math.max(0, 1 - (d - offset) / prev.offsetHeight));
        });
        items.forEach((item, i) => {
          const card = item.firstElementChild as HTMLElement | null;
          if (!card) return;
          let depth = 0;
          for (let j = i + 1; j < items.length; j++) depth += arrival[j];
          if (!sticky || depth === 0) {
            card.style.removeProperty("transform");
            card.style.removeProperty("filter");
            return;
          }
          card.style.transform = `scale(${(1 - Math.min(depth, 4) * 0.04).toFixed(4)})`;
          card.style.filter = `brightness(${(1 - Math.min(depth, 3) * 0.2).toFixed(3)})`;
        });
      }
    };

    const update = () => {
      frame = 0;
      const scrollMax = root.scrollHeight - window.innerHeight;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${scrollMax > 0 ? window.scrollY / scrollMax : 0})`;
      }
      root.classList.toggle("is-scrolled", window.scrollY > 24);
      if (!reduced) updateStacks();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // ---- Pointer spotlight (fine pointers only) ------------------------------
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const onPointerMove = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(".spotlight");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      target.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    if (finePointer) window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      observer.disconnect();
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

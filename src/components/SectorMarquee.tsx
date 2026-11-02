import { serveSectors } from "../workData";

/** Oversized sector names that drift sideways as the page scrolls. */
export function SectorMarquee() {
  const rowA = [...serveSectors, ...serveSectors];
  const rowB = [...serveSectors].reverse();
  const rowBDoubled = [...rowB, ...rowB];

  return (
    <section className="sector-marquee" aria-label="Industries we serve">
      <p className="eyebrow sector-marquee-label">Who We Build For</p>
      <div className="sector-row">
        <div className="sector-track" data-scroll-x="0.35">
          {rowA.map((s, i) => (
            <span key={`a-${i}`} className={i % 2 ? "sector-word sector-word-outline" : "sector-word"}>
              {s}
              <i aria-hidden="true">✦</i>
            </span>
          ))}
        </div>
      </div>
      <div className="sector-row sector-row-reverse" aria-hidden="true">
        <div className="sector-track" data-scroll-x="-0.25">
          {rowBDoubled.map((s, i) => (
            <span key={`b-${i}`} className={i % 2 ? "sector-word" : "sector-word sector-word-outline"}>
              {s}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

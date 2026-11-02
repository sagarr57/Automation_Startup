type ScrubTextProps = {
  text: string;
  /** Words (case-insensitive, punctuation ignored) to render in the accent colour once lit. */
  highlight?: string[];
  as?: "p" | "h2";
  className?: string;
};

/** Text whose words light up one by one as the block scrolls through the viewport. */
export function ScrubText({ text, highlight = [], as: Tag = "p", className = "" }: ScrubTextProps) {
  const marks = new Set(highlight.map((w) => w.toLowerCase()));
  const words = text.split(/\s+/);

  return (
    <Tag className={`scrub-text ${className}`.trim()} aria-label={text}>
      {words.map((word, i) => {
        const bare = word.replace(/[^\p{L}\p{N}'-]/gu, "").toLowerCase();
        return (
          <span
            key={`${word}-${i}`}
            aria-hidden="true"
            className={marks.has(bare) ? "scrub-word scrub-word-accent" : "scrub-word"}
          >
            {word}{" "}
          </span>
        );
      })}
    </Tag>
  );
}

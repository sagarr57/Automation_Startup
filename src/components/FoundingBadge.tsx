type FoundingBadgeProps = {
  standalone?: boolean;
};

export function FoundingBadge({ standalone = false }: FoundingBadgeProps) {
  return (
    <div
      className={
        standalone
          ? "founding-badge founding-badge-standalone"
          : "founding-badge"
      }
    >
      Founding client spots open
    </div>
  );
}

import { Children, ReactNode } from "react";

type StackListProps = {
  children: ReactNode;
  /** Card content is tall: fall back to a plain list on phones instead of stacking. */
  tall?: boolean;
  className?: string;
};

/**
 * Stacking cards (pattern from jettifi.com "What We Build"):
 * each <li> is sticky with a growing top offset, so every new card slides up over the
 * previous one. ScrollEffects scales and dims the cards underneath as the stack deepens.
 * Each child should render an element with the `stack-card` class.
 */
export function StackList({ children, tall = false, className = "" }: StackListProps) {
  const items = Children.toArray(children);
  return (
    <ul
      className={`stack-list${tall ? " stack-list-tall" : ""} ${className}`.trim()}
      style={{ ["--n" as string]: items.length }}
    >
      {items.map((child, i) => (
        <li className="stack-item" key={i} style={{ ["--i" as string]: i }}>
          {child}
        </li>
      ))}
    </ul>
  );
}

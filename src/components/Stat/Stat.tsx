import type { ReactNode } from "react";
import "./Stat.css";

interface StatProps {
  /** Headline figure — accepts nodes so callers can include gradient text. */
  value: ReactNode;
  label: string;
}

/** A single number-over-label statistic. */
export function Stat({ value, label }: StatProps) {
  return (
    <div className="stat">
      <div className="stat-n">{value}</div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

import type { ReactNode } from "react";
import { Kicker } from "../Kicker";
import "./SectionHeading.css";

interface SectionHeadingProps {
  num: string;
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

/** Standard section header: numbered kicker + gradient-capable title + optional subtitle. */
export function SectionHeading({ num, kicker, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={`sec-head${className ? " " + className : ""}`}>
      <Kicker num={num} label={kicker} />
      <h2 className="sec-title">{title}</h2>
      {subtitle && <p className="sec-sub">{subtitle}</p>}
    </div>
  );
}

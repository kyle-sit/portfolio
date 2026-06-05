import type { ReactNode } from "react";
import "./Tag.css";

interface TagProps {
  /** Accent style for an overflow indicator like "+3". */
  more?: boolean;
  children: ReactNode;
}

/** Small monospace pill, e.g. a tech-stack tag. */
export function Tag({ more, children }: TagProps) {
  return <span className={`tag${more ? " more" : ""}`}>{children}</span>;
}

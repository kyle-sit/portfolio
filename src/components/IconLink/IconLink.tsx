import type { ReactNode } from "react";
import "./IconLink.css";

interface IconLinkProps {
  href: string;
  /** Filled accent style vs. the default outlined style. */
  variant?: "primary";
  external?: boolean;
  children: ReactNode;
}

/** Compact outlined link-button with an inline icon (e.g. "View live", "Source"). */
export function IconLink({ href, variant, external, children }: IconLinkProps) {
  const isExternal = external ?? href.startsWith("http");
  const target = isExternal ? "_blank" : undefined;
  return (
    <a
      className={`clink${variant === "primary" ? " pri" : ""}`}
      href={href}
      target={target}
      rel={target ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

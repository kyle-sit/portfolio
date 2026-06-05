import type { MouseEvent, ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
  /** Optional trailing icon — pass `<Icon.* className="ico" />` for the hover-slide effect. */
  icon?: ReactNode;
  onClick?: (e: MouseEvent) => void;
  /** Force external behavior. Defaults to true for http(s) links. */
  external?: boolean;
  className?: string;
}

/** Anchor-styled button. Use `variant` for primary/ghost and `icon` for a trailing glyph. */
export function Button({ label, href, variant = "primary", icon, onClick, external, className }: ButtonProps) {
  const isExternal = external ?? href.startsWith("http");
  const target = isExternal ? "_blank" : undefined;
  return (
    <a
      className={`btn btn-${variant === "primary" ? "pri" : "ghost"}${className ? " " + className : ""}`}
      href={href}
      onClick={onClick}
      target={target}
      rel={target ? "noreferrer" : undefined}
    >
      {label}
      {icon}
    </a>
  );
}

/** Horizontal row wrapper for a group of buttons. */
export function ButtonRow({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={`btn-row${className ? " " + className : ""}`}>{children}</div>;
}

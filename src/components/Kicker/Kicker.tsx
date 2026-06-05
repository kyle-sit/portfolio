import "./Kicker.css";

interface KickerProps {
  num: string;
  label: string;
  className?: string;
}

/** Small uppercase section eyebrow with a gradient-tinted number, e.g. "01 Featured Work". */
export function Kicker({ num, label, className }: KickerProps) {
  return (
    <span className={`kicker${className ? " " + className : ""}`}>
      <span className="g">{num}</span> {label}
    </span>
  );
}

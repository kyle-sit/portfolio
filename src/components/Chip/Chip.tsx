import "./Chip.css";

interface ChipProps {
  label: string;
  /** Show a glowing status dot before the label. */
  dot?: boolean;
  className?: string;
}

/** Small frosted pill. Positioning (e.g. floating over the hero photo) is left to the caller. */
export function Chip({ label, dot, className }: ChipProps) {
  return (
    <div className={`chip${className ? " " + className : ""}`}>
      {dot && <span className="dot" />}
      {label}
    </div>
  );
}

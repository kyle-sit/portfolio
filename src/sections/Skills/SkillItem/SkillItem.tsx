import { useState } from "react";
import type { SkillItem as SkillItemType } from "../../../types";

/** A single skill row: devicon logo (with mono/text/error fallbacks) + name. */
export function SkillItem({ s }: { s: SkillItemType }) {
  const [err, setErr] = useState(false);
  return (
    <div className="skill">
      {s.text ? (
        <span className="ic txt" aria-hidden="true"></span>
      ) : err || !s.icon ? (
        <span className="fallback">{s.name[0]}</span>
      ) : (
        <span className={"ic" + (s.mono ? " mono" : "")}>
          <img src={s.icon} alt="" loading="lazy" onError={() => setErr(true)} />
        </span>
      )}
      <span>{s.name}</span>
    </div>
  );
}

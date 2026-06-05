import { useState } from "react";
import { skills } from "../../data/skills";
import type { SkillItem as SkillItemType } from "../../types";
import "./Skills.css";

function SkillItem({ s }: { s: SkillItemType }) {
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

export function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="kicker">
            <span className="g">02</span> Technical Skills
          </span>
          <h2 className="sec-title">
            The <span className="grad-text">toolkit</span>.
          </h2>
          <p className="sec-sub">
            Languages, frameworks, and infrastructure I reach for across professional and personal
            work.
          </p>
        </div>
        <div className="skill-cols">
          {skills.map((cat, i) => (
            <div key={cat.cat} className={"skill-cat rv d" + (i + 1)}>
              <h4>{cat.cat}</h4>
              <div className="skill-list">
                {cat.items.map((s) => (
                  <SkillItem key={s.name} s={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "../../components/SectionHeading";
import { SkillItem } from "./SkillItem";
import { skills } from "../../data/skills";
import { SKILLS_SUBTITLE } from "../../constants/copy";
import "./Skills.css";

const KICKER_NUM = "02";
const KICKER_LABEL = "Technical Skills";

export function Skills() {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <SectionHeading
          className="rv"
          num={KICKER_NUM}
          kicker={KICKER_LABEL}
          title={<>The <span className="grad-text">toolkit</span>.</>}
          subtitle={SKILLS_SUBTITLE}
        />
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

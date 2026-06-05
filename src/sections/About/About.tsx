import type { ReactNode } from "react";
import { Kicker } from "../../components/Kicker";
import { Stat } from "../../components/Stat";
import { ABOUT_BIO_SECONDARY } from "../../constants/copy";
import profilePic from "../../assets/profile-pic.png";
import "./About.css";

const KICKER_NUM = "03";
const KICKER_LABEL = "About";
const TAPE_NAME = "Kyle Sit";
const TAPE_ROLE = "// software engineer";

const STATS: { value: ReactNode; label: string }[] = [
  { value: <><span className="grad-text">8</span> yrs</>, label: "Experience" },
  { value: "4+", label: "Shipped products" },
  { value: "ML · AI", label: "Core focus" },
];

export function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap about-grid">
        <div className="about-card rv">
          <img src={profilePic} alt={TAPE_NAME} />
          <div className="tape">
            <span>{TAPE_NAME}</span>
            <span>{TAPE_ROLE}</span>
          </div>
        </div>
        <div className="about-body">
          <Kicker num={KICKER_NUM} label={KICKER_LABEL} className="rv" />
          <h3 className="rv d1">
            I build things that have <span className="grad-text">tangible impact</span> on people's
            lives.
          </h3>
          <p className="rv d1">
            I'm a software engineer with about 8 years of professional experience. The most
            fulfilling part, for me, has been{" "}
            <strong>seeing the effects of my work in real time</strong> — and hearing the responses
            from friends, family, and clients.
          </p>
          <p className="rv d2">{ABOUT_BIO_SECONDARY}</p>
          <div className="about-meta rv d2">
            {STATS.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

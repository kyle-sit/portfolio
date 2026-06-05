import { Icon } from "../Icon";
import { useTypewriter } from "../../hooks";
import { roles } from "../../data/roles";
import { socials } from "../../data/socials";
import { scrollToId } from "../../utils/scroll";
import profilePic from "../../assets/profile-pic.png";

export function Hero() {
  const role = useTypewriter(roles);

  return (
    <header className="hero sec" id="home">
      <div className="hero-orbs" aria-hidden="true">
        <div className="orb orb-a"></div>
        <div className="orb orb-b"></div>
        <div className="orb orb-c"></div>
      </div>
      <div className="wrap hero-inner">
        <div className="hero-text">
          <div className="hero-greet rv in">
            <span className="wave">👋</span>&nbsp; Hi, I'm
          </div>
          <h1 className="hero-name rv in d1">
            Kyle <span className="grad-anim">Sit</span>
          </h1>
          <div className="hero-roleline rv in d2">
            <span className="arrow">/</span>
            <span className="role-rot">
              <span className="role">{role}</span>
              <span className="role-cursor"></span>
            </span>
          </div>
          <p className="hero-blurb rv in d3">
            Software engineer with ~8 years building interfaces, ML / AI integrations, and
            business tools — work designed to have an immediate, tangible impact on people.
          </p>
          <div className="hero-cta rv in d3">
            <a
              className="btn btn-pri"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects");
              }}
            >
              View my work <Icon.arrow className="ico" />
            </a>
            <a className="btn btn-ghost" href="mailto:kyle.sit.sd@gmail.com">
              Get in touch
            </a>
          </div>
          <div className="hero-socials rv in d4">
            {socials.map((s) => {
              const Glyph = Icon[s.glyph];
              return (
                <a
                  key={s.label}
                  className="soc"
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <Glyph />
                </a>
              );
            })}
          </div>
        </div>

        <div className="hero-photo rv in d2">
          <div className="glow" aria-hidden="true"></div>
          <div className="pic">
            <img src={profilePic} alt="Kyle Sit" />
          </div>
          <div className="chip chip-1">
            <span className="dot"></span> Open to work
          </div>
          <div className="chip chip-2">San Diego, CA</div>
        </div>
      </div>

      <div className="scrolldown" aria-hidden="true">
        <span>Scroll</span>
        <span className="ln"></span>
      </div>
    </header>
  );
}

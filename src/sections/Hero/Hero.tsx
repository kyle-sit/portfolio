import { Icon } from "../../components/Icon";
import { Button, ButtonRow } from "../../components/Button";
import { SocialLinks } from "../../components/SocialLinks";
import { Chip } from "../../components/Chip";
import { useTypewriter } from "../../hooks";
import { roles } from "../../data/roles";
import { scrollToId } from "../../utils/scroll";
import { HERO_BLURB } from "../../constants/copy";
import profilePic from "../../assets/profile-pic.png";
import "./Hero.css";

const FIRST_NAME = "Kyle";
const LAST_NAME = "Sit";
const PRIMARY_CTA = "View my work";
const PROJECTS_SECTION = "projects";
const STATUS_CHIP = "Open to work";
const LOCATION_CHIP = "San Diego / San Francisco, CA";
const SCROLL_HINT = "Scroll";

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
          <h1 className="hero-name rv in d1">
            {FIRST_NAME} <span className="grad-anim">{LAST_NAME}</span>
          </h1>
          <div className="hero-roleline rv in d2">
            <span className="arrow">/</span>
            <span className="role-rot">
              <span className="role">{role}</span>
              <span className="role-cursor"></span>
            </span>
          </div>
          <p className="hero-blurb rv in d3">{HERO_BLURB}</p>
          <ButtonRow className="rv in d3">
            <Button
              label={PRIMARY_CTA}
              icon={<Icon.arrow className="ico" />}
              href={`#${PROJECTS_SECTION}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(PROJECTS_SECTION);
              }}
            />
          </ButtonRow>
          <SocialLinks className="rv in d4" />
        </div>

        <div className="hero-photo rv in d2">
          <div className="glow" aria-hidden="true"></div>
          <div className="pic">
            <img src={profilePic} alt={`${FIRST_NAME} ${LAST_NAME}`} />
          </div>
          <Chip dot label={STATUS_CHIP} className="chip-1" />
          <Chip label={LOCATION_CHIP} className="chip-2" />
        </div>
      </div>

      <div className="scrolldown" aria-hidden="true">
        <span>{SCROLL_HINT}</span>
        <span className="ln"></span>
      </div>
    </header>
  );
}

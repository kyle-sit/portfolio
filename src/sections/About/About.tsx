import { Icon } from "../../components/Icon";
import { Kicker } from "../../components/Kicker";
import { Button, ButtonRow } from "../../components/Button";
import { ABOUT_BIO_PRIMARY, ABOUT_BIO_SECONDARY } from "../../constants/excerpts";
import "./About.css";

const KICKER_NUM = "03";
const KICKER_LABEL = "About";
const CONTACT_ME = "Contact me";
const LINKEDIN_LABEL = "LinkedIn";
const EMAIL_HREF = "mailto:kyle.sit.sd@gmail.com";
const LINKEDIN_HREF = "https://www.linkedin.com/in/kylesit";

export function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="about-card rv">
          <Kicker num={KICKER_NUM} label={KICKER_LABEL} />
          <h2>
            Taking actual problems, and building <span className="grad-text">real solutions</span>.
          </h2>
          <p>{ABOUT_BIO_PRIMARY}</p>
          <p>{ABOUT_BIO_SECONDARY}</p>
          <ButtonRow>
            <Button label={CONTACT_ME} icon={<Icon.arrow className="ico" />} href={EMAIL_HREF} />
            <Button label={LINKEDIN_LABEL} variant="ghost" href={LINKEDIN_HREF} />
          </ButtonRow>
        </div>
      </div>
    </section>
  );
}

import { Icon } from "../../components/Icon";
import { Kicker } from "../../components/Kicker";
import { Button, ButtonRow } from "../../components/Button";
import { CONTACT_MESSAGE } from "../../constants/copy";
import "./Contact.css";

const KICKER_NUM = "04";
const KICKER_LABEL = "Contact";
const PRIMARY_CTA = "Say hello";
const SECONDARY_CTA = "LinkedIn";
const EMAIL_HREF = "mailto:kyle.sit.sd@gmail.com";
const LINKEDIN_HREF = "https://www.linkedin.com/in/kylesit";

export function Contact() {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="contact-card rv">
          <Kicker num={KICKER_NUM} label={KICKER_LABEL} />
          <h2 style={{ marginTop: "14px" }}>
            Let's build something
            <br />
            <span className="grad-text">with real impact.</span>
          </h2>
          <p>{CONTACT_MESSAGE}</p>
          <ButtonRow>
            <Button label={PRIMARY_CTA} icon={<Icon.arrow className="ico" />} href={EMAIL_HREF} />
            <Button label={SECONDARY_CTA} variant="ghost" href={LINKEDIN_HREF} />
          </ButtonRow>
        </div>
      </div>
    </section>
  );
}

import { Icon } from "../Icon";

export function Contact() {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="contact-card rv">
          <span className="kicker">
            <span className="g">04</span> Contact
          </span>
          <h2 style={{ marginTop: "14px" }}>
            Let's build something
            <br />
            <span className="grad-text">with real impact.</span>
          </h2>
          <p>Have a project, a role, or an idea worth chasing? My inbox is always open.</p>
          <div className="hero-cta">
            <a className="btn btn-pri" href="mailto:kyle.sit.sd@gmail.com">
              Say hello <Icon.arrow className="ico" />
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/kylesit"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

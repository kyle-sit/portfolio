import profilePic from "../../assets/profile-pic.png";

export function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap about-grid">
        <div className="about-card rv">
          <img src={profilePic} alt="Kyle Sit" />
          <div className="tape">
            <span>Kyle Sit</span>
            <span>// software engineer</span>
          </div>
        </div>
        <div className="about-body">
          <span className="kicker rv">
            <span className="g">03</span> About
          </span>
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
          <p className="rv d2">
            Lately I've split my time between professional and personal projects, spanning new
            interfaces, ML / AI service integrations, business tools, and just-for-fun ideas. I'm
            always looking forward to seeing their impact on users.
          </p>
          <div className="about-meta rv d2">
            <div>
              <div className="n">
                <span className="grad-text">8</span> yrs
              </div>
              <div className="l">Experience</div>
            </div>
            <div>
              <div className="n">4+</div>
              <div className="l">Shipped products</div>
            </div>
            <div>
              <div className="n">ML · AI</div>
              <div className="l">Core focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

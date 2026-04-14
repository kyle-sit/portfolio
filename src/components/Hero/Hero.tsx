import profilePic from "../../assets/profile-pic.png";
import "./Hero.css";

const links = [
  { label: "Email", href: "mailto:kyle.sit.sd@gmail.com", external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kylesit", external: true },
  { label: "GitHub", href: "https://github.com/kyle-sit", external: true },
];

export function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Kyle Sit</h1>
      <div className="hero-links">
        {links.map((link) => (
          <div key={link.label} className="hero-link-wrapper">
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="hero-link"
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
      <div className="hero-body">
        <div className="hero-avatar-wrapper">
          <img src={profilePic} alt="Kyle Sit" className="hero-avatar" />
        </div>
        <div className="hero-bio">
          <p className="hero-bio-paragraph">
            I'm a software engineer with about 8 years of professional
            experience! The most fulfilling part, for me, has been building
            things that have an immediate, tangible impact on people's lives.
            Whether that impact is large or small, seeing the effects of my
            work in real time and hearing the responses from friends, family,
            and clients, has been my favorite part of developing!
          </p>
          <p className="hero-bio-paragraph">
            Lately I've been working on a handful of projects spanning business
            tools and just-for-fun ideas, and I'm excited to see what kind of
            impact they can have on users too. Take a look below!
          </p>
        </div>
      </div>
    </section>
  );
}
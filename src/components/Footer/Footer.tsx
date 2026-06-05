import { nav } from "../../data/nav";
import { socials } from "../../data/socials";
import { assetUrl } from "../../utils/scroll";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="fbrand">
              <img src={assetUrl("favicon.svg")} alt="" /> Kyle Sit
            </div>
            <p className="fdesc">
              Software engineer based in San Diego, building modern interfaces and AI-backed tools
              with tangible impact.
            </p>
          </div>
          <div>
            <h5>Navigate</h5>
            <ul>
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={"#" + n.id}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kyle Sit — built with intent.</span>
          <div className="footer-kbd">
            <span>San Diego, CA</span>
            <span>Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { nav } from "../../data/nav";
import { socials } from "../../data/socials";
import { assetUrl } from "../../utils/scroll";
import { FOOTER_DESCRIPTION } from "../../constants/copy";
import "./Footer.css";

const BRAND = "Kyle Sit";
const NAV_HEADING = "Navigate";
const CONNECT_HEADING = "Connect";
const COPYRIGHT_TAGLINE = "built with intent.";
const LOCATION = "San Diego, CA";
const STATUS = "Available for work";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="fbrand">
              <img src={assetUrl("favicon.svg")} alt="" /> {BRAND}
            </div>
            <p className="fdesc">{FOOTER_DESCRIPTION}</p>
          </div>
          <div>
            <h5>{NAV_HEADING}</h5>
            <ul>
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={"#" + n.id}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>{CONNECT_HEADING}</h5>
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
          <span>© {new Date().getFullYear()} {BRAND} — {COPYRIGHT_TAGLINE}</span>
          <div className="footer-kbd">
            <span>{LOCATION}</span>
            <span>{STATUS}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

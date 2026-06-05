import { Icon } from "../Icon";
import { socials } from "../../data/socials";
import type { SocialLink } from "../../types";
import "./SocialLinks.css";

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

/** Row of social icon-buttons. Defaults to the site's socials. */
export function SocialLinks({ links = socials, className }: SocialLinksProps) {
  return (
    <div className={`social-links${className ? " " + className : ""}`}>
      {links.map((s) => {
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
  );
}

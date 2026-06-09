import { Icon } from "../../../components/Icon";
import { Tag } from "../../../components/Tag";
import { IconLink } from "../../../components/IconLink";
import { Media } from "../Media";
import type { Project } from "../../../types";

const LIVE_LABEL = "View live";
const SOURCE_LABEL = "Source";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card">
      <div className={"card-media" + (p.media.layout === "mobile" ? " is-mobile" : "")}>
        <Media item={p.media} alt={p.title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{p.title}</h3>
        <p className="card-blurb">{p.description}</p>
        <div className="card-tags">
          {p.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {p.highlights && p.highlights.length > 0 && (
          <ul className="card-hl">
            {p.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        <div className="card-links">
          {p.liveUrl && (
            <IconLink href={p.liveUrl} variant="primary">
              {LIVE_LABEL} <Icon.arrow className="ico" />
            </IconLink>
          )}
          {p.repoUrl && (
            <IconLink href={p.repoUrl}>
              <Icon.github style={{ width: 15, height: 15 }} /> {SOURCE_LABEL}
            </IconLink>
          )}
        </div>
        {p.notes && p.notes.length > 0 && (
          <div className="card-notes">
            {p.notes.map((n) => (
              <p key={n} className="card-note">* {n}</p>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

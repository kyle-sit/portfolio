import { Icon } from "../../../components/Icon";
import { Tag } from "../../../components/Tag";
import { IconLink } from "../../../components/IconLink";
import { Media } from "../Media";
import type { Project } from "../../../types";

const TAG_MAX = 4;
const PLACEHOLDER_LABEL = "Interface demo";
const PLACEHOLDER_SUB = "mp4 · not in public repo";
const LIVE_LABEL = "View live";
const SOURCE_LABEL = "Source";

export function ProjectCard({ p }: { p: Project }) {
  const shown = p.tech.slice(0, TAG_MAX);
  const extra = p.tech.length - shown.length;
  const cover = p.media[0];

  // Extra media (beyond the cover) and any per-media captions form a walkthrough.
  const walk = p.media.filter(
    (m, idx) => idx > 0 || m.title || m.description,
  );

  return (
    <article className="card rv">
      <div className={"card-media" + (cover?.layout === "mobile" ? " is-mobile" : "")}>
        <span className="badge">{p.kind}</span>
        {cover ? (
          <Media item={cover} alt={p.title} />
        ) : (
          <div className="ph">
            <span className="play">▶</span>
            <span className="lbl">{PLACEHOLDER_LABEL}</span>
            <span className="sub">{PLACEHOLDER_SUB}</span>
          </div>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">{p.title}</h3>
        <p className="card-blurb">{p.summary}</p>
        <div className="card-tags">
          {shown.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {extra > 0 && <Tag more>+{extra}</Tag>}
        </div>
        {p.highlights && p.highlights.length > 0 && (
          <ul className="card-hl">
            {p.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}
        {walk.length > 0 && (
          <div className="card-walk">
            {p.media.map((m, idx) => {
              const showMedia = idx > 0; // cover already renders media[0]
              const hasCaption = !!(m.title || m.description);
              if (!showMedia && !hasCaption) return null;
              return (
                <div className="walk-item" key={idx}>
                  {showMedia && (
                    <div className={"walk-media" + (m.layout === "mobile" ? " is-mobile" : "")}>
                      <Media item={m} alt={m.title ?? p.title} />
                    </div>
                  )}
                  {m.title && <div className="walk-title">{m.title}</div>}
                  {m.description && <div className="walk-desc">{m.description}</div>}
                </div>
              );
            })}
          </div>
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
      </div>
    </article>
  );
}

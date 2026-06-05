import { Icon } from "../Icon";
import { projects } from "../../data/projects";
import { isVideo } from "../../utils/media";
import type { MediaItem, Project } from "../../types";
import "./Projects.css";

const TAG_MAX = 4;

function Media({ item, alt }: { item: MediaItem; alt: string }) {
  if (isVideo(item.src)) {
    return (
      <video src={item.src} autoPlay loop muted playsInline preload="metadata" />
    );
  }
  return <img src={item.src} alt={alt} loading="lazy" />;
}

function ProjectCard({ p }: { p: Project }) {
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
            <span className="lbl">Interface demo</span>
            <span className="sub">mp4 · not in public repo</span>
          </div>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">{p.title}</h3>
        <p className="card-blurb">{p.summary}</p>
        <div className="card-tags">
          {shown.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
          {extra > 0 && <span className="tag more">+{extra}</span>}
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
            <a className="clink pri" href={p.liveUrl} target="_blank" rel="noreferrer">
              View live <Icon.arrow className="ico" />
            </a>
          )}
          {p.repoUrl && (
            <a className="clink" href={p.repoUrl} target="_blank" rel="noreferrer">
              <Icon.github style={{ width: 15, height: 15 }} /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <div className="sec-head rv">
          <span className="kicker">
            <span className="g">01</span> Featured Work
          </span>
          <h2 className="sec-title">
            Things I've <span className="grad-text">built</span>.
          </h2>
          <p className="sec-sub">
            A mix of production engineering at Amazon and personal products taken from idea to
            ship.
          </p>
        </div>
        <div className="proj-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

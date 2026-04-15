import type { Project } from "../../types";
import { isVideo } from "../../utils/media";
import "./ProjectCard.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card-wrapper">
      <article className="project-card">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-summary">{project.summary}</p>
        <ul className="project-card-tech">
          {project.tech.map((t) => (
            <li key={t} className="project-card-tech-item">
              {t}
            </li>
          ))}
        </ul>
        <div className="project-card-media">
          {project.media.map((item, i) => {
            const mobile = item.layout === "mobile";
            const figureClass = mobile
              ? "project-card-media-item--mobile"
              : "project-card-media-item";
            return (
              <figure key={i} className={figureClass}>
                {item.title && (
                  <h4 className="project-card-media-title">{item.title}</h4>
                )}
                {isVideo(item.src) ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className={
                      mobile
                        ? "project-card-video--mobile"
                        : "project-card-video"
                    }
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title ?? `${project.title} screenshot ${i + 1}`}
                    loading="lazy"
                    className={
                      mobile
                        ? "project-card-image--mobile"
                        : "project-card-image"
                    }
                  />
                )}
                {item.description && (
                  <figcaption className="project-card-media-description">
                    {item.description}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
        <div className="project-card-actions">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="project-card-button"
            >
              Source
            </a>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-card-button project-card-button--live"
            >
              View live
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="project-card-button--disabled"
            >
              View live (Coming Soon)
            </button>
          )}
        </div>
      </article>
    </div>
  );
}

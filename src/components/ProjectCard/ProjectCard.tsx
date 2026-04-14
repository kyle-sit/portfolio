import type { Project } from "../../types";
import "./ProjectCard.css";

export function ProjectCard({ project }: { project: Project }) {
  const isMobile = project.layout === "mobile";

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
        <div
          className={`project-card-images${
            isMobile ? " project-card-images--mobile" : ""
          }`}
        >
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              loading="lazy"
              className={
                isMobile ? "project-card-image--mobile" : "project-card-image"
              }
            />
          ))}
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
              Live link
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="project-card-button--disabled"
            >
              Live Link (Coming Soon)
            </button>
          )}
        </div>
      </article>
    </div>
  );
}
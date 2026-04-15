import { workProjects, personalProjects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard";
import type { Project } from "../../types";
import "./ProjectGrid.css";

function ProjectSection({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  return (
    <section className="project-grid-section">
      <h2 className="project-grid-title">{title}</h2>
      {projects.length > 0 ? (
        <div className="project-grid-list">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      ) : (
        <p className="project-grid-empty">More soon — check back!</p>
      )}
    </section>
  );
}

export function ProjectGrid() {
  return (
    <div className="project-grid">
      <ProjectSection title="Professional Projects" projects={workProjects} />
      <ProjectSection title="Personal Projects" projects={personalProjects} />
    </div>
  );
}

import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard";
import "./ProjectGrid.css";

export function ProjectGrid() {
  return (
    <section className="project-grid">
      <h2 className="project-grid-title">Projects</h2>
      <div className="project-grid-list">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
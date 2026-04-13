import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-10 text-center text-2xl font-semibold text-slate-100 sm:text-3xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

import type { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg transition hover:border-slate-600 hover:shadow-xl">
      <div className="aspect-video overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-slate-700 px-2.5 py-0.5 text-xs text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              Live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

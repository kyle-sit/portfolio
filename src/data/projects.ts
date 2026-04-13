import type { Project } from "../types";
import placeholder from "../assets/placeholder.svg";

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "Short description of what this project does, the problem it solves, and what makes it interesting.",
    image: placeholder,
    tech: ["TypeScript", "React", "Node.js"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/kyle-sit/project-one",
  },
  {
    title: "Project Two",
    description:
      "Another project description. Keep it 1–3 sentences focused on impact and the technical challenge.",
    image: placeholder,
    tech: ["Python", "FastAPI", "Postgres"],
    repoUrl: "https://github.com/kyle-sit/project-two",
  },
  {
    title: "Project Three",
    description:
      "Replace these placeholder entries with your real projects. Add screenshots to src/assets/ and import them.",
    image: placeholder,
    tech: ["Go", "Docker"],
    liveUrl: "https://example.com",
  },
];

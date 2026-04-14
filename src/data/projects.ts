import type { Project } from "../types";
import creHome from "../assets/cre-platform-home.png";
import creProject from "../assets/cre-platform-project.png";
import rendezvousHome from "../assets/rendezvous-home.png";

export const projects: Project[] = [
  {
    title: "CRE-Platform",
    summary:
      "A SaaS application for institutional commercial real estate transaction management. I'm collaborating with a friend who works in real estate to streamline the lifecycle of a transaction — a process that typically involves multiple parties tracking parallel threads of work. The goal is to make this an all-in-one space where those parties can manage workstreams, access deal data, and communicate. My role has been to help bring the vision to life, and specifically to build out its AI agent capabilities: background and foreground agents powered by Claude LLMs, eventually backed by our own MCP server.",
    images: [creHome, creProject],
    tech: [
      "TypeScript",
      "Next.js",
      "React",
      "Fastify",
      "PostgreSQL",
      "Turborepo",
      "AWS S3",
      "Claude",
    ],
    layout: "desktop",
    repoUrl: "https://github.com/cn-hp/cre-platform",
  },
  {
    title: "Rendezvous",
    summary:
      "A mobile dating application offering a more personalized, activity-first matching and suggestion model. The idea came out of conversations with friends who were frustrated with current options — I surveyed them, identified the recurring pain points, and built the app around solving them directly. The matching engine combines rules-based filtering, collaborative filtering, content-based ML, and ELO-style scoring.",
    images: [rendezvousHome],
    tech: ["React Native", "TypeScript", "Java", "JWT"],
    layout: "mobile",
    repoUrl: "https://github.com/kyle-sit/rendezvous-mobile",
  },
];
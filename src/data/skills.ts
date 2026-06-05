import type { SkillCategory } from "../types";

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

// `mono: true` = monochrome glyph that needs inverting on dark.
// `text: true` = no logo, styled chip.
export const skills: SkillCategory[] = [
  {
    cat: "Languages",
    items: [
      { name: "JavaScript", icon: DEV + "javascript/javascript-original.svg" },
      { name: "TypeScript", icon: DEV + "typescript/typescript-original.svg" },
      { name: "Java", icon: DEV + "java/java-original.svg" },
      { name: "SQL", icon: DEV + "postgresql/postgresql-original.svg" },
      { name: "C++", icon: DEV + "cplusplus/cplusplus-original.svg" },
    ],
  },
  {
    cat: "Frameworks & Libraries",
    items: [
      { name: "React", icon: DEV + "react/react-original.svg" },
      { name: "Next.js", icon: DEV + "nextjs/nextjs-original.svg", mono: true },
      { name: "React Native", icon: DEV + "react/react-original.svg" },
      { name: "Node.js", icon: DEV + "nodejs/nodejs-original.svg" },
      { name: "Fastify", icon: DEV + "fastify/fastify-original.svg", mono: true },
      { name: "Tailwind", icon: DEV + "tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    cat: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: DEV + "amazonwebservices/amazonwebservices-original-wordmark.svg", mono: true },
      { name: "PostgreSQL", icon: DEV + "postgresql/postgresql-original.svg" },
      { name: "Git", icon: DEV + "git/git-original.svg" },
      { name: "Vite", icon: DEV + "vitejs/vitejs-original.svg" },
      { name: "Turborepo", icon: DEV + "turborepo/turborepo-original.svg" },
    ],
  },
  {
    cat: "Concepts",
    items: [
      { name: "Machine Learning", text: true },
      { name: "AI Agents / MCP", text: true },
      { name: "System Design", text: true },
      { name: "REST APIs", text: true },
      { name: "Performance", text: true },
    ],
  },
];

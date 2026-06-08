import type { SkillCategory } from "../types";

const DEV = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

// `mono: true` = monochrome glyph that needs inverting on dark.
// `text: true` = no logo, styled chip.
export const skills: SkillCategory[] = [
  {
    cat: "Languages",
    items: [
      { name: "TypeScript", icon: DEV + "typescript/typescript-original.svg" },
      { name: "JavaScript", icon: DEV + "javascript/javascript-original.svg" },
      { name: "Java", icon: DEV + "java/java-original.svg" },
      { name: "Kotlin", icon: DEV + "kotlin/kotlin-original.svg" },
      { name: "C/C++", icon: DEV + "cplusplus/cplusplus-original.svg" },
      { name: "SQL", icon: DEV + "postgresql/postgresql-original.svg" },
    ],
  },
  {
    cat: "Frameworks & Libraries",
    items: [
      { name: "React", icon: DEV + "react/react-original.svg" },
      { name: "Node.js", icon: DEV + "nodejs/nodejs-original.svg" },
      { name: "Spring / Spring Boot", icon: DEV + "spring/spring-original.svg" },
      { name: "React Native", icon: DEV + "react/react-original.svg" },
      { name: "Jotai" },
      { name: "Redux", icon: DEV + "redux/redux-original.svg" },
    ],
  },
  {
    cat: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: DEV + "amazonwebservices/amazonwebservices-original-wordmark.svg", mono: true },
      { name: "Docker", icon: DEV + "docker/docker-original.svg" },
      { name: "Kubernetes", icon: DEV + "kubernetes/kubernetes-original.svg" },
      { name: "PostgreSQL", icon: DEV + "postgresql/postgresql-original.svg" },
    ],
  },
  {
    cat: "Concepts",
    items: [
      { name: "Machine Learning", text: true },
      { name: "AI Agents / MCP", text: true },
      { name: "System Design", text: true },
      { name: "REST APIs & WebSockets", text: true },
      { name: "CI / CD", text: true },
    ],
  },
];

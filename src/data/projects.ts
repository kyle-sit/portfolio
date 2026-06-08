import type { Project } from "../types";
import creHome from "../assets/cre-platform-home.png";
import rendezvousHome from "../assets/rendezvous-home.png";

const video = (name: string) => `${import.meta.env.BASE_URL}videos/${name}`;

export const projects: Project[] = [
  {
    kind: "Professional",
    title: "Desktop Customer Service Landing Page",
    description:
      "ML-personalized options surface a customer's most likely issues the moment they land. The goal was to allow customers to navigate issue selection and reach resolution without having to contact live agents.",
    media: { src: video("desktop-customer-service-page.mp4"), layout: "desktop" },
    tech: ["React", "TypeScript", "Jotai", "Java", "Horizonte (similar to Spring)", "AWS SageMaker", "AWS EC2"],
    highlights: [
      "Designed and implemented the backend API that hot-swaps ML models so we could A/B test ML model success metrics.",
      "Created several components in our reusable library to support the new experience, specifically order-related components."
    ],
    liveUrl: "https://www.amazon.com/hz/contact-us/foresight/hubgateway",
  },
  {
    kind: "Professional",
    title: "Mobile Customer Service Landing Page",
    description:
      "Similar to desktop, all options displayed are ML-personalized and guide users to an automated issue resolution (as frictionless as possible).",
    media: { src: video("mobile-carousels.mp4"), layout: "mobile" },
    tech: ["React", "TypeScript", "Java", "Horizonte (similar to Spring)", "AWS Lambda", "AWS Athena", "AWS S3", "AWS RUM / CloudWatch"],
    highlights: [
      "Built the carousel experience end to end — from component animation to working downstream dependency teams to stay within TPS constraints.",
      "Handled prediction vs static order filtering logic and lazy loading in the item picker.",
      "Built ingress traffic data pipeline and dashboards to monitor traffic patterns and anomalies in real time."
    ],
    notes: ["Must be in mobile view"],
    liveUrl: "https://www.amazon.com/hz/contact-us/foresight/hybridhub",
  },
  {
    kind: "Professional",
    title: "Customer Issue Selection",
    description:
      "The model predicts a customer's most likely contact reason and surfaces it first, determining all subsequent options after each selection.",
    media: { src: video("mobile-customer-selection.mp4"), layout: "mobile" },
    tech: ["React", "TypeScript", "Jotai", "AWS AppConfig"],
    highlights: [
      "Led the design, testing, and coordination with our ML team to provide the second iteration of our start return workflows.",
      "Worked on static tree migration to dynamic configuration.",
    ],
    notes: ["Must be in mobile view", "Select an order to see the experience."],
    liveUrl: "https://www.amazon.com/hz/contact-us/foresight/hybridhub",
  },
  {
    kind: "Professional",
    title: "AI Free-Text Answer",
    description:
      "Customers can search help content via free-text input, we made this experience more robust by adding an LLM-powered answer proposal and issue selections.",
    media: { src: video("mobile-free-text.mp4"), layout: "mobile" },
    tech: ["React", "TypeScript", "AWS Lambda", "AWS API Gateway"],
    highlights: [
      "Designed and built the Lambda that calls our LLM service, gated by an API Gateway.",
      "Created answer box component with typewriter effect."
    ],
    notes: ["Must be in mobile view", "Type in the search box and submit to see the experience."],
    liveUrl: "https://www.amazon.com/hz/contact-us/foresight/hybridhub",
  },
  {
    kind: "Professional",
    title: "Un-Authenticated Landing Page",
    description:
      "Unauthenticated users are directed to a designated page that offers only a few customer support options instead of directing users straight to sign-in (old experience).",
    media: { src: video("unauth-mobile.mp4"), layout: "mobile" },
    tech: ["JavaScript", "JSP", "Horizonte (similar to Spring)"],
    highlights: [
      "Built experience from end to end in our legacy framework of JSP and JavaScript.",
    ],
    notes: ["Must be in mobile view", "Must be signed out"],
    liveUrl: "https://www.amazon.com/hz/contact-us/foresight/hubgateway-ap",
  },
  {
    kind: "Personal",
    title: "CRE-Platform",
    description:
      "A SaaS application for institutional commercial real estate transaction management. I'm collaborating with a friend who works in real estate to streamline the lifecycle of a transaction — a process that typically involves multiple parties tracking parallel threads of work. The goal is to make this an all-in-one space where those parties can manage workstreams, access deal data, and communicate.",
    media: { src: creHome, layout: "desktop" },
    tech: ["TypeScript", "Next.js", "React", "Fastify", "PostgreSQL", "Turborepo", "AWS S3", "Opus"],
    highlights: [
      "Building the AI agent layer - background + foreground agents powered by Claude models.",
      "Designing a custom MCP server so agents can act on live deal data.",
    ],
    repoUrl: "https://github.com/cn-hp/cre-platform",
  },
  {
    kind: "Personal",
    title: "Rendezvous",
    description:
      "A mobile dating application offering a more personalized, activity-first matching and suggestion model.  Customer appeal is to have the revenue model move costs away from customers.",
    media: { src: rendezvousHome, layout: "mobile" },
    tech: ["React Native", "TypeScript", "Java", "JWT"],
    highlights: [
      "Conducted user surveys, identified recurring pain points, and iterated on the product and design to address them.",
      "Matching engine blends rules-based + collaborative filtering, content-based ML, and ELO scoring.",
    ],
    repoUrl: "https://github.com/kyle-sit/rendezvous-mobile",
  },
];

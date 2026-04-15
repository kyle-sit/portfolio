import type { Project } from "../types";
import creHome from "../assets/cre-platform-home.png";
import creProject from "../assets/cre-platform-project.png";
import rendezvousHome from "../assets/rendezvous-home.png";

export const workProjects: Project[] = [
  {
    title: "Customer Service Interface Revamp & Machine Learning Integration",
    summary:
      "My team owns Amazon's customer service interface, where our main success metric is how many human-agent contacts we can avoid through automated self-service. Over the last year we shipped two major ML-backed revamps: one that personalizes the options a customer sees on the landing page, and another that predicts customer issue selection. Both steer customers toward faster, self-serve resolutions before they ever reach an agent.",
    media: [
      {
        src: "/portfolio/videos/desktop-customer-service-page.mp4",
        layout: "desktop",
        title: "Desktop Customer Service Landing page",
        description:
          "ML-personalized options surface a customer's most likely issues the moment they land. I was responsible for designing and implementing the backend APIs that power this interface, switching between different ML models so that we could compare the results and success metric.",
      },
      {
        src: "/portfolio/videos/mobile-carousels.mp4",
        layout: "mobile",
        title: "Mobile Customer Service Landing Page",
        description:
          "Similar to desktop, all options displayed are ML-personalized.  I handled the carousels full implementation, from the sliding animation all the way to ensuring TPS contraints were satisfied through the downstream dependencies of our backend.",
      },
      {
        src: "/portfolio/videos/mobile-customer-selection.mp4",
        layout: "mobile",
        title: "ML Issue selection",
        description:
          "The model predicts a customer's most likely contact reason and surfaces it first, determining all subsequent options after each selection. Here I led the design, testing, and coordination with our ML team to provide the second iteration of our start return workflows.",
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "Jotai",
      "Java",
      "Horizonte",
      "AWS SageMaker",
      "AWS EC2",
    ],
    liveUrl: "https://www.amazon.com/hz/contact-us/foresight/hubgateway",
  },
  {
    title: "Mobile Interface Improvements",
    summary:
      "I led two improvements to our mobile customer service experience. The first brought AI into the landing page's free-text input — where we'd previously only rendered static options, a new Lambda function I built calls our AI services and proposes a likely solution to the customer's specific issue in real time. The second introduced an unauthenticated flow so customers landing on the customer service page without being signed in, can browse and resolve common issues before hitting a login wall, cutting friction for users who just want a quick answer.",
    media: [
      {
        src: "/portfolio/videos/mobile-free-text.mp4",
        layout: "mobile",
        title: "AI free-text answer",
        description:
          "I built the generated answer box by creating the component and seting up the lambda function to call our AI services, gated by an API gateway.",
      },
      {
        src: "/portfolio/videos/unauth-mobile.mp4",
        layout: "mobile",
        title: "Unauthenticated flow",
        description:
          "This was the first project I led in my most recent position, developing the experience from end to end in our legacy framework of JSP and Javascript.",
      },
    ],
    tech: [
      "AI Services",
      "JavaScript",
      "JSP",
      "AWS Lambda",
      "AWS API Gateway",
    ],
    liveUrl: "https://www.amazon.com/hz/contact-us/foresight/hubgateway-ap",
  },
];

export const personalProjects: Project[] = [
  {
    title: "CRE-Platform",
    summary:
      "A SaaS application for institutional commercial real estate transaction management. I'm collaborating with a friend who works in real estate to streamline the lifecycle of a transaction — a process that typically involves multiple parties tracking parallel threads of work. The goal is to make this an all-in-one space where those parties can manage workstreams, access deal data, and communicate. My role has been to help bring the vision to life, and specifically to build out its AI agent capabilities: background and foreground agents powered by Claude LLMs, eventually backed by our own MCP server.",
    media: [
      { src: creHome, layout: "desktop" },
      { src: creProject, layout: "desktop" },
    ],
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
    repoUrl: "https://github.com/cn-hp/cre-platform",
  },
  {
    title: "Rendezvous",
    summary:
      "A mobile dating application offering a more personalized, activity-first matching and suggestion model. The idea came out of conversations with friends who were frustrated with current options — I surveyed them, identified the recurring pain points, and built the app around solving them directly. The matching engine combines rules-based filtering, collaborative filtering, content-based ML, and ELO-style scoring.",
    media: [{ src: rendezvousHome, layout: "mobile" }],
    tech: ["React Native", "TypeScript", "Java", "JWT"],
    repoUrl: "https://github.com/kyle-sit/rendezvous-mobile",
  },
];

import { SectionHeading } from "../../components/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import { PROJECTS_SUBTITLE } from "../../constants/copy";
import "./Projects.css";

const KICKER_NUM = "01";
const KICKER_LABEL = "Featured Work";

export function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <SectionHeading
          className="rv"
          num={KICKER_NUM}
          kicker={KICKER_LABEL}
          title={<>Things I've <span className="grad-text">built</span>.</>}
          subtitle={PROJECTS_SUBTITLE}
        />
        <div className="proj-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

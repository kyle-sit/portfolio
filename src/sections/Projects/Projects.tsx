import { SectionHeading } from "../../components/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";
import { PROJECTS_SUBTITLE } from "../../constants/copy";
import "./Projects.css";

const KICKER_NUM = "01";
const KICKER_LABEL = "Featured Work";
const PROFESSIONAL_LABEL = "Professional";
const PERSONAL_LABEL = "Personal";

const professional = projects.filter((p) => p.kind === "Professional");
const personal = projects.filter((p) => p.kind === "Personal");

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

        <div className="proj-group">
          <h3 className="proj-group-title rv">{PROFESSIONAL_LABEL}</h3>
          <div className="proj-grid">
            {professional.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        <div className="proj-group">
          <h3 className="proj-group-title rv">{PERSONAL_LABEL}</h3>
          <div className="proj-grid">
            {personal.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

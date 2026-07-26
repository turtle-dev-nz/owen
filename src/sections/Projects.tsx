import { SectionHeader } from "../components/ui/SectionHeader";
import { Tag } from "../components/ui/Tag";
import "./Projects.css";

interface Project {
  id: number;
  label: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    label: "Creative Studio",
    title: "People with Ideas",
    description:
      "A marketing and portfolio site for a New Zealand creative agency specialising in video production, brand strategy, and content creation. Built a fast, editorial site with project showcases, a services section, and a contact flow - designed to let the work speak for itself.",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    liveUrl: "https://peoplewithideas.co.nz/",
  },
  {
    id: 2,
    label: "Enterprise",
    title: "NZX Electricity Platforms",
    description:
      "Rebuilt three production platforms for NZX's electricity market division - Wits, Clearing, and Recon. Each is data-heavy, surfacing live market information through complex tables and interactive charts. To deliver a consistent UI across all three, I designed and built a bespoke component library from scratch.",
    tags: ["React", "TypeScript", "Data Viz", "Component Library"],
  },
  {
    id: 3,
    label: "Design System",
    title: "Turtle UI",
    description:
      "A component library forked and evolved from the internal tooling built for NZX. Turtle UI is a growing design system with CSS custom property theming, accessible form controls, a notched-field pattern, and data-focused components built for real enterprise use.",
    tags: ["React", "TypeScript", "CSS", "Design System"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeader
          label="Selected Work"
          title="Projects I've built"
          subtitle="A handful of things I'm proud to have shipped."
        />

        <div className="projects__list">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__inner">
                <span className="project-card__label">{project.label}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
              {(project.liveUrl || project.sourceUrl) && (
                <div className="project-card__links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="project-card__link project-card__link--demo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Site ↗
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      className="project-card__link project-card__link--source"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Source ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

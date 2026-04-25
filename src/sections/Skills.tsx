import { SectionHeader } from "../components/ui/SectionHeader";
import { Tag } from "../components/ui/Tag";
import "./Skills.css";

interface SkillCategory {
  name: string;
  icon: string;
  about: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "◈",
    about:
      "Building component-driven interfaces with a focus on design fidelity, performance, and reusable architecture.",
    skills: ["React", "TypeScript", "Next.js", "Vite", "CSS"],
  },
  {
    name: "Data & Backend",
    icon: "⬡",
    about:
      "Working across the stack on data-heavy platforms — live market feeds, financial tables, and charting pipelines.",
    skills: ["Node.js", "Express", "PostgreSQL", "OracleSQL", "Ruby on Rails", "Data Visualisation"],
  },
  {
    name: "Design Systems",
    icon: "◎",
    about:
      "Designing and maintaining component libraries that scale consistently across multiple production applications.",
    skills: ["Component Libraries", "CSS Architecture", "Design Tokens", "Accessibility", "Figma"],
  },
  {
    name: "Tooling",
    icon: "◷",
    about: "Keeping development environments reproducible and CI pipelines tight from day one.",
    skills: ["Docker / Podman", "GitHub Actions", "Dev Containers", "Git"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader
          label="Capabilities"
          title="What I work with"
          subtitle="A curated set of tools and technologies I use to build end-to-end."
        />

        <div className="skills__grid">
          {SKILL_CATEGORIES.map(({ name, icon, about, skills }) => (
            <div key={name} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon" aria-hidden="true">
                  {icon}
                </span>
                <h3 className="skill-card__name">{name}</h3>
              </div>
              <p className="skill-card__about">{about}</p>
              <div className="skill-card__tags">
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

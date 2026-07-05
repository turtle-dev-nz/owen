import { SectionHeader } from "../components/ui/SectionHeader";
import { Tag } from "../components/ui/Tag";
import "./Skills.css";

interface SkillCategory {
  name: string;
  icon: string;
  about: string;
  skills: string[];
}

// const SKILL_CATEGORIES: SkillCategory[] = [
//   {
//     name: "Frontend",
//     icon: "◈",
//     about:
//       "Building component-driven interfaces with a focus on design fidelity, performance, and reusable architecture.",
//     skills: ["React", "TypeScript", "Next.js", "Vite", "CSS"],
//   },
//   {
//     name: "Data & Backend",
//     icon: "⬡",
//     about:
//       "Working across the stack on data-heavy platforms — live market feeds, financial tables, and charting pipelines.",
//     skills: ["Node.js", "Express", "PostgreSQL", "OracleSQL", "Ruby on Rails", "Data Visualisation"],
//   },
//   {
//     name: "Design Systems",
//     icon: "◎",
//     about:
//       "Designing and maintaining component libraries that scale consistently across multiple production applications.",
//     skills: ["Component Libraries", "CSS Architecture", "Design Tokens", "Accessibility", "Figma"],
//   },
//   {
//     name: "Tooling",
//     icon: "◷",
//     about: "Keeping development environments reproducible and CI pipelines tight from day one.",
//     skills: ["Docker / Podman", "GitHub Actions", "Dev Containers", "Git"],
//   },
// ];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Engineering",
    icon: "◈",
    about:
      "Designing accessible, performant user interfaces that balance technical complexity with a thoughtful user experience. I enjoy building software that's intuitive to use and straightforward to maintain.",
    skills: ["React", "TypeScript", "Next.js", "CSS", "D3.js"],
  },
  {
    name: "Application Development",
    icon: "⬡",
    about:
      "Building full-stack applications from database to browser, with an emphasis on clean architecture, maintainability, and solving real business problems.",
    skills: ["Node.js", "Express", "Oracle SQL", "PostgreSQL", "Ruby on Rails"],
  },
  {
    name: "Reusable Systems",
    icon: "◎",
    about:
      "Creating shared components, design patterns, and frontend architecture that reduce duplication, encourage consistency, and make future development easier.",
    skills: ["Component Libraries", "Accessibility", "Design Systems", "UI Architecture", "Developer Experience"],
  },
  {
    name: "Engineering Practices",
    icon: "◷",
    about:
      "Comfortable working across the software lifecycle—from source control and containerised development to automated deployments and continuous improvement.",
    skills: ["Git", "Docker", "Podman", "GitHub Actions", "Dev Containers"],
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

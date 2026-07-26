import { SectionHeader } from "../components/ui/SectionHeader";
import { Tag } from "../components/ui/Tag";
import "./Experience.css";

interface Role {
  id: number;
  company: string;
  title: string;
  period: string;
  location: string;
  current?: boolean;
  achievements: string[];
  tags: string[];
}

const ROLES: Role[] = [
  {
    id: 1,
    company: "NZX Energy Markets",
    title: "Full Stack Developer",
    period: "Jun 2023 – Present",
    location: "Wellington, NZ",
    current: true,
    achievements: [
      "Primary developer responsible for rebuilding three production platforms (WITS, Clearing, and Reconciliation), modernising legacy Oracle APEX and Ruby applications into a React and Node.js architecture.",
      "Designed and developed an accessible shared React component library, including reusable UI components, a configurable data table, and a flexible D3 charting framework that provides a consistent user experience across multiple applications.",
      "Improved application performance and usability by redesigning data-heavy interfaces, optimising SQL queries, and introducing UX-focused enhancements that simplified navigation for market participants.",
      "Worked across the full software development lifecycle in a small engineering team, taking ownership of frontend architecture, backend development, bug resolution, and ongoing platform enhancements.",
      "Collaborated closely with Energy OPs and developers to deliver reliable software while translating technical requirements into intuitive user experiences.",
    ],
    tags: ["React", "TypeScript", "Node.js", "OracleSQL", "Oracle APEX", "Ruby on Rails", "D3"],
  },
  {
    id: 2,
    company: "FNZ",
    title: "Analyst Developer",
    period: "Feb 2022 – Jun 2023",
    location: "Wellington, NZ",
    achievements: [
      "Contributed to enterprise wealth management platforms within a cross-functional team of around 15 developers and testers.",
      "Worked with an international team of developers in Europe, collaborating on backend systems.",
      "Focused primarily on backend development - building and maintaining financial data pipelines and investment processing services.",
    ],
    tags: ["C#", "Visual Basic", "PostgreSQL"],
  },
  {
    id: 3,
    company: "NZTA – WTOC",
    title: "Real Time Operator",
    period: "Dec 2017 – Apr 2020",
    location: "Wellington, NZ",
    achievements: [
      "Handled active state highway incidents and coordinated responses across the North and South Islands as part of a 4-person real-time operations team.",
      "Monitored and controlled a large CCTV network spanning from Lake Taupo to Lewis Pass.",
      "Operated critical infrastructure such as the Mt Victoria and Terrace tunnels, as well as working with road infrastructure contractors to manage lane closures and traffic diversions.",
      "Coordinated with traffic management contractors and communicated directly with NZ Police by radio during incidents and vehicle pursuits.",
    ],
    tags: ["Operations", "Incident Management", "Infrastructure"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeader
          label="Career"
          title="Work experience"
          // subtitle="A track record across my software development and high-pressure operations."
        />

        <div className="experience__timeline">
          {ROLES.map((role) => (
            <article key={role.id} className="experience-entry">
              <div className="experience-entry__marker" aria-hidden="true">
                <div className={`experience-entry__dot${role.current ? " experience-entry__dot--active" : ""}`} />
              </div>

              <div className="experience-entry__body">
                <div className="experience-entry__header">
                  <div className="experience-entry__meta">
                    <span className="experience-entry__company">{role.company}</span>
                    <span className="experience-entry__period">{role.period}</span>
                  </div>
                  <h3 className="experience-entry__title">{role.title}</h3>
                  <span className="experience-entry__location">{role.location}</span>
                </div>

                <ul className="experience-entry__achievements" aria-label="Key achievements">
                  {role.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="experience-entry__tags">
                  {role.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

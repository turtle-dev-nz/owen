import { SectionHeader } from "../components/ui/SectionHeader";
import "./About.css";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "4+", label: "Years in Software Dev" },
  { value: "3", label: "Enterprise Platforms Rebuilt" },
  { value: "∞", label: "Cups of Coffee" },
];

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__content">
          <SectionHeader
            label="About Me"
            title="Full-stack developer, backend at heart"
            // subtitle="I bridge the gap between engineering precision and creative vision."
          />

          <div className="about__body">
            <p>
              Full-stack software engineer with experience designing and delivering business-critical web applications,
              with a particular passion for modern frontend development and user experience. I enjoy building
              maintainable, accessible software that balances technical performance with intuitive design, and I'm
              motivated by finding practical ways to improve systems for both users and developers.
            </p>
            <p>
              At NZX, I've led the redevelopment of multiple external platforms, created a shared React component
              library, and worked across the full stack to deliver reliable, long-term solutions. I'm now looking to
              continue growing as an engineer by contributing to collaborative teams while expanding my experience in
              architecture, technical leadership, and AI-assisted development.
            </p>
          </div>

          <div className="about__stats" aria-label="Career highlights">
            {STATS.map(({ value, label }) => (
              <div key={label} className="about__stat">
                <span className="about__stat-value" aria-label={`${value} ${label}`}>
                  {value}
                </span>
                <span className="about__stat-label" aria-hidden="true">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

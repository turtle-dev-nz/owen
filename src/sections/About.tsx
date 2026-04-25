import { SectionHeader } from "../components/ui/SectionHeader";
import "./About.css";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "5+", label: "Years Experience" },
  { value: "4+", label: "Projects Shipped" },
  { value: "1+", label: "Clients Served" },
  { value: "∞", label: "Cups of Coffee" },
];

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__content">
          <SectionHeader
            label="About Me"
            title="Developer with an eye for design"
            // subtitle="I bridge the gap between engineering precision and creative vision."
          />

          <div className="about__body">
            <p>
              Hi, I&apos;m Owen — a full-stack developer and UI/UX designer with a passion for creating products that
              are as intuitive as they are robust. I&apos;ve spent the last 5+ years working across the full spectrum:
              from database design and API architecture to front-end interactions and design systems.
            </p>
            <p>
              My work sits at the intersection of engineering and experience. I believe great software isn&apos;t just
              functional — it&apos;s a pleasure to use. Whether I&apos;m writing backend services or crafting component
              libraries, that principle guides every decision I make.
            </p>
          </div>
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
    </section>
  );
}

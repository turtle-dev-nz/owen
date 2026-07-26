import { SectionHeader } from "../components/ui/SectionHeader";
import "./Education.css";

interface Qualification {
  id: number;
  type: "degree" | "certification";
  title: string;
  institution: string;
  year: string;
  detail?: string;
}

const QUALIFICATIONS: Qualification[] = [
  {
    id: 1,
    type: "degree",
    title: "Bachelor of Science - Computer Science",
    institution: "Victoria University of Wellington",
    year: "Graduated 2022",
  },
  {
    id: 2,
    type: "certification",
    title: "UX Microcredential",
    institution: "Media Design School Auckland",
    year: "Online",
    detail: "Grade: A–",
  },
];

export function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionHeader
          label="Education"
          title="Qualifications"
          subtitle="Academic foundation and ongoing professional development."
        />

        <div className="education__grid">
          {QUALIFICATIONS.map(({ id, type, title, institution, year, detail }) => (
            <div key={id} className={`education-card education-card--${type}`}>
              <span className="education-card__type">{type === "degree" ? "Degree" : "Certification"}</span>
              <h3 className="education-card__title">{title}</h3>
              <p className="education-card__institution">{institution}</p>
              <div className="education-card__footer">
                <span className="education-card__year">{year}</span>
                {detail && <span className="education-card__detail">{detail}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

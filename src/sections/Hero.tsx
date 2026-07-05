import { Button } from "../components/ui/Button";
import cvFile from "../assets/Owen_Nicholson_CV.pdf";
import "./Hero.css";

export function Hero() {
  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow" />
      </div>

      <div className="container hero__content">
        <div className="hero__eyebrow">
          <span className="hero__status-dot" aria-hidden="true" />
          <span>Available for new opportunities</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-name">Owen Nicholson</span>
          <span className="hero__title-line">Full-stack Software Engineer</span>
          <span className="hero__title-line hero__title-line--accent">building useful, maintainable products</span>
        </h1>

        <div className="hero__actions">
          <Button href={cvFile} download="Owen_Nicholson_CV.pdf" title="Download Owen Nicholson CV">
            Download CV
          </Button>
          <Button variant="outline" onClick={() => scrollTo("contact")}>
            Get In Touch
          </Button>
        </div>

        <div className="hero__meta" aria-label="Professional focus">
          <span className="hero__meta-item">Wellington, NZ</span>
          <span className="hero__meta-sep" aria-hidden="true">
            ·
          </span>
          <span className="hero__meta-item">Full-Stack Engineering</span>
          <span className="hero__meta-sep" aria-hidden="true">
            ·
          </span>
          <span className="hero__meta-item">Product-Minded</span>
          <span className="hero__meta-sep" aria-hidden="true">
            ·
          </span>
          <span className="hero__meta-item">Maintainable Systems</span>
        </div>
      </div>

      <button
        type="button"
        className="hero__scroll-indicator"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
      >
        <span className="hero__scroll-line" aria-hidden="true" />
      </button>
    </section>
  );
}

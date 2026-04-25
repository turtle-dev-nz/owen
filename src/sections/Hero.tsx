import { Button } from "../components/ui/Button";
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
          <span>Available for new projects</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-name">Owen</span>
          <span className="hero__title-line">Full-Stack Developer</span>
          <span className="hero__title-line hero__title-line--accent">&amp; UI/UX Designer</span>
        </h1>

        <p className="hero__description">
          I build fast, accessible, and visually refined digital products &mdash; from system architecture to
          pixel-perfect interfaces.
        </p>

        <div className="hero__actions">
          <Button onClick={() => scrollTo("projects")}>View My Work</Button>
          <Button variant="outline" onClick={() => scrollTo("contact")}>
            Get In Touch
          </Button>
        </div>

        <div className="hero__meta" aria-label="Primary technologies">
          <span className="hero__meta-item">React</span>
          <span className="hero__meta-sep" aria-hidden="true">
            ·
          </span>
          <span className="hero__meta-item">Node.js</span>
          <span className="hero__meta-sep" aria-hidden="true">
            ·
          </span>
          <span className="hero__meta-item">Figma</span>
          <span className="hero__meta-sep" aria-hidden="true">
            ·
          </span>
          <span className="hero__meta-item">TypeScript</span>
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

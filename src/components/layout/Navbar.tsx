import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useActiveSection } from "../../hooks/useActiveSection";
import { ColorPicker } from "../ui/ColorPicker";
import "./Navbar.css";

interface NavLink {
  label: string;
  id: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(SECTION_IDS);
  const isScrolled = scrollY > 40;

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar${isScrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Home">
          <span className="navbar__logo-text">owennicholson</span>
          <span className="navbar__logo-dot" aria-hidden="true">
            .
          </span>
          <span className="navbar__logo-text">com</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  type="button"
                  className={`navbar__link${activeSection === id ? " navbar__link--active" : ""}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__end">
          <ColorPicker direction="left" />
          <a href="mailto:hello@owen.dev" className="navbar__cta">
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}

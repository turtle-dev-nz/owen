import { useState, useEffect } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && <div className="navbar__backdrop" aria-hidden="true" onClick={() => setMenuOpen(false)} />}
      <header className={`navbar${isScrolled ? " navbar--scrolled" : ""}${menuOpen ? " navbar--menu-open" : ""}`}>
        <div className="container navbar__inner">
          <a href="#" className="navbar__logo" aria-label="Home">
            <span className="navbar__logo-name">owennicholson</span>
            <span className="navbar__logo-suffix">
              <span className="navbar__logo-dot" aria-hidden="true">
                .
              </span>
              <span className="navbar__logo-text">com</span>
            </span>
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
            <button
              type="button"
              className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={`navbar__mobile-menu${menuOpen ? " navbar__mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
          <ul className="navbar__mobile-links">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  type="button"
                  className={`navbar__mobile-link${activeSection === id ? " navbar__mobile-link--active" : ""}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
          <div className="navbar__mobile-cta-wrap">
            <div className="navbar__mobile-bottom">
              <a href="mailto:hello@owen.dev" className="navbar__cta" onClick={() => setMenuOpen(false)}>
                Let&apos;s talk
              </a>
              <ColorPicker direction="right" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

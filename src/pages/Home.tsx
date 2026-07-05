import type { CSSProperties } from "react";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Skills } from "../sections/Skills";
// import { Projects } from "../sections/Projects";
import { Education } from "../sections/Education";
import { Contact } from "../sections/Contact";
import { useDeviceType } from "../hooks/useDeviceType";

export function Home() {
  const { isMobile } = useDeviceType();
  const mobileSectionStyle = isMobile ? ({ "--section-padding": "3rem 0" } as CSSProperties) : undefined;

  return (
    <main style={mobileSectionStyle}>
      <Hero isMobile={isMobile} />
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Education />
      <Contact />
    </main>
  );
}

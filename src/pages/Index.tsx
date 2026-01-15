import { Navigation } from "@/components/Navigation";
import { BackgroundEffects, SectionDivider } from "@/components/BackgroundEffects";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Global background effects */}
      <BackgroundEffects />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <SectionDivider variant="glow" />
        <About />
        <SectionDivider variant="gradient" />
        <Skills />
        <SectionDivider variant="glow" />
        <Experience />
        <SectionDivider variant="gradient" />
        <Projects />
        <SectionDivider variant="glow" />
        <Achievements />
        <SectionDivider variant="gradient" />
        <Education />
        <SectionDivider variant="glow" />
        <Contact />
      </div>
    </main>
  );
};

export default Index;

import Background from "@/components/portfolio/Background";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import FeaturedProjectsSection from "@/components/portfolio/FeaturedProjectsSection";
import ResearchPapersSection from "@/components/portfolio/ResearchPapersSection";
import HobbiesSection from "@/components/portfolio/HobbiesSection";
import { cards, navItems, skillLogos, researchPapers, hobbies } from "@/data/portfolio";

export default function Home() {
  return (
    <Background>
      <main className="relative mx-auto w-full max-w-[720px] px-4 sm:px-6 pb-12 pt-12 sm:pb-16 sm:pt-16">
        <Navbar items={navItems} />

      <HeroSection />

      <ProjectsSection cards={cards} />

      <SkillsSection skills={skillLogos} />

      <FeaturedProjectsSection />

      <ResearchPapersSection papers={researchPapers} />

      <HobbiesSection hobbies={hobbies} />

      <ContactSection />
    </main>
    </Background>
  );
}

import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import FeaturedProjectsSection from "@/components/portfolio/FeaturedProjectsSection";
import { cards, navItems, quickFacts, skillLogos } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="relative mx-auto w-[min(1280px,94vw)] pb-16 pt-20 sm:pb-20 sm:pt-28 lg:w-[min(1280px,92vw)] lg:pt-32">
      <Navbar items={navItems} />

      <HeroSection facts={quickFacts} />

      <ProjectsSection cards={cards} />

      <SkillsSection skills={skillLogos} />

      <FeaturedProjectsSection />

      <ContactSection />

      <div className="fixed inset-0 -z-50 pointer-events-none bg-[#030014]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b1b6d,transparent_70%)] opacity-50" />
      </div>
    </main>
  );
}
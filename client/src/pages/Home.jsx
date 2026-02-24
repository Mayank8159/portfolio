import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { CosmicLoader } from "../components/CosmicLoader";
import { ThreeBackground } from "@/components/ThreeBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  useEffect(() => {
    const apiBaseUrl =
      import.meta.env.VITE_API_BASE_URL?.trim() ||
      "https://portfolio-degk.onrender.com";
    fetch(`${apiBaseUrl}/api/health`, { method: "GET" }).catch(() => {
      // No-op: warm-up ping should not block rendering.
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <CosmicLoader />
      {/* Background Effects */}
      <ThreeBackground />

      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
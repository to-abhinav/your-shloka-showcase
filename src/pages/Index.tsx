import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShlokSection from "@/components/ShlokSection";
import AboutSection from "@/components/AboutSection";
import CareerSection from "@/components/CareerSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ShlokSection />
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default Index;

import { FloatingNav } from "@/components/layout/FloatingNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { LearningJourneySection } from "@/components/sections/LearningJourneySection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StrengthsLanguagesSection } from "@/components/sections/StrengthsLanguagesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingNav />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <LearningJourneySection />
        <ActivitiesSection />
        <ProjectsSection />
        <StrengthsLanguagesSection />
      </main>
      <ContactSection />
    </div>
  );
}

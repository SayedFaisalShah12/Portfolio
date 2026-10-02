import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { AgenticSection } from './sections/AgenticSection';
import { WorkflowSection } from './sections/WorkflowSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { JourneySection } from './sections/JourneySection';
import { FlutterSection } from './sections/FlutterSection';
import { LearningSection } from './sections/LearningSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AgenticSection />
        <WorkflowSection />
        <ProjectsSection />
        <JourneySection />
        <FlutterSection />
        <LearningSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

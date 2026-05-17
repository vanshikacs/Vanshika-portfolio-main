import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import TechStackSection from '@/components/TechStackSection';
import ProjectsSection from '@/components/ProjectsSection';
import HackathonsSection from '@/components/HackathonsSection';
import DebateSection from '@/components/DebateSection';
import CommunitySection from '@/components/CommunitySection';
import TimelineSection from '@/components/TimelineSection';
import ResumeSection from '@/components/ResumeSection';
import PersonalBoard from '@/components/PersonalBoard';
import ContactSection from '@/components/ContactSection';
import '@/App.css';

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-cream overflow-x-hidden" data-testid="portfolio-app">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      <Navigation />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <TechStackSection />
      <ProjectsSection />
      <HackathonsSection />
      <DebateSection />
      <CommunitySection />
      <TimelineSection />
      <ResumeSection />
      <PersonalBoard />
      <ContactSection />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

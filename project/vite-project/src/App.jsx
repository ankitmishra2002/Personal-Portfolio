import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Toggle Theme between Dark & Light
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      isDarkMode 
        ? 'bg-[#0b0f19] text-slate-100 dark-mode' 
        : 'bg-slate-50 text-slate-900 light-mode'
    }`}>
      
      {/* Sticky Header Navbar */}
      <Navbar
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          isDarkMode={isDarkMode}
          onOpenCvModal={() => setCvModalOpen(true)}
        />
        <AboutSection isDarkMode={isDarkMode} />
        <SkillsSection isDarkMode={isDarkMode} />
        <ProjectsSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />

      {/* Download Resume / CV Modal */}
      <ResumeModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        isDarkMode={isDarkMode}
      />

    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FlowBackground } from './components/FlowBackground';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default dark-first aesthetic requested
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div
      id="portfolio-root"
      className={`min-h-screen relative transition-colors duration-300 ${
        darkMode ? 'bg-neutral-950 text-neutral-100' : 'bg-slate-50 text-neutral-900'
      }`}
    >
      {/* Dynamic Fluid Streamlines Canvas Background */}
      <FlowBackground darkMode={darkMode} />

      {/* Floating Navigation Bar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

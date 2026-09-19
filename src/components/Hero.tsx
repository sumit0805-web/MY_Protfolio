import { ArrowDown, ArrowUpRight, Linkedin, Github, Mail, GraduationCap } from 'lucide-react';
import { profileData, educationData } from '../data/portfolioData';

export function Hero() {
  const edu = educationData[0];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-neutral-200/80 dark:border-neutral-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          
          {/* Subtle status row */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              <span>RVITM, Bengaluru</span>
            </span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 shadow-xs">
              2nd Year Undergrad
            </span>
            <span className="px-2.5 py-1 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold shadow-xs">
              CGPA: 9.275
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
              {profileData.name}
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 font-normal tracking-tight">
              Frontend Developer &amp; Computer Science Student
            </p>
          </div>

          {/* Bio narrative */}
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal">
            Building structured, accessible user interfaces with{' '}
            <span className="text-neutral-950 dark:text-white font-medium">React, TypeScript &amp; modern styling</span>, supported by algorithmic and systems fundamentals in{' '}
            <span className="text-neutral-950 dark:text-white font-medium">Python &amp; C</span>.
          </p>

          {/* Action Row without exposing raw personal email or phone text */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="hero-view-work-btn"
              type="button"
              onClick={() => handleScrollTo('projects')}
              className="px-5 py-2.5 rounded-lg bg-neutral-950 hover:bg-neutral-850 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 font-medium text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              id="hero-contact-btn"
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-850 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 font-medium text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            </button>

            <a
              id="hero-email-direct"
              href={`mailto:${profileData.email}`}
              className="px-4 py-2.5 rounded-lg bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-850 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Mail className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <span>Email</span>
            </a>

            <a
              id="hero-linkedin-link"
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-850 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 transition-colors shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="hero-github-link"
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-850 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-neutral-800 transition-colors shadow-xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* High-level technical competencies matrix */}
          <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-neutral-500 block mb-1">PROGRAMMING</span>
              <span className="text-neutral-800 dark:text-neutral-300 font-medium">Python, C, TypeScript, JS</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1">FRONTEND</span>
              <span className="text-neutral-800 dark:text-neutral-300 font-medium">React (Vite), Tailwind, Recharts</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1">BACKEND &amp; DATA</span>
              <span className="text-neutral-800 dark:text-neutral-300 font-medium">Node.js, Express, SQLite, JWT</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1">APPLIED AI</span>
              <span className="text-neutral-800 dark:text-neutral-300 font-medium">Google Gen AI (Gemini Flash)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-neutral-200/80 dark:border-neutral-900 bg-slate-100/50 dark:bg-neutral-950 py-12 text-neutral-600 dark:text-neutral-400 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-900">
          
          {/* Identity & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-300 shadow-xs">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-neutral-900 dark:text-neutral-200 text-sm block">
                {profileData.name}
              </span>
              <span className="text-xs text-neutral-500 font-mono block">
                Frontend Developer &bull; 2nd Year Undergrad, RVITM Bengaluru
              </span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-md bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} Sumit Kumar. Built with React, TypeScript &amp; Tailwind CSS.</p>
          <p>Samastipur, Bihar &bull; Bengaluru, Karnataka</p>
        </div>
      </div>
    </footer>
  );
}

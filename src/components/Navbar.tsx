import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code2, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/90 dark:border-neutral-800/80 shadow-sm dark:shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="nav-logo-btn"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo('#hero');
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 transition-colors">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 text-sm leading-tight">
              {profileData.name}
            </span>
            <span className="text-[11px] font-mono text-neutral-500 leading-tight">
              2nd Year Undergrad &bull; RVITM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                onClick={() => handleScrollTo(link.href)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/50'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-md bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-850 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-neutral-700" />
            )}
          </button>

          {/* Quick Contact CTA */}
          <button
            id="nav-cta-contact-btn"
            type="button"
            onClick={() => handleScrollTo('#contact')}
            className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 text-xs font-medium transition-colors cursor-pointer"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Open menu"
            className="md:hidden w-8 h-8 rounded-md bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center justify-center transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950 px-4 pt-3 pb-5 space-y-1 shadow-md"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              id={`mobile-nav-${link.name.toLowerCase()}`}
              onClick={() => handleScrollTo(link.href)}
              className="w-full text-left px-3 py-2 rounded-md text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-900">
            <button
              id="mobile-nav-cta-btn"
              onClick={() => handleScrollTo('#contact')}
              className="w-full py-2 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 font-medium text-xs flex items-center justify-center gap-1.5"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

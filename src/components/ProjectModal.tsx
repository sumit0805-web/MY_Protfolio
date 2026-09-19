import { useEffect } from 'react';
import { X, Github, Check } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      id="project-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        id="project-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6 text-neutral-800 dark:text-neutral-200 my-8 transition-colors"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-neutral-200/80 dark:border-neutral-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <span className="font-semibold text-neutral-800 dark:text-neutral-300">{project.category}</span>
              <span>•</span>
              <span>{project.status}</span>
            </div>
            <h2 className="text-2xl font-semibold text-neutral-950 dark:text-neutral-100 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {project.subtitle}
            </p>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-md bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Technology Stack Tags */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 tracking-wider block">
            Technologies Applied
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Section: Problem & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
              The Problem
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
              Architectural Approach
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.approach}
            </p>
          </div>
        </div>

        {/* Section: Key Features Built */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
            Implementation &amp; Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {caseStudy.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-50/80 dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800/80 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed flex items-start gap-2"
              >
                <Check className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Challenges & Technical Solutions */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
            Engineering Challenges &amp; Resolution
          </h3>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-neutral-950/60 border border-neutral-200 dark:border-neutral-800 space-y-2">
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 block">
              Challenges:
            </span>
            <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <span className="font-mono text-neutral-500 dark:text-neutral-400 block mb-1">Engineered Solution:</span>
              {caseStudy.solution}
            </div>
          </div>
        </div>

        {/* Section: Outcome & Future Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800 space-y-1">
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
              Outcome
            </span>
            <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {caseStudy.outcome}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 dark:bg-neutral-950/40 border border-neutral-200 dark:border-neutral-800 space-y-1">
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
              Future Roadmap
            </span>
            <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {caseStudy.futureImprovements.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-200/80 dark:border-neutral-800">
          <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            Role: {project.role}
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-md bg-white hover:bg-slate-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-md bg-neutral-950 hover:bg-neutral-850 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 text-xs font-medium transition-colors cursor-pointer shadow-xs"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

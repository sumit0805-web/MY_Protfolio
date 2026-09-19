import { useState } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProject = projectsData[0];

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
            Projects
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Featured applications demonstrating full-stack engineering, API design, and modern UI implementation.
          </p>
        </div>

        {/* Featured Project Card: CareTrack AI */}
        <div
          id="project-caretrack-ai"
          className="rounded-xl bg-white/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 space-y-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-xs"
        >
          {/* Card Top */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-neutral-200/80 dark:border-neutral-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{featuredProject.category}</span>
                <span>•</span>
                <span>{featuredProject.status}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-950 dark:text-neutral-100">
                {featuredProject.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {featuredProject.subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                id="btn-open-case-study"
                type="button"
                onClick={() => setSelectedProject(featuredProject)}
                className="px-4 py-2 rounded-lg bg-neutral-950 hover:bg-neutral-850 text-white dark:bg-neutral-100 dark:hover:bg-white dark:text-neutral-950 text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {featuredProject.githubUrl && (
                <a
                  id="btn-project-github"
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Description & Implementation Highlights */}
          <div className="space-y-4 text-sm text-neutral-700 dark:text-neutral-300">
            <p className="leading-relaxed">
              {featuredProject.description}
            </p>

            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-medium">
                Key Deliverables:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 pl-4 list-disc">
                {featuredProject.highlights.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-wrap items-center gap-1.5">
            {featuredProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

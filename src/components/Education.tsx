import { educationData } from '../data/portfolioData';

export function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="py-16 md:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
            Education
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Undergraduate engineering curriculum with focus in artificial intelligence and machine learning.
          </p>
        </div>

        {/* Education Card */}
        <div className="rounded-xl bg-white/90 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-neutral-200/80 dark:border-neutral-800">
            <div className="space-y-1">
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
                {edu.period}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-950 dark:text-neutral-100">
                {edu.degree}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {edu.institution}, {edu.location}
              </p>
            </div>

            {/* Academic Performance Badges */}
            <div className="flex flex-col sm:items-end gap-1 font-mono text-xs">
              <div className="px-3 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold shadow-xs">
                Cumulative CGPA: 9.275
              </div>
              <div className="text-neutral-500 text-[11px]">
                Sem 1: 9.1 &bull; Sem 2: 9.45
              </div>
            </div>
          </div>

          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
            {edu.description}
          </p>

          {/* Coursework Foundations */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
              Key Coursework &amp; Foundations:
            </span>
            <div className="flex flex-wrap gap-2">
              {edu.courseworkHighlights.map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-slate-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 font-mono"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { educationData } from '../data/portfolioData';

export function About() {
  const edu = educationData[0];

  const focusAreas = [
    {
      title: 'Systems & Algorithmic Foundations',
      description:
        'Procedural structure, computational efficiency, and data structures practiced with C and Python.',
    },
    {
      title: 'Component-Driven Frontend',
      description:
        'Modular, responsive interfaces with React, TypeScript, and Tailwind CSS with disciplined state handling.',
    },
    {
      title: 'Full-Stack Integration',
      description:
        'Connected applications with Node.js and Express, persistent local storage with Better-SQLite3, and API services.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
            About
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            Academic background, core engineering philosophy, and current technical focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I am a second-year undergraduate student pursuing a{' '}
              <span className="text-neutral-950 dark:text-white font-medium">
                B.E. in Computer Science &amp; Engineering (AI &amp; ML)
              </span>{' '}
              at{' '}
              <span className="text-neutral-950 dark:text-neutral-100 font-medium">
                RV Institute of Technology and Management (RVITM), Bengaluru
              </span>
              . Across Year 1, I attained an SGPA of{' '}
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">9.1 in Semester 1</span> and{' '}
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">9.45 in Semester 2</span>, yielding a cumulative CGPA of{' '}
              <span className="text-neutral-950 dark:text-white font-semibold">9.275</span>.
            </p>
            <p>
              My focus is on client-side engineering using{' '}
              <span className="text-neutral-950 dark:text-white font-medium">React and TypeScript</span>. Alongside modern web development, I cultivate core programming fundamentals in{' '}
              <span className="text-neutral-950 dark:text-white font-medium">Python and C</span>, ensuring that my interface engineering is paired with sound data structures and logic.
            </p>
            <p>
              When developing projects, I prioritize code organization, predictable data flow, and purposeful interfaces over decorative templates.
            </p>
          </div>

          {/* Core Focus Areas */}
          <div className="lg:col-span-5 space-y-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="p-4 rounded-lg bg-white/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-1"
              >
                <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                  {area.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

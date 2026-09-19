import { useState } from 'react';
import { Search } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Languages', 'Frontend Development', 'Backend & Data', 'Tools & Version Control'];

  const filteredCategories = skillsData.filter((cat) => {
    if (activeCategory !== 'All' && cat.title !== activeCategory) {
      return false;
    }
    return true;
  });

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-100">
              Technical Skills
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm max-w-xl">
              Languages, libraries, and developer tools used across coursework and projects.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-56">
            <Search className="w-4 h-4 text-neutral-400 dark:text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-xs text-neutral-900 dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-600 shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950'
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-200 border border-neutral-200 dark:border-neutral-800 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const visibleSkills = category.skills.filter((s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (visibleSkills.length === 0 && searchQuery) return null;

            return (
              <div
                key={category.title}
                className="p-5 rounded-lg bg-white/80 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200/80 dark:border-neutral-800/60">
                  <h3 className="font-medium text-neutral-900 dark:text-neutral-200 text-sm">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {visibleSkills.length}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {visibleSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded bg-slate-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-mono"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

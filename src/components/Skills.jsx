import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import { TechStackVisual } from './TechStackVisual';
import { IconCode, IconGlobe, IconCpu } from './Icons';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming', icon: IconCode },
    { id: 'development', name: 'Development', icon: IconGlobe },
    { id: 'tools', name: 'Tools & Platforms', icon: IconCpu }
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
              Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              Practical competencies categorized by real project utility — without arbitrary percentage ratings.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-slate-800 text-sky-500 dark:text-sky-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Grids */}
        <div className="space-y-12">
          
          {/* Programming Languages */}
          {(activeCategory === 'all' || activeCategory === 'programming') && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 rounded-md bg-sky-500/10 text-sky-500">
                  <IconCode className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider text-xs">
                  Programming Languages
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsData.programming.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {skill.application}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Development */}
          {(activeCategory === 'all' || activeCategory === 'development') && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-500">
                  <IconGlobe className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider text-xs">
                  Development &amp; Engineering
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsData.development.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {skill.application}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Platforms */}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 rounded-md bg-indigo-500/10 text-indigo-500">
                  <IconCpu className="w-4 h-4" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider text-xs">
                  Tools, Frameworks &amp; Platforms
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillsData.tools.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {skill.application}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Compact Interactive Tech Stack Visual */}
        <TechStackVisual />

      </div>
    </section>
  );
}

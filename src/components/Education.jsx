import React, { useState } from 'react';
import { IconGraduationCap, IconCheck } from './Icons';
import { educationData } from '../data/education';

export function Education() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="education" className="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
            Academic Track
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Education
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Grounding engineering problem-solving in verified computer science principles.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="relative group"
              onClick={() => setSelectedIdx(idx)}
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-sky-500 shadow-md shadow-sky-500/30 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-sky-500/40 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-sky-500/10 text-sky-500">
                      <IconGraduationCap className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-medium">
                    {edu.status}
                  </span>
                </div>

                {/* Coursework & Focus Areas */}
                <div className="mt-4 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    Core Engineering Coursework
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.focus.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    Key Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <IconCheck className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

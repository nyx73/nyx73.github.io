import React from 'react';
import { journeyData } from '../data/journey';
import { IconCheck } from './Icons';

export function Journey() {
  return (
    <section id="journey" className="py-20 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
            Evolution &amp; Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Build Journey
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            A chronological progression demonstrating growth through practical implementation, competitive challenges, and real software delivery.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
          {journeyData.map((item, idx) => (
            <div key={item.phase} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 dark:bg-slate-950 border-2 border-sky-500 shadow-md shadow-sky-500/20 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              </div>

              {/* Card */}
              <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-sky-500/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-sky-500 dark:text-sky-400">
                      {item.phase}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {item.stage}
                    </span>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Milestones list */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                  {item.milestones.map((milestone, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <IconCheck className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

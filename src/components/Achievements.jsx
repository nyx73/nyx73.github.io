import React from 'react';
import { achievementsData } from '../data/achievements';
import { IconTrophy, IconAward } from './Icons';

export function Achievements() {
  return (
    <section id="achievements" className="py-20 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
            Competitions &amp; Hackathons
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Achievements &amp; Recognitions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
            Verified competitive outcomes, hackathon participation, and technical challenge awards.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                item.isAward
                  ? 'border-sky-500/30 bg-sky-500/[0.03] dark:bg-sky-500/[0.04] hover:border-sky-500/60 shadow-lg shadow-sky-500/5'
                  : 'border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`p-2.5 rounded-xl ${
                    item.awardRank === 2
                      ? 'bg-emerald-500/10 text-emerald-500'
                      : item.awardRank === 3
                      ? 'bg-amber-500/10 text-amber-500'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {item.isAward ? <IconTrophy className="w-5 h-5" /> : <IconAward className="w-5 h-5" />}
                </span>

                <span
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${
                    item.awardRank === 2
                      ? 'text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                      : item.awardRank === 3
                      ? 'text-amber-500 dark:text-amber-400 bg-amber-500/10 border-amber-500/20'
                      : 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {item.result}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

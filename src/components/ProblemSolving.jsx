import React from 'react';
import { IconLeetCode, IconExternalLink, IconCode } from './Icons';

export function ProblemSolving() {
  const topics = [
    "Arrays & Hashing",
    "Two Pointers & Sliding Window",
    "Binary Search & Trees",
    "Graph Traversals & BFS/DFS",
    "Dynamic Programming & Greedy",
    "Object-Oriented Design"
  ];

  return (
    <section className="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Algorithms &amp; Problem Solving</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Strengthening Logic &amp; Algorithmic Foundations
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Practicing programming problems to strengthen logic, algorithms, and problem-solving skills. Focusing on time/space complexity optimization, data structure selection, and robust edge-case handling.
              </p>

              {/* Topics focus */}
              <div className="pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                  Active Practice Domains
                </span>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile CTA Box */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end justify-center">
              <a
                href="https://leetcode.com/u/rhythmchavda073/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full max-w-sm p-5 rounded-xl border border-amber-500/30 bg-amber-500/[0.04] dark:bg-amber-500/[0.06] hover:border-amber-500/60 transition-all duration-200 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500">
                    <IconLeetCode className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">LeetCode Profile</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      rhythmchavda073
                    </span>
                  </div>
                </div>

                <IconExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { IconX, IconDownload, IconCheck, IconCopy } from './Icons';

export function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summary = `RHYTHM CHAVDA
B.Tech — Computer Engineering Student
GitHub: https://github.com/nyx73
LinkedIn: https://www.linkedin.com/in/rhythmchavda/
LeetCode: https://leetcode.com/u/rhythmchavda073/

FOCUS & SKILLS
- Programming: Java, Python, JavaScript
- Development: Android Development, Web Development, HTML5, CSS3, React
- Tools & Platforms: Git, GitHub, Android Studio, Firebase, REST APIs, Vite, Tailwind CSS

KEY PROJECTS
- Financial Crime Detection: Graph-based fraud ring detection (FastAPI, React, NetworkX, Pandas)
- Traffic-OPS: Smart adaptive traffic signal simulation & dashboard
- Shopigo: Modern responsive e-commerce web interface (Frontend Battle 2025)
- Expense Tracker: Multi-user family budget and spending tracker

HONORS & HACKATHONS
- DBMS Decathon — 2nd Prize
- Techtraid — 3rd Prize
- RIFT'26 Hackathon Participant
- Tech Expo 2026 Participant`;

    navigator.clipboard.writeText(summary);
    if (onShowToast) onShowToast("Resume summary copied to clipboard ✓");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700/60 bg-[#0c1220] text-slate-100 p-6 sm:p-8 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400">Verified Profile &amp; Resume</span>
            <h2 id="resume-modal-title" className="text-2xl font-bold text-white tracking-tight">Rhythm Chavda</h2>
            <p className="text-sm text-slate-400">B.Tech — Computer Engineering Student</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-sm">
          {/* Quick Notice */}
          <div className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/20 text-xs text-sky-200 flex items-center justify-between">
            <span>Official candidate summary generated from verified portfolio data.</span>
            <span className="font-mono text-sky-400 font-medium">India</span>
          </div>

          {/* Education */}
          <section>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Education</h3>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-semibold text-white">B.Tech — Computer Engineering</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Undergraduate</span>
              </div>
              <p className="text-xs text-slate-400">
                Core coursework: Data Structures &amp; Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering.
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <span className="text-xs font-mono text-sky-400 block mb-1">Languages</span>
                <span className="text-xs text-slate-200">Java, Python, JavaScript</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <span className="text-xs font-mono text-cyan-400 block mb-1">Development</span>
                <span className="text-xs text-slate-200">Android Development, Web Dev, React, HTML5, CSS3</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <span className="text-xs font-mono text-indigo-400 block mb-1">Tools &amp; Platforms</span>
                <span className="text-xs text-slate-200">Git, GitHub, Android Studio, Firebase, REST APIs, Vite</span>
              </div>
            </div>
          </section>

          {/* Selected Projects */}
          <section>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Selected Projects</h3>
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-100">Financial Crime Detection</span>
                  <span className="text-[11px] font-mono text-slate-400">React · FastAPI · NetworkX · Python</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Full-stack graph analysis system detecting circular money-muling patterns and computing network risk scores.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-100">Traffic-OPS</span>
                  <span className="text-[11px] font-mono text-slate-400">JavaScript · Simulation Algorithms · CSS</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Adaptive traffic signal management prototype analyzing simulated lane queues and dynamic green allocations.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-100">Shopigo</span>
                  <span className="text-[11px] font-mono text-slate-400">Frontend Battle 2025 · HTML/CSS/JS</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Lightweight, responsive component-based e-commerce storefront with live cart interactions.
                </p>
              </div>
            </div>
          </section>

          {/* Competitions & Recognitions */}
          <section>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Hackathons &amp; Honors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-200 text-xs block">DBMS Decathon</span>
                  <span className="text-[11px] text-slate-400">Database challenge</span>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">2nd Prize</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-200 text-xs block">Techtraid</span>
                  <span className="text-[11px] text-slate-400">Engineering hackathon</span>
                </div>
                <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">3rd Prize</span>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-400">Direct PDF upload ready upon request.</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopySummary}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-700 bg-slate-800/80 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <IconCopy className="w-3.5 h-3.5" />
              Copy Text Summary
            </button>
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-colors shadow-lg shadow-sky-500/20"
            >
              <IconDownload className="w-3.5 h-3.5" />
              Print / Save Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

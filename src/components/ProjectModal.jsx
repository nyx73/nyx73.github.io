import React, { useEffect } from 'react';
import { IconX, IconGithub, IconExternalLink, IconCheck, IconCode } from './Icons';
import {
  ShopigoPreview,
  TrafficOpsPreview,
  FinancialCrimePreview,
  ExpenseTrackerPreview
} from './ProjectPreviews';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderPreview = () => {
    switch (project.previewType) {
      case 'ecommerce':
        return <ShopigoPreview />;
      case 'traffic':
        return <TrafficOpsPreview />;
      case 'graph':
        return <FinancialCrimePreview />;
      case 'expense':
        return <ExpenseTrackerPreview />;
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#0c1220] text-slate-100 p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Featured
                </span>
              )}
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Visual Preview Area */}
        <div className="mb-6">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
            Interactive Project Preview
          </span>
          {renderPreview()}
        </div>

        {/* Content sections */}
        <div className="space-y-6 text-sm text-slate-300">
          
          {/* Problem */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1.5">
              The Problem
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution / Engineering Approach */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1.5">
              The Solution &amp; Engineering Approach
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Technologies &amp; Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800 text-sky-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & What I Learned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
                Technical Challenges
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                What I Learned
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.learnings}
              </p>
            </div>
          </div>

        </div>

        {/* Action Links Footer */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-colors shadow-lg shadow-sky-500/20"
              >
                <span>Live Demo</span>
                <IconExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800 text-slate-200 text-xs font-medium transition-colors"
              >
                <IconGithub className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-200 px-3 py-1.5"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

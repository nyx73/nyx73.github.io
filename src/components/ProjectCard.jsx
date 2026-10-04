import React from 'react';
import { IconGithub, IconExternalLink, IconArrowRight } from './Icons';
import {
  ShopigoPreview,
  TrafficOpsPreview,
  FinancialCrimePreview,
  ExpenseTrackerPreview
} from './ProjectPreviews';

export function ProjectCard({ project, onSelectProject }) {
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
    <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-sky-500/40 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-sky-500/5 flex flex-col justify-between">
      
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-medium">
              Featured Project
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
          {project.tagline}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          {project.description}
        </p>

        {/* Visual Preview Container */}
        <div className="mt-5 mb-5 overflow-hidden rounded-xl">
          {renderPreview()}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-5 mt-5 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelectProject(project)}
          type="button"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group/btn"
        >
          <span>View Details</span>
          <IconArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
              title="GitHub Repository"
            >
              <IconGithub className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 hover:bg-sky-500 hover:text-slate-950 transition-all duration-200"
              aria-label={`Live demo for ${project.title}`}
              title="Live Demo"
            >
              <span>Demo</span>
              <IconExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
}

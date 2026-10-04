import React, { useState } from 'react';
import { techStackNodes } from '../data/skills';

export function TechStackVisual() {
  const [activeNode, setActiveNode] = useState(techStackNodes[0]);

  return (
    <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-sm mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
            Interactive Ecosystem
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Technology Interconnections
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Hover or tap any node to inspect its specific purpose across projects.
          </p>
        </div>

        {/* Active Node Detail Card */}
        {activeNode && (
          <div className="sm:max-w-xs p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-sky-500 dark:text-sky-400">{activeNode.label}</span>
              <span className="text-[10px] font-mono uppercase text-slate-400">{activeNode.group}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mt-1 leading-snug">
              {activeNode.role}
            </p>
          </div>
        )}
      </div>

      {/* Visual Interconnection Cluster */}
      <div className="relative py-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {techStackNodes.map((node) => {
          const isSelected = activeNode?.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              onMouseEnter={() => setActiveNode(node)}
              type="button"
              className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 flex items-center gap-2 border ${
                isSelected
                  ? 'bg-sky-500 text-slate-950 font-bold border-sky-400 shadow-md shadow-sky-500/20 scale-105'
                  : 'bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-500/40 hover:text-sky-500 dark:hover:text-sky-400'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-slate-950' : 'bg-sky-500'}`} />
              <span>{node.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

import React from 'react';
import { IconGithub, IconLinkedin, IconLeetCode, IconArrowUp } from './Icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070a10] text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Identity & Tagline */}
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
              Rhythm Chavda
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Computer Engineering Student
            </p>
            <p className="text-xs font-mono text-sky-600 dark:text-sky-400">
              Building. Learning. Shipping.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href="https://github.com/nyx73"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <IconGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rhythmchavda/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <IconLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/rhythmchavda073/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="LeetCode Profile"
              title="LeetCode"
            >
              <IconLeetCode className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span>© 2026 Rhythm Chavda</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-sky-500 hover:border-sky-500/40 transition-all duration-200"
              aria-label="Back to top"
              title="Back to top"
            >
              <IconArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

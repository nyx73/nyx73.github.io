import React from 'react';
import { IconSun, IconMoon } from './Icons';

export function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2 rounded-xl border border-slate-700/50 dark:border-slate-800 bg-slate-200/50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <IconSun className="w-5 h-5 text-amber-400 transition-transform duration-300 transform rotate-0" />
        ) : (
          <IconMoon className="w-5 h-5 text-sky-600 transition-transform duration-300 transform rotate-0" />
        )}
      </div>
    </button>
  );
}

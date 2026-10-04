import React from 'react';
import { IconCheck, IconX } from './Icons';

export function Toast({ toasts, removeToast }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-sky-500/20 bg-slate-900/95 dark:bg-[#0c1220]/95 text-slate-100 shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-0"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-sky-500/20 text-sky-400">
              <IconCheck className="w-3.5 h-3.5" />
            </span>
            <p className="text-sm font-medium">{toast.message}</p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-slate-400 hover:text-slate-200 p-1 transition-colors"
            aria-label="Dismiss toast"
          >
            <IconX className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

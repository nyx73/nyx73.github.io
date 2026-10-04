import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FocusCards } from './components/FocusCards';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GithubSection } from './components/GithubSection';
import { Journey } from './components/Journey';
import { Achievements } from './components/Achievements';
import { Certificates } from './components/Certificates';
import { ProblemSolving } from './components/ProblemSolving';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast dispatcher
  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Brief initial loading sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#080c14] text-white flex flex-col items-center justify-center font-mono">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-bold text-sm">
            RC
          </div>
          <div className="text-sm font-semibold tracking-tight text-slate-200">
            Rhythm Chavda
          </div>
          <div className="flex items-center gap-2 text-xs text-sky-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
            <span>Building...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative bg-grid-pattern selection:bg-sky-500/20 selection:text-sky-300">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Sections */}
      <main id="main-content">
        <Hero onShowToast={showToast} />
        <FocusCards />
        <About />
        <Education />
        <Skills />
        <Projects />
        <GithubSection />
        <Journey />
        <Achievements />
        <Certificates />
        <ProblemSolving />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification Container */}
      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

export default App;

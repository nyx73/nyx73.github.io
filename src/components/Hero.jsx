import React, { useState } from 'react';
import {
  IconGithub,
  IconLinkedin,
  IconLeetCode,
  IconUnstop,
  IconArrowRight,
  IconCopy,
  IconCheck,
  IconTerminal,
  IconCode
} from './Icons';

export function Hero({ onShowToast }) {
  const [activeTab, setActiveTab] = useState('code');
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const developer = {
  name: "Rhythm Chavda",
  focus: [
    "Web Development",
    "Android",
    "AI Systems"
  ],
  status: "Building"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    if (onShowToast) onShowToast("Snippet copied to clipboard ✓");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/80 dark:border-slate-700/80 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>B.Tech Computer Engineering Student</span>
            </div>

            {/* Main Heading & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Rhythm Chavda
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300 leading-snug">
                I build practical software <br className="hidden sm:inline" />
                and turn ideas into working projects.
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              I am a Computer Engineering student focused on building practical software projects and solving real-world problems. I actively participate in hackathons and competitions where I apply my development and problem-solving skills.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/25 group"
              >
                <span>View Projects</span>
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://github.com/nyx73"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all duration-200"
              >
                <IconGithub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 flex items-center gap-4 text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/80 max-w-md">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/nyx73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60 transition-colors"
                  aria-label="GitHub"
                  title="GitHub (nyx73)"
                >
                  <IconGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rhythmchavda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60 transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <IconLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://leetcode.com/u/rhythmchavda073/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60 transition-colors"
                  aria-label="LeetCode"
                  title="LeetCode Profile"
                >
                  <IconLeetCode className="w-4 h-4" />
                </a>
                <a
                  href="https://unstop.com/u/rhythcha7782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60 transition-colors"
                  aria-label="Unstop"
                  title="Unstop Profile"
                >
                  <IconUnstop className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Interactive Floating Code Window */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative card frame with subtle glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/30 to-indigo-500/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              
              <div className="relative rounded-2xl border border-slate-700/60 bg-[#0c1220] shadow-2xl overflow-hidden font-mono">
                {/* Editor Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs text-slate-400 font-sans font-medium">developer.js</span>
                  </div>

                  {/* Tabs & Copy action */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-2 py-1 rounded text-[11px] font-sans transition-colors ${
                        activeTab === 'code' ? 'bg-slate-800 text-sky-400' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <IconCode className="w-3.5 h-3.5 inline mr-1" />
                      Code
                    </button>
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-2 py-1 rounded text-[11px] font-sans transition-colors ${
                        activeTab === 'terminal' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <IconTerminal className="w-3.5 h-3.5 inline mr-1" />
                      Terminal
                    </button>
                    <button
                      onClick={handleCopyCode}
                      className="p-1 rounded text-slate-400 hover:text-white transition-colors ml-1"
                      aria-label="Copy code snippet"
                      title="Copy code"
                    >
                      {copied ? <IconCheck className="w-3.5 h-3.5 text-emerald-400" /> : <IconCopy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Editor Body */}
                <div className="p-5 text-xs sm:text-sm leading-relaxed">
                  {activeTab === 'code' ? (
                    <div className="space-y-1 font-mono">
                      <div className="text-slate-500">// Personal developer object</div>
                      <div>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-300">developer</span>{' '}
                        <span className="text-slate-300">=</span>{' '}
                        <span className="text-slate-300">{'{'}</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-sky-300">name</span>
                        <span className="text-slate-300">: </span>
                        <span className="text-emerald-300">"Rhythm Chavda"</span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-sky-300">focus</span>
                        <span className="text-slate-300">: [</span>
                      </div>
                      <div className="pl-8 text-emerald-300">
                        "Web Development"<span className="text-slate-400">,</span>
                      </div>
                      <div className="pl-8 text-emerald-300">
                        "Android"<span className="text-slate-400">,</span>
                      </div>
                      <div className="pl-8 text-emerald-300">
                        "AI Systems"
                      </div>
                      <div className="pl-4 text-slate-300">
                        ]<span className="text-slate-400">,</span>
                      </div>
                      <div className="pl-4">
                        <span className="text-sky-300">status</span>
                        <span className="text-slate-300">: </span>
                        <span className="text-amber-300">"Building"</span>
                      </div>
                      <div className="text-slate-300">
                        {'};'}
                        <span className="inline-block w-2 h-4 bg-sky-400 ml-1.5 animate-pulse align-middle" />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="text-emerald-400">rhythm@portfolio</span>
                        <span>:</span>
                        <span className="text-sky-400">~</span>
                        <span>$</span>
                        <span className="text-slate-200">whoami</span>
                      </div>
                      <div className="text-slate-400 pl-4 border-l border-slate-700/60">
                        → Rhythm Chavda (Computer Engineering)
                        <br />→ Focus: Web, Android, Applied AI
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 pt-1">
                        <span className="text-emerald-400">rhythm@portfolio</span>
                        <span>:</span>
                        <span className="text-sky-400">~</span>
                        <span>$</span>
                        <span className="text-slate-200">git status</span>
                      </div>
                      <div className="text-emerald-400 pl-4 border-l border-slate-700/60">
                        On branch main. Ready to build and solve problems.
                      </div>
                      <div className="flex items-center gap-1 pt-1">
                        <span className="text-emerald-400">rhythm@portfolio</span>
                        <span>:</span>
                        <span className="text-sky-400">~</span>
                        <span>$</span>
                        <span className="w-2 h-3.5 bg-emerald-400 animate-pulse ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Editor Footer Status Bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 text-[11px] text-slate-400 font-sans">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Ready
                    </span>
                    <span>·</span>
                    <span>UTF-8</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="text-slate-400">JavaScript</span>
                    <span className="text-sky-400">nyx73</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

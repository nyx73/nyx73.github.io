import React from 'react';
import { IconMapPin, IconGraduationCap, IconSparkles, IconCheck } from './Icons';

export function About() {
  const highlights = [
    "Practical project builder with full-stack and mobile implementations",
    "Active hackathon and competitive engineering challenge participant",
    "Awarded in university competitions (DBMS Decathon, Techtraid)",
    "Strong focus on algorithm design, clean architecture, and performance"
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/60 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
            Background &amp; Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            A little about me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate dark:prose-invert max-w-none text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
              <p>
                I am a Computer Engineering student focused on building practical software projects and solving real-world problems. I actively participate in hackathons and competitions where I apply my skills in development and problem-solving.
              </p>
              <p>
                Currently, I am working on projects in Android development, web development, and AI-based systems, and looking for opportunities that value execution and real results.
              </p>
            </div>

            {/* Core Values / What I prioritize */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Key Principles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-md bg-sky-500/10 text-sky-500 dark:text-sky-400 mt-0.5 shrink-0">
                      <IconCheck className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Soft decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-emerald-500/20 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />
              
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0c1220]/90 p-6 sm:p-7 shadow-xl space-y-6">
                
                {/* Header Profile Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-sky-500/20">
                      RC
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        Rhythm Chavda
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        nyx73
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Student
                  </span>
                </div>

                {/* Role Details */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <IconGraduationCap className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>Computer Engineering Student</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <IconMapPin className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Based in India</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <IconSparkles className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Status: Actively Building &amp; Experimenting</span>
                  </div>
                </div>

                {/* Focus Areas List */}
                <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    Currently Focused On
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {["Web Development", "Android Development", "AI Systems", "Problem Solving"].map((focus) => (
                      <div
                        key={focus}
                        className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center justify-between"
                      >
                        <span>{focus}</span>
                        <span className="w-1 h-1 rounded-full bg-sky-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verified Tag */}
                <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 text-center pt-2">
                  // Focused on clean code and practical delivery
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

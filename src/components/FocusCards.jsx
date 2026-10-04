import React from 'react';
import { IconGlobe, IconSmartphone, IconCpu, IconArrowRight } from './Icons';

export function FocusCards() {
  const focusAreas = [
    {
      id: "web-dev",
      title: "Web Development",
      summary: "Building responsive and interactive web applications.",
      details: "Focusing on clean component architecture, accessible UI design, client-side performance, and modern CSS layouts.",
      techs: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
      icon: IconGlobe,
      accentColor: "from-sky-500/20 to-sky-500/5",
      borderColor: "group-hover:border-sky-500/50",
      tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    },
    {
      id: "android-dev",
      title: "Android Development",
      summary: "Developing Android applications using Java and APIs.",
      details: "Building intuitive mobile interfaces in Android Studio, connecting asynchronous REST endpoints, and structuring native app components.",
      techs: ["Java", "Android Studio", "Android SDK", "REST APIs"],
      icon: IconSmartphone,
      accentColor: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "group-hover:border-emerald-500/50",
      tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      id: "ai-systems",
      title: "AI / Intelligent Systems",
      summary: "Exploring practical AI-based systems and data-driven applications.",
      details: "Investigating graph algorithms, network anomaly detection, data modeling with Pandas/NetworkX, and practical intelligence prototypes.",
      techs: ["Python", "NetworkX", "Pandas", "FastAPI"],
      icon: IconCpu,
      accentColor: "from-indigo-500/20 to-indigo-500/5",
      borderColor: "group-hover:border-indigo-500/50",
      tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    }
  ];

  return (
    <section id="focus" className="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
            Current Focus &amp; Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            What am I currently building?
          </h2>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-sky-500/5 ${item.borderColor}`}
              >
                {/* Background soft glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-4">
                  <div>
                    {/* Icon header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </span>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-500 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors flex items-center gap-1">
                        Explore
                        <IconArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Short Summary */}
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                      {item.summary}
                    </p>

                    {/* Expandable Details on hover */}
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                      Core Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techs.map((tech) => (
                        <span
                          key={tech}
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${item.tagColor} transition-all`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

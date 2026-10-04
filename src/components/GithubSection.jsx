import React, { useState, useEffect } from 'react';
import { IconGithub, IconStar, IconGitFork, IconArrowRight, IconExternalLink } from './Icons';

export function GithubSection() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  // Factual fallback repositories if API is rate-limited or offline
  const fallbackRepos = [
    {
      name: "nyx73.github.io",
      description: "Personal developer portfolio and technical project showcase built with modern React and Tailwind CSS.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/nyx73/nyx73.github.io",
      updated_at: "2026-10-04T00:00:00Z"
    },
    {
      name: "Frontend-Battle-2025",
      description: "Shopigo: A modern frontend e-commerce website designed and developed for the Frontend Battle competition.",
      language: "HTML / CSS",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/nyx73/Frontend-Battle-2025",
      updated_at: "2025-11-15T00:00:00Z"
    },
    {
      name: "Traffic-OPS",
      description: "Smart traffic signal management dashboard analyzing simulated lane traffic data and dynamic timing algorithms.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/nyx73",
      updated_at: "2026-02-10T00:00:00Z"
    },
    {
      name: "rift-26",
      description: "Financial crime detection platform analyzing multi-hop transaction networks and detecting fraud ring topologies.",
      language: "Python / React",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/orpheusdark/rift-26",
      updated_at: "2026-03-01T00:00:00Z"
    }
  ];

  useEffect(() => {
    let isMounted = true;
    const fetchRepos = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const res = await fetch('https://api.github.com/users/nyx73/repos?sort=updated&per_page=6', {
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }

        const data = await res.json();
        if (isMounted && Array.isArray(data) && data.length > 0) {
          // Format repos
          const formatted = data.map((r) => ({
            name: r.name,
            description: r.description || "Practical software repository.",
            language: r.language || "Code",
            stargazers_count: r.stargazers_count || 0,
            forks_count: r.forks_count || 0,
            html_url: r.html_url,
            updated_at: r.updated_at
          }));
          setRepos(formatted);
          setLoading(false);
          return;
        }
      } catch (err) {
        // Fallback gracefully on rate limits or offline
      }

      if (isMounted) {
        setRepos(fallbackRepos);
        setUsingFallback(true);
        setLoading(false);
      }
    };

    fetchRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
              Open Source &amp; Code
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
              GitHub Repositories
            </h2>
          </div>

          <a
            href="https://github.com/nyx73"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors group"
          >
            <span>Explore my GitHub</span>
            <IconArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            // Skeleton cards
            [1, 2, 3, 4].map((i) => (
              <div key={i} className="h-40 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 animate-pulse p-5" />
            ))
          ) : (
            repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <IconGithub className="w-3.5 h-3.5" />
                    </span>
                    <IconExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-500 transition-colors" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors truncate">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>{repo.language}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-0.5">
                        <IconStar className="w-3 h-3 text-amber-400" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-0.5">
                        <IconGitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))
          )}
        </div>

      </div>
    </section>
  );
}

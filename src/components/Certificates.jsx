import React from 'react';
import { certificatesData } from '../data/certificates';
import { IconAward, IconExternalLink } from './Icons';

export function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-20 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
            Skill Assessments
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Certifications &amp; Badges
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Standardized technical assessments and course credentials.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-sky-500/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-lg bg-sky-500/10 text-sky-500">
                    <IconAward className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-mono uppercase text-slate-400 dark:text-slate-500">
                    {cert.platform}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {cert.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="text-emerald-500 font-medium">{cert.credentialStatus}</span>
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-500 hover:text-sky-400 font-sans font-semibold"
                  >
                    <span>Verify</span>
                    <IconExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span>Verified</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

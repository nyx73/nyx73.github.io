import React, { useState } from 'react';
import {
  IconGithub,
  IconLinkedin,
  IconUnstop,
  IconLeetCode,
  IconMail,
  IconExternalLink,
  IconCopy,
  IconCheck
} from './Icons';

export function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedLink, setCopiedLink] = useState(null);

  const contactLinks = [
    {
      name: "GitHub",
      handle: "@nyx73",
      url: "https://github.com/nyx73",
      icon: IconGithub,
      accent: "hover:border-slate-400 dark:hover:border-slate-500",
      description: "Explore repositories & code contributions"
    },
    {
      name: "LinkedIn",
      handle: "in/rhythmchavda",
      url: "https://www.linkedin.com/in/rhythmchavda/",
      icon: IconLinkedin,
      accent: "hover:border-sky-500/50",
      description: "Professional network & connection requests"
    },
    {
      name: "Unstop",
      handle: "@rhythcha7782",
      url: "https://unstop.com/u/rhythcha7782",
      icon: IconUnstop,
      accent: "hover:border-blue-500/50",
      description: "Competitions, quizzes & hackathon profiles"
    },
    {
      name: "LeetCode",
      handle: "@rhythmchavda073",
      url: "https://leetcode.com/u/rhythmchavda073/",
      icon: IconLeetCode,
      accent: "hover:border-amber-500/50",
      description: "Algorithmic practice & data structure problems"
    }
  ];

  const handleCopyLink = (url, name) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(name);
    if (onShowToast) onShowToast(`${name} link copied to clipboard ✓`);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      if (onShowToast) onShowToast("Please fill in your name and message.");
      return;
    }

    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Rhythm,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email || 'No email provided'})`
    );

    // Copy message to clipboard for convenience
    const fullDraft = `Subject: ${formData.subject || 'Portfolio Inquiry'}\nFrom: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    navigator.clipboard.writeText(fullDraft);

    if (onShowToast) onShowToast("Draft copied to clipboard ✓ (Connecting to mail client...)");
    
    // Trigger user mail client
    window.location.href = `mailto:?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/60 dark:border-slate-800/80 relative">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-sky-500 dark:text-sky-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
            Let's build something useful.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            I'm interested in software development, hackathons, technical projects, and opportunities where I can learn and contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Profile Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
              Direct Profiles &amp; Networks
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                const isCopied = copiedLink === item.name;
                return (
                  <div
                    key={item.name}
                    className={`p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 transition-all duration-200 ${item.accent} flex items-center justify-between group`}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 flex-1 min-w-0"
                    >
                      <span className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                            {item.name}
                          </span>
                          <IconExternalLink className="w-3 h-3 text-slate-400 group-hover:text-sky-500" />
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block truncate">
                          {item.handle}
                        </span>
                      </div>
                    </a>

                    <button
                      onClick={() => handleCopyLink(item.url, item.name)}
                      type="button"
                      className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                      title={`Copy ${item.name} link`}
                      aria-label={`Copy ${item.name} link`}
                    >
                      {isCopied ? <IconCheck className="w-4 h-4 text-emerald-500" /> : <IconCopy className="w-4 h-4" />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Preparation Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Draft a note or project idea.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-sky-500 dark:text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                  Ready
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project collaboration / Hackathon team"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Rhythm, I came across your portfolio and wanted to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Copies message and opens your email client.
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-colors shadow-lg shadow-sky-500/20 w-full sm:w-auto justify-center"
                  >
                    <IconMail className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

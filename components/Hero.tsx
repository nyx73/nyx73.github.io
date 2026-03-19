"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowDown, ExternalLink } from "lucide-react";

const roles = [
  "Computer Engineering Student",
  "Android Developer",
  "Web Developer",
  "Hackathon Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!deleting && charIndex <= current.length) {
      setDisplayText(current.slice(0, charIndex));
      timeoutRef.current = setTimeout(
        () => setCharIndex((c) => c + 1),
        charIndex === current.length ? 1600 : 60
      );
    } else if (!deleting && charIndex > current.length) {
      setDeleting(true);
    } else if (deleting && charIndex > 0) {
      setDisplayText(current.slice(0, charIndex - 1));
      timeoutRef.current = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [charIndex, deleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Blobs */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full filter blur-3xl opacity-20 animate-blob"
        style={{ backgroundColor: "var(--gradient-1)" }}
      />
      <div
        className="absolute top-1/3 -right-20 w-96 h-96 rounded-full filter blur-3xl opacity-15 animate-blob animation-delay-2000"
        style={{ backgroundColor: "var(--gradient-2)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"
        style={{ backgroundColor: "var(--gradient-3)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8 glass"
          style={{ color: "var(--foreground)" }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#22c55e" }}
          />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-4 leading-none"
          style={{ color: "var(--foreground)" }}
        >
          Rhythm
          <br />
          <span className="gradient-text">Chavda</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl sm:text-2xl font-medium mb-8 h-8 flex items-center justify-center gap-1"
          style={{ color: "var(--foreground)", opacity: 0.7 }}
        >
          <span>{displayText}</span>
          <span
            className="typing-cursor inline-block w-0.5 h-6"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "var(--foreground)", opacity: 0.6 }}
        >
          Building practical software and solving real-world problems through
          code, curiosity, and continuous learning.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 pulse-glow"
            style={{
              background:
                "linear-gradient(135deg, var(--gradient-1), var(--gradient-2))",
              color: "#fff",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ExternalLink
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="group px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 glass"
            style={{ color: "var(--foreground)" }}
          >
            <span className="flex items-center gap-2">
              Get in Touch
            </span>
          </button>

          <a
            href="https://github.com/nyx73"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3.5 rounded-xl transition-all duration-300 hover:scale-110 glass"
            aria-label="GitHub"
          >
            <Github size={18} style={{ color: "var(--foreground)" }} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => scrollTo("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity"
        >
          <span
            className="text-xs tracking-widest"
            style={{ color: "var(--foreground)" }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={14} style={{ color: "var(--foreground)" }} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

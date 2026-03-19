"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Smartphone,
  Car,
  ShoppingBag,
  Shield,
} from "lucide-react";

// ─── Network canvas animation for RIFT-26 ────────────────────────────────────
function NetworkViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    const nodes: Node[] = Array.from({ length: 14 }, () => ({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: Math.random() * 2.5 + 2,
    }));

    let raf = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvasWidth) n.vx *= -1;
        if (n.y < 0 || n.y > canvasHeight) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - dist / 130) * 0.45})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.85)";
        ctx.fill();
        // soft glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6, 182, 212, 0.15)";
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.65 }}
    />
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const featuredProject = {
  icon: Shield,
  title: "RIFT-26",
  subtitle: "Network Security Monitoring System",
  description:
    "Built at RIFT 2026 — one of India's largest hackathons in Pune with 1200+ competing teams. A real-time network intrusion detection and threat visualisation system that maps live traffic flows, flags anomalies, and surfaces actionable security insights through an interactive graph interface.",
  tags: ["Python", "Network Security", "Graph Algorithms", "Real-time Analysis"],
  features: [
    "Live network traffic mapping with node-edge graph",
    "Anomaly & intrusion detection engine",
    "Threat scoring and alert dashboard",
    "Competed among 1200+ teams at RIFT 2026, Pune",
  ],
  github: "https://github.com/nyx73",
  demo: null,
};

const projects = [
  {
    icon: Smartphone,
    title: "Expense Tracker App",
    description:
      "A multi-user expense tracking Android application designed for families. Features budget management with visual tracking, beautiful charts, and powerful filtering.",
    tags: ["Java", "Android", "Firebase", "Charts"],
    color: "var(--gradient-1)",
    features: [
      "Multi-user family accounts",
      "Budget management",
      "Visual charts & analytics",
      "Add / Edit / Delete expenses",
      "Smart filtering",
    ],
    github: "https://github.com/nyx73",
    demo: null,
  },
  {
    icon: Car,
    title: "Smart Traffic Signal System",
    description:
      "An AI-based traffic control system using video input to intelligently manage traffic signals and reduce urban congestion through real-time analysis.",
    tags: ["Python", "AI/ML", "Computer Vision", "OpenCV"],
    color: "var(--gradient-2)",
    features: [
      "Real-time video analysis",
      "AI-driven signal control",
      "Congestion reduction",
      "Adaptive timing",
    ],
    github: "https://github.com/nyx73",
    demo: null,
  },
  {
    icon: ShoppingBag,
    title: "Shopigo E-commerce",
    description:
      "A modern frontend e-commerce UI with product display, cart functionality, and an integrated blog — a clean shopping experience built from scratch.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    color: "var(--gradient-3)",
    features: [
      "Product catalog & display",
      "Shopping cart concept",
      "Blog integration",
      "Fully responsive design",
    ],
    github: "https://github.com/nyx73",
    demo: null,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="relative py-28 px-6 lg:px-8 overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute top-1/3 right-0 w-80 h-80 rounded-full filter blur-3xl opacity-10"
        style={{ backgroundColor: "var(--gradient-1)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-sm font-medium tracking-widest mb-3 uppercase"
            style={{ color: "var(--accent)" }}
          >
            What I&apos;ve built
          </p>
          <h2
            className="section-heading"
            style={{ color: "var(--foreground)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* ── RIFT-26: Featured full-width card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div
            className="relative rounded-2xl overflow-hidden p-px"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,182,212,0.6), rgba(99,102,241,0.4), rgba(139,92,246,0.3))",
              boxShadow:
                "0 0 40px rgba(6, 182, 212, 0.15), 0 0 80px rgba(99, 102, 241, 0.08)",
            }}
          >
            <div
              className="relative rounded-2xl overflow-hidden p-7 sm:p-8"
              style={{ background: "var(--card-bg)" }}
            >
              {/* Network canvas background */}
              <div className="absolute inset-0 overflow-hidden">
                <NetworkViz />
              </div>

              {/* Dark overlay so text stays readable */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,10,15,0.82) 55%, rgba(10,10,15,0.55))",
                }}
              />

              {/* Content */}
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-start">
                {/* Left */}
                <div>
                  {/* Badge + icon row */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(6,182,212,0.15)",
                        border: "1px solid rgba(6,182,212,0.35)",
                      }}
                    >
                      <Shield size={22} style={{ color: "var(--gradient-3)" }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                      style={{
                        background: "rgba(6,182,212,0.15)",
                        color: "var(--gradient-3)",
                        border: "1px solid rgba(6,182,212,0.35)",
                      }}
                    >
                      ✦ Featured Project
                    </span>
                  </div>

                  <h3
                    className="text-3xl font-black mb-1 tracking-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    {featuredProject.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: "var(--gradient-3)", opacity: 0.85 }}
                  >
                    {featuredProject.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--foreground)", opacity: 0.7 }}
                  >
                    {featuredProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{
                          backgroundColor: "rgba(6,182,212,0.12)",
                          color: "var(--gradient-3)",
                          border: "1px solid rgba(6,182,212,0.25)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div>
                  <ul className="space-y-3 mb-7">
                    {featuredProject.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "var(--foreground)", opacity: 0.75 }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "var(--gradient-3)" }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3">
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(6,182,212,0.9), rgba(99,102,241,0.8))",
                        color: "#fff",
                      }}
                    >
                      <Github size={14} />
                      View Code
                    </a>
                    <span
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium opacity-30 glass"
                      style={{ color: "var(--foreground)" }}
                    >
                      <ExternalLink size={14} />
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Other projects grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i + 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative flex flex-col p-6 rounded-2xl glass overflow-hidden h-full"
              style={{ boxShadow: "0 0 0 1px var(--glass-border)" }}
            >
              {/* Gradient accent top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{
                  background: `${project.color}22`,
                  border: `1px solid ${project.color}44`,
                }}
              >
                <project.icon size={22} style={{ color: project.color }} />
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: "var(--foreground)", opacity: 0.6 }}
              >
                {project.description}
              </p>

              {/* Features list */}
              <ul className="mb-5 space-y-1">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "var(--foreground)", opacity: 0.55 }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{
                      backgroundColor: `${project.color}18`,
                      color: project.color,
                      border: `1px solid ${project.color}33`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 glass"
                  style={{ color: "var(--foreground)" }}
                >
                  <Github size={14} />
                  Code
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)`,
                      color: "#fff",
                    }}
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                ) : (
                  <span
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium opacity-30 glass"
                    style={{ color: "var(--foreground)" }}
                  >
                    <ExternalLink size={14} />
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


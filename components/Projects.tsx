"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Smartphone, Car, ShoppingBag } from "lucide-react";

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

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden" ref={ref}>
      <div
        className="absolute top-1/3 right-0 w-80 h-80 rounded-full filter blur-3xl opacity-10"
        style={{ backgroundColor: "var(--gradient-1)" }}
      />

      <div className="max-w-6xl mx-auto">
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
          <h2 className="section-heading" style={{ color: "var(--foreground)" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative flex flex-col p-6 rounded-2xl glass overflow-hidden"
              style={{
                boxShadow: "0 0 0 1px var(--glass-border)",
              }}
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
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
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

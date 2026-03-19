"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    color: "var(--gradient-1)",
    skills: [
      { name: "Java", level: 80 },
      { name: "Python", level: 72 },
      { name: "JavaScript", level: 78 },
    ],
  },
  {
    icon: Smartphone,
    title: "Android Development",
    color: "var(--gradient-2)",
    skills: [
      { name: "Android (Java)", level: 75 },
      { name: "Firebase", level: 68 },
      { name: "Android Studio", level: 80 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    color: "var(--gradient-3)",
    skills: [
      { name: "HTML & CSS", level: 85 },
      { name: "JavaScript", level: 78 },
      { name: "Next.js", level: 60 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    color: "#f59e0b",
    skills: [
      { name: "Git & GitHub", level: 82 },
      { name: "Firebase", level: 68 },
      { name: "REST APIs", level: 72 },
    ],
  },
];

const techTags = [
  "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS",
  "Android Studio", "Firebase", "Git", "GitHub", "REST APIs",
  "Next.js", "React", "Tailwind CSS",
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span
          className="text-sm font-medium"
          style={{ color: "var(--foreground)", opacity: 0.85 }}
        >
          {name}
        </span>
        <span
          className="text-xs font-semibold"
          style={{ color: color }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: "var(--glass-border)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-28 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "var(--glass)" }}
      ref={ref}
    >
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full filter blur-3xl opacity-10"
        style={{ backgroundColor: "var(--gradient-3)" }}
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
            What I work with
          </p>
          <h2
            className="section-heading"
            style={{ color: "var(--foreground)" }}
          >
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className="p-6 rounded-2xl glass card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${cat.color}22`,
                    border: `1px solid ${cat.color}44`,
                  }}
                >
                  <cat.icon size={18} style={{ color: cat.color }} />
                </div>
                <h3
                  className="font-semibold text-base"
                  style={{ color: "var(--foreground)" }}
                >
                  {cat.title}
                </h3>
              </div>
              {cat.skills.map((skill, j) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={0.2 + i * 0.1 + j * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl glass"
        >
          <p
            className="text-sm font-medium mb-4 opacity-50"
            style={{ color: "var(--foreground)" }}
          >
            Technologies & Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04 }}
                whileHover={{ scale: 1.08 }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium glass cursor-default"
                style={{
                  color: "var(--foreground)",
                  opacity: 0.75,
                  border: "1px solid var(--glass-border)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

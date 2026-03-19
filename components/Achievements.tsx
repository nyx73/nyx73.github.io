"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Code2, Users, Zap } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "DBMS Decathlon Certificate",
    description: "Demonstrated strong knowledge in Database Management Systems through competitive examination.",
    color: "#f59e0b",
    year: "2024",
    type: "Certificate",
  },
  {
    icon: BookOpen,
    title: "Operating System Basics",
    description: "Completed comprehensive course covering core concepts of Operating System design and implementation.",
    color: "var(--gradient-1)",
    year: "2024",
    type: "Course",
  },
  {
    icon: Code2,
    title: "Python Course Completion",
    description: "Completed Python programming course covering fundamentals to advanced topics including data structures and algorithms.",
    color: "#22c55e",
    year: "2024",
    type: "Certificate",
  },
  {
    icon: Users,
    title: "TechTriad Participation",
    description: "Participated in TechTriad technical competition, showcasing skills in team-based problem solving.",
    color: "var(--gradient-2)",
    year: "2024",
    type: "Competition",
  },
  {
    icon: Zap,
    title: "RIFT 2026 Hackathon",
    description: "Participated in RIFT 2026 Hackathon in Pune — one of India's largest hackathons with 1200+ competing teams.",
    color: "var(--gradient-3)",
    year: "2026",
    type: "Hackathon",
    highlight: true,
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      className="relative py-28 px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "var(--glass)" }}
      ref={ref}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full filter blur-3xl opacity-10"
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
            Milestones
          </p>
          <h2 className="section-heading" style={{ color: "var(--foreground)" }}>
            <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "var(--glass-border)" }}
          />

          <div className="space-y-6">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-7 w-5 h-5 rounded-full hidden md:flex items-center justify-center -translate-x-1/2 z-10"
                  style={{
                    backgroundColor: "var(--background)",
                    border: `2px solid ${item.color}`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className={`p-5 rounded-2xl glass relative overflow-hidden ${
                    item.highlight
                      ? "ring-1 ring-[var(--gradient-3)]"
                      : ""
                  }`}
                >
                  {item.highlight && (
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                      }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${item.color}22`,
                        border: `1px solid ${item.color}44`,
                      }}
                    >
                      <item.icon size={18} style={{ color: item.color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3
                          className="font-semibold text-base"
                          style={{ color: "var(--foreground)" }}
                        >
                          {item.title}
                        </h3>
                        {item.highlight && (
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-bold"
                            style={{
                              backgroundColor: `${item.color}22`,
                              color: item.color,
                              border: `1px solid ${item.color}44`,
                            }}
                          >
                            ✦ Featured
                          </span>
                        )}
                      </div>
                      <p
                        className="text-sm leading-relaxed mb-2"
                        style={{ color: "var(--foreground)", opacity: 0.6 }}
                      >
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2.5 py-1 rounded-lg text-xs font-medium"
                          style={{
                            backgroundColor: `${item.color}18`,
                            color: item.color,
                          }}
                        >
                          {item.type}
                        </span>
                        <span
                          className="text-xs"
                          style={{ color: "var(--foreground)", opacity: 0.4 }}
                        >
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

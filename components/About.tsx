"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Trophy, Users } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "3+" },
  { icon: Trophy, label: "Hackathons", value: "2+" },
  { icon: Rocket, label: "Technologies", value: "10+" },
  { icon: Users, label: "Teams Led", value: "3+" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-28 px-6 lg:px-8 overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-10 -translate-y-1/2"
        style={{ backgroundColor: "var(--gradient-2)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
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
            Get to know me
          </p>
          <h2
            className="section-heading"
            style={{ color: "var(--foreground)" }}
          >
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--foreground)", opacity: 0.8 }}
            >
              I am a{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Computer Engineering student
              </span>{" "}
              focused on building practical software projects and solving
              real-world problems.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--foreground)", opacity: 0.65 }}
            >
              I actively participate in{" "}
              <span
                className="font-medium"
                style={{ color: "var(--foreground)", opacity: 1 }}
              >
                hackathons and competitions
              </span>{" "}
              where I apply my skills in development and problem-solving.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--foreground)", opacity: 0.65 }}
            >
              Currently, I am working on projects in{" "}
              <span
                className="font-medium"
                style={{ color: "var(--gradient-3)" }}
              >
                Android development
              </span>
              ,{" "}
              <span
                className="font-medium"
                style={{ color: "var(--gradient-1)" }}
              >
                web development
              </span>
              , and{" "}
              <span
                className="font-medium"
                style={{ color: "var(--gradient-2)" }}
              >
                AI-based systems
              </span>
              , and looking for opportunities that value execution and real
              results.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Android Development", "Web Development", "AI Systems", "Hackathons"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm font-medium glass"
                    style={{ color: "var(--foreground)", opacity: 0.8 }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-6 rounded-2xl glass card-hover"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--gradient-1)22, var(--gradient-2)22)",
                    border: "1px solid var(--glass-border)",
                  }}
                >
                  <stat.icon size={18} style={{ color: "var(--accent)" }} />
                </div>
                <p
                  className="text-3xl font-black mb-1 gradient-text"
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--foreground)", opacity: 0.5 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

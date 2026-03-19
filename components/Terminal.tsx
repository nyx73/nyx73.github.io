"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

type Line = { type: "input" | "output" | "system"; text: string };

const RESPONSES: Record<string, string[]> = {
  help: [
    "Available commands:",
    "",
    "  help      → Show all commands",
    "  about     → About Rhythm Chavda",
    "  projects  → List key projects",
    "  skills    → Show skills",
    "  contact   → Show contact links",
    "  clear     → Clear terminal",
    "",
  ],
  about: [
    "> Loading profile: Rhythm Chavda",
    "> Role: Computer Engineering Student",
    "> Focus: Android Dev | Web Dev | AI Systems",
    "",
    "  Building practical software and solving real-world",
    "  problems through code, curiosity, and continuous",
    "  learning. Active in hackathons across India.",
    "",
  ],
  projects: [
    "> Scanning project registry...",
    "",
    "  [FEATURED] RIFT-26",
    "  → Network security system — RIFT 2026, Pune.",
    "    Competed among 1200+ teams.",
    "",
    "  [1] Smart Traffic Signal System",
    "  → AI-powered traffic control using CV & ML.",
    "",
    "  [2] Expense Tracker App",
    "  → Multi-user family finance tracker (Android).",
    "",
    "  [3] Shopigo E-commerce",
    "  → Full frontend e-commerce UI with cart & blog.",
    "",
  ],
  skills: [
    "> Loading skill matrix...",
    "",
    "  Languages   Java · Python · JavaScript · TypeScript",
    "  Android     Android Studio · Firebase · Java SDK",
    "  Web         HTML/CSS · React · Next.js · Tailwind CSS",
    "  Tools       Git · GitHub · REST APIs · Firebase",
    "  Interests   AI/ML · Computer Vision · Cybersecurity",
    "",
  ],
  contact: [
    "> Fetching contact nodes...",
    "",
    "  Email     → rhythmchavda073@gmail.com",
    "  GitHub    → github.com/nyx73",
    "  Location  → Gujarat, India",
    "",
  ],
};

const BOOT_LINES: Line[] = [
  { type: "system", text: "> Initializing system..." },
  { type: "system", text: "> Loading profile: Rhythm Chavda" },
  { type: "system", text: "> Cybersecurity | Systems Thinker" },
  { type: "system", text: "" },
  { type: "system", text: "  Type 'help' to see available commands." },
  { type: "system", text: "" },
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(BOOT_LINES);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const runCommand = useCallback((cmd: string) => {
    const key = cmd.trim().toLowerCase();

    setLines((prev) => [...prev, { type: "input", text: `$ ${cmd.trim()}` }]);

    if (key === "clear") {
      setTimeout(() => setLines([]), 80);
      return;
    }

    if (!key) return;

    const response = RESPONSES[key];
    if (!response) {
      setLines((prev) => [
        ...prev,
        {
          type: "output",
          text: `  bash: ${key}: command not found. Try 'help'.`,
        },
        { type: "output", text: "" },
      ]);
      return;
    }

    setBusy(true);
    let i = 0;
    const timer = setInterval(() => {
      if (i >= response.length) {
        clearInterval(timer);
        setBusy(false);
        return;
      }
      const lineText = response[i];
      setLines((prev) => [...prev, { type: "output", text: lineText }]);
      i++;
    }, 38);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (busy || !input.trim()) return;
    runCommand(input);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="w-full flex flex-col rounded-xl overflow-hidden"
      style={{
        background: "rgba(5, 5, 12, 0.97)",
        border: "1px solid rgba(99, 102, 241, 0.35)",
        boxShadow:
          "0 0 40px rgba(99, 102, 241, 0.12), 0 0 80px rgba(99, 102, 241, 0.05)",
        height: "420px",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 flex-shrink-0"
        style={{
          background: "rgba(12, 12, 20, 0.95)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex gap-1.5">
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#ff5f57" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#febc2e" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#28c840" }}
          />
        </div>
        <span
          className="text-xs"
          style={{
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'Courier New', Courier, monospace",
          }}
        >
          rhythm@portfolio:~
        </span>
        <div style={{ width: 52 }} />
      </div>

      {/* Output area */}
      <div
        className="flex-1 overflow-y-auto px-4 py-3"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "12px",
        }}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="space-y-0.5">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className="whitespace-pre leading-5"
              style={{
                color:
                  line.type === "input"
                    ? "#e2e8f0"
                    : line.type === "system"
                    ? "rgba(99, 102, 241, 0.9)"
                    : "rgba(200, 215, 235, 0.75)",
              }}
            >
              {line.text || "\u00a0"}
            </div>
          ))}
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(12, 12, 20, 0.8)",
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "12px",
        }}
      >
        <span style={{ color: "var(--accent)", userSelect: "none" }}>$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={busy}
          placeholder={busy ? "" : "type a command..."}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="flex-1 bg-transparent outline-none placeholder:opacity-30"
          style={{
            color: "#e2e8f0",
            fontFamily: "inherit",
            fontSize: "inherit",
          }}
        />
        <span
          className="w-2 h-3.5 inline-block typing-cursor flex-shrink-0"
          style={{ background: "var(--accent)" }}
        />
      </form>
    </motion.div>
  );
}

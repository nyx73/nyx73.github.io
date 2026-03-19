"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) => l.href.replace("#", ""));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[9990] transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--glass-border)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="text-xl font-black tracking-tight gradient-text hover:opacity-80 transition-opacity"
          >
            RC<span className="text-xs font-normal ml-0.5 opacity-60">.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative text-sm font-medium transition-colors duration-200"
                  style={{
                    color:
                      active === link.href.replace("#", "")
                        ? "var(--accent)"
                        : "var(--foreground)",
                    opacity:
                      active === link.href.replace("#", "") ? 1 : 0.6,
                  }}
                >
                  {link.label}
                  {active === link.href.replace("#", "") && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: "var(--glass)",
                border: "1px solid var(--glass-border)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={16} style={{ color: "var(--foreground)" }} />
              ) : (
                <Moon size={16} style={{ color: "var(--foreground)" }} />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: "var(--glass)",
                border: "1px solid var(--glass-border)",
              }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
            >
              {menuOpen ? (
                <X size={16} style={{ color: "var(--foreground)" }} />
              ) : (
                <Menu size={16} style={{ color: "var(--foreground)" }} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-0 right-0 z-[9980] md:hidden"
            style={{
              backgroundColor: "var(--nav-bg)",
              backdropFilter: "blur(14px)",
              borderBottom: "1px solid var(--glass-border)",
            }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left text-base font-medium py-2 transition-colors duration-200"
                    style={{
                      color:
                        active === link.href.replace("#", "")
                          ? "var(--accent)"
                          : "var(--foreground)",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

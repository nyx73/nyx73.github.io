"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(total > 0 ? (current / total) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[10000] origin-left"
      style={{
        width: `${progress}%`,
        background:
          "linear-gradient(90deg, var(--gradient-1), var(--gradient-2), var(--gradient-3))",
        transition: "width 0.1s linear",
      }}
    />
  );
}

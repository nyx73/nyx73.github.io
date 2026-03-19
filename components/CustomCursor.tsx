"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let ringX = 0;
    let ringY = 0;
    let curX = 0;
    let curY = 0;
    let animId: number;

    const moveCursor = (e: MouseEvent) => {
      curX = e.clientX;
      curY = e.clientY;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
    };

    const animateRing = () => {
      ringX += (curX - ringX) * 0.12;
      ringY += (curY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animId = requestAnimationFrame(animateRing);
    };

    const onMouseEnterLink = () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      ring.style.width = "52px";
      ring.style.height = "52px";
      ring.style.opacity = "0.9";
    };

    const onMouseLeaveLink = () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "0.6";
    };

    window.addEventListener("mousemove", moveCursor);
    animId = requestAnimationFrame(animateRing);

    const addLinkListeners = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea")
        .forEach((el) => {
          el.addEventListener("mouseenter", onMouseEnterLink);
          el.addEventListener("mouseleave", onMouseLeaveLink);
        });
    };

    addLinkListeners();
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  );
}

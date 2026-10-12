import React, { useEffect, useRef } from 'react';

export function ScrollProgress() {
  const barRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const trackHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = trackHeight > 0
        ? Math.min(1, Math.max(0, window.scrollY / trackHeight))
        : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      if (trackRef.current) trackRef.current.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={trackRef} className="scroll-progress-track" role="progressbar" aria-label="Page reading progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  );
}

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

/**
 * ExpositionSpine - Vertical spine with branches to section titles.
 * Uses wavy, organic animation inspired by Perlin-like flow (layered sine waves).
 * @param {Array<{id: string, title: string}>} sections - Section IDs and titles for branches
 * @param {React.ReactNode} children - Content that contains [data-section-id] elements
 */
const ExpositionSpine = ({ sections = [], children }) => {
  const spineZoneRef = useRef(null);
  const gradientIdRef = useRef(`spine-grad-${Math.random().toString(36).slice(2)}`);
  const gradientId = gradientIdRef.current;
  const contentRef = useRef(null);
  const [branchPositions, setBranchPositions] = useState([]);
  const [spineDimensions, setSpineDimensions] = useState({ width: 100, height: 500 });
  const [spinePath, setSpinePath] = useState("");
  const [branchPaths, setBranchPaths] = useState({});
  const rafRef = useRef(null);

  useLayoutEffect(() => {
    const computePositions = () => {
      if (!spineZoneRef.current || !contentRef.current) return;
      const spineZone = spineZoneRef.current;
      const content = contentRef.current;
      const spineRect = spineZone.getBoundingClientRect();
      const w = Math.max(spineRect.width, 1);
      const h = Math.max(spineRect.height, 1);

      setSpineDimensions({ width: w, height: h });

      const positions = sections
        .map(({ id }) => {
          const el = content.querySelector(`[data-section-id="${id}"]`);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const y = rect.top - spineRect.top + rect.height / 2;
          return { id, y };
        })
        .filter(Boolean);

      setBranchPositions(positions);
    };

    computePositions();
    const raf = requestAnimationFrame(() => computePositions());

    const scrollContainer = contentRef.current?.closest(".project-exposition") || window;
    const resizeObserver = new ResizeObserver(computePositions);
    if (contentRef.current) resizeObserver.observe(contentRef.current);
    if (spineZoneRef.current) resizeObserver.observe(spineZoneRef.current);
    scrollContainer.addEventListener("scroll", computePositions, { passive: true });
    window.addEventListener("resize", computePositions);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      scrollContainer.removeEventListener("scroll", computePositions);
      window.removeEventListener("resize", computePositions);
    };
  }, [sections]);

  const { width: sw, height: sh } = spineDimensions;

  // Wavy animation: layered sine waves for organic, Threads-like movement
  useEffect(() => {
    const amplitude = 3;
    const freq1 = 0.012;
    const freq2 = 0.025;
    const speed1 = 2;
    const speed2 = 2.7;

    const waveY = (y, t) =>
      amplitude * (Math.sin(y * freq1 + t * speed1) * 0.7 + Math.sin(y * freq2 + t * speed2) * 0.3);

    const waveX = (x, t) =>
      amplitude * 0.4 * (Math.sin(x * 0.08 + t * 1.8) * 0.7 + Math.sin(x * 0.12 + t * 2.2) * 0.3);

    const tick = () => {
      const t = performance.now() * 0.001;

      // Spine path: vertical line with horizontal wave
      const steps = Math.max(80, Math.floor(sh / 4));
      const spinePoints = [];
      for (let i = 0; i <= steps; i++) {
        const y = (sh * i) / steps;
        const x = sw / 2 + waveY(y, t);
        spinePoints.push(`${x},${y}`);
      }
      setSpinePath(`M ${spinePoints.join(" L ")}`);

      // Branch paths: first point exactly on spine (guaranteed connection), then wave to the right
      const bp = {};
      branchPositions.forEach(({ id, y }) => {
        const spineX = sw / 2 + waveY(y, t);
        const stepsX = Math.max(50, Math.floor(sw / 2));
        const points = [`${spineX},${y}`]; // Start exactly on spine
        for (let i = 1; i <= stepsX; i++) {
          const x = spineX + (sw - spineX) * (i / stepsX);
          const yy = y + waveX(x - spineX, t + id.charCodeAt(0) * 0.01);
          points.push(`${x},${yy}`);
        }
        bp[id] = `M ${points.join(" L ")}`;
      });
      setBranchPaths(bp);

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sw, sh, branchPositions]);

  return (
    <div className="expo-spine-layout">
      <div className="expo-spine-zone" ref={spineZoneRef}>
        <svg
          className="expo-spine-svg"
          viewBox={`0 0 ${sw} ${sh}`}
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9d6be8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#7732b8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9d6be8" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {spinePath && (
            <path
              d={spinePath}
              className="expo-spine-line"
              fill="none"
              stroke={`url(#${gradientId})`}
              style={{ shapeRendering: "geometricPrecision" }}
            />
          )}
          {branchPositions.map(({ id }) =>
            branchPaths[id] ? (
              <path
                key={id}
                d={branchPaths[id]}
                className="expo-spine-branch"
                fill="none"
                stroke={`url(#${gradientId})`}
                style={{ shapeRendering: "geometricPrecision" }}
              />
            ) : null
          )}
        </svg>
      </div>
      <div className="expo-content-wrapper" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default ExpositionSpine;

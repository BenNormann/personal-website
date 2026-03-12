import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

const SECONDARY_LINE_COUNT = 6;
const MOUSE_SMOOTHING = 0.06;
/** Top curl: spine curves left off-screen to avoid nav bar, in viewBox units */
const TOP_CURL_HEIGHT = 70;
const TOP_CURL_EXTENT = 80;

/**
 * ExpositionSpine - Vertical spine with branches to section titles.
 * Uses wavy, organic animation inspired by Perlin-like flow (layered sine waves).
 * Multiple secondary lines to the left; mouse and scroll affect amplitude/time.
 * @param {Array<{id: string, title: string}>} sections - Section IDs and titles for branches
 * @param {React.ReactNode} children - Content that contains [data-section-id] elements
 */
const ExpositionSpine = ({ sections = [], children }) => {
  const spineZoneRef = useRef(null);
  const contentRef = useRef(null);
  const [branchPositions, setBranchPositions] = useState([]);
  const [spineDimensions, setSpineDimensions] = useState({ width: 100, height: 500 });
  const [spinePath, setSpinePath] = useState("");
  const [secondaryPaths, setSecondaryPaths] = useState([]);
  const [branchPaths, setBranchPaths] = useState({});
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const scrollRef = useRef(0);

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

  // Mouse and scroll interaction
  useEffect(() => {
    const zone = spineZoneRef.current;
    const content = contentRef.current;
    if (!zone || !content) return;

    const handleMouseMove = (e) => {
      const rect = zone.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      mouseRef.current.targetX = Math.max(0, Math.min(1, x));
      mouseRef.current.targetY = Math.max(0, Math.min(1, y));
    };
    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0.5;
      mouseRef.current.targetY = 0.5;
    };

    const updateScroll = () => {
      const exposition = content?.closest(".project-exposition");
      if (exposition && exposition !== document.body) {
        const { scrollTop, scrollHeight, clientHeight } = exposition;
        const maxScroll = scrollHeight - clientHeight;
        scrollRef.current = maxScroll > 0 ? scrollTop / maxScroll : 0;
      } else {
        const { scrollY, innerHeight } = window;
        const docHeight = document.documentElement.scrollHeight;
        const maxScroll = docHeight - innerHeight;
        scrollRef.current = maxScroll > 0 ? scrollY / maxScroll : 0;
      }
    };

    zone.addEventListener("mousemove", handleMouseMove);
    zone.addEventListener("mouseleave", handleMouseLeave);
    const scrollContainer = content?.closest(".project-exposition") || window;
    scrollContainer.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    return () => {
      zone.removeEventListener("mousemove", handleMouseMove);
      zone.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const { width: sw, height: sh } = spineDimensions;

  // Wavy animation: layered sine waves for organic, Threads-like movement
  useEffect(() => {
    const baseAmplitude = 3;
    const freq1 = 0.012;
    const freq2 = 0.025;
    const speed1 = 2;
    const speed2 = 2.7;

    const waveY = (y, t, amp = 1) =>
      baseAmplitude * amp * (Math.sin(y * freq1 + t * speed1) * 0.7 + Math.sin(y * freq2 + t * speed2) * 0.3);

    const waveX = (x, t) =>
      baseAmplitude * 0.4 * (Math.sin(x * 0.08 + t * 1.8) * 0.7 + Math.sin(x * 0.12 + t * 2.2) * 0.3);

    const tick = () => {
      const t = performance.now() * 0.001;
      const m = mouseRef.current;
      const s = scrollRef.current;

      m.x += MOUSE_SMOOTHING * (m.targetX - m.x);
      m.y += MOUSE_SMOOTHING * (m.targetY - m.y);

      const mouseAmplitude = 1 + (m.y - 0.5) * 0.4;
      const timeShift = (m.x - 0.5) * 0.8;
      const scrollAmplitude = 1 + s * 0.15;
      const effAmplitude = mouseAmplitude * scrollAmplitude;
      const effTime = t + timeShift;

      // Spine path: smooth quadratic curve from vertical (at spine) to left off-screen, then vertical wave
      const steps = Math.max(80, Math.floor(sh / 4));
      const spineX0 = sw / 2 + waveY(0, effTime, effAmplitude);
      const curlStartX = spineX0 - TOP_CURL_EXTENT;
      const curlStartY = -TOP_CURL_HEIGHT;
      const ctrlX = spineX0;
      const ctrlY = -TOP_CURL_HEIGHT;

      const spinePoints = [];
      for (let i = 0; i <= steps; i++) {
        const y = (sh * i) / steps;
        const x = sw / 2 + waveY(y, effTime, effAmplitude);
        spinePoints.push(`${x},${y}`);
      }
      setSpinePath(`M ${curlStartX},${curlStartY} Q ${ctrlX},${ctrlY} ${spineX0},0 L ${spinePoints.join(" L ")}`);

      // Secondary lines to the left: same smooth Q curve as main spine, then varying phase/amplitude
      const secondary = [];
      const spacing = (sw / 2 - 8) / SECONDARY_LINE_COUNT;
      for (let i = 0; i < SECONDARY_LINE_COUNT; i++) {
        const p = (i + 1) / (SECONDARY_LINE_COUNT + 1);
        const offset = spacing * (i + 1);
        const phase = Math.PI * 0.8 * p;
        const lineAmp = 0.35 + 0.4 * (1 - p);
        const lineX0 = sw / 2 - offset + waveY(0, effTime + phase, lineAmp * effAmplitude);
        const secCurlStartX = lineX0 - TOP_CURL_EXTENT;
        const secCurlStartY = -TOP_CURL_HEIGHT;
        const secCtrlX = lineX0;
        const secCtrlY = -TOP_CURL_HEIGHT;
        const secPts = [];
        for (let j = 1; j <= steps; j++) {
          const y = (sh * j) / steps;
          const x = sw / 2 - offset + waveY(y, effTime + phase, lineAmp * effAmplitude);
          secPts.push(`${x},${y}`);
        }
        secondary.push(`M ${secCurlStartX},${secCurlStartY} Q ${secCtrlX},${secCtrlY} ${lineX0},0 L ${secPts.join(" L ")}`);
      }
      setSecondaryPaths(secondary);

      // Branch paths: first point exactly on spine (guaranteed connection), then wave to the right
      const bp = {};
      branchPositions.forEach(({ id, y }) => {
        const spineX = sw / 2 + waveY(y, effTime, effAmplitude);
        const stepsX = Math.max(50, Math.floor(sw / 2));
        const points = [`${spineX},${y}`]; // Start exactly on spine
        for (let i = 1; i <= stepsX; i++) {
          const x = spineX + (sw - spineX) * (i / stepsX);
          const yy = y + waveX(x - spineX, effTime + id.charCodeAt(0) * 0.01);
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
          {secondaryPaths.map((d, i) => (
            <path
              key={`secondary-${i}`}
              d={d}
              className="expo-spine-secondary"
              fill="none"
              stroke="#7732b8"
              style={{
                shapeRendering: "geometricPrecision",
                opacity: 0.25 + 0.35 * (1 - i / SECONDARY_LINE_COUNT),
                strokeWidth: 1.2 * (1 - i / (SECONDARY_LINE_COUNT * 1.5)),
              }}
            />
          ))}
          {spinePath && (
            <path
              d={spinePath}
              className="expo-spine-line"
              fill="none"
              stroke="#7732b8"
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
                stroke="#7732b8"
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

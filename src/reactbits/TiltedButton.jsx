import { useRef, useState } from "react";
import "./TiltedButton.css";

/**
 * TiltedButton — a pill-shaped button that shares the TiltedCard interaction
 * model: 3D perspective tilt, cursor-tracking radial glow overlay, border glow,
 * and label zoom on hover.
 *
 * Props:
 *   href            — renders an <a> tag when provided, otherwise <button>
 *   children        — button label
 *   rotateAmplitude — max tilt in degrees (default 6)
 *   scaleOnHover    — scale factor applied on hover (default 1.04)
 *   className       — extra classes on the outer wrapper
 */
export default function TiltedButton({
  href,
  onClick,
  children,
  rotateAmplitude = 12,
  scaleOnHover = 1.04,
  className = "",
  role,
  ...props
}) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e) {
    if (!wrapRef.current || !innerRef.current) return;

    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;   // 0..1
    const py = (e.clientY - rect.top) / rect.height;   // 0..1

    const rotY = (px - 0.5) * 2 * rotateAmplitude;
    const rotX = (py - 0.5) * -2 * rotateAmplitude;

    innerRef.current.style.transform =
      `perspective(600px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale(${scaleOnHover})`;

    // Pass cursor position to CSS for the radial glow overlay
    innerRef.current.style.setProperty("--tb-x", `${(px * 100).toFixed(2)}%`);
    innerRef.current.style.setProperty("--tb-y", `${(py * 100).toFixed(2)}%`);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    if (!innerRef.current) return;
    innerRef.current.style.transform =
      `perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)`;
  }

  const Tag = href ? "a" : "button";

  return (
    <span
      ref={wrapRef}
      className={`tb-wrap ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Tag
        ref={innerRef}
        href={href}
        onClick={onClick}
        role={role}
        className={`tb-inner ${isHovered ? "is-hovered" : ""}`}
        {...props}
      >
        <span className="tb-label">{children}</span>
        <span className="tb-overlay" />
      </Tag>
    </span>
  );
}

import { useMemo, useRef, useState } from "react";
import "./TiltedCard.css";

/**
 * Dependency-free TiltedCard inspired by React Bits.
 * - No `motion/react` required
 * - Supports either `children` (wrapper mode) OR `imageSrc` (image mode)
 */
export default function TiltedCard({
  children,
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "auto",
  containerWidth = "100%",
  imageHeight = "100%",
  imageWidth = "100%",
  scaleOnHover = 1.03,
  rotateAmplitude = 10,
  showMobileWarning = false,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = true,
}) {
  const figureRef = useRef(null);
  const innerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const hasChildren = useMemo(() => children !== undefined && children !== null, [children]);

  function handleMouseMove(e) {
    if (!figureRef.current || !innerRef.current) return;

    const rect = figureRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    const rotY = (px - 0.5) * 2 * rotateAmplitude;
    const rotX = (py - 0.5) * -2 * rotateAmplitude;

    innerRef.current.style.transform = `perspective(900px) rotateX(${rotX.toFixed(
      2
    )}deg) rotateY(${rotY.toFixed(2)}deg) scale(${scaleOnHover})`;

    innerRef.current.style.setProperty("--tc-x", `${(px * 100).toFixed(2)}%`);
    innerRef.current.style.setProperty("--tc-y", `${(py * 100).toFixed(2)}%`);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    if (!innerRef.current) return;
    innerRef.current.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
  }

  return (
    <figure
      ref={figureRef}
      className="tilted-card-figure"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <div ref={innerRef} className={`tilted-card-inner ${isHovered ? "is-hovered" : ""}`}>
        {hasChildren ? (
          children
        ) : (
          <img
            src={imageSrc}
            alt={altText}
            className="tilted-card-img"
            style={{ width: imageWidth, height: imageHeight }}
          />
        )}

        {displayOverlayContent && (overlayContent || true) && (
          <div className="tilted-card-overlay">{overlayContent}</div>
        )}
      </div>

      {showTooltip && captionText ? (
        <figcaption className="tilted-card-caption">{captionText}</figcaption>
      ) : null}
    </figure>
  );
}

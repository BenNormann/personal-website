import { useEffect, useMemo, useRef, useState } from "react";
import "./ScrollReveal.css";

/**
 * Dependency-free ScrollReveal.
 * - If `children` is a string, we split into `.word` spans for a “word reveal” vibe.
 * - Otherwise we behave like a normal wrapper that fades/slides in on intersection.
 */
export default function ScrollReveal({
  children,
  containerClassName = "",
  textClassName = "",
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const isText = useMemo(() => typeof children === "string", [children]);

  const splitText = useMemo(() => {
    if (!isText) return null;
    return children.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children, isText]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  if (isText) {
    return (
      <div
        ref={ref}
        className={`rb-reveal ${isVisible ? "is-visible" : ""} scroll-reveal ${containerClassName}`.trim()}
      >
        <p className={`scroll-reveal-text ${textClassName}`.trim()}>{splitText}</p>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`rb-reveal ${isVisible ? "is-visible" : ""} ${containerClassName}`.trim()}
    >
      {children}
    </div>
  );
}

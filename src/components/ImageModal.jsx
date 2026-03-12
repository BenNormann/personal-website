import React, { useEffect } from "react";

/**
 * ImageModal - Full-screen overlay to view an enlarged image.
 * @param {string} src - Image source to display
 * @param {function} onClose - Callback when modal is closed
 */
const ImageModal = ({ src, onClose }) => {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="image-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        cursor: "pointer",
      }}
    >
      <div
        className="image-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh", cursor: "default" }}
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "rgba(0,0,0,0.7)",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            padding: "8px 12px",
            borderRadius: "50%",
            zIndex: 10000,
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>
        <img
          src={src}
          alt="Enlarged"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "5px" }}
        />
      </div>
    </div>
  );
};

export default ImageModal;

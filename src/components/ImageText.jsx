import React from "react";

/**
 * ImageText - Blog-style block with image and blurb, alternating left/right.
 * @param {string} image - Image src (URL or imported asset)
 * @param {string} alt - Alt text for the image
 * @param {React.ReactNode} children - Blurb/content (text, JSX)
 * @param {boolean} imageOnLeft - If true, image left / text right; if false, text left / image right (default)
 * @param {function} onImageClick - Optional callback when image is clicked (for modal)
 */
const ImageText = ({ image, alt, children, imageOnLeft = false, onImageClick }) => {
  const handleMediaClick = () => {
    if (onImageClick && typeof onImageClick === "function") {
      onImageClick(image);
    }
  };

  const mediaEl = (
    <div
      className="image-text-media"
      onClick={onImageClick ? handleMediaClick : undefined}
      role={onImageClick ? "button" : undefined}
      tabIndex={onImageClick ? 0 : undefined}
      onKeyDown={onImageClick ? (e) => e.key === "Enter" && handleMediaClick() : undefined}
    >
      <img src={image} alt={alt} className="img-fluid" />
    </div>
  );

  const contentEl = <div className="image-text-content">{children}</div>;

  return (
    <article className={`image-text-block ${!imageOnLeft ? "image-text-inverse" : ""} ${onImageClick ? "image-text-clickable" : ""}`}>
      {mediaEl}
      {contentEl}
    </article>
  );
};

export default ImageText;

import React from "react";
import { Link } from "react-router-dom";

/**
 * ExpositionCard - Shared card for Beyond the Code and Portfolio sections.
 * @param {string} title - Card title
 * @param {string} category - Category label
 * @param {string} img - Image src
 * @param {string} alt - Alt text for image
 * @param {string} to - Internal route (use with Link)
 * @param {string} href - External URL (use with <a>)
 * @param {boolean} imageCoversCard - If true, image fills entire card as background; if false, image in top section
 * @param {object} imgStyle - Optional inline styles for image (when imageCoversCard is false)
 * @param {string} description - Optional description text (for Portfolio)
 */
const ExpositionCard = ({
  title,
  category,
  img,
  alt,
  to,
  href,
  imageCoversCard = false,
  imgStyle,
  description,
}) => {
  const defaultImgStyle = imageCoversCard
    ? { objectFit: "cover", height: "100%", width: "100%" }
    : { objectFit: "cover", height: "350px", width: "100%" };

  const finalImgStyle = imageCoversCard ? defaultImgStyle : imgStyle || defaultImgStyle;

  const imageEl = (
    <div className="work-img">
      <img src={img} alt={alt} className="img-fluid" style={finalImgStyle} />
    </div>
  );

  const contentEl = (
    <div className="work-content" style={{ flex: "1 0 auto" }}>
      <div className="row">
        <div className="col-sm-12">
          <h2 className="w-title">{title}</h2>
          <div className="w-more">
            <span className="w-ctegory">{category}</span>
            {description && <p className="mt-2">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  const inner = (
    <>
      {imageEl}
      {contentEl}
    </>
  );

  const wrapperClass = `work-box w-100 h-100 ${imageCoversCard ? "work-box-cover" : ""}`;

  if (href) {
    return (
      <div className={wrapperClass} style={{ display: "flex", flexDirection: "column" }}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="work-box-link"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div className={wrapperClass} style={{ display: "flex", flexDirection: "column" }}>
      <Link to={to} className="work-box-link" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {inner}
      </Link>
    </div>
  );
};

export default ExpositionCard;

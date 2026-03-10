import React from "react";
import "./FlowingMenu.css";

function FlowingMenu({ items = [] }) {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => <MenuItem key={idx} {...item} />)}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }) {
  const itemRef = React.useRef(null);

  const handleMouseEnter = () => {
    itemRef.current?.classList.add("is-hovered");
  };

  const handleMouseLeave = () => {
    itemRef.current?.classList.remove("is-hovered");
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span>{text}</span>
      <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
    </React.Fragment>
  ));

  return (
    <div className="menu__item" ref={itemRef}>
      <a
        className="menu__item-link js-scroll"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__inner-wrap">
          <div className="marquee__inner">{repeatedMarqueeContent}</div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;

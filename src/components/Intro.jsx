import React from "react";
import "./stars.scss";
import { ReactTyped } from "react-typed";

const Intro = () => {
  return (
    // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
    <div id="home" className="intro route bg-image background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">Ben Normann</h1>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <ReactTyped
                  strings={[
                    "Software Engineer",
                    "Web Developer",
                    "Computer Science Student",
                    "Economics Student"
                  ]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <p className="pt-3">
              <a
                className="btn btn-primary btn js-scroll px-4"
                href="#work"
                role="button"
              >
                My Portfolio
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

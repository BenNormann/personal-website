import React from "react";
import "./stars.scss";
import { ReactTyped } from "react-typed";
import GradientText from "../reactbits/GradientText";
import ClickSpark from "../reactbits/ClickSpark";

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
            <h1 className="intro-title mb-4">
              <GradientText as="span">Ben Normann</GradientText>
            </h1>
            <p className="intro-subtitle">
              <strong className="text-slider">
                <ReactTyped
                  strings={[
                    "MSCS Student",
                    "Software Engineer",
                    "Web Developer",
                    "Economics Graduate"
                  ]}
                  typeSpeed={70}
                  backDelay={1400}
                  backSpeed={40}
                  loop
                />
              </strong>
            </p>
            <p className="pt-3">
              <ClickSpark>
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                  style={{ marginTop: "20px" }}
                >
                  My Portfolio
                </a>
              </ClickSpark>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

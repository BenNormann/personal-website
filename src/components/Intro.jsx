import React from "react";
import { ReactTyped } from "react-typed";
import GradientText from "../reactbits/GradientText";
import ClickSpark from "../reactbits/ClickSpark";
import TiltedButton from "../reactbits/TiltedButton";

const Intro = () => {
  return (
    <div id="home" className="intro route">
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
            <p className="pt-3" style={{ marginTop: "20px" }}>
              <ClickSpark>
                <TiltedButton href="#work" className="js-scroll">
                  My Portfolio &nbsp;→
                </TiltedButton>
              </ClickSpark>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

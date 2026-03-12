import React from "react";
import { ReactTyped } from "react-typed";
import ClickSpark from "../reactbits/ClickSpark";
import TiltedButton from "../reactbits/TiltedButton";

const scrollToWork = (e) => {
  e.preventDefault();
  const target = document.querySelector("#work");
  if (target) {
    const nav = document.querySelector("#mainNav");
    const navHeight = nav?.clientHeight ?? 72;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - navHeight + 5;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

const Intro = () => {
  return (
    <div id="home" className="intro route">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">
              <span style={{ color: "var(--accent-bright)" }}>Ben Normann</span>
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
            <div className="pt-3" style={{ marginTop: "20px" }}>
              <ClickSpark>
                <TiltedButton href="#work" onClick={scrollToWork}>
                  My Portfolio &nbsp;→
                </TiltedButton>
              </ClickSpark>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

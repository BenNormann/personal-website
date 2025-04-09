import React, { useState } from "react";

const About = () => {
  const [skills] = useState([
    { id: "JavaScript_skill", content: "JavaScript", porcentage: "90%", value: "90" },
    { id: "Python_skill", content: "Python", porcentage: "85%", value: "85" },
    { id: "ReactJS_skill", content: "React", porcentage: "85%", value: "85" },
    { id: "CPP_skill", content: "C++", porcentage: "80%", value: "80" },
    { id: "Java_skill", content: "Java", porcentage: "80%", value: "80" },
    { id: "Git_skill", content: "Git", porcentage: "85%", value: "85" },
    { id: "Figma_skill", content: "Figma", porcentage: "80%", value: "80" },
    { id: "DataAnalysis_skill", content: "Data Analysis", porcentage: "85%", value: "85" }
  ]);
  
  const [aboutMe] = useState([
    {
      id: "first-p-about",
      content:
        "With a passion for software development and programming, I am excited to apply for software engineering internship opportunities. With strong skills in web application development in JavaScript, I am eager to bring my technical abilities, curiosity, growth mindset, and work ethic to a collaborative and innovative team."
    },
    {
      id: "second-p-about",
      content:
        "Currently, I'm pursuing an International BA in Economics with a Minor in Computer Science at the University of St. Andrews and William & Mary Joint Degree Program. I've also been accepted to the Master of Science in Computer Science program at the University of Southern California, which I'll begin in Fall 2025."
    },
    {
      id: "third-p-about",
      content:
        "Beyond academics, I'm an Eagle Scout with a passion for travel, vintage auto restorations, music composition, and outdoor activities like tennis, hiking, skiing, and boating. I bring leadership, teamwork, adaptability, and problem-solving skills to every project I undertake."
    }
  ]);

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div
                      className="col-sm-6 col-md-5"
                      style={{ margin: "0 auto" }}
                    >
                      <div
                        className="about-img"
                        style={{ textAlign: "center" }}
                      >
                        <img
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    {/* <p className="title-s">Skill</p> */}
                    {skills.map(skill => (
                      <React.Fragment key={skill.id}>
                        <span>{skill.content}</span>{" "}
                        <span className="pull-right">
                          {skill.porcentage}
                        </span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: skill.porcentage }}
                            aria-valuenow={skill.value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {aboutMe.map(content => (
                      <p className="lead" key={content.id}>
                        {content.content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

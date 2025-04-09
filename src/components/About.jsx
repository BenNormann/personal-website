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
        "I'm a software developer with a passion for building clean, efficient web applications and solving real-world problems through code. I specialize in JavaScript and React, and I enjoy working on projects that challenge me to think creatively and collaborate closely with others. I’m particularly drawn to roles where curiosity, technical growth, and a strong work ethic are valued."
    },
    {
      id: "second-p-about",
      content:
        "Right now, I'm completing an International BA in Economics with a Minor in Computer Science through the University of St. Andrews and William & Mary Joint Degree Programme. In Fall 2025, I’ll be starting my Master’s in Computer Science at the University of Southern California."
    },
    {
      id: "third-p-about",
      content:
        "Outside of tech, I’m an Eagle Scout and a lifelong explorer - whether it’s through travel, restoring vintage cars, composing music, or getting outside for tennis, skiing, hiking, or boating. I bring leadership, adaptability, and a hands-on, solution-oriented mindset to everything I do."
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

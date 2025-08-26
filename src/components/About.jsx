import React, { useState } from "react";
import benImage from '../assets/ben-temp.jpg';

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
        "I'm a software developer with a passion for building clean, efficient web applications and solving real-world problems through code. I specialize in JavaScript, React, Python, and C++. I enjoy working on projects that challenge me to think creatively and collaborate closely with others. I'm particularly drawn to roles where curiosity, technical growth, and a strong work ethic are valued."
    },
    {
      id: "second-p-about",
      content:
        "I'll have just started my Master's in Computer Science at the University of Southern California after completing an International BA in Economics with a Minor in Computer Science through the University of St. Andrews and William & Mary Joint Degree Programme."
    },
    {
      id: "third-p-about",
      content:
        "Outside of tech, I’m an Eagle Scout, a creative builder, and a lifelong explorer — whether that’s restoring vintage cars, composing music, traveling, or getting outside for tennis, skiing, hiking, or boating. I bring leadership, adaptability, and a hands-on, solution-oriented mindset to everything I do."
    }
  ]);

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="title-box-2">
                <h5 className="title-left">About Me</h5>
              </div>
              <div className="row">
              
              <div className="col-md-6">
                  <div className="row h-100">
                    <div>
                      <div className="pt-4 pt-md-0">
                        <img
                          className="img-fluid b-shadow-a"
                          alt="ben"
                          src={benImage}
                          style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />
                      </div>
                      <div className="about-me testimonial mt-4 p-3" style={{ backgroundColor: "#f8f9fa", borderRadius: "5px" }}>
                        <p>
                          "Ben's technical aptitude is complemented by a methodical approach to problem-solving and a strong intellectual curiosity. He is never afraid to ask thoughtful questions, and his ability to quickly grasp new concepts and technologies made him an invaluable contributor during his internship."
                        </p>
                        <p >- Carl Tydingco (Co-Founder/CTO xDJs)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
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

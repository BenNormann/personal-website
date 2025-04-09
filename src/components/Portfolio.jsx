import React from "react";

//import images
import musicNerd from "../assets/musicNerdLogo.png";
import ifPredictor from "../assets/ifPredictor.png";
import commRECrawler from "../assets/CommRECrawler.png";
import valentine from "../assets/Valentine.png";

const Portfolio = () => {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Check out some of my recent projects and work experience
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="col-md-4 d-flex">
            <div className="work-box w-100" style={{ display: "flex", flexDirection: "column" }}>
              <a href="https://www.musicnerd.xyz/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="work-img">
                  <img src={musicNerd} alt="MusicNerd App" className="img-fluid" style={{ objectFit: "cover", height: "350px", width: "100%" }} />
                </div>
                <div className="work-content" style={{ flex: "1 0 auto" }}>
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">MusicNerd (xDJs)</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          React, APIs, UI/UX, Figma
                        </span>
                        <p className="mt-2">
                          As a Software Development Intern at xDJs, I contributed to MusicNerd, a React-based web app that interfaces with music data APIs. I led the implementation of an abstraction layer between frontend and backend services and redesigned the UI/UX in Figma.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="work-box w-100" style={{ display: "flex", flexDirection: "column" }}>
              <a href="https://github.com/BenNormann/if-predictor-CodeT5" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="work-img">
                  <img src={ifPredictor} alt="If-Statement Condition Predictor" className="img-fluid" style={{ objectFit: "cover", height: "350px", width: "100%" }} />
                </div>
                <div className="work-content" style={{ flex: "1 0 auto" }}>
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">If-Statement Condition Predictor</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Python, PyTorch, Transformers, NLP
                        </span>
                        <p className="mt-2">
                          I developed a predictor that utilizes a fine-tuned CodeT5 model to predict missing conditions in Python if statements. The implementation leverages Python 3.9+, PyTorch, Transformers, and scikit-learn for data processing, model training, and evaluation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="work-box w-100" style={{ display: "flex", flexDirection: "column" }}>
              <a href="https://github.com/BenNormann/commercial-realestate-crawler-v3" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="work-img">
                  <img src={commRECrawler} alt="Commercial Real Estate Crawler" className="img-fluid" style={{ objectFit: "cover", height: "350px", width: "100%" }} />
                </div>
                <div className="work-content" style={{ flex: "1 0 auto" }}>
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">Commercial Real Estate Crawler</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Python, JavaScript, Web Scraping
                        </span>
                        <p className="mt-2">
                          A crawler that automatically searches real estate websites for new property listings and delivers them via email. It scrapes data from sites like CommercialMLS and LoopNet, filters results based on configurable criteria, and is scheduled via cron jobs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="work-box w-100" style={{ display: "flex", flexDirection: "column" }}>
              <a href="https://github.com/BenNormann/valentines-website-template" target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="work-img">
                  <img src={valentine} alt="Valentine's Day Card Web App" className="img-fluid" style={{ objectFit: "cover", height: "350px", width: "100%" }} />
                </div>
                <div className="work-content" style={{ flex: "1 0 auto" }}>
                  <div className="row">
                    <div className="col-sm-12">
                      <h2 className="w-title">Valentine's Day Card App</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Next.js, Tailwind CSS, React
                        </span>
                        <p className="mt-2">
                          A web application that allows users to create personalized digital Valentine's Day cards. Built with Next.js and styled using Tailwind CSS, it features customizable recipient names, messages, and images with a secure login system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

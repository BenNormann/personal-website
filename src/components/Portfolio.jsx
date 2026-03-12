import React from "react";
import HoverTilt from "../reactbits/HoverTilt";
import ScrollReveal from "../reactbits/ScrollReveal";
import ExpositionCard from "./ExpositionCard";

import musicNerd from "../assets/musicNerdLogo.ico";
import ifPredictor from "../assets/ifPredictor.png";
import commRECrawler from "../assets/CommRECrawler.png";
import valentine from "../assets/Valentine.png";
import luxxle from "../assets/LuxxleLogoHD.png";
import killtone from "../assets/KilltoneLogo.png";
import moneoLogo from "../assets/moneoLogo.png";

const projects = [
  {
    id: "moneo",
    to: "/moneo",
    img: moneoLogo,
    alt: "Moneo AI Fact-Checking Extension",
    imgStyle: { objectFit: "contain", height: "350px", width: "100%", padding: "60px" },
    title: "Moneo - AI Fact-Checking Extension",
    category: "JavaScript, Chrome Extension, OpenAI GPT-4",
    description:
      "An ambitious 24-hour hackathon project that creates an AI-powered fact-checking browser extension. Moneo automatically analyzes news articles, extracts factual claims, and scores them for credibility using multi-dimensional verification across AI analysis, academic sources, and cross-spectrum web validation.",
  },
  {
    id: "luxxle",
    to: "/luxxle",
    img: luxxle,
    alt: "Luxxle Web Explorer/Browser",
    imgStyle: { objectFit: "cover", height: "350px", width: "100%" },
    title: "Luxxle Search Engine/Browser",
    category: "C++, HTML, CSS",
    description:
      "As a Founding Team Engineer at Luxxle, I contributed towards the first steps of building their browser. I forked chromium, adopting similar patching/extension architecture to Brave and have created the alpha version of the browser. This privacy-focused browser provides enhanced security and user control.",
  },
  {
    id: "killtone",
    to: "/killtone",
    img: killtone,
    alt: "KT Logo",
    imgStyle: { objectFit: "cover", height: "350px", width: "100%" },
    title: "FPS Exercise",
    category: "JavaScript, Babylon JS",
    description:
      "FPS Exercise is a 3D multiplayer game built with Babylon JS. It is a simple game where players can move around and shoot at each other over a LAN connection. I and another friend are developing this game as a side project.",
  },
  {
    id: "musicnerd",
    href: "https://www.musicnerd.xyz/",
    img: musicNerd,
    alt: "MusicNerd App",
    imgStyle: { objectFit: "contain", height: "280px", width: "100%", margin: "0 auto", display: "block", padding: "35px 0" },
    title: "MusicNerd (xDJs)",
    category: "React, APIs, UI/UX, Figma",
    description:
      "As a Software Development Intern at xDJs, I contributed to MusicNerd, a React-based web app that interfaces with music data APIs. I led the implementation of an abstraction layer between frontend and backend services and redesigned the UI/UX in Figma.",
  },
  {
    id: "if-predictor",
    to: "/if-predictor",
    img: ifPredictor,
    alt: "If-Statement Condition Predictor",
    imgStyle: { objectFit: "cover", height: "350px", width: "100%" },
    title: "If-Statement Condition Predictor",
    category: "Python, PyTorch, Transformers, NLP",
    description:
      "I developed a predictor that utilizes a fine-tuned CodeT5 model to predict missing conditions in Python if statements. The implementation leverages Python 3.9+, PyTorch, Transformers, and scikit-learn for data processing, model training, and evaluation.",
  },
  {
    id: "commercial-realestate-crawler",
    to: "/commercial-realestate-crawler",
    img: commRECrawler,
    alt: "Commercial Real Estate Crawler",
    imgStyle: { objectFit: "cover", height: "350px", width: "100%" },
    title: "Commercial Real Estate Crawler",
    category: "Python, JavaScript, Web Scraping",
    description:
      "A crawler that automatically searches real estate websites for new property listings and delivers them via email. It scrapes data from sites like CommercialMLS and LoopNet, filters results based on configurable criteria, and is scheduled via cron jobs.",
  },
  {
    id: "valentines-day-card",
    to: "/valentines-day-card",
    img: valentine,
    alt: "Valentine's Day Card Web App",
    imgStyle: { objectFit: "contain", height: "280px", width: "100%", margin: "0 auto", display: "block", padding: "35px 0" },
    title: "Valentine's Day Card App",
    category: "Next.js, Tailwind CSS, React",
    description:
      "A web application that allows users to create personalized digital Valentine's Day cards. Built with Next.js and styled using Tailwind CSS, it features customizable recipient names, messages, and images with a secure login system.",
  },
];


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
        <div className="row align-items-stretch" style={{ flexWrap: "wrap" }}>
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 d-flex mb-4">
              <ScrollReveal containerClassName="h-100 w-100">
                <HoverTilt className="w-100" containerHeight="100%">
                  <ExpositionCard
                    title={project.title}
                    category={project.category}
                    img={project.img}
                    alt={project.alt}
                    to={project.to}
                    href={project.href}
                    imageCoversCard={false}
                    imgStyle={project.imgStyle}
                    description={project.description}
                  />
                </HoverTilt>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Particles from "../reactbits/Particles";
import ClickSpark from "../reactbits/ClickSpark";
import TiltedButton from "../reactbits/TiltedButton";
import luxxleLogo from "../assets/LuxxleLogoHD.png";
import killtoneLogo from "../assets/KilltoneLogo.png";
import ifPredictorImg from "../assets/ifPredictor.png";
import commRECrawlerImg from "../assets/CommRECrawler.png";
import valentineImg from "../assets/Valentine.png";

import commercialRealestate1 from "../assets/exposition-media/CommercialRealestate1.png";
import commercialRealestate2 from "../assets/exposition-media/CommercialRealestate2.png";
import commercialRealestate3 from "../assets/exposition-media/CommercialRealestate3.png";
import commercialRealestate4 from "../assets/exposition-media/CommercialRealestate4.png";
import valentines1 from "../assets/exposition-media/Valentines1.png";
import valentines2 from "../assets/exposition-media/Valentines2.png";
import valentines4 from "../assets/exposition-media/Valentines4.png";
import valentines5 from "../assets/exposition-media/Valentines5.png";
import valentines6 from "../assets/exposition-media/Valentines6.png";
import luxxleScreenshot from "../assets/exposition-media/LuxxleScreenshot.png";
import moneoLogo from "../assets/moneoLogo.png";
import moneoClassifying from "../assets/exposition-media/MoneoClassifying.png";
import moneoSources from "../assets/exposition-media/MoneoSources.png";
import moneoTooltip from "../assets/exposition-media/MoneoTooltip.png";

const projectData = {
  luxxle: {
    title: "Luxxle Search Engine/Browser",
    logo: luxxleLogo,
    technologies: ["C++", "HTML", "CSS", "Chromium"],
    description: `As a Founding Team Engineer at Luxxle, I contributed towards the first steps of building their browser. I forked chromium, adopting similar patching/extension architecture to Brave and created the alpha version of the browser.

Luxxle is a privacy-focused web browser that prioritizes user control and data protection. Our mission is to provide a secure browsing experience while maintaining the speed and features users expect from modern browsers.`,
    features: [
      "Privacy-focused browsing with built-in tracker blocking",
      "Customizable extension system similar to Chromium",
      "Enhanced security features and data protection",
      "Optimized performance with minimal resource usage",
    ],
    images: [luxxleScreenshot],
    video: "https://player.vimeo.com/video/833430038",
    liveLinks: [
      { url: "https://luxxle.com/", label: "Luxxle Homepage" },
      { url: "https://luxxle.com/luxchat", label: "LuxChat" },
    ],
  },
  killtone: {
    title: "FPS Exercise",
    logo: killtoneLogo,
    technologies: ["JavaScript", "Babylon JS", "WebSockets"],
    description: `I am building FPS Exercise, a 3D multiplayer browser game using Babylon.js. Designed and developed features including a 3D environment, physics-based gameplay, and real-time multiplayer support over LAN.

The project demonstrates my ability to integrate graphics, gameplay physics, and network synchronization into a responsive front-end gaming experience.`,
    features: [
      "3D game environment built with Babylon.js",
      "Real-time multiplayer support via WebSockets",
      "LAN connectivity for local network gaming",
      "Physics-based gameplay mechanics",
    ],
    images: [],
    videos: [
      { url: "https://player.vimeo.com/video/1119562349", title: "FPS Exercise Prototype Demo" },
      { url: "https://player.vimeo.com/video/1119565135", title: "FPS Exercise Demo" },
    ],
    github: [
      { url: "https://github.com/BenNormann/Killtone", label: "FPS Exercise" },
      { url: "https://github.com/BenNormann/Kronkar", label: "FPS Exercise Prototype" },
    ],
  },
  "if-predictor": {
    title: "If-Statement Condition Predictor",
    logo: ifPredictorImg,
    technologies: ["Python", "PyTorch", "Transformers", "NLP"],
    description: `I developed a predictor that utilises a fine-tuned CodeT5 model to predict missing conditions in Python if statements. The implementation leverages Python 3.9+, PyTorch, Transformers, and scikit-learn for data processing, model training, and evaluation.

This machine learning project demonstrates the application of natural language processing techniques to code analysis and completion. The model can understand code context and suggest appropriate conditional expressions.`,
    features: [
      "Fine-tuned CodeT5 transformer model",
      "NLP-based code understanding and completion",
      "Python syntax analysis and pattern recognition",
      "Machine learning pipeline for code prediction",
    ],
    images: [],
    video: null,
    github: "https://github.com/BenNormann/if-predictor-CodeT5",
  },
  "commercial-realestate-crawler": {
    title: "Commercial Real Estate Crawler",
    logo: commRECrawlerImg,
    technologies: ["Python", "JavaScript", "Web Scraping", "Automation"],
    description: `A crawler that automatically searches real estate websites for new property listings and delivers them via email. It scrapes data from sites like CommercialMLS and LoopNet, filters results based on configurable criteria, and is scheduled via cron jobs.

This automation tool streamlines the process of monitoring commercial real estate markets, providing timely notifications about new listings that match specific investment criteria.`,
    features: [
      "Automated web scraping from multiple real estate platforms",
      "Configurable filtering and search criteria",
      "Email notification system for new listings",
      "Scheduled execution via cron jobs",
    ],
    images: [
      commercialRealestate1,
      commercialRealestate2,
      commercialRealestate3,
      commercialRealestate4,
    ],
    video: null,
    github: "https://github.com/BenNormann/commercial-realestate-crawler-v3",
  },
  "valentines-day-card": {
    title: "Valentine's Day Card App",
    logo: valentineImg,
    technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
    description: `Built a Valentine's Day card template site using TypeScript, Next.js, and Tailwind CSS, combining design with component-based architecture. Delivered an interactive experience including custom messages and a success page.

This project demonstrates full-stack web development skills, combining modern React frameworks with beautiful UI design and user authentication.`,
    features: [
      "Customizable digital card creation",
      "Personalized messages and recipient information",
      "Image upload and customization options",
      "Secure user authentication system",
    ],
    images: [valentines1, valentines2, valentines4, valentines5, valentines6],
    video: null,
    github: "https://github.com/BenNormann/valentines-website-template",
  },
  moneo: {
    title: "Moneo - AI Fact-Checking Browser Extension",
    logo: moneoLogo,
    technologies: ["JavaScript", "Chrome Extension API", "OpenAI GPT-4", "Web Scraping"],
    description: `An ambitious 24-hour hackathon project that creates an AI-powered fact-checking browser extension. Moneo automatically analyzes news articles, extracts factual claims, and scores them for credibility using multi-dimensional verification across AI analysis, academic sources, and cross-spectrum web validation.

The extension uses advanced linguistic analysis to identify check-worthy claims, then evaluates them across four independent dimensions: AI credibility rating, tone analysis, scholarly match, and web reinforcement with political spectrum analysis.`,
    features: [
      "Intelligent claim detection using linguistic analysis and argumentation mining",
      "Multi-dimensional scoring system (AI credibility, tone analysis, scholarly match, web reinforcement)",
      "Political spectrum analysis to detect echo chambers and reward cross-spectrum verification",
      "Color-coded visual feedback (green/yellow/red) with interactive tooltips",
      "Real-time analysis of news articles with automatic claim extraction",
      "Academic source validation through Google Scholar integration",
      "Cross-verification across independent news sources",
    ],
    images: [moneoClassifying, moneoSources, moneoTooltip],
    video: null,
    github: "https://github.com/BenNormann/Moneo",
  },
};

const ProjectExposition = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = location.pathname.substring(1);
  const [videoError, setVideoError] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isModalOpen) closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const project = projectData[projectId];

  useEffect(() => {
    if (project && project.video) {
      setVideoError(false);
      window.videoErrorTimeout = setTimeout(() => setVideoError(true), 5000);
      return () => {
        if (window.videoErrorTimeout) clearTimeout(window.videoErrorTimeout);
      };
    } else {
      setVideoError(false);
    }
  }, [projectId, project]);

  if (!project) {
    return (
      <section className="project-exposition sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Project Not Found</h2>
              <p>The requested project could not be found.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const hasMedia =
    (project.images && project.images.length > 0) ||
    project.video ||
    (project.videos && project.videos.length > 0);

  return (
    <section className="project-exposition route">
      <div className="page-particles-bg">
        <Particles
          particleCount={280}
          particleSpread={10}
          speed={0.04}
          moveParticlesOnHover={false}
          alphaParticles
          particleBaseSize={80}
          sizeRandomness={1.5}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      <div className="expo-content-layer">
        <div className="container">

          {/* ── Hero strip ── */}
          <div className="expo-hero">
            <img
              src={project.logo}
              alt={`${project.title} logo`}
              className="expo-hero-logo"
            />
            <div className="expo-hero-text">
              <h1 className="expo-hero-title">{project.title}</h1>
              <div className="expo-tech-badges">
                {project.technologies.map((tech) => (
                  <span key={tech} className="expo-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Side-by-side: About + Features (left) | Media + Gallery (right) ── */}
          <div className={`row expo-body-row ${hasMedia ? "" : "expo-body-row-single"}`}>
            {/* Left column: About, Features, links */}
            <div className={hasMedia ? "col-lg-6 col-md-6 mb-4 mb-lg-0 expo-text-col" : "col-12 mb-4"}>
              <h4 className="expo-section-label">About the Project</h4>
              {project.description.split("\n\n").map((para, i) => (
                <p key={i} className="expo-paragraph">{para.trim()}</p>
              ))}

              <h4 className="expo-section-label">Key Features</h4>
              <ul className="feature-list mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="feature-item">{feature}</li>
                ))}
              </ul>

              {project.github && (
                <div className="expo-links">
                  {Array.isArray(project.github) ? (
                    project.github.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn expo-btn-ghost mb-2"
                      >
                        <i className="fa fa-github" aria-hidden="true" /> {link.label}
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn expo-btn-ghost mb-2"
                    >
                      <i className="fa fa-github" aria-hidden="true" /> View on GitHub
                    </a>
                  )}
                </div>
              )}

              {project.liveLinks && (
                <div className="expo-links mt-2">
                  {project.liveLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn expo-btn-primary mb-2"
                    >
                      <i className="fa fa-external-link" aria-hidden="true" /> {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right column: Media + Gallery (only when hasMedia) */}
            {hasMedia && (
              <div className="col-lg-6 col-md-6 expo-media-col">
                <h4 className="expo-section-label">Media</h4>

                {/* Multiple videos */}
                {project.videos &&
                  project.videos.map((video, i) => (
                    <div key={i} className="expo-media-primary expo-video-wrap mb-3">
                      <p className="expo-video-label">{video.title}</p>
                      <div className="expo-video-aspect">
                        <iframe
                          src={video.url}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                          title={video.title}
                        />
                      </div>
                    </div>
                  ))}

                {/* Single video */}
                {project.video && !project.videos && (
                  <div className="expo-media-primary expo-video-wrap mb-3">
                    <p className="expo-video-label">Demo Video</p>
                    {!videoError ? (
                      <div className="expo-video-aspect">
                        <iframe
                          src={project.video}
                          title={`${project.title} Demo`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                          onLoad={() => {
                            if (window.videoErrorTimeout) clearTimeout(window.videoErrorTimeout);
                          }}
                          onError={() => setVideoError(true)}
                          sandbox="allow-scripts allow-same-origin allow-presentation"
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                        />
                      </div>
                    ) : (
                      <div className="expo-video-error">
                        <p>Video unavailable. This demo is currently private or requires authentication.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Primary image (when no video, or alongside video for projects like Luxxle) */}
                {project.images && project.images.length > 0 && !project.video && !project.videos && (
                  <div
                    className="expo-media-primary expo-primary-image mb-3"
                    onClick={() => openModal(project.images[0])}
                  >
                    <img
                      src={project.images[0]}
                      alt={`${project.title} screenshot`}
                    />
                  </div>
                )}

                {/* Thumbnail gallery: all images when video exists, else images 2+ (first is primary above) */}
                {project.images && project.images.length > 0 && (
                  <div className="expo-image-gallery">
                    {(project.video || project.videos ? project.images : project.images.slice(1)).map((image, i) => (
                      <div
                        key={i}
                        className="expo-image-thumb"
                        onClick={() => openModal(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── Back button ── */}
          <div className="text-center mt-5 pb-5">
            <ClickSpark>
              <TiltedButton
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    const target = document.querySelector("#work");
                    if (target) {
                      const navHeight = document.querySelector("#mainNav")?.clientHeight || 72;
                      window.scrollTo({
                        top: target.getBoundingClientRect().top + window.pageYOffset - navHeight + 5,
                        behavior: "smooth",
                      });
                    }
                  }, 100);
                }}
              >
                ← Back to Portfolio
              </TiltedButton>
            </ClickSpark>
          </div>
        </div>
      </div>

      {/* Image modal */}
      {isModalOpen && modalImage && (
        <div
          className="image-modal-overlay"
          onClick={closeModal}
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex", justifyContent: "center", alignItems: "center",
            zIndex: 9999, cursor: "pointer",
          }}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh", cursor: "default" }}
          >
            <button
              onClick={closeModal}
              className="modal-close-btn"
              style={{
                position: "absolute", top: "10px", right: "10px",
                background: "rgba(0,0,0,0.7)", border: "none", color: "white",
                fontSize: "24px", cursor: "pointer", padding: "8px 12px",
                borderRadius: "50%", zIndex: 10000,
                width: "40px", height: "40px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              ×
            </button>
            <img
              src={modalImage}
              alt="Enlarged view"
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "5px" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectExposition;

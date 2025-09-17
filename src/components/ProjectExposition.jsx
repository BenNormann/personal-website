import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./stars.scss";
import luxxleLogo from "../assets/LuxxleLogoHD.png";
import killtoneLogo from "../assets/KilltoneLogo.png";
import ifPredictorImg from "../assets/ifPredictor.png";
import commRECrawlerImg from "../assets/CommRECrawler.png";
import valentineImg from "../assets/Valentine.png";

const ProjectExposition = () => {
  const location = useLocation();
  const projectId = location.pathname.substring(1); // Remove the leading slash
  const [videoError, setVideoError] = useState(false);

  const projectData = {
    "luxxle": {
      title: "Luxxle Search Engine/Browser",
      logo: luxxleLogo,
      technologies: "C++, HTML, CSS, Chromium",
      description: `As a Founding Team Engineer at Luxxle, I contributed towards the first steps of building their browser. I forked
      chromium, adopting similar patching/extension architecture to Brave and have created the alpha version of the browser.

      Luxxle is a privacy-focused web browser that prioritizes user control and data protection. Our mission is to provide
      a secure browsing experience while maintaining the speed and features users expect from modern browsers.`,
      features: [
        "Privacy-focused browsing with built-in tracker blocking",
        "Customizable extension system similar to Chromium",
        "Enhanced security features and data protection",
        "Optimized performance with minimal resource usage"
      ],
      images: [],
      video: "https://player.vimeo.com/video/833430038"
    },
    "killtone": {
      title: "Killtone Game",
      logo: killtoneLogo,
      technologies: "JavaScript, Babylon JS, WebSockets",
      description: `Killtone is a 3D multiplayer game built with Babylon JS. It is a simple game where players can move around
      and shoot at each other over a LAN connection. I and another friend are developing this game as a side project.

      This project showcases real-time multiplayer gaming capabilities using modern web technologies. The game features
      3D graphics, physics simulation, and network synchronization for an engaging multiplayer experience.`,
      features: [
        "3D game environment built with Babylon.js",
        "Real-time multiplayer support via WebSockets",
        "LAN connectivity for local network gaming",
        "Physics-based gameplay mechanics"
      ],
      images: [],
      video: null
    },
    "if-predictor": {
      title: "If-Statement Condition Predictor",
      logo: ifPredictorImg,
      technologies: "Python, PyTorch, Transformers, NLP",
      description: `I developed a predictor that utilizes a fine-tuned CodeT5 model to predict missing conditions in Python
      if statements. The implementation leverages Python 3.9+, PyTorch, Transformers, and scikit-learn for data processing,
      model training, and evaluation.

      This machine learning project demonstrates the application of natural language processing techniques to code
      analysis and completion. The model can understand code context and suggest appropriate conditional expressions.`,
      features: [
        "Fine-tuned CodeT5 transformer model",
        "NLP-based code understanding and completion",
        "Python syntax analysis and pattern recognition",
        "Machine learning pipeline for code prediction"
      ],
      images: [],
      video: null
    },
    "commercial-realestate-crawler": {
      title: "Commercial Real Estate Crawler",
      logo: commRECrawlerImg,
      technologies: "Python, JavaScript, Web Scraping, Automation",
      description: `A crawler that automatically searches real estate websites for new property listings and delivers them via email.
      It scrapes data from sites like CommercialMLS and LoopNet, filters results based on configurable criteria,
      and is scheduled via cron jobs.

      This automation tool streamlines the process of monitoring commercial real estate markets, providing timely
      notifications about new listings that match specific investment criteria.`,
      features: [
        "Automated web scraping from multiple real estate platforms",
        "Configurable filtering and search criteria",
        "Email notification system for new listings",
        "Scheduled execution via cron jobs"
      ],
      images: [],
      video: null
    },
    "valentines-day-card": {
      title: "Valentine's Day Card App",
      logo: valentineImg,
      technologies: "Next.js, Tailwind CSS, React",
      description: `A web application that allows users to create personalized digital Valentine's Day cards. Built with Next.js
      and styled using Tailwind CSS, it features customizable recipient names, messages, and images with a secure login system.

      This project demonstrates full-stack web development skills, combining modern React frameworks with beautiful
      UI design and user authentication.`,
      features: [
        "Customizable digital card creation",
        "Personalized messages and recipient information",
        "Image upload and customization options",
        "Secure user authentication system"
      ],
      images: [],
      video: null
    }
  };

  const project = projectData[projectId];

  // Handle video loading timeout
  useEffect(() => {
    if (project && project.video) {
      // Reset error state when project changes
      setVideoError(false);

      // Set a timeout to detect if video fails to load
      window.videoErrorTimeout = setTimeout(() => {
        setVideoError(true);
      }, 5000); // 5 second timeout

      return () => {
        if (window.videoErrorTimeout) {
          clearTimeout(window.videoErrorTimeout);
        }
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

  return (
    <section className="project-exposition sect-pt4 route background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">{project.title}</h3>
              <p className="subtitle-a">
                {project.technologies}
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        {/* White background container for all content */}
        <div className="project-content-wrapper">
          {/* Project Layout: Blank | Content | Logo */}
          <div className="row mb-5">
            {/* Blank Column - Left */}
            <div className="col-md-3 col-lg-2">
              {/* Blank space for offset */}
            </div>

            {/* Content Column - Middle */}
            <div className="col-md-6 col-lg-8">
              <div className="project-content">
                {/* Project Description */}
                <div className="project-description">
                  <h4 className="content-title">About the Project</h4>
                  <p className="content-text mb-4">{project.description}</p>
                </div>

                {/* Features */}
                <div className="project-features">
                  <h4 className="content-title">Key Features</h4>
                  <ul className="feature-list mb-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Logo Column - Right */}
            <div className="col-md-3 col-lg-2">
              <div className="project-logo text-center">
                <img
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  className="img-fluid"
                  style={{ maxHeight: "280px", objectFit: "contain", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)" }}
                />
              </div>
            </div>
          </div>

          {/* Media Section - Images and Videos */}
          {(project.images.length > 0 || project.video) && (
            <div className="row">
              <div className="col-md-6 col-lg-8 offset-md-3 offset-lg-2 mb-5">
                <div className="project-media">
                  <h4>Media</h4>
                  <div className="media-gallery">
                  {/* Video */}
                  {project.video && (
                    <div className="media-item video-item mb-4">
                      <h5>Demo Video</h5>
                      <div className="video-container">
                        {!videoError ? (
                          <iframe
                            width="100%"
                            height="400"
                            src={project.video}
                            title={`${project.title} Demo`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={() => {
                              // Clear any existing timeout when video loads successfully
                              if (window.videoErrorTimeout) {
                                clearTimeout(window.videoErrorTimeout);
                              }
                            }}
                            onError={() => setVideoError(true)}
                            sandbox="allow-scripts allow-same-origin allow-presentation"
                            style={{ border: 'none' }}
                          />
                        ) : (
                          <div className="video-error-message" style={{
                            padding: '20px',
                            background: '#f8f9fa',
                            border: '1px solid #dee2e6',
                            borderRadius: '5px',
                            textAlign: 'center'
                          }}>
                            <p style={{ margin: '0 0 10px 0', color: '#6c757d' }}>
                              Video unavailable. This demo video is currently private or requires authentication.
                            </p>
                            <p style={{ margin: '0', fontSize: '14px', color: '#6c757d' }}>
                              Please check back later or contact the developer for access.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Images */}
                  {project.images.length > 0 && (
                    <div className="media-item images-item">
                      <h5>Screenshots</h5>
                      <div className="image-gallery">
                        {project.images.map((image, index) => (
                          <div key={index} className="gallery-image mb-3">
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="img-fluid"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        </div>

        {/* Back to Portfolio */}
        <div className="row">
          <div className="col-sm-12 text-center mt-5">
            <Link to="/#work" className="btn btn-primary">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectExposition;

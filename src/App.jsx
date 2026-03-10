import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Hobbies from './components/Hobbies.jsx';
import Contact from './components/Contact.jsx';
import BackToTop from './components/BackToTop.jsx';
import Preloader from './components/Preloader.jsx';
import ProjectExposition from './components/ProjectExposition.jsx';
import Particles from './reactbits/Particles.jsx';

// Particles background for the home page.
// - Opacity fades from 1 (top) to 0 (at the fold) via direct DOM mutation
//   to avoid triggering React re-renders on every scroll event.
// - Mouse interaction is only active above the fold.
const HomeBackground = () => {
  const [aboveFold, setAboveFold] = useState(true);
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const ratio = Math.min(window.scrollY / window.innerHeight, 1);
      // Fade from full brightness (1) at the top down to the natural resting
      // level (0.3) at the fold — never disappears entirely.
      const MIN = 0.3;
      if (bgRef.current) {
        bgRef.current.style.opacity = MIN + (1 - ratio) * (1 - MIN);
      }
      setAboveFold(ratio < 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={bgRef} className="page-particles-bg">
      <Particles
        particleCount={360}
        particleSpread={10}
        speed={0.04}
        moveParticlesOnHover={aboveFold}
        particleHoverFactor={0.4}
        alphaParticles
        particleBaseSize={80}
        sizeRandomness={1.5}
        cameraDistance={20}
        disableRotation={false}
      />
    </div>
  );
};

const HomePage = () => (
  <>
    <HomeBackground />
    <Intro />
    <About />
    <Portfolio />
    <Hobbies />
    <Contact />
    <BackToTop />
  </>
);

const App = () => {
  return (
    <Router>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/luxxle" element={<ProjectExposition />} />
        <Route path="/killtone" element={<ProjectExposition />} />
        <Route path="/if-predictor" element={<ProjectExposition />} />
        <Route path="/commercial-realestate-crawler" element={<ProjectExposition />} />
        <Route path="/valentines-day-card" element={<ProjectExposition />} />
        <Route path="/moneo" element={<ProjectExposition />} />
      </Routes>
    </Router>
  );
};

export default App;

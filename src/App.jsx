import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import BackToTop from './components/BackToTop.jsx';
import Preloader from './components/Preloader.jsx';
import ProjectExposition from './components/ProjectExposition.jsx';

const HomePage = () => (
  <>
    <Intro />
    <About />
    <Portfolio />
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
      </Routes>
    </Router>
  );
};

export default App;

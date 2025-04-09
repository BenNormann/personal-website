import React from 'react';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import BackToTop from './components/BackToTop.jsx';
import Preloader from './components/Preloader.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <BackToTop />
      <Preloader />
    </>
  );
};

export default App;

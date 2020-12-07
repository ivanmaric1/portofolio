import React from 'react';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Navigation from './Navigation';
import './Portofolio.scss';

const Portofolio = () => {
  return (
    <div className="Portofolio">
      <Navigation />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Portofolio;

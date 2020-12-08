import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.scss';

function App() {
  return (
    <div className="Portofolio">
      <Navigation />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="App" id="App">
      <Navigation />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

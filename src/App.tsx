import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spnft from './components/Spnft';
import './App.scss';

const App = () => {
  const [page, setPage] = useState('home');

  return page === 'home' ? (
    <div className="App" id="App">
      <Navigation />
      <Home />
      <About />
      <Work setPage={setPage} />
      <Contact />
      <Footer />
    </div>
  ) : (
    <Spnft setPage={setPage} />
  );
};

export default App;

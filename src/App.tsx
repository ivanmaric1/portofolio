import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
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
    </div>
  ) : (
    <Spnft setPage={setPage} />
  );
};

export default App;

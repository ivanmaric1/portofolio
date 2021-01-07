import React from 'react';
import work1 from '../img/work1.png';
import work2 from '../img/work2.png';
import work3 from '../img/work3.png';
import SpnftCard from './SpnftCard';
import ScreenCard from './ScreenCard';
import ExchangeCard from './ExchangeCard';
import './Work.scss';

const Work = () => {
  const setOverlay = (klasa: string) => {
    let element: any = document.querySelector(`.${klasa}`);
    element.style.display = 'block';
  };

  const removeOverlay = (klasa: string) => {
    let element: any = document.querySelector(`.${klasa}`);
    element.style.display = 'none';
  };

  return (
    <div className="Work section" id="work">
      <div className="Work-img">
        <img src={work1} alt="workImage" />
        <img src={work2} alt="workImage" />
        <img src={work3} alt="workImage" />
      </div>
      <div className="Work-projects">
        <div className="Work-projects-headline">
          <div>
            <i className="fas fa-cog fa-2x Work-projects-headline-icons small"></i>
            <i className="fas fa-cog fa-3x Work-projects-headline-icons big"></i>
          </div>
          <h1>Projects</h1>
        </div>
        <SpnftCard setOverlay={setOverlay} removeOverlay={removeOverlay} />
        <ScreenCard setOverlay={setOverlay} removeOverlay={removeOverlay} />
        <ExchangeCard setOverlay={setOverlay} removeOverlay={removeOverlay} />
      </div>
    </div>
  );
};

export default Work;

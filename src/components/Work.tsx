import React from 'react';
import work1 from '../img/work1.png';
import work2 from '../img/work2.png';
import work3 from '../img/work3.png';
import SpnftCard from './SpnftCard';
import ScreenCard from './ScreenCard';

import './Work.scss';

interface Props {
  setPage: (page: string) => void;
}

const Work: React.FC<Props> = ({ setPage }) => {
  return (
    <div className="Work section" id="work">
      <div className="Work-img">
        <img src={work1} alt="workImage" />
        <img src={work2} alt="workImage" />
        <img src={work3} alt="workImage" />
      </div>
      <div className="Work-projects">
        <SpnftCard setPage={setPage} />
        <ScreenCard setPage={setPage} />
      </div>
    </div>
  );
};

export default Work;

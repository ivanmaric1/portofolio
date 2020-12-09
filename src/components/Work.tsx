import React from 'react';

import './Work.scss';

interface Props {
  setPage: (page: string) => void;
}

const Work: React.FC<Props> = ({ setPage }) => {
  return (
    <div className="Work section" id="work">
      <button onClick={() => setPage('spnft')}>SPNFT</button>
    </div>
  );
};

export default Work;

import './Card.scss';
import screen from '../img/projects/screen/main.png';
import mobile from '../img/projects/screen/mobile.png';
import reac from '../img/programs/react.png';
import type from '../img/programs/typescript.png';

interface Props {
  setPage: (page: string) => void;
}

const ScreenCard: React.FC<Props> = ({ setPage }) => {
  return (
    <div className="Card">
      <div className="Card-img">
        <img src={screen} alt="projectImage" className="Card-img" />
        <img src={mobile} alt="projectImage" className="Card-img" />
      </div>
      <div className="Card-info">
        <h2>SCREEN</h2>
        <div className="Card-info-details">
          <p>Project Completion : December 2020</p>
          <p>Time to build: 35 days</p>
          <div className="Card-info-tool">
            <p>Main tool:</p>
            <img src={reac} alt="reactLogo" />
            <img src={type} alt="reactLogo" />
          </div>
        </div>
        <p>
          This app fight against money laundering and terrorist financing in
          gambling Industry.
        </p>
        <div className="Card-info-links">
          <a href="#" onClick={() => setPage('spnft')}>
            Wiew Project Details
          </a>
          <a href="https://js314head.github.io/screen/" target="_blank">
            Wiew Project
          </a>
          <a href="https://github.com/js314head/screen" target="_blank">
            Wiew GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScreenCard;

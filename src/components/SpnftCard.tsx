import './Card.scss';
import spnft from '../img/projects/spnft/spnft.png';
import mobile from '../img/projects/spnft/phone4.png';
import reac from '../img/programs/react.png';

interface Props {
  setPage: (page: string) => void;
}

const SpnftCard: React.FC<Props> = ({ setPage }) => {
  return (
    <div className="Card">
      <div className="Card-img">
        <img src={spnft} alt="projectImage" className="Card-img" />
        <img src={mobile} alt="projectImage" className="Card-img" />
      </div>
      <div className="Card-info">
        <h2>SPNFT</h2>
        <div className="Card-info-details">
          <p>Project Completion : October 2020</p>
          <p>Time to build: 45 days</p>
          <div className="Card-info-tool">
            <p>Main tool:</p>
            <img src={reac} alt="reactLogo" />
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
          <a href="https://js314head.github.io/spnft/" target="_blank">
            Wiew Project
          </a>
          <a href="https://github.com/js314head/spnft" target="_blank">
            Wiew GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpnftCard;

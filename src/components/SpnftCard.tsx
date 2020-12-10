import './Card.scss';
import spnft from '../img/projects/spnft/spnft.png';
import mobile from '../img/projects/spnft/phone4.png';

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
        <h3>SPNFT</h3>
        <p>
          This app fight against money laundering and terrorist financing in
          gambling Industry.
        </p>
        <div className="Card-info-links">
          <a href="#" onClick={() => setPage('spnft')}>
            Wiew Project Details
          </a>
          <a href="https://js314head.github.io/spnft/">Wiew Project</a>
          <a href="https://github.com/js314head/spnft">Wiew GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default SpnftCard;

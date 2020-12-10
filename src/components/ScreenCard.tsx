import './Card.scss';
import screen from '../img/projects/screen/main.png';
import mobile from '../img/projects/screen/mobile.png';

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
        <h3>SCREEN</h3>
        <p>
          This app fight against money laundering and terrorist financing in
          gambling Industry.
        </p>
        <div className="Card-info-links">
          <a href="#" onClick={() => setPage('spnft')}>
            Wiew Project Details
          </a>
          <a href="https://js314head.github.io/screen/">Wiew Project</a>
          <a href="https://github.com/js314head/screen">Wiew GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ScreenCard;

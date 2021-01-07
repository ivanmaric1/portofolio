import screen from '../img/projects/screen/main.png';
import mobile from '../img/projects/screen/mobile.png';
import reac from '../img/programs/react.png';
import type from '../img/programs/typescript.png';
import mobile1 from '../img/projects/screen/mobile.png';
import mobile2 from '../img/projects/screen/mobile2.png';
import main from '../img/projects/screen/main.png';
import cart from '../img/projects/screen/cart.png';
import item from '../img/projects/screen/item.png';
import watches from '../img/projects/screen/watches.png';
import './Card.scss';
import './ScreenCard.scss';

interface Props {
  setOverlay: (klasa: string) => void;
  removeOverlay: (klasa: string) => void;
}

const ScreenCard: React.FC<Props> = ({ setOverlay, removeOverlay }) => {
  return (
    <>
      <div className="Screen" data-simplebar>
        <div className="Screen-header">
          <button
            onClick={() => removeOverlay('Screen')}
            className="Screen-header-btn"
          >
            Back
          </button>
          <h1 className="Screen-headline">Screen</h1>
          <p>Web shop that sells cell phones, tablets, and more...</p>
        </div>
        <div className="Screen-pages">
          <img src={main} alt="projectPage" />
          <img src={cart} alt="projectPage" />
          <img src={item} alt="projectPage" />
          <img src={watches} alt="projectPage" />
        </div>
        <div className="Screen-mobile">
          <img src={mobile1} alt="" className="mobile-pic" />
          <img src={mobile2} alt="" className="mobile-pic" />
        </div>
        <div className="Screen-bottom">
          <button
            onClick={() => removeOverlay('Screen')}
            className="Screen-header-btn"
          >
            Back
          </button>
        </div>
      </div>
      <div className="Card">
        <div className="Card-img">
          <img src={screen} alt="projectImage" className="Card-img" />
          <img src={mobile} alt="projectImage" className="Card-img-mobile" />
        </div>
        <div className="Card-info">
          <div>
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
          </div>
          <p>Web shop that sells cell phones, tablets, and more...</p>
          <div className="Card-info-links">
            <a href="#" onClick={() => setOverlay('Screen')}>
              Project Details
            </a>
            <a href="https://js314head.github.io/screen/" target="_blank">
              Live Project
            </a>
            <a href="https://github.com/js314head/screen" target="_blank">
              GitHub Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenCard;

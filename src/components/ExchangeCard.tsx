import mobile from '../img/projects/spnft/phone4.png';
import reac from '../img/programs/react.png';
import mobile1 from '../img/projects/exchange/mobile1.png';
import mobile2 from '../img/projects/exchange/mobile2.png';
import old1 from '../img/projects/exchange/old1.png';
import old2 from '../img/projects/exchange/old2.png';
import main from '../img/projects/exchange/main.png';
import transactions from '../img/projects/exchange/transactions.png';
import typescript from '../img/programs/typescript.png';
import sass from '../img/programs/sass.png';
import react from '../img/programs/react.png';
import firebase from '../img/programs/firebase.png';
import './Card.scss';
import './ExchangeCard.scss';

interface Props {
  setOverlay: (klasa: string) => void;
  removeOverlay: (klasa: string) => void;
}

const ExchangeCard: React.FC<Props> = ({ setOverlay, removeOverlay }) => {
  return (
    <>
      <div className="Exchange" data-simplebar>
        <div className="Exchange-header">
          <button
            onClick={() => removeOverlay('Exchange')}
            className="Exchange-header-btn"
          >
            Back
          </button>
          <h1 className="Exchange-headline">Exchange Master 2</h1>
          <p>App for to exchange foreign currency.</p>
        </div>
        <div className="Exchange-info">
          <div className="Exchange-info-background">
            <h3>Background</h3>
            <p>
              Exchange Master 2 is a newer version of the 'Mjenjačnica_2020'
              program I made a year ago.
            </p>
          </div>
          <div className="Exchange-info-box">
            <div className="Exchange-info-idea">
              <h3>New tools</h3>
              <ul className="About-programs">
                <li>
                  <img src={react} alt="react" />
                </li>
                <li>
                  <img src={sass} alt="sass" />
                </li>
                <li>
                  <img src={typescript} alt="typescript" />
                </li>
                <li>
                  <img src={firebase} alt="firebase" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>This is an old version of the program</p>
        <div className="Exchange-pages">
          <img src={old1} alt="projectPage" />
          <img src={old2} alt="projectPage" />
        </div>
        <p>This is Exchange Master 2.0</p>
        <div className="Exchange-pages">
          <img src={main} alt="projectPage" />
          <img src={transactions} alt="projectPage" />
        </div>
        <div className="Exchange-mobile">
          <img src={mobile1} alt="" className="mobile-pic" />
          <img src={mobile2} alt="" className="mobile-pic" />
        </div>
        <div className="Exchange-bottom">
          <button
            onClick={() => removeOverlay('Exchange')}
            className="Exchange-header-btn"
          >
            Back
          </button>
        </div>
      </div>
      <div className="Card">
        <div className="Card-img">
          <img src={main} alt="projectImage" className="Card-img" />
          <img src={mobile1} alt="projectImage" className="Card-img-mobile" />
        </div>
        <div className="Card-info">
          <div>
            <h2>Exchange Master 2.0</h2>
            <div className="Card-info-details">
              <p>Project Completion : January 2021</p>
              <p>Time to build: 20 days</p>
              <div className="Card-info-tool">
                <p>Main tool:</p>
                <img src={reac} alt="reactLogo" />
              </div>
            </div>
          </div>
          <div>
            <p>
              Exchange Master 2 is a newer version of the 'Mjenjačnica_2020'
              program I made a year ago.
            </p>
            <p>
              The program is used to exchange foreign currency and should be
              used in the exchange office.
            </p>
          </div>
          <div className="Card-info-links">
            <a href="#" onClick={() => setOverlay('Exchange')}>
              Project Details
            </a>
            <a href="https://js314head.github.io/exchange/" target="_blank">
              Live Project
            </a>
            <a href="https://github.com/js314head/exchange" target="_blank">
              GitHub Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeCard;

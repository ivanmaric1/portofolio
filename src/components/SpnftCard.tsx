import mobile from '../img/projects/spnft/phone4.png';
import reac from '../img/programs/react.png';
import mobile1 from '../img/projects/spnft/phone1.png';
import mobile2 from '../img/projects/spnft/phone2.png';
import mobile3 from '../img/projects/spnft/phone3.png';
import mobile4 from '../img/projects/spnft/phone4.png';
import info from '../img/projects/spnft/info.png';
import entry from '../img/projects/spnft/entry.png';
import main from '../img/projects/spnft/main.png';
import login from '../img/projects/spnft/login.png';
import './Card.scss';
import './SpnftCard.scss';

interface Props {
  setOverlay: (klasa: string) => void;
  removeOverlay: (klasa: string) => void;
}

const SpnftCard: React.FC<Props> = ({ setOverlay, removeOverlay }) => {
  return (
    <>
      <div className="Spnft" data-simplebar>
        <div className="Spnft-header">
          <button
            onClick={() => removeOverlay('Spnft')}
            className="Spnft-header-btn"
          >
            Back
          </button>
          <h1 className="Spnft-headline">SPNFT</h1>
          <p>App for tracking customers in gambling industry</p>
        </div>
        <div className="Spnft-info">
          <div className="Spnft-info-background">
            <h3>Background</h3>
            <h4>20.5.2015 - New Law is introduced </h4>
            <p>Anti-Money Laundering: a challenge for the European Union</p>
            <p>
              Member States of European Union must ensure that the entities
              incorporated within their jurisdiction provide adequate, accurate
              and current information on the identity of the real owners of
              their shares and securities.
            </p>
            <p>
              Oversight of suspicious transactions in financial institutions and
              banks is toughened. The institutions must identify and monitor:
            </p>
            <p>
              1. All cash payments and receipts for entrepreneurs and
              professionals of over €10,000.
            </p>
            <p>
              2. All transactions by any one individual customer of over €1,000.
            </p>
          </div>
          <div className="Spnft-info-box">
            <div className="Spnft-info-idea">
              <h3>Idea</h3>
              <p>
                During my work as a casino manager i had to enforce the new law
                manually using paper and pencil.
              </p>
              <p>This application would make my job much easier and faster.</p>
            </div>
            <div className="Spnft-info-goal">
              <h3>Goal</h3>
              <p>
                This app fight against money laundering and terrorist financing
                in gambling Industry
              </p>
            </div>
          </div>
        </div>
        <div className="Spnft-pages">
          <img src={login} alt="projectPage" />
          <img src={info} alt="projectPage" />
          <img src={entry} alt="projectPage" />
          <img src={main} alt="projectPage" />
        </div>
        <div className="Spnft-mobile">
          <img src={mobile1} alt="" className="mobile-pic" />
          <img src={mobile2} alt="" className="mobile-pic" />
          <img src={mobile3} alt="" className="mobile-pic" />
          <img src={mobile4} alt="" className="mobile-pic" />
        </div>
      </div>
      <div className="Card">
        <div className="Card-img">
          <img src={main} alt="projectImage" className="Card-img" />
          <img src={mobile} alt="projectImage" className="Card-img-mobile" />
        </div>
        <div className="Card-info">
          <div>
            <h2>SPNFT</h2>
            <div className="Card-info-details">
              <p>Project Completion : October 2020</p>
              <p>Time to build: 45 days</p>
              <div className="Card-info-tool">
                <p>Main tool:</p>
                <img src={reac} alt="reactLogo" />
              </div>
            </div>
          </div>
          <div>
            <p>App for tracking customers in gambling industry.</p>
            <p>
              Serves as a tool in fight against money laundering and terrorist
              financing in gambling Industry.
            </p>
            <p className="Card-info-credentials">Login credentials:</p>
            <p className="Card-info-credentials">Username: test@gmail.com</p>
            <p className="Card-info-credentials">Password: 123456</p>
          </div>
          <div className="Card-info-links">
            <a href="#" onClick={() => setOverlay('Spnft')}>
              Project Details
            </a>
            <a href="https://js314head.github.io/spnft/" target="_blank">
              Live Project
            </a>
            <a href="https://github.com/js314head/spnft" target="_blank">
              GitHub Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpnftCard;

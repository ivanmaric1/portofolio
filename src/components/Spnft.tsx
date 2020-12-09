import mobile1 from '../img/projects/spnft/phone1.png';
import mobile2 from '../img/projects/spnft/phone2.png';
import mobile3 from '../img/projects/spnft/phone3.png';
import mobile4 from '../img/projects/spnft/phone4.png';
import './Spnft.scss';

interface Props {
  setPage: (page: string) => void;
}

const Spnft: React.FC<Props> = ({ setPage }) => {
  return (
    <div className="Spnft">
      <div className="Spnft-header">
        <h1 className="Spnft-headline">SPNFT</h1>
        <p>App for tracking customers in gambling industry</p>
        <button onClick={() => setPage('home')}>Back</button>
      </div>
      <div className="Spnft-background">
        <h3>Background</h3>
        <h4>20.5.2015 - New Law is introduced </h4>
        <p>Anti-Money Laundering: a challenge for the European Union</p>
        <p>
          Member States of European Union must ensure that the entities
          incorporated within their jurisdiction provide adequate, accurate and
          current information on the identity of the real owners of their shares
          and securities.
        </p>
        <p>
          Oversight of suspicious transactions in financial institutions and
          banks is toughened. The institutions must identify and monitor:
        </p>
        <p>
          1. All cash payments and receipts for entrepreneurs and professionals
          of over €10,000.
        </p>
        <p>
          2. All transactions by any one individual customer of over €1,000.
        </p>
      </div>
      <div className="Spnft-goal">
        <p>
          This app fight against money laundering and terrorist financing in
          gambling Industry
        </p>
      </div>
      <div className="Spnft-mobile">
        <img src={mobile1} alt="" className="mobile-pic" />
        <img src={mobile2} alt="" className="mobile-pic" />
        <img src={mobile3} alt="" className="mobile-pic" />
        <img src={mobile4} alt="" className="mobile-pic" />
      </div>
    </div>
  );
};

export default Spnft;

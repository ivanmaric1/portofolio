import { NavHashLink } from 'react-router-hash-link';
import logo from '../img/logo.png';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="Navigation">
      <a href="" className="Navigation-logo">
        <NavHashLink smooth to="#home">
          <img src={logo} alt="logo" />
        </NavHashLink>
      </a>
      <ul className="Navigation-list">
        <li>
          <NavHashLink
            activeClassName="active"
            className="about"
            smooth
            to="#about"
          >
            About
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            activeClassName="active"
            className="work"
            smooth
            to="#work"
          >
            Work
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            activeClassName="active"
            className="contact"
            smooth
            to="#contact"
          >
            Contact
          </NavHashLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

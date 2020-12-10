import { NavHashLink, HashLink } from 'react-router-hash-link';
import './Navigation.scss';
import logo from '../img/logo.png';

const Navigation = () => {
  return (
    <div className="Navigation">
      <a href="" className="Navigation-logo">
        <HashLink smooth to="#home">
          <img src={logo} alt="logo" />
        </HashLink>
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

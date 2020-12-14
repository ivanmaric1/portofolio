import { NavHashLink } from 'react-router-hash-link';
import profile from '../img/profile.png';
import './Home.scss';

const Home = () => {
  return (
    <div className="Home section" id="home">
      <div className="Home-img">
        <img src={profile} alt="" />
      </div>
      <div className="Home-text">
        <p>Hi, my name is</p>
        <h1>Ivan</h1>
        <p>I build things for the web.</p>
        <NavHashLink
          activeClassName="active"
          className="Home-btn"
          smooth
          to="#contact"
        >
          Contact me
        </NavHashLink>
      </div>
    </div>
  );
};

export default Home;

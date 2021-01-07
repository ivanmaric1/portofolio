import './About.scss';
import html from '../img/programs/html5.png';
import css from '../img/programs/css3.png';
import js from '../img/programs/js.png';
import sass from '../img/programs/sass.png';
import react from '../img/programs/react.png';
import typescript from '../img/programs/typescript.png';
import xd from '../img/programs/xd.png';
import ps from '../img/programs/ps.png';
import git from '../img/programs/git.png';
import github from '../img/programs/github.png';
import firebase from '../img/programs/firebase.png';
import about1 from '../img/about1.png';
import about2 from '../img/about2.png';
import about3 from '../img/about3.png';

const About = () => {
  return (
    <div className="About section" id="about">
      <div className="About-info">
        <div className="About-info">
          <div className="About-info-headline">
            <div>
              <i className="fas fa-address-card fa-3x"></i>
            </div>
            <h1>About</h1>
          </div>
          <h3>Hi, my name is Ivan</h3>
          <p>
            I am a front-end developer passionate about creating awesome
            websites/web applications with modern tools. I studied at the
            Technical Polytechnic in Zagreb and have a bachelor's degree in
            computer design. My goal is always to keep learning, continuously
            challenging myself and do interesting things that matter. I am
            currently looking for a job in the Zagreb area and updating my
            portofolio.{' '}
          </p>
          <div>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="About-programs">
              <li>
                <img src={html} alt="" />
              </li>
              <li>
                <img src={css} alt="" />
              </li>
              <li>
                <img src={js} alt="" />
              </li>
              <li>
                <img src={sass} alt="" />
              </li>
              <li>
                <img src={react} alt="" />
              </li>
              <li>
                <img src={typescript} alt="" />
              </li>
              <li>
                <img src={xd} alt="" />
              </li>
              <li>
                <img src={ps} alt="" />
              </li>
              <li>
                <img src={git} alt="" />
              </li>
              <li>
                <img src={github} alt="" />
              </li>
              <li>
                <img src={firebase} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="About-img">
        <img src={about1} alt="aboutImage" />
        <img src={about3} alt="aboutImage" />
        <img src={about2} alt="aboutImage" />
      </div>
    </div>
  );
};

export default About;

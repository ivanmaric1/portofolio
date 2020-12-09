import React from 'react';
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

const About = () => {
  return (
    <div className="About section" id="about">
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
      </ul>
    </div>
  );
};

export default About;

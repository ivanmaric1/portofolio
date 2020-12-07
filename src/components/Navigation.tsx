import React from 'react';
import './Navigation.scss';
import logo from '../img/logo.png';

const Navigation = () => {
  return (
    <div className="Navigation">
      <a href="" className="Navigation-logo">
        <img src={logo} alt="logo" />
      </a>
      <ul className="Navigation-list">
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navigation;

import './Footer.scss';
import logo from '../img/logo.png';
import github from '../img/github_footer.png';

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} alt="logo" className="Footer-logo" />
      <p>
        <i className="far fa-copyright"></i> Copyright 2020 Ivan M. All Rights
        Reserved
      </p>
      <a href="https://github.com/js314head" target="_blank">
        <img src={github} alt="github" className="Footer-github" />
      </a>
    </div>
  );
};

export default Footer;

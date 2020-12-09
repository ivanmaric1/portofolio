import './Home.scss';
import profile from '../img/profile.png';

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
        <button className="Home-btn">Contact me</button>
      </div>
    </div>
  );
};

export default Home;

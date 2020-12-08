import './Home.scss';
import profile from '../img/about1.png';

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="Home-img">
        <img src={profile} alt="" />
      </div>
      <div className="Home-text">
        <p>Hi, my name is</p>
        <h1>Ivan</h1>
        <p>I build things for the web.</p>
      </div>
    </div>
  );
};

export default Home;

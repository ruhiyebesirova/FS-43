import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/AppContext';
import './Home.css';

const Home = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  const handleStartProcess = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/select-box');
    }
  };

  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-info">
          <h1>Özəl şirniyyat qutunu <br /><span>özün yarat!</span></h1>
          <p>Dizayna aid fərqli qutular və şirin təamlar burada birləşir.</p>
          <button className="start-btn" onClick={handleStartProcess}>Başla</button>
        </div>
        <div className="hero-vector">
          <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=350" alt="SweetBox Cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
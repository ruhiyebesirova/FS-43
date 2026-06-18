import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { useGlobalContext } from '../context/AppContext';
import './Home.css';

const Home = () => {
  //const { user } = useGlobalContext();
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
          <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRdu7FwPUCNvoH7sLmb-LnhvXZ2hMuY8GaJwjDrW0w2F9m9ByKMHaTFIoaDN37fnGSwUuy0eAaANohWOnQ" />
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import './Animation.css';
import shhip from '../../assets/shhip.png';

const Animation = () => {
  return (
    <div className="ocean-container">
      <div className="animation-container">
        <img src={shhip} alt="Sailing ship" className="sailing-ship" />
        <p className="fade-in-text">
          Providing Competent, Discrete, Practical and Timely Legal Services
        </p>
      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>
  );
};

export default Animation;

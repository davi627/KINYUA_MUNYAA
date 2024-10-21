import React from 'react';
import './Home.css';
import law from '../../assets/law.jpg';

const Home = () => {
  return (
    <div className="home-section">
      <img src={law} alt="Law" className="background-img" />
      <div className="watermark">
        <h1>WELCOME TO KINYUA, MUYAA & CO ADVOCATES</h1>
        <p className="animated-text">
          Providing Competent, Discrete, Practical and Timely Legal Services
        </p>
      </div>
    </div>
  );
};

export default Home;

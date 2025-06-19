import React from 'react';
import './Home.css'; // Import the CSS file
import sampleImage from '../assets/sample.jpg'; // Replace with your image path

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="banner">
        <div className="banner-left">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Ex- UST, now TCS, next loading
          </p>
        </div>
        <div className="banner-right">
          <img src={sampleImage} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Home;

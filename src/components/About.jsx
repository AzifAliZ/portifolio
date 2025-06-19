import React from 'react';
import './About.css';
import myPhoto from '../assets/azif.jpg'; // Replace with your photo

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-banner">
        <div className="about-left">
          <h2>Azif Ali Z</h2>
          <div className="about-details">
            <p><strong>Name:</strong> Azif Ali Z</p>
            <p><strong>Age:</strong> 22</p>
            <p><strong>Email:</strong> asif@</p>
            <p><strong>Location:</strong> Kerala, India</p>
            <p><strong>Profession:</strong> Full Stack Developer</p>
            <p><strong>Age:</strong> 22</p>
            <p><strong>Email:</strong> asif@</p>
            <p><strong>Location:</strong> Kerala, India</p>
            <p><strong>Profession:</strong> Full Stack Developer</p>
            <p><strong>Age:</strong> 22</p>
            <p><strong>Email:</strong> asif@</p>
            <p><strong>Location:</strong> Kerala, India</p>
            <p><strong>Profession:</strong> Full Stack Developer</p>
          </div>
        </div>
        <div className="about-right">
          <img src={myPhoto} alt="Asif Ali" />
        </div>
      </div>
    </section>
  );
};

export default About;

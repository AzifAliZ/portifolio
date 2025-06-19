// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaDiscord, FaInstagram } from "react-icons/fa";
import donation from '../assets/donation-image.jpg';

const Contact = () => {
  const [showImage, setShowImage] = useState(false);

  const handlePopup = () => {
    setShowImage(!showImage);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-banner">
        <h2 className="contact-heading">Connect with Me</h2>
        <div className="contact-icons">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:youremail@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://discord.com/" target="_blank" rel="noreferrer"><FaDiscord /></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>

        <div className="donation">
          <p>Like my work? You can support me here 👇</p>
          <button onClick={handlePopup}>Donate</button>
        </div>

        {showImage && (
          <div className="popup">
             <img src={donation}  alt="Donation QR or Info" />
            <button onClick={handlePopup}>Close</button>
          </div>
        )}

        <footer className="footer">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

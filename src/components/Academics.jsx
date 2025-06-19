import React, { useState, useEffect, useRef } from 'react';
import './Academics.css';
import academicGif from '../assets/academic.gif'; // Replace with your actual GIF

const Academics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [gifKey, setGifKey] = useState(0);
  const sectionRef = useRef();

  useEffect(() => {
  const refElement = sectionRef.current;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setGifKey(prev => prev + 1); // Reset GIF
      }
    },
    { threshold: 0.5 }
  );

  if (refElement) {
    observer.observe(refElement);
  }

  return () => {
    if (refElement) {
      observer.unobserve(refElement);
    }
  };
}, []);


  return (
    <section id="academics" className="academic-section" ref={sectionRef}>
      
      {isVisible && (
        <img
          key={gifKey}
          src={academicGif}
          alt="Academic Animation"
          className="academic-gif"
        />
      )}
    </section>
  );
};

export default Academics;

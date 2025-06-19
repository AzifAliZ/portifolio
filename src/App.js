import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [navbarOpacity, setNavbarOpacity] = useState(1);

  useEffect(() => {
    const sections = ['home', 'about', 'academics', 'projects', 'skills', 'contact'];
    let scrollTimeout;

    const handleScroll = () => {
      // Set low opacity while scrolling
      setNavbarOpacity(0.5);

      // Clear previous timeout and set new timeout to detect scroll stop
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Scrolling stopped, restore opacity
        setNavbarOpacity(1);
      }, 200); // 200ms after last scroll event

      // Detect active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Call once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} opacity={navbarOpacity} />
      <Home />
      <About />
      <Academics />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;

import React from 'react';
import './Navbar.css'; 
const Navbar = ({ activeSection, opacity }) => {
  const sections = ['home', 'about', 'academics', 'projects', 'skills', 'contact'];

  const handleClick = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar" style={{ opacity }}>
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={(e) => handleClick(e, section)}
              className={activeSection === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

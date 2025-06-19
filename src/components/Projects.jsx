import React, { useState } from 'react';
import './Projects.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaPython, FaJava, FaDatabase,
  FaCuttlefish, FaCode, FaHashtag, FaCube, FaEthereum
} from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, link: 'https://www.google.com/search?q=instagram&rlz=1C1DJPT_enIN1146IN1146&oq=instagram&gs_lcrp=EgZjaHJvbWUyFAgAEEUYORhDGIMBGLEDGIAEGIoFMg0IARAAGJECGIAEGIoFMg0IAhAAGJECGIAEGIoFMg0IAxAAGJECGIAEGIoFMhIIBBAAGEMYgwEYsQMYgAQYigUyDAgFEAAYQxiABBiKBTIMCAYQABhDGIAEGIoFMgwIBxAAGEMYgAQYigUyDAgIEAAYQxiABBiKBTIHCAkQABiPAtIBCTg2NDNqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8/html-projects' },
  { name: 'CSS', icon: <FaCss3Alt />, link: 'https://github.com/yourusername/css-projects' },
  { name: 'JavaScript', icon: <FaJs />, link: 'https://github.com/yourusername/js-projects' },
  { name: 'Node.js', icon: <FaNodeJs />, link: 'https://github.com/yourusername/nodejs-projects' },
  { name: 'React.js', icon: <FaReact />, link: 'https://github.com/yourusername/react-projects' },
  { name: 'SQL', icon: <FaDatabase />, link: 'https://github.com/yourusername/sql-projects' },
  { name: 'Python', icon: <FaPython />, link: 'https://github.com/yourusername/python-projects' },
  { name: 'Java', icon: <FaJava />, link: 'https://github.com/yourusername/java-projects' },
  { name: 'C', icon: <FaCuttlefish />, link: 'https://github.com/yourusername/c-projects' },
  { name: 'C++', icon: <FaCode />, link: 'https://github.com/yourusername/cpp-projects' },
  { name: 'C#', icon: <FaHashtag />, link: 'https://github.com/yourusername/csharp-projects' },
  { name: 'Blockchain', icon: <FaCube />, link: 'https://github.com/yourusername/blockchain-projects' },
  { name: 'Solidity', icon: <FaEthereum />, link: 'https://github.com/yourusername/solidity-projects' },
];

const Projects = () => {
  const [activeSkill, setActiveSkill] = useState({ name: 'Skill', link: '#' });

  return (
    <section id="projects" className="projects-section">
      <div className="solar-banner">
        <a
          href={activeSkill.link}
          target="_blank"
          rel="noopener noreferrer"
          className="center-text"
        >
          {activeSkill.name}
        </a>
        <div className="orbit-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="orbit-icon"
              style={{ transform: `rotate(${(index * 360) / skills.length}deg) translateX(180px) rotate(-${(index * 360) / skills.length}deg)` }}
              onClick={() => setActiveSkill({ name: skill.name, link: skill.link })}
            >
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import './Skills.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaDatabase,
  FaPython, FaJava, FaCuttlefish, FaCode, FaBitcoin, FaCube
} from 'react-icons/fa';
import { Link } from 'react-scroll'; // for smooth scrolling

const skillsData = [
  { name: 'Blockchain', icon: <FaBitcoin />, description: 'I use blockchain for decentralized applications and data transparency.' },
  { name: 'C', icon: <FaCuttlefish />, description: 'C is the language I started with. I use it for low-level system programming.' },
  { name: 'C#', icon: <FaCode />, description: 'I use C# for Windows and Unity app development.' },
  { name: 'C++', icon: <FaCode />, description: 'I use C++ for OOPs concepts and competitive programming.' },
  { name: 'CSS', icon: <FaCss3Alt />, description: 'I use CSS to make beautiful, responsive UIs.' },
  { name: 'HTML', icon: <FaHtml5 />, description: 'I use HTML to structure web pages with semantic tags.' },
  { name: 'Java', icon: <FaJava />, description: 'I use Java for object-oriented concepts and backend development.' },
  { name: 'JavaScript', icon: <FaJs />, description: 'JavaScript powers the interactivity of my web applications.' },
  { name: 'NodeJS', icon: <FaNodeJs />, description: 'I use NodeJS for backend APIs and server-side logic.' },
  { name: 'Python', icon: <FaPython />, description: 'I use Python for scripting, automation, and web backends.' },
  { name: 'ReactJS', icon: <FaReact />, description: 'I build reactive UIs using ReactJS and hooks.' },
  { name: 'Solidity', icon: <FaCube />, description: 'Solidity helps me write smart contracts on Ethereum.' },
  { name: 'SQL', icon: <FaDatabase />, description: 'I use SQL to manage and query relational databases.' },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div id="skills" className="skills-section">

      <div className="skills-banner">
        {/* Left Column */}
        <div className="skills-list">
          <h2>My Skills</h2>
          <ul className={`skills-columns columns-${skillsData.length}`}>
            {skillsData
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((skill) => (
                <li key={skill.name} onClick={() => setSelectedSkill(skill)}>
                  {skill.name}
                </li>
              ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className="skills-details">
          {selectedSkill ? (
            <>
              <h2>{selectedSkill.name}</h2>
              <p>{selectedSkill.description}</p>
              <div className="skill-icon">{selectedSkill.icon}</div>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="see-projects-link"
              >
                See Projects →
              </Link>
            </>
          ) : (
            <p>Select a skill to see details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;

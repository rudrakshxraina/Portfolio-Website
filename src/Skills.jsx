import { useNavigate } from "react-router-dom";
import Header from './CardNav.jsx';
import Aurora from './Aurora';
import Dock from './Dock';
import logo from './assets/react.svg';
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscCode
} from 'react-icons/vsc';
import './Skills.css';
import { RESUME_URL } from './config';

export default function Skills() {
  const navigate = useNavigate();

  // Nav items configuration
  const navItems = [
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Coming Soon", ariaLabel: "In Progress" },
        { label: "Coming Soon", ariaLabel: "In Progress" },
        { label: "Coming Soon", ariaLabel: "In Progress" }
      ]
    },
    {
      label: "Resources",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "Resume",
          href: RESUME_URL,
          ariaLabel: "Resume"
        },
        {
          label: "HackerRank Certificate",
          href: "https://www.hackerrank.com/certificates/fa03f78ba924",
          ariaLabel: "View HackerRank Certificate"
        },
        {
          label: "Forage Certificate",
          href: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_696c861ab1d14321bb3e9433_1768725411989_completion_certificate.pdf",
          ariaLabel: "View Forage Certificate"
        }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          href: "mailto:rudraksh.raina.official@gmail.com",
          ariaLabel: "Email"
        },
        {
          label: "GitHub",
          href: "https://github.com/rudrakshxraina",
          ariaLabel: "GitHub"
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/rudraksh-raina/",
          ariaLabel: "LinkedIn"
        }
      ]
    }
  ];

  // Dock items configuration
  const dockItems = [
    {
      icon: <VscHome size={18} />,
      label: 'Home',
      onClick: () => navigate('/')
    },
    {
      icon: <VscArchive size={18} />,
      label: 'Projects',
      onClick: () => navigate('/projects')
    },
    {
      icon: <VscAccount size={18} />,
      label: 'Links',
      onClick: () => navigate('/links')
    },
    {
      icon: <VscCode size={18} />,
      label: 'Skills',
      onClick: () => navigate('/skills')
    }
  ];

  const skills = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" }
  ];

  return (
    <>
      {/* Top Navigation */}
      <Header
        logo={logo}
        logoAlt="Rudraksh Raina"
        items={navItems}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
        theme="dark"
      />

      {/* Background Aurora Effect */}
      <Aurora
        colorStops={["#5227FF", "#5227FF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />

      {/* Skills Page Content */}
      <div className="skills-page">
        <div className="skills-container">
          <h1 className="skills-title">My Skills</h1>
          <p className="skills-subtitle">Technologies and languages I work with</p>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-logo-container">
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    className="skill-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="skill-logo-fallback">
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Dock */}
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </>
  );
}

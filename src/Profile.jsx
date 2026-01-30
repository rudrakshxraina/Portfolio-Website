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
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope
} from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import './Profile.css';
import { RESUME_URL } from './config';

export default function Links() {
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

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/rudrakshxraina",
      icon: <FaGithub size={24} />,
      color: "var(--text-color)"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rudraksh-raina/",
      icon: <FaLinkedin size={24} />,
      color: "#0077b5"
    },
    {
      name: "Email",
      url: "mailto:rudraksh.raina.official@gmail.com",
      icon: <FaEnvelope size={24} />,
      color: "#ea4335"
    }
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

      {/* Links Page Content */}
      <div className="profile-page">
        <div className="profile-container">
          <h1 className="profile-title">Connect With Me</h1>
          <p className="profile-subtitle">Find me on these platforms and check out my work</p>
          
          <div className="links-grid">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
              >
                <div className="link-icon" style={{ color: link.color }}>
                  {link.icon}
                </div>
                <div className="link-content">
                  <span className="link-name">{link.name}</span>
                  <GoArrowUpRight className="link-arrow" />
                </div>
              </a>
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

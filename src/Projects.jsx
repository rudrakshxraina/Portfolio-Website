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
import './Projects.css';
import { RESUME_URL } from './config';
import { projects } from './data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const navigate = useNavigate();

  // Nav items configuration
  const navItems = [
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "G.D MUN Website", href: "https://skixtz.github.io/GDMun2023/", ariaLabel: "G.D MUN Demo" },
        { label: "Old Portfolio", href: "https://rudrakshxraina.github.io/Old-Portfolio/", ariaLabel: "Old Portfolio Demo" },
        { label: "New Portfolio", href: "https://rudrakshxraina.github.io/Portfolio-Website/", ariaLabel: "New Portfolio Demo" }
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

      {/* Projects Page Content */}
      <div className="projects-page">
        <div className="projects-container">
          <div className="projects-content">
        <h1 className="projects-title">Projects</h1>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
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

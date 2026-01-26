// ================================
// Core Imports
// ================================
import Header from './CardNav.jsx';
import Aurora from './Aurora';
import Dock from './Dock';
import Contact from "./Contact";
import Projects from "./Projects";
import Links from "./Profile";
import Skills from "./Skills";
import Home from "./Home";
import { Routes, Route, useNavigate } from "react-router-dom";


import logo from './assets/react.svg';

// ================================
// Icons (Dock)
// ================================
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscCode
} from 'react-icons/vsc';

// ================================
// App Component
// ================================
function App() {
  const navigate = useNavigate();

  // =========================================================
  // NAVBAR CONFIGURATION
  // Controls the top navigation (CardNav)
  // =========================================================
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
          href: "https://drive.google.com/file/d/1P4-y8iqUbEfJ6KIVCIbYq817C0XBYwTo/view?usp=sharing",
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

  // =========================================================
  // DOCK CONFIGURATION
  // Bottom quick-access navigation
  // (Keep minimal & action-oriented)
  // =========================================================
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

  // =========================================================
  // RENDER
  // =========================================================
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

      {/* Routes - Home is the default landing page */}
      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', width: '100%' }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-website" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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

export default App;

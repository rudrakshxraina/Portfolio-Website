import { useState } from "react";
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
import './Contact.css';
import { useToast } from './context/ToastContext';
import { RESUME_URL } from './config';

export default function Contact() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    // 🔑 ACCESS KEY LOCATION
    // Create a .env file in project root and add:
    // VITE_WEB3FORMS_KEY=your_access_key_here
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    // Optional but recommended
    formData.append("subject", "New Portfolio Contact Message");
    formData.append("from_name", "Rudraksh Raina Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showToast("Message sent successfully ✅", 'success');
        setForm({ name: "", email: "", message: "" });
      } else {
        showToast("Something went wrong ❌", 'error');
      }
    } catch (error) {
      showToast("Network error. Please try again later ⚠️", 'error');
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <>
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

      <Aurora
        colorStops={["#5227FF", "#5227FF", "#5227FF"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />

      <div className="contact-page">
        <div className="contact-container">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your message here..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit-button"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </>
  );
}

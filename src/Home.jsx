import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './Home.css';
import { RESUME_URL } from './config';

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4')
    .from(descriptionRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3')
    .from(socialRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.2');
  }, []);

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-hero">
          <div className="home-badge">Portfolio</div>
          <h1 ref={titleRef} className="home-title">
            Rudraksh Raina
          </h1>
          <p ref={subtitleRef} className="home-subtitle">
            Full Stack Developer & Problem Solver
          </p>
          <p ref={descriptionRef} className="home-description">
            I build beautiful, functional web applications with modern technologies. 
            Passionate about creating seamless user experiences and solving complex problems.
          </p>
          
          <div ref={socialRef} className="home-social">
            <a 
              href="https://github.com/rudrakshxraina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/rudraksh-raina/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:rudraksh.raina.official@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
              <span>Email</span>
            </a>
            <a 
              href={RESUME_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link resume-link"
              aria-label="Resume"
            >
              <FaFileAlt size={20} />
              <span>Resume</span>
            </a>
          </div>

          <div className="home-tech-preview">
            <span className="tech-label">Tech Stack:</span>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Java</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

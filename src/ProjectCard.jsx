import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

export default function ProjectCard({ project, index = 0 }) {
  const Container = project.demoUrl ? 'a' : 'article';
  const containerProps = project.demoUrl
    ? { href: project.demoUrl, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Container
      id={project.id}
      className="project-card"
      aria-labelledby={`${project.id}-title`}
      style={{ ['--delay']: `${index * 80}ms` }}
      {...containerProps}
    >
      {project.featured && <span className="project-badge">Featured</span>}

      {project.image ? (
        <div className="project-media">
          <img src={project.image} alt={`${project.title} screenshot`} />
        </div>
      ) : null}

      <div className="project-header">
        <div id={`${project.id}-title`} className="project-title">{project.title}</div>
        <div className="project-year">{project.year}</div>
      </div>

      <div className="project-body">
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>

        <ul className="project-bullets">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="project-actions">
        {project.demoUrl ? (
          <span className="btn btn-primary" aria-hidden>
            <span>View Site</span>
            <FaExternalLinkAlt aria-hidden />
          </span>
        ) : (
          <button className="btn btn-disabled" disabled aria-label={`No demo available for ${project.title}`}>No Demo</button>
        )}
      </div>
    </Container>
  );
}

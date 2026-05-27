import React from 'react'

const projectsData = [
  {
    icon: '🍔',
    iconBg: 'rgba(255,107,53,0.15)',
    tag: 'Full Stack',
    title: 'Swiggy Clone',
    desc: 'A feature-rich food delivery application inspired by Swiggy. Built with React, featuring real restaurant data via API, cart management, dynamic routing, and a polished mobile-first UI.',
    stack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Parcel', 'REST API'],
    github: 'https://github.com/aneesh-dev03/swiggy-clone',
    live: '',
  },
  {
    icon: '🎬',
    iconBg: 'rgba(229,9,20,0.12)',
    tag: 'In Progress',
    title: 'Netflix Clone',
    desc: 'A Netflix-inspired streaming platform UI with movie browsing, trailers, and authentication. Building with React and Firebase, featuring a real movie database via TMDB API.',
    stack: ['React.js', 'Firebase', 'TMDB API', 'Tailwind CSS'],
    github: '',
    live: '',
  },
  {
    icon: '💡',
    iconBg: 'rgba(232,255,71,0.1)',
    tag: 'Coming Soon',
    title: 'More Projects',
    desc: 'Actively building and exploring new ideas — from DSA visualizers to EE simulation tools. Watch this space as the portfolio grows with each semester.',
    stack: ['React', 'C++', 'JavaScript'],
    github: '',
    live: '',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="section-header reveal">
        <span className="section-num">03 /</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>
      <div className="projects-grid">
        {projectsData.map((p, i) => (
          <div className="project-card reveal" key={p.title} style={{ transitionDelay: `${i * 0.12}s` }}>
            <div className="project-card-top">
              <div className="project-icon" style={{ background: p.iconBg }}>{p.icon}</div>
              <span className="project-tag">{p.tag}</span>
            </div>
            <div className="project-body">
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map(s => <span className="stack-chip" key={s}>{s}</span>)}
              </div>
              {(p.github || p.live) && (
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link project-link--live">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
import React from 'react'

const projectsData = [
  { icon:'🍔', iconBg:'rgba(255,107,53,0.15)', tag:'Full Stack', title:'Swiggy Clone', desc:'A feature-rich food delivery application inspired by Swiggy. Built with React, featuring real restaurant data via API, cart management, dynamic routing, and a polished mobile-first UI.', stack:['React.js','React Router','Context API','Tailwind CSS','REST API'] },
  { icon:'💡', iconBg:'rgba(232,255,71,0.1)', tag:'Coming Soon', title:'More Projects', desc:'Actively building and exploring new ideas — from DSA visualizers to EE simulation tools. Watch this space as the portfolio grows with each semester.', stack:['React','C++','JavaScript'] },
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
        {projectsData.map((p,i) => (
          <div className="project-card reveal" key={p.title} style={{transitionDelay:`${i*0.12}s`}}>
            <div className="project-card-top">
              <div className="project-icon" style={{background:p.iconBg}}>{p.icon}</div>
              <span className="project-tag">{p.tag}</span>
            </div>
            <div className="project-body">
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">{p.stack.map(s => <span className="stack-chip" key={s}>{s}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-orb" />
      <div className="hero-badge"><span className="hero-badge-dot" />Available for Internships & Collabs</div>
      <h1 className="hero-name">Aneesh<br /><span className="hero-name-accent">Kumar.</span></h1>
      <p className="hero-tagline">
        <strong>Electrical Engineering @ NIT Hamirpur</strong> — building at the intersection of
        hardware thinking and modern web. React developer, problem solver, <strong>LeetCode grinder</strong>.
      </p>
      <div className="hero-cta-row">
        <a href="#projects" className="btn-primary">View Projects →</a>
        <a href="#contact" className="btn-outline">Get in Touch</a>
      </div>
      <div className="hero-stats">
        {[['60+','LeetCode Problems'],['1','Full-Stack Project'],['2025','Batch Year'],['EE','Branch']].map(([n,l]) => (
          <div className="stat-item" key={l}>
            <div className="stat-num">{n}</div>
            <div className="stat-label">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero

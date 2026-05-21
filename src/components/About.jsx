import React from 'react'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="section-header reveal">
        <span className="section-num">01 /</span>
        <h2 className="section-title">About</h2>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>Hey! I'm <strong>Aneesh Kumar</strong>, a first-year <span className="about-highlight">Electrical Engineering</span> student at <strong>NIT Hamirpur</strong> (Batch 2025–2029). While my degree grounds me in circuits and systems, my passion runs deep in software — particularly building sleek, performant web applications with React.</p>
          <p>I love the challenge of translating complex ideas into clean user interfaces. Whether it's designing component architecture or debugging a stubborn algorithm on LeetCode at midnight, I'm all in.</p>
          <p>Currently sharpening my DSA fundamentals actively while expanding my fullstack skills. I believe the best engineers understand both the hardware beneath them and the abstractions above.</p>
        </div>
        <div className="reveal">
          <div className="about-card">
            <div className="about-card-title">Education & Activity</div>
            <div className="edu-item">
              <div className="edu-inst">NIT Hamirpur</div>
              <div className="edu-degree">B.Tech — Electrical Engineering</div>
              <div className="edu-year">2025 – 2029</div>
            </div>
            <div className="edu-item">
              <div className="edu-inst">Skills Focus</div>
              <div className="edu-degree">React · JavaScript · DSA · C++</div>
              <div className="edu-year">Ongoing</div>
            </div>
            <div className="edu-item">
              <div className="edu-inst">LeetCode</div>
              <div className="edu-degree">60+ problems solved & counting</div>
              <div className="edu-year" style={{color:'var(--accent2)'}}>Active daily ⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

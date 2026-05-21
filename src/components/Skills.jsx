import React from 'react'

const skillsData = [
  { category:'Frontend', name:'React Ecosystem', tags:['React.js','JSX','React Router','Hooks','Context API'] },
  { category:'Languages', name:'Core Languages', tags:['JavaScript (ES6+)','C++','HTML5','CSS3'] },
  { category:'Styling', name:'UI & Design', tags:['CSS3','Tailwind CSS','Responsive Design','Flexbox','Grid'] },
  { category:'Tools', name:'Dev Tooling', tags:['Git','GitHub','VS Code','npm','Vite'] },
  { category:'DSA', name:'Algorithms & DS', tags:['Arrays','Strings','Linked Lists','Recursion','Sorting'] },
  { category:'Electrical', name:'Core Engineering', tags:['Circuit Theory','Signals','Electronics','MATLAB'] },
]

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-header reveal">
        <span className="section-num">02 /</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
      </div>
      <div className="skills-grid">
        {skillsData.map((s,i) => (
          <div className="skill-card reveal" key={s.name} style={{transitionDelay:`${i*0.08}s`}}>
            <div className="skill-cat">{s.category}</div>
            <div className="skill-name">{s.name}</div>
            <div className="skill-tags">{s.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

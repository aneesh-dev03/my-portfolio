import React, { useState, useEffect, useRef } from 'react'

const lcStats = [
  { label:'Easy', count:30, pct:50, colorClass:'fill-easy' },
  { label:'Medium', count:25, pct:42, colorClass:'fill-medium' },
  { label:'Hard', count:5, pct:8, colorClass:'fill-hard' },
]

const LeetCode = () => {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setAnimated(true) }, {threshold:0.3})
    if(ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <section id="leetcode" className="section leet-section" ref={ref}>
      <div className="section-header reveal">
        <span className="section-num">04 /</span>
        <h2 className="section-title">LeetCode</h2>
        <div className="section-line" />
      </div>
      <div className="leet-grid">
        <div className="reveal">
          <div className="leet-big-num">60+</div>
          <p className="leet-label">Problems solved and <strong>actively grinding</strong>.<br />Focused on building strong DSA foundations —<br />arrays, strings, recursion, and more.</p>
          <div style={{marginTop:'2rem'}}>
         <a href="https://leetcode.com/u/aneesh-dev03/" target="_blank" rel="noreferrer" className="btn-outline">View Profile →</a>
          </div>
        </div>
        <div className="leet-bars reveal">
          {lcStats.map(s => (
            <div className="leet-bar-row" key={s.label}>
              <div className="leet-bar-top"><span className="diff-label">{s.label}</span><span className="diff-count">{s.count} solved</span></div>
              <div className="leet-bar-track"><div className={`leet-bar-fill ${s.colorClass}`} style={{width: animated ? `${s.pct}%` : '0%'}} /></div>
            </div>
          ))}
          <p style={{fontSize:'11px',color:'var(--muted)',marginTop:'1rem'}}>* Approximate distribution — growing daily</p>
        </div>
      </div>
    </section>
  )
}

export default LeetCode

import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <nav className="nav" style={{boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none'}}>
      <a href="#hero" className="nav-logo">AK<span>.</span></a>
      <ul className="nav-links">
        {[['About','#about'],['Skills','#skills'],['Projects','#projects'],['LeetCode','#leetcode'],['Contact','#contact']].map(([l,h]) => (
          <li key={h}><a href={h}>{l}</a></li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

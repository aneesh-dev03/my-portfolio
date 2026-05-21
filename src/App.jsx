import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LeetCode from './components/LeetCode'
import Contact from './components/Contact'
import useCursor from './components/useCursor'
import useScrollReveal from './components/useScrollReveal'

const App = () => {
  useCursor()
  useScrollReveal()
  return (
    <>
      <div className="cursor" />
      <div className="cursor-ring" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LeetCode />
        <Contact />
      </main>
      <footer className="footer">
        <p className="footer-text">Designed & built by <span>Aneesh Kumar</span></p>
        <p className="footer-text">NIT Hamirpur · EE · <span>2025–2029</span></p>
      </footer>
    </>
  )
}

export default App

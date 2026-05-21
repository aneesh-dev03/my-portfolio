import { useEffect } from 'react'

const useCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const ring = document.querySelector('.cursor-ring')
    if(!cursor || !ring) return
    let ringX=0, ringY=0, mouseX=0, mouseY=0
    const moveCursor = (e) => {
      mouseX=e.clientX; mouseY=e.clientY
      cursor.style.left=`${mouseX}px`; cursor.style.top=`${mouseY}px`
    }
    let raf
    const animateRing = () => {
      ringX += (mouseX-ringX)*0.12; ringY += (mouseY-ringY)*0.12
      ring.style.left=`${ringX}px`; ring.style.top=`${ringY}px`
      raf = requestAnimationFrame(animateRing)
    }
    window.addEventListener('mousemove', moveCursor)
    raf = requestAnimationFrame(animateRing)
    return () => { window.removeEventListener('mousemove', moveCursor); cancelAnimationFrame(raf) }
  }, [])
}

export default useCursor

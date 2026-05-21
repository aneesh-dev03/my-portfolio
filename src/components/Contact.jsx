import React from 'react'

const socialLinks = [
  {
    icon:'⚡',
    iconBg:'rgba(232,255,71,0.1)',
    label:'LeetCode',
    sub:'60+ problems solved',
    href:'https://leetcode.com/aneesh-dev03/'
  },

  {
    icon:'🐙',
    iconBg:'rgba(255,255,255,0.05)',
    label:'GitHub',
    sub:'Check my repos',
    href:'https://github.com/aneesh-dev03'
  },

  {
    icon:'💼',
    iconBg:'rgba(0,119,181,0.15)',
    label:'LinkedIn',
    sub:"Let's connect",
    href:'https://www.linkedin.com/in/YOUR-USERNAME/'
  },
]

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="section-header reveal">
        <span className="section-num">05 /</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>
      <div className="contact-inner">
        <div className="reveal">
          <h3 className="contact-headline">Let's build<br />something <em>great</em><br />together.</h3>
          <p className="contact-sub">Open to internship opportunities, project collaborations, or just a good conversation about tech, EE, and everything in between.</p>
         <a
  href="mailto:aneeshsharma.work02@gmail.com"
  className="contact-email-link"
>
  ✉ aneeshsharma.work02@gmail.com
</a>
        </div>
        <div className="contact-links reveal">
          {socialLinks.map(s => (
            <a href={s.href} target="_blank" rel="noreferrer" className="social-link" key={s.label}>
              <div className="social-link-left">
                <div className="social-link-icon" style={{background:s.iconBg}}>{s.icon}</div>
                <div><div className="social-link-label">{s.label}</div><div className="social-link-sub">{s.sub}</div></div>
              </div>
              <span className="social-link-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

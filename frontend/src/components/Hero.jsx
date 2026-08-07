import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero-section">
      <div className="left-section">
        <h1>Analyze Your Skills <br /> Bridge your <br /><span>Career Gap</span></h1>
        <p>upload your resume to get ai powered insights to discover skill gaps,track fast markets,
          and build Link smart career</p>
        <Link to="/login" className="start-btn">Get Started Free &rarr;</Link>
        <div className="secure-section">
          <p> <i className="fa-solid fa-shield-halved"></i> secure and safe | <i className="fa-solid fa-credit-card"></i> No credit Card required </p>
        </div>
      </div>
      <div className="right-section">
        <img src="references/ChatGPT Image Jun 30, 2026, 09_03_44 PM.png" alt="Resume analysis illustration" />
      </div>
    </section>
  )
}

export default Hero
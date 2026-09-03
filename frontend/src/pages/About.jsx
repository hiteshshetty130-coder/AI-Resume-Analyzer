import React from 'react'
import '../about.css';
import Navbar from '../components/Navbar';

//UI of the About Page 
function About() { 
  return (
    <>
  <Navbar/>
    <div className="about-page">

      {/* HEADER */}
      <div className="about-header">
        <span className="about-label">ABOUT US</span>
        <h1>We Help You Bridge Your Career Gap</h1>
        <p>Resume Skill Gap is an AI-powered platform that analyzes your resume, finds skill gaps, and helps you grow your career smarter.</p>
      </div>

      {/* CARDS */}
      <div className="about-cards">
        <div className="about-card">
          <div className="about-card-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>To empower job seekers with AI-driven insights that help them understand their skill gaps and take the right steps to land their dream job.</p>
        </div>
        <div className="about-card">
          <div className="about-card-icon">👁️</div>
          <h3>Our Vision</h3>
          <p>A world where every professional has access to personalized career guidance and can grow without limits using the power of AI.</p>
        </div>
        <div className="about-card">
          <div className="about-card-icon">💡</div>
          <h3>Why We Built This</h3>
          <p>We noticed that most people don't know what skills they are missing. So we built a tool that tells you exactly what to learn and where to start.</p>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="tech-section">
        <h2>Built With</h2>
        <p>Modern technologies powering your career growth</p>
        <div className="tech-badges">
          <span className="tech-badge">⚗️ Flask</span>
          <span className="tech-badge">🐍 Python</span>
          <span className="tech-badge">🤖 AI / NLP</span>
          <span className="tech-badge">⚛️ React</span>
          <span className="tech-badge">🗄️ MYSQL</span>
        </div>
      </div>

      {/* TEAM */}
      <div className="team-section">
        <h2>Meet the Builder</h2>
        <p>The person behind Resume Skill Gap</p>
        <div className="team-card">
          <div className="team-avatar">H</div>
          <h3>Hitesh Shetty</h3>
          <span className="team-role">Full Stack Developer & AI Enthusiast</span>
          <p className="team-bio">Passionate about building tools that make career growth easier and smarter using the power of AI and modern web technologies.</p>
          <div className="team-links">
            <a href="#" className="team-link"><i className="fa-brands fa-github"></i> GitHub</a>
            <a href="#" className="team-link"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Ready to Analyze Your Resume?</h2>
        <p>Join thousands of job seekers who are bridging their career gap.</p>
        
      </div>

    </div>
    </>
  )
}

export default About
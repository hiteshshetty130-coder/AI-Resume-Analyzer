import React from 'react'

function Features() {
  return (
    <section className="features-section">
  <h1>WHY CHOOSE US</h1>
  <h2>Everything You Need to Know</h2>
  <p>Powerful tools and insights to help you identify opportunities, improve your skills, and grow your career.</p>

  <div className="features-intro-cards">
    <div className="intro-card">
      <h1 className="icon-blue"><i className="fa-solid fa-chart-simple"></i></h1>
      <h3>Smart Skill Analysis</h3>
      <p>Upload your resume and get a deep analysis of your skills with AI-powered accuracy.</p>
      
    </div>

    <div className="intro-card">
      <h1 className="icon-green"><i className="fa-solid fa-puzzle-piece" style={{color: "green"}}></i></h1>
      <h3>Discover Skill Gaps</h3>
      <p>Identify the exact skills you're missing compared to in-demand job roles in the market.</p>
      
    </div>

    <div className="intro-card">
      <h1 className="icon-purple"><i className="fa-solid fa-graduation-cap" style={{color: "purple"}}></i></h1>
      <h3>Personalized Learning</h3>
      <p>Get a tailored learning path with recommended courses and resources to upskill effectively.</p>
      
    </div>
  </div>
</section>
  )
}

export default Features
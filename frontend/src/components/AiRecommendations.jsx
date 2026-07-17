import React from 'react'

function AiRecommendations() {
  const recommendations = [
    {
      title: "Learn React Fundamentals",
      desc: "React is a popular JavaScript library for building user interfaces."
    },
    {
      title: "Build a React Project",
      desc: "Practice by building a real-world project to strengthen your skills."
    },
    {
      title: "Understand Component Lifecycle & Hooks",
      desc: "Master React Hooks like useState, useEffect, useContext."
    },
    {
      title: "Explore Advanced Topics",
      desc: "Learn about React Router, State Management (Redux), and more."
    }
  ]

  return (
    <div className="ai-section">

      <div className="ai-header">
        <span>🧑‍💻</span>
        <div>
          <h2>AI Learning Recommendations</h2>
          <p>Personalized suggestions to improve your skills and match the job better</p>
        </div>
      </div>

      <div className="ai-body">

        <div className="ai-steps">
          
        </div>

        <div className="ai-image">
          <img src="references/Recommndation.png" alt="recommendations illustration" />
        </div>

      </div>

      <div className="download-wrap">
        <button className="download-btn">
          ⬇️ Download Report PDF
        </button>
      </div>

    </div>
  )
}

export default AiRecommendations
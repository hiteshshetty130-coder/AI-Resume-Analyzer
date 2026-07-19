import React from 'react'

function AiRecommendations() {
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
          {recommendations.map((item,i)=>(
            <div className="ai-step" key={i}>
                <div className="step-num">{i+1}</div>
                <div className="step-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <a href="#" className='view-link'>View Resources --</a>
            </div>
          ))}  
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
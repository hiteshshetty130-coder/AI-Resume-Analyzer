import React from "react";

function AiRecommendations({ result }) {
  console.log(result.main_skills);
  return (
    <div className="ai-section">
      <div className="ai-header">
        <span>🧑‍💻</span>
        <div>
          <h2>AI Learning Recommendations</h2>
          <p>
            Personalized suggestions to improve your skills and match the job
            better
          </p>
        </div>
      </div>

      <div className="ai-body">
        <div className="ai-steps">
          {result.main_skills.map((skill, i) => (
            <div className="ai-step" key={i}>
              <div className="step-num">{i + 1}</div>
              <div className="step-content">
                <p>{skill}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ai-image">
          <img
            src="references/Recommndation.png"
            alt="recommendations illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default AiRecommendations;

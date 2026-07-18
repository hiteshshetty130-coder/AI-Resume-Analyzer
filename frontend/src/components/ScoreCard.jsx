import React from "react";

function ScoreCard({result}) {
  return (
    <div className="score-card">
      <div className="score-left">
        <div className="circle-score">
          <span>{result.percentage}</span>
          <p>Match Score</p>
        </div>

        <div className="score-text">
          <h3>🎉 Great Match!</h3>
          <p>You have matched {result.matched_skills.length} out of {result.Descrption_skills.length} required skills.</p>
        </div>
      </div>

      <div className="score-stats">
        <div className="stat-box">
          <span>✅</span>
          <h2>{result.resume_skills.length}</h2>
          <p>Resume Skills</p>
          <small>Detected in your resume</small>
        </div>
        <div className="stat-box">
          <span>💼</span>
          <h2>{result.Descrption_skills.length}</h2>
          <p>JD Skills</p>
          <small>Required by job</small>
        </div>
        <div className="stat-box">
          <span>✅</span>
          <h2>{result.matched_skills.length}</h2>
          <p>Matched Skills</p>
          <small className="green-text">You have</small>
        </div>
        <div className="stat-box">
          <span>❌</span>
          <h2>{result.missing_skills.length}</h2>
          <p>Missing Skills</p>
          <small className="red-text">To improve</small>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;

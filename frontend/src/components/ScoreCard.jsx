import React from "react";

function ScoreCard() {
  return (
    <div className="score-card">
      <div className="score-left">
        <div className="circle-score">
          <span>86%</span>
          <p>Match Score</p>
        </div>

        <div className="score-text">
          <h3>🎉 Great Match!</h3>
          <p>You have matched 6 out of 7 required skills.</p>
        </div>
      </div>

      <div className="score-stats">
        <div className="stat-box">
          <span>✅</span>
          <h2>18</h2>
          <p>Resume Skills</p>
          <small>Detected in your resume</small>
        </div>
        <div className="stat-box">
          <span>💼</span>
          <h2>7</h2>
          <p>JD Skills</p>
          <small>Required by job</small>
        </div>
        <div className="stat-box">
          <span>✅</span>
          <h2>6</h2>
          <p>Matched Skills</p>
          <small className="green-text">You have</small>
        </div>
        <div className="stat-box">
          <span>❌</span>
          <h2>1</h2>
          <p>Missing Skills</p>
          <small className="red-text">To improve</small>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;

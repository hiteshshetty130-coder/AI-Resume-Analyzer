import React from "react";
import { Link } from "react-router-dom";

function ResultHeader() {
  return (
    <div className="result-header">
      <Link to="/upload" className="back-link">
        ← Back to Dashboard
      </Link>

      <div className="result-title">
        <h1>Resume Analysis Results</h1>
        <p>Here's how your resume matches the job description</p>
      </div>

      <button className="analyze-btn-result">🔄 Analyze Another</button>
    </div>
  );
}

export default ResultHeader;

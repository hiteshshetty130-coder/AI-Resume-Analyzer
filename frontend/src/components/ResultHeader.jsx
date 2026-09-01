import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Header section of the final results page
function ResultHeader() {
  const navigate=useNavigate();
  const handleAnalyzeBtn=()=>{
      navigate("/upload")
  }
  return (
    <div className="result-header">
      <Link to="/upload" className="back-link">
        ← Back to Upload Section
      </Link>

      <div className="result-title">
        <h1>Resume Analysis Results</h1>
        <p>Here's how your resume matches the job description</p>
      </div>

      <button className="analyze-btn-result" onClick={handleAnalyzeBtn}>🔄 Analyze Another</button>
    </div>
  );
}

export default ResultHeader;

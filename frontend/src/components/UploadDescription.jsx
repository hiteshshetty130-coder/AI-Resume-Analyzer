import React from "react";

function UploadDescription({ AnalyzeResume ,  setDescriptionText, DescriptionText, handleClear,err }) {
  return (
    <div>
      <div className="job-descrption-section">
        <h3>2. Add Job Description</h3>
        <p>Paste the job description or upload the job file.</p>

        <div className="job-tabs">
          <button className="tab-btn active">
            <i className="fa-solid fa-pen"></i> Paste Text
          </button>
          <button className="tab-btn">
            <i className="fa-solid fa-upload"></i> Upload File
          </button>
        </div>

        <textarea
          className="job-textarea"
          placeholder="Paste the job description here..."
          id="jobText"
          value={DescriptionText}
          oninput="updateCount()"
          onChange={(e) => setDescriptionText(e.target.value)}
          maxLength={5000}
        ></textarea>
        <p className="char-count">
          <span id="count">{DescriptionText.length}</span> / 5000 characters
        </p>
      </div>
      {err &&
      <p className="error-mess"><i className="fa-solid fa-circle-exclamation"></i>{err}</p>}

      <div className="action-buttons">
        <button className="analyze-btn" onClick={AnalyzeResume}>
          <i className="fa-solid fa-wand-magic-sparkles"></i> Analyze Resume
        </button>
        <button className="clear-btn" onClick={handleClear}>
          <i className="fa-solid fa-trash"></i> Clear All
        </button>
      </div>
    </div>
  );
}

export default UploadDescription;

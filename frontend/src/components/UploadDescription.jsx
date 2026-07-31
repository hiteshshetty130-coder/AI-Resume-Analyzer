import React, { useState } from "react";

function UploadDescription({
  AnalyzeResume,
  setDescriptionText,
  DescriptionText,
  handleClear,
  err,
  jdFile,
  setJDFile,
  jdIcon,
  jdIconClass,
}) {
  const [mode, setMode] = useState("text");
  const handleJDFile = (e) => {
    setJDFile(e.target.files[0]);
  };

  const[isDragging,setIsDragging]=useState(false);

  const handleDragover=(e)=>{
    e.preventDefault();
    setIsDragging(true);
  }
  const handleDragLeave=(e)=>{
    setIsDragging(false);
  }
  const handleDrop=(e)=>{
    e.preventDefault();
    setIsDragging(false);
    const file=e.dataTransfer.files[0];
    if (file){
      setJDFile(file);
    }
  }


  return (
    <div>
      <div className="job-descrption-section">
        <h3>2. Add Job Description</h3>
        <p>Paste the job description or upload the job file.</p>

        <div className="job-tabs">
          <button
            className={mode === "text" ? "tab-btn active" : "tab-btn"}
            onClick={() => setMode("text")}
          >
            <i className="fa-solid fa-pen"></i> Paste Text
          </button>
          <button
            className={mode === "file" ? "tab-btn active" : "tab-btn"}
            onClick={() => setMode("file")}
          >
            <i className="fa-solid fa-upload"></i> Upload File
          </button>
        </div>

        {mode === "text" ? (
          <>
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
          </>
        ) : jdFile ? (
          <div className="file-preview">
            <div className="file-preview-left">
              <div className={`file-icon ${jdIconClass}`}>{jdIcon}</div>
              <div className="file-info">
                <h5>{jdFile.name}</h5>
                <span>{(jdFile.size / 1024).toFixed(1)} KB</span>
              </div>
            </div>
            <i className="fa-solid fa-circle-check success-icon"></i>
          </div>
        ) : (
          <div className={`jd-upload-box ${isDragging ? "drag-active" : ""}`} onDragOver={handleDragover} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <input
              type="file"
              id="jdFile"
              hidden
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleJDFile}
            />

            <label htmlFor="jdFile" className="jd-upload-label">
              <i className="fa-solid fa-cloud-arrow-up upload-icon"></i>
              <h4>Drag & Drop your Job Description here</h4>
              <p>or</p>
              <span className="browse-btn">Browse Files</span>
              <small>Supported formats: PDF, DOCX, TXT</small>
            </label>
          </div>
        )}
      </div>

      {err && (
        <p className="error-mess">
          <i className="fa-solid fa-circle-exclamation"></i>
          {err}
        </p>
      )}

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

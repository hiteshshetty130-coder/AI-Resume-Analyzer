import React, { useState } from "react";
import "../upload.css";

function UploadResume({resumeFile,setResumeFile,icon,iconclass}) {
  const [isDragging,setIsDragging]=useState(false);
  const handleDragOver=(e)=>{
    e.preventDefault();
    setIsDragging(true)
  } 
  const handleDragLeave=()=>{
    setIsDragging(false)
  }
  const handleDrop=(e)=>{
    e.preventDefault();
    setIsDragging(false)
    const file=e.dataTransfer.files[0];
    if (file){
      setResumeFile(file);
    }
  }


  return (
    <div>
      <div className="upload-page-header">
        <div className="upload-page-header-icon">
          <i className="fa-solid fa-cloud-arrow-up"></i>
        </div>
        <div className="upload-page-header-text">
          <h2>Upload Your Resume & Job Description</h2>
          <p>Get AI-powered insights and bridge your career gap</p>
        </div>
      </div>

      <div className="upload-section">
        <h3>1. Upload Your Resume</h3>
        <p>Upload your latest resume in PDF, DOCX, or TXT format.</p>

        <div className={`drop-browse-zone ${isDragging ? "drag-active" : ""}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
          <div className="dropzone-icon">
            <i className="fa-solid fa-cloud-arrow-up"></i>
          </div>
          <h4>Drag & drop your resume here</h4>
          <span>or</span>

          <label className="browse-btn">
            Browse Files{" "}
            <input
              type="file"
              style={{ display: "none" }}
              accept=".doc,.pdf,.txt"
              onChange={(e) => {
                setResumeFile(e.target.files[0]);
              }}
            />
          </label>

          <p className="dropzone-formats">
            Supported formats: PDF, DOCX, TXT &nbsp;•&nbsp; Max size: 10MB
          </p>
        </div>
        {resumeFile && (
        <div className="file-preview">
          <div className="file-preview-left">
            <div className={`file-icon ${iconclass}`} >
              {icon}
            </div>
            <div className="file-info">
              <h5>{resumeFile?.name}</h5>
              <span>{(resumeFile?.size/1024).toFixed(1)}KB</span>
            </div>
          </div>
          <div className="file-check">
            <i className="fa-solid fa-circle-check"></i>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default UploadResume;

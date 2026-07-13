import React from "react";

function UploadResume() {
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

                <div className="drop-browse-zone">
                    <div className="dropzone-icon">
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                    <h4>Drag & drop your resume here</h4>
                    <span>or</span>
                    <button className="browse-btn">Browse Files</button>
                    <p className="dropzone-formats">Supported formats: PDF, DOCX, TXT &nbsp;•&nbsp; Max size: 10MB</p>
                </div>

                <div className="file-preview">
                    <div className="file-preview-left">
                        <div className="file-icon">
                            <i className="fa-solid fa-file-pdf"></i>
                        </div>
                        <div className="file-info">
                            <h5>Arjun_Sharma_Resume.pdf</h5>
                            <span>245 KB</span>
                        </div>
                    </div>
                    <div className="file-check">
                        <i className="fa-solid fa-circle-check"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadResume
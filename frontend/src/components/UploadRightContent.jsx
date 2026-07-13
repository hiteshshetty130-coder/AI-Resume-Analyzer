import React from 'react'

function UploadRightContent() {
    return (
        <div>
            <div className="sidebar">

                <div className="sidebar-card">
                    <h4>How It Works</h4>

                    <div className="step-item">
                        <div className="step-icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                        <div className="step-text">
                            <h5>Upload Resume</h5>
                            <p>Upload your resume in PDF, DOCX, or TXT format.</p>
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-icon"><i className="fa-solid fa-file-lines"></i></div>
                        <div className="step-text">
                            <h5>Add Job Description</h5>
                            <p>Paste or upload the job description for accurate analysis.</p>
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-icon"><i className="fa-solid fa-chart-line"></i></div>
                        <div className="step-text">
                            <h5>Get AI Insights</h5>
                            <p>Our AI analyzes the match, finds skill gaps, and gives suggestions.</p>
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-icon"><i className="fa-solid fa-arrow-trend-up"></i></div>
                        <div className="step-text">
                            <h5>Improve & Grow</h5>
                            <p>Use insights and recommendations to improve your profile.</p>
                        </div>
                    </div>
                </div>


                <div className="sidebar-card">
                    <div className="tips-title">
                        <i className="fa-solid fa-lightbulb"></i> Tips for Better Results
                    </div>
                    <div className="tip-item"><i className="fa-solid fa-check"></i> Use the latest version of your resume</div>
                    <div className="tip-item"><i className="fa-solid fa-check"></i> Ensure the job description is complete</div>
                    <div className="tip-item"><i className="fa-solid fa-check"></i> Include all relevant skills and experiences</div>
                    <div className="tip-item"><i className="fa-solid fa-check"></i> PDF format gives the best results</div>
                    <div className="tip-item"><i className="fa-solid fa-check"></i> Keep your resume up-to-date</div>
                </div>


                <div className="sidebar-card">
                    <div className="data-safe">
                        <div className="data-safe-text">
                            <h4>Your Data is Safe</h4>
                            <p>We never share your data with anyone. Your uploads are 100% secure and private.</p>
                        </div>
                        <div className="data-safe-icon">
                            <i className="fa-solid fa-lock"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UploadRightContent
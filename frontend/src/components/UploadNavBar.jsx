import React from "react";

export default function UploadNavBar() {
  return (
    <nav className="upload-navbar">
      <div className="upload-nav-logo">
        <img src="references/main-logo.png" alt="Logo" />
        
      </div>

      <ul className="upload-nav-links">
        <li>
          <a href="#" className="active">
            <i className="fa-solid fa-cloud-arrow-up"></i> Upload Resume
          </a>
        </li>
       
        <li>
          <a href="#">
            <i className="fa-solid fa-chart-bar"></i> Analysis Results
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-lightbulb"></i> Market Insights
          </a>
        </li>
      </ul>

      <div className="upload-nav-action">
        <div className="upload-nav-bell">
          <i className="fa-regular fa-bell"></i>
          <span className="dot"></span>
        </div>
        <div className="upload-nav-profile">A</div>
      </div>
    </nav>
  );
}

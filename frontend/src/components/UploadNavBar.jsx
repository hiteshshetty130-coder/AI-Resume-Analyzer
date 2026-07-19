import React from "react";
import {NavLink} from "react-router-dom";

export default function UploadNavBar() {
  return (
    <nav className="upload-navbar">
      <div className="upload-nav-logo">
        <img src="references/main-logo.png" alt="Logo" />
        
      </div>

      <ul className="upload-nav-links">
        <li>
          <NavLink to="/upload" className={({isActive})=>(isActive?"active":"")}>
            <i className="fa-solid fa-cloud-arrow-up"></i> Upload Resume
          </NavLink>
        </li>
       
        
        <li>
          <NavLink to="#" className={({isActive})=>(isActive?"":"")}>
            <i className="fa-solid fa-lightbulb"></i> Market Insights
          </NavLink>
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

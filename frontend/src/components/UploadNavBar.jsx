import React from "react";
import {NavLink} from "react-router-dom";

export default function UploadNavBar() {
  const user=localStorage.getItem("userName");
  const initial=user ? user[0].toUpperCase() : "U";
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
        <div className="upload-nav-profile">{initial}</div>
      </div>
    </nav>
  );
}

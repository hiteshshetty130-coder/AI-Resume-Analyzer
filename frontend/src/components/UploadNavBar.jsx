import React, { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Dropdown from "./Dropdown";
import "../dropdown.css";

export default function UploadNavBar() {
  const user=localStorage.getItem("userName");
  const email=localStorage.getItem("userEmail");
  const initial=user ? user[0].toUpperCase() : "U";
  const [showdrop,setshowdrop]=useState(false);
  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.clear();
    navigate("/login");
  }


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

      <div className="upload-nav-action profile-container">
        <div className="upload-nav-profile" onClick={()=>setshowdrop(!showdrop)}>{initial}</div>
        {showdrop && (<Dropdown email={email} onLogout={handlelogout}/>)}
      </div>
    </nav>
  );
}

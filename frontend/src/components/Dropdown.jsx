import "../dropdown.css";
import React from "react";

//gets props from parent and displays the logout box with info to users
function Dropdown({email,onLogout}) {
  const user=localStorage.getItem("userName");
  const initial=user ? user[0].toUpperCase() : "U";
  return (
    <div className="dropdown">

      <div className="dropdown-top">
        <div className="dropdown-avatar">{initial}</div>
        <div className="dropdown-info">
          <h4>My Account</h4>
          <p>{email}</p>
        </div>
      </div>

      <div className="dropdown-divider"></div>

      <div className="dropdown-bottom" onClick={onLogout}>
        <button className="logout-btn" >
          <i className="fa-solid fa-right-from-bracket"></i>
          Logout
        </button>
      </div>

    </div>
  );
}

export default Dropdown;
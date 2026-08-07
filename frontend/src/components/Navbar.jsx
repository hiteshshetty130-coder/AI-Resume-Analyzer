import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
  <div className="logo-img">
    <img src="references/main-logo.png" alt="Resume Skill Gap"/>
  </div>
 
  <ul className="nav-link">
    <li><Link to="/">Upload</Link></li>
    <li><Link to="/">Market Analysis</Link></li>
    <li><Link to="/">About</Link></li>
  </ul>
 
  <div className="nav-action">
    <Link to="/login" className="nav-login">Login</Link>
    <Link to="/register" className="nav-signup">Sign Up</Link>
  </div>
</nav>
  )
}

export default Navbar

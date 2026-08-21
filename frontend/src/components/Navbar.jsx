import React from "react";
import { Link,useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handlenav = () => {
    const user = localStorage.getItem("userEmail");
    if (user) {
      navigate("/upload");
    } else {
      navigate("/login");
    }
  };
  return (
    <nav className="nav-bar">
      <div className="logo-img">
        <img src="references/main-logo.png" alt="Resume Skill Gap" />
      </div>

      <ul className="nav-link">
        <li>
          <Link to={handlenav()}>Upload</Link>
        </li>
        <li>
          <Link to="/">Market Analysis</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="nav-action">
        <Link to="/login" className="nav-login">
          Login
        </Link>
        <Link to="/register" className="nav-signup">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";

//login page ui and code
function Logincomponent() {

  //function that handles google authentication upon clicking continue with google
  const handleGoogleSuccess = () => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: async (response) => {

        try {
          const res = await fetch("http://localhost:5000/auth/google", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              credential: response.credential,
            }),
          });
          const data = await res.json();
          console.log("Backend Response", data);
          if (!res.ok) {
            setError(data.message);
          } else {
            setError("");
            localStorage.setItem("userEmail", data.email);
            localStorage.setItem("userName", data.name);
            navigate("/upload");
          }
        }

        catch (error) {
          console.error("Google Login error:", error);
        }
      },
    });
    google.accounts.id.prompt();
  };


  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //Function that handles login using username and password and handles all the edges cases
  const handleLogin = async (e) => {

    e.preventDefault();
    if (!name || !password) {
      setError("Please Fill all the Details");
      return;
    }

    const response = await fetch("http://127.0.0.1:5000/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      setError(data.message);
    } else {
      setError("");
      localStorage.setItem("userEmail", name);
      localStorage.setItem("userName", data.name);
      navigate("/upload");
    }
  };

  //returns the UI of Login page
  return (
    <div className="login-page">
      <div className="login-box">
        <img src="references/main-logo.png" alt="Logo" className="logo" />

        <h3>Welcome Back!</h3>

        <form onSubmit={handleLogin}>
          <div className="main-box">
            <label>Email Address</label>
            <div className="input-box">
              <span>✉️</span>
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="main-box">
            <label>Password</label>
            <div className="input-box">
              <span>🔒</span>
              <input
                type="password"
                placeholder="Enter your password"
                id="passInput"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="forgot-pass">
            <Link to="/">Forgot Password?</Link>
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
          {error ? (
            <p className="error-message">
              <i className="fa-solid fa-circle-exclamation"></i>
              {error}
            </p>
          ) : (
            ""
          )}

          <div className="or-div">or</div>

          <Link
            to="#"
            className="google-btn"
            onClick={(e) => {
              e.preventDefault();
              handleGoogleSuccess();
            }}
          >
            <i className="fa-brands fa-google"></i> Continue with Google
          </Link>
        </form>
        <p className="signup-text">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Logincomponent;

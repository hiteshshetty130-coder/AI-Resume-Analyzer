import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Logincomponent() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!name || !password) {
            setError("Please Fill all the Details");
            return
        }
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                password,
            }),
        });
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            setError(data.message)
        }
        else {
            setError("")
            localStorage.setItem("userEmail", name)
            localStorage.setItem("userName",data.name)
            navigate("/upload");
        }
    };
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
                    {error ?
                        <p className="error-message">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            {error}
                        </p>
                        : ""}

                    <div className="or-div">or</div>

                    <Link to="#" className="google-btn">
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

import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setCoPassword] = useState("")
    const [error, setError] = useState("")
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmpassword) {
            setError("Please Fill all the Details");
            return
        }
        if (password != confirmpassword) {
            setError("Password Doesnot Match")
            return
        }
        const response = await fetch("http://127.0.0.1:5000/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                password,
                confirmpassword
            })
        });
        const data = await response.json();
        if(!response.ok){
            setError(data.message);
        }
        else{
            navigate("/login");
        }
        console.log(data.message)
    }

    return (
        <div className="register-page">
            <div className="register-card">
                <img src="references/main-logo.png" alt="Logo" className="logo" />
                <h3>Create Your Account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-container-box">
                        <label>Full Name</label>
                        <div className="input-box">
                            <i className="fa-regular fa-user"></i>
                            <input type="text" placeholder="Enter your full name" autoComplete='username' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>

                    <div className="input-container-box">
                        <label>Email Address</label>
                        <div className="input-box">
                            <i className="fa-regular fa-envelope"></i>
                            <input type="email" placeholder="Enter your email" value={email} autoComplete='email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="input-container-box">
                        <label>Password</label>
                        <div className="input-box">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Enter your password" autoComplete='new-password' id="passInput" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className="input-container-box">
                        <label>Confirm Password</label>
                        <div className="input-box">
                            <i className="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Confirm your password" autoComplete='new-password' id="confirmInput" value={confirmpassword} onChange={(e) => setCoPassword(e.target.value)} />
                        </div>
                    </div>

                    <button className="register-btn" type='submit'>Register</button>
                    {error ? 
                        <p className="error-message">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            {error}
                        </p>
                    :""}
                    <div className="or-div">or</div>

                    <Link to="#" className="google-btn">
                        <i className="fa-brands fa-google"></i>
                        Continue with Google
                    </Link>

                    <p className="login-text">Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
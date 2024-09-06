import React, { useState } from "react";
import "../pages/styles/App.css"; // Ensure this file has the CSS for styling

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="button">
                    Sign In
                </button>
            </form>
            <button className="forgot-password" onClick={() => alert("Forgot Password functionality")}>
                Forgot Password?
            </button>
            <div className="signup-link">
                <p>
                    Don't have an account?{" "}
                    <button onClick={() => alert("Sign up functionality")} className="signup-button">
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;

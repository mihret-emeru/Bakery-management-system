"use client";

import { useState } from "react";

export default function LoginPage({ onLogin, onForgotPassword }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Temporary authentication (you can replace later)
    if (username === "admin" && password === "admin") {
      onLogin(); // Go to dashboard
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      {/* ORANGE TOP SECTION */}

      <div className="login-card">
        <div className="card-header-orange">
          <img src="/croissant.png" alt="logo" className="login-logo" />
          <h1 className="title">Yama Bakery</h1>
          <h2 className="subtitle">Management System</h2>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="forgot-link">
            <p onClick={onForgotPassword} style={{ cursor: "pointer" }}>
              Forgot Password?
            </p>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        {/* FOOTER */}
        <div className="footer-text">
          © 2025 Yama Bakery. All rights reserved.
        </div>
      </div>
    </div>
  );
}

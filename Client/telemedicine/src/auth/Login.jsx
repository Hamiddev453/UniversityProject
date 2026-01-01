import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file here

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Professional Route Management
    const moduleRoutes = {
      patient: "/patient-module",
      doctor: "/doctor-module",
      admin: "/admin-module",
    };

    // Simulate authentication and redirect
    console.log("Authenticating:", formData.email);
    navigate(moduleRoutes[formData.role]);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Role Selection - Important for your Project Logic */}
          <div className="input-group">
            <select name="role" value={formData.role} onChange={handleChange}>
              <option value="patient">Patient Access</option>
              <option value="doctor">Doctor Access</option>
              <option value="admin">Admin Access</option>
            </select>
          </div>

          {/* Show Password Toggle */}
          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={showPassword} 
              onChange={() => setShowPassword(!showPassword)} 
            />
            Show Password
          </label>

          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>

        <div className="footer-links">
          <p>
            Forget <span className="link-text cursor-pointer">Username / Password?</span>
          </p>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="link-text">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
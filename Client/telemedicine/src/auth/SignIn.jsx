import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    specialty: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 Backend signup logic will come here
    alert("Account created successfully!");

    // Redirect to login
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Role */}
          <select
            name="role"
            className="input"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          {/* Doctor-only Fields */}
          {formData.role === "doctor" && (
            <>
              <input
                type="text"
                name="specialty"
                placeholder="Specialty"
                className="input"
                value={formData.specialty}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="experience"
                placeholder="Years of Experience"
                className="input"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </>
          )}

          {/* Submit */}
          <button type="submit" className="btn w-full mt-3">
            Sign Up
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

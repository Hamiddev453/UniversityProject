import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Authentication
import Login from "./auth/Login";
import SignIn from "./auth/SignIn"; // optional if you want signup

// Role-based Modules
import PatientModule from "./Patient/PatientModule";
import DoctorModule from "./Doctor/DoctorModule";
import AdminModule from "./Admin/AdminModule";

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignIn />} />

        {/* Role-Based Dashboards */}
        <Route path="/patient-module" element={<PatientModule />} />
        <Route path="/doctor-module" element={<DoctorModule />} />
        <Route path="/admin-module" element={<AdminModule />} />

        {/* Invalid Route Handling */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App;

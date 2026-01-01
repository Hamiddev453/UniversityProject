import React, { useState } from "react";

/* =========================
   Sub Components
========================= */

const DoctorProfile = () => {
  return (
    <div className="card">
      <h3 className="title">Doctor Profile Management</h3>
      <input className="input" placeholder="Full Name" />
      <input className="input" placeholder="Specialty" />
      <input className="input" placeholder="Qualifications" />
      <input className="input" placeholder="Years of Experience" />
      <textarea className="input" placeholder="Availability Schedule"></textarea>
      <button className="btn">Save Profile</button>
    </div>
  );
};

const AppointmentManagement = () => {
  return (
    <div className="card">
      <h3 className="title">Appointment Management</h3>

      <div className="border p-3 rounded mb-2">
        <p><b>Patient:</b> Ahmad Khan</p>
        <p><b>Date:</b> 15 Jan 2026</p>
        <div className="flex gap-2 mt-2">
          <button className="btn-sm bg-green">Approve</button>
          <button className="btn-sm bg-yellow">Reschedule</button>
          <button className="btn-sm bg-red">Cancel</button>
        </div>
      </div>

      <div className="border p-3 rounded">
        <p><b>Patient:</b> Ali Raza</p>
        <p><b>Date:</b> 18 Jan 2026</p>
        <div className="flex gap-2 mt-2">
          <button className="btn-sm bg-green">Approve</button>
          <button className="btn-sm bg-yellow">Reschedule</button>
          <button className="btn-sm bg-red">Cancel</button>
        </div>
      </div>
    </div>
  );
};

const ConsultationInterface = () => {
  return (
    <div className="card">
      <h3 className="title">Consultation Interface</h3>
      <p className="text-gray">
        Start video/audio consultation with patient.
      </p>
      <button className="btn">Start Consultation</button>
    </div>
  );
};

const PrescriptionGeneration = () => {
  return (
    <div className="card">
      <h3 className="title">Prescription Generation</h3>
      <textarea
        className="input"
        placeholder="Write prescription here..."
      ></textarea>
      <button className="btn">Send Prescription</button>
    </div>
  );
};

const PatientHistory = () => {
  return (
    <div className="card">
      <h3 className="title">Patient History</h3>
      <ul className="list">
        <li>Visit – 10 Dec 2025 – Fever</li>
        <li>Visit – 22 Nov 2025 – Blood Test</li>
        <li>Visit – 05 Oct 2025 – Consultation</li>
      </ul>
    </div>
  );
};

const NotificationSystem = () => {
  return (
    <div className="card">
      <h3 className="title">Notifications</h3>
      <ul className="list">
        <li>📢 New appointment booked by Patient A</li>
        <li>❌ Appointment cancelled by Patient B</li>
      </ul>
    </div>
  );
};

/* =========================
   Main Doctor Module
========================= */

const DoctorModule = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderComponent = () => {
    switch (activeTab) {
      case "profile":
        return <DoctorProfile />;
      case "appointments":
        return <AppointmentManagement />;
      case "consultation":
        return <ConsultationInterface />;
      case "prescription":
        return <PrescriptionGeneration />;
      case "history":
        return <PatientHistory />;
      case "notifications":
        return <NotificationSystem />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Doctor Dashboard
      </h2>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button className="nav-btn" onClick={() => setActiveTab("profile")}>Profile</button>
        <button className="nav-btn" onClick={() => setActiveTab("appointments")}>Appointments</button>
        <button className="nav-btn" onClick={() => setActiveTab("consultation")}>Consultation</button>
        <button className="nav-btn" onClick={() => setActiveTab("prescription")}>Prescription</button>
        <button className="nav-btn" onClick={() => setActiveTab("history")}>Patient History</button>
        <button className="nav-btn" onClick={() => setActiveTab("notifications")}>Notifications</button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        {renderComponent()}
      </div>
    </div>
  );
};

export default DoctorModule;

import React, { useState } from "react";

/* =========================
   Sub Components
========================= */

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    medicalHistory: ""
  });

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-2">Profile Management</h3>
      <input className="input" placeholder="Name" />
      <input className="input" placeholder="Age" />
      <input className="input" placeholder="Gender" />
      <input className="input" placeholder="Contact" />
      <textarea className="input" placeholder="Medical History"></textarea>
      <button className="btn">Save Profile</button>
    </div>
  );
};

const AppointmentBooking = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-2">Book Appointment</h3>
      <input className="input" placeholder="Doctor Specialty" />
      <input className="input" placeholder="Location" />
      <input className="input" type="date" />
      <button className="btn">Book Appointment</button>
    </div>
  );
};

const VideoConsultation = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-2">Video Consultation</h3>
      <p className="text-gray-600 mb-2">
        Join live video/audio session with your doctor.
      </p>
      <button className="btn">Join Call</button>
    </div>
  );
};

const PrescriptionAccess = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-2">Prescriptions</h3>
      <ul className="list-disc ml-5">
        <li>Prescription - Dr. Ali (PDF)</li>
        <li>Prescription - Dr. Khan (PDF)</li>
      </ul>
      <button className="btn mt-2">Download</button>
    </div>
  );
};

const MedicalRecords = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-2">Medical Records</h3>
      <ul className="list-disc ml-5">
        <li>Consultation – 12 Jan 2025</li>
        <li>Blood Test – 02 Feb 2025</li>
      </ul>
    </div>
  );
};

const FeedbackSystem = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-2">Doctor Feedback</h3>
      <textarea className="input" placeholder="Write your feedback"></textarea>
      <button className="btn">Submit Feedback</button>
    </div>
  );
};

/* =========================
   Main Patient Module
========================= */

const PatientModule = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderComponent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileManagement />;
      case "appointment":
        return <AppointmentBooking />;
      case "video":
        return <VideoConsultation />;
      case "prescription":
        return <PrescriptionAccess />;
      case "records":
        return <MedicalRecords />;
      case "feedback":
        return <FeedbackSystem />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Patient Dashboard
      </h2>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button className="nav-btn" onClick={() => setActiveTab("profile")}>Profile</button>
        <button className="nav-btn" onClick={() => setActiveTab("appointment")}>Appointment</button>
        <button className="nav-btn" onClick={() => setActiveTab("video")}>Video Call</button>
        <button className="nav-btn" onClick={() => setActiveTab("prescription")}>Prescriptions</button>
        <button className="nav-btn" onClick={() => setActiveTab("records")}>Records</button>
        <button className="nav-btn" onClick={() => setActiveTab("feedback")}>Feedback</button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">{renderComponent()}</div>
    </div>
  );
};

export default PatientModule;

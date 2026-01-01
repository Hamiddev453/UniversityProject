import React, { useState } from "react";

/* =========================
   Sub Components
========================= */

const UserManagement = () => {
  return (
    <div className="card">
      <h3 className="title">User Management</h3>

      <h4 className="font-semibold mt-2">Doctor Verification</h4>
      <div className="border p-3 rounded mb-2">
        <p><b>Name:</b> Dr. Ahmed</p>
        <p><b>Specialty:</b> Cardiologist</p>
        <button className="btn-sm bg-green mt-2">Approve</button>
      </div>

      <h4 className="font-semibold mt-4">Patient Registrations</h4>
      <div className="border p-3 rounded">
        <p><b>Name:</b> Ali Khan</p>
        <button className="btn-sm bg-red mt-2">Deactivate</button>
      </div>
    </div>
  );
};

const SystemMonitoring = () => {
  return (
    <div className="card">
      <h3 className="title">System Monitoring</h3>
      <ul className="list">
        <li>Total Appointments Today: 28</li>
        <li>Ongoing Consultations: 5</li>
        <li>Feedback Submitted: 14</li>
      </ul>
    </div>
  );
};

const DataSecurityPrivacy = () => {
  return (
    <div className="card">
      <h3 className="title">Data Security & Privacy</h3>
      <p className="text-gray">
        All patient records and consultations are encrypted and protected
        according to healthcare privacy standards.
      </p>
      <button className="btn mt-2">Run Security Audit</button>
    </div>
  );
};

const ReportsAnalytics = () => {
  return (
    <div className="card">
      <h3 className="title">Reports & Analytics</h3>
      <ul className="list">
        <li>Most Consulted Doctor: Dr. Khan</li>
        <li>Active Patients This Month: 320</li>
        <li>System Usage Rate: 78%</li>
      </ul>
      <button className="btn mt-2">Generate Report</button>
    </div>
  );
};

/* =========================
   Main Admin Module
========================= */

const AdminModule = () => {
  const [activeTab, setActiveTab] = useState("users");

  const renderComponent = () => {
    switch (activeTab) {
      case "users":
        return <UserManagement />;
      case "monitoring":
        return <SystemMonitoring />;
      case "security":
        return <DataSecurityPrivacy />;
      case "reports":
        return <ReportsAnalytics />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Admin Dashboard
      </h2>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button className="nav-btn" onClick={() => setActiveTab("users")}>
          User Management
        </button>
        <button className="nav-btn" onClick={() => setActiveTab("monitoring")}>
          System Monitoring
        </button>
        <button className="nav-btn" onClick={() => setActiveTab("security")}>
          Data Security
        </button>
        <button className="nav-btn" onClick={() => setActiveTab("reports")}>
          Reports & Analytics
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminModule;

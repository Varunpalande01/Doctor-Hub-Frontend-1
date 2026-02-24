// src/pages/patient/PatientHeader.jsx
import React, { useState } from "react";
import "./PatientHeader.css";
import { Link, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; 

const PatientHeader = ({ setIsMobileOpen, isCollapsed }) => {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  const routeTitles = {
    "/patient/dashboard": "Dashboard Overview",
    "/patient/appointments": "My Appointment's",
    "/patient/doctors": "My Doctor's",
    "/patient/records": "Medical Record's",
    "/patient/profile": "My Profile Setting's",
    "/patient/prescriptions": "Prescription's",
    "/patient/lab-reports": "Lab Report's",
    "/patient/health-summary": "Health Summary",
    "/patient/reminders": "Reminder's",
    "/patient/notifications": "Notification's",
    "/patient/feedback": "Feedback",
    "/patient/help": "Help",
  };

  return (
    <header className={`patient-header ${isCollapsed ? "collapsed-header" : ""}`}>
      <div className="header-left">
        <button className="hamburger-btn" onClick={() => setIsMobileOpen(true)}>
          <FiMenu />
        </button>
        
        <h2 className="header-title">
          {routeTitles[location.pathname] || "Patient Hub"}
        </h2>
      </div>

      <div className="profile-area desktop-profile">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          onClick={() => setOpen(!open)}
          className="profile-img"
        />
        {open && (
          <div className="profile-dropdown">
            <p className="user-name-dropdown">{user?.fullName || "Patient"}</p>
            <span className="user-role-dropdown">{user?.role || "User"}</span>
            <hr />
            <Link to="/patient/profile" onClick={() => setOpen(false)} className="dropdown-link">
              Update Profile
            </Link>          
            <button onClick={handleLogout} className="logout-button-header">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default PatientHeader;
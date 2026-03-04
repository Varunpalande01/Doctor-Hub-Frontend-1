import React, { useState, useEffect, useRef } from "react";import "./PatientHeader.css";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiUser, FiLogOut } from "react-icons/fi"; 

const PatientHeader = ({ setIsMobileOpen, isCollapsed }) => {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const location = useLocation();
  const dropdownRef = useRef(null); // Click outside ke liye ref

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const routeTitles = {
    "/patient/dashboard": "Dashboard Overview",
    "/patient/appointments": "My Appointment's",
    "/patient/finddoctors": "Find Doctor's",
    "/patient/mydoctors": "My Doctor's",
    "/patient/records": "Medical Record's",
    "/patient/profile": "My Profile Setting's",
    "/patient/prescriptions": "Prescription's",
    "/patient/lab-reports": "Lab Report's",
    "/patient/health-summary": "Health Summary",
    "/patient/reminders": "Reminder's",
    "/patient/notifications": "Notification's",
    "/patient/feedback": "Feedback",
    "/patient/help": "Help",
    "/patient/doctorsprofile":"Doctor's Profile",
    
  };
  

  return (
    <header className={`patient-header ${isCollapsed ? "collapsed-header" : ""}`}>
      <div className="header-left">
        <button className="hamburger-btn" onClick={() => setIsMobileOpen(true)}>
          <FiMenu />
        </button>
        
        <h2 className="header-title">
          {routeTitles[location.pathname] || "DOCTOR'S PROFILE"}
        </h2>
      </div>

      <div className="profile-area" ref={dropdownRef}>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          onClick={() => setOpen(!open)}
          className={`profile-img ${open ? "active-profile" : ""}`}
        />
        
        {open && (
          <div className="profile-dropdown">
            <div className="dropdown-user-card">
              <p className="user-name-dropdown">{user?.fullName || "Patient"}</p>
              <span className="user-role-dropdown">{user?.role || "User"}</span>
            </div>
            
            <div className="premium-divider"></div>
            
            <Link to="/patient/profile" onClick={() => setOpen(false)} className="dropdown-link-premium">
              <div className="btn-icon-3d profile-blue">
                <FiUser />
              </div>
              <span>Update Profile</span>
            </Link>          
            
            <button onClick={handleLogout} className="logout-btn-premium">
              <div className="btn-icon-3d logout-red">
                <FiLogOut />
              </div>
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default PatientHeader;
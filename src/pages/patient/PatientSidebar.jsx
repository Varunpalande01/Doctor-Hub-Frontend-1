import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// Inhe replace karo purane imports se
import {
  FiGrid,        // Dashboard
  FiCalendar,    // Appointments
  FiUsers,       // My Doctors
  FiShield,      // Medical Records
  FiClipboard,   // Prescriptions
  FiActivity,    // Lab Reports
  FiFileText,    // Health Summary
  FiClock,       // Reminders
  FiBell,        // Notifications
  FiMessageSquare, // Feedback
  FiHelpCircle,   // Help
  FiChevronLeft,
  FiChevronRight,
  FiX
} from "react-icons/fi";
import "./PatientSidebar.css";
import Logo from "../../assets/images/logo.png"

// 🔥 IMPORT YOUR DUMMY DATA
import { patientAppointmentsDummyData } from "../../utils/patientAppointmentsDummyData";
import { prescriptionsDummyData } from "../../utils/prescriptionsDummyData";
import { patientDashboardData } from "../../utils/patientDashboardDummyData";

const PatientSidebar = ({
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen,
}) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [showFooterMenu, setShowFooterMenu] = useState(false);

  // 🔥 DYNAMIC BADGE VALUES
  const appointmentBadge = patientAppointmentsDummyData.upcoming.length;
  const prescriptionBadge = prescriptionsDummyData.length;
  const reportBadge = patientDashboardData.healthSummary.reportsCount;

  const menuGroups = [
  {
    groupName: "Overview",
    items: [
      { name: "Dashboard", path: "/patient/dashboard", icon: <FiGrid /> },
      { name: "Appointments", path: "/patient/appointments", icon: <FiCalendar />, badge: appointmentBadge },
      { name: "My Doctors", path: "/patient/doctors", icon: <FiUsers /> },
    ]
  },
  {
    groupName: "Medical Vault",
    items: [
      { name: "Medical Records", path: "/patient/records", icon: <FiShield /> }, // 👈 Shield for safety
      { name: "Prescriptions", path: "/patient/prescriptions", icon: <FiClipboard />, badge: prescriptionBadge }, // 👈 Clipboard
      { name: "Lab Reports", path: "/patient/lab-reports", icon: <FiActivity />, badge: reportBadge }, // 👈 Activity for labs
      { name: "Health Summary", path: "/patient/health-summary", icon: <FiFileText /> },
    ]
  },
  {
    groupName: "Support",
    items: [
      { name: "Reminders", path: "/patient/reminders", icon: <FiClock /> }, // 👈 Clock for reminders
      { name: "Notifications", path: "/patient/notifications", icon: <FiBell /> },
      { name: "Feedback", path: "/patient/feedback", icon: <FiMessageSquare /> }, // 👈 Message for feedback
      { name: "Help", path: "/patient/help", icon: <FiHelpCircle /> }, // 👈 Help Circle
    ]
  }
];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobileOpen]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <>
      {isMobileOpen && (
        <div
          className="sidebar-mobile-overlay"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <aside
        className={`patient-sidebar 
        ${isCollapsed ? "collapsed" : "expanded"} 
        ${isMobileOpen ? "mobile-active" : ""}`}
      >
       <div className="sidebar-header">
  <div className="logo-container-sidebar" onClick={() => navigate("/")}>
    {/* Jab sidebar chota ho (Desktop par), tab sirf chota Icon dikhega */}
    {isCollapsed && !isMobileOpen ? (
      <img src={Logo} alt="Logo" className="sidebar-logo-mini" />
    ) : (
      /* Jab sidebar bada ho (Desktop ya Mobile), tab Logo + Name dikhega */
      <div className="sidebar-logo-full">
        <img src={Logo} alt="Logo" className="sidebar-logo-main" />
        <h2 className="patient-logo">
          Doctor<span>Hub</span>
        </h2>
      </div>
    )}
  </div>

  {/* Aapka existing Toggle Button logic */}
  {isMobileOpen ? (
    <button
      className="mobile-close-btn"
      onClick={() => setIsMobileOpen(false)}
    >
      <FiX />
    </button>
  ) : (
    <button
      className="collapse-btn"
      onClick={() => setIsCollapsed(!isCollapsed)}
    >
      {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
    </button>
  )}
</div>

       <nav className="sidebar-nav">
  {menuGroups.map((group) => (
    <div key={group.groupName} className="nav-group" style={{ marginBottom: '20px' }}>
      {(!isCollapsed || isMobileOpen) && (
        <h4 className="group-title" style={{ fontSize: '11px', color: '#94a3b8', padding: '0 20px', marginBottom: '10px', textTransform: 'uppercase' }}>
          {group.groupName}
        </h4>
      )}
      <ul className="sidebar-ul">
        {group.items.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              onClick={() => window.innerWidth <= 1024 && setIsMobileOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              {(!isCollapsed || isMobileOpen) && (
                <>
                  <span className="nav-text">{item.name}</span>
                  {item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  ))}
</nav>

        <div className="sidebar-footer">
          {showFooterMenu && (
            <div className="sidebar-footer-dropdown">
              <button
                onClick={() => {
                  navigate("/");
                  setShowFooterMenu(false);
                }}
              >
                🏠 Home
              </button>
              <button
                onClick={() => {
                  navigate("/patient/profile");
                  setShowFooterMenu(false);
                }}
              >
                👤 Profile
              </button>
              <button className="logout-item" onClick={handleLogout}>
                🚪 Logout
              </button>
            </div>
          )}

          <div
            className="sidebar-user-card"
            onClick={() => setShowFooterMenu(!showFooterMenu)}
          >
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="User"
              className="user-avatar"
            />
            {(!isCollapsed || isMobileOpen) && (
              <span className="user-name">
                {user?.fullName || "Patient"}
              </span>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default PatientSidebar;
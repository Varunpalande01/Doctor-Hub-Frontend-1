// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./DoctorSidebar.css";
// import { useNotifications } from "../../hooks/useNotifications";

// const DoctorSidebar = () => {
//   const { unreadCount } = useNotifications();

//   const menu = [
//     { name: "Dashboard", path: "/doctor/dashboard" },
//     { name: "Appointments", path: "/doctor/appointments" },
//     { name: "Patients", path: "/doctor/patients" },
//     { name: "Availability", path: "/doctor/availability" },
//     { name: "Notifications", path: "/doctor/notifications" },
//   ];

//   return (
//     <aside className="doctor-sidebar">
//       <h2 className="doctor-logo">Doctor’s Hub</h2>

//       <ul className="doctor-menu">
//         {menu.map((item) => (
//           <li key={item.name}>
//             <NavLink
//               to={item.path}
//               className={({ isActive }) =>
//                 isActive ? "doctor-link active" : "doctor-link"
//               }
//             >
//               <span>{item.name}</span>
//               {item.name === "Notifications" && unreadCount > 0 && (
//                 <span className="notification-badge">{unreadCount}</span>
//               )}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default DoctorSidebar;

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  FiGrid, FiCalendar, FiUsers, FiClock, FiBell, 
  FiUserPlus, FiLogOut 
} from "react-icons/fi"; // Icons import kar liye
import "./DoctorSidebar.css";

const DoctorSidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
  const [showFooterMenu, setShowFooterMenu] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsCollapsed(true);
      } else {
        setIsMobileOpen(false);
        if(window.innerWidth > 1024) setIsCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsCollapsed, setIsMobileOpen]);

  const handleUserCardClick = () => {
    if (window.innerWidth <= 1024) {
      setShowFooterMenu(!showFooterMenu);
    } else {
      if (isCollapsed) {
        setIsCollapsed(false);
        setShowFooterMenu(false);
      } else {
        setShowFooterMenu(!showFooterMenu);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  // ✅ Updated Menu Array with "Add Patient"
  const menu = [
    { name: "Dashboard", path: "/doctor/dashboard", icon: <FiGrid /> },
    { name: "Appointments", path: "/doctor/appointments", icon: <FiCalendar /> },
    { name: "Patients", path: "/doctor/patients", icon: <FiUsers /> },
    { name: "Add Patient", path: "/doctor/add-patient", icon: <FiUserPlus /> }, // Naya Tab
    { name: "Availability", path: "/doctor/availability", icon: <FiClock /> },
    { name: "Notifications", path: "/doctor/notifications", icon: <FiBell /> },
  ];

  return (
    <>
      {isMobileOpen && (
        <div className="sidebar-mobile-overlay" onClick={() => {
          setIsMobileOpen(false);
          setShowFooterMenu(false);
        }}></div>
      )}

      <aside className={`doctor-sidebar ${isCollapsed ? "collapsed" : "expanded"} ${isMobileOpen ? "mobile-active" : ""}`}>
        <div className="sidebar-header">
          <div className="logo-area">
            <h2 className="doctor-logo">
              {isCollapsed && !isMobileOpen ? "DH" : "Doctor's Hub"}
            </h2>
          </div>
          
          {isMobileOpen ? (
            <button className="mobile-close-btn" onClick={() => {
              setIsMobileOpen(false);
              setShowFooterMenu(false);
            }}>✕</button>
          ) : (
            <button className="desktop-toggle-arrow" onClick={() => {
              setIsCollapsed(!isCollapsed);
              setShowFooterMenu(false);
            }}>
              {isCollapsed ? "❯" : "❮"}
            </button>
          )}
        </div>

        <nav className="sidebar-nav">
          <ul className="sidebar-ul">
            {menu.map((item) => (
              <li key={item.name} className="sidebar-li">
                <NavLink 
                  to={item.path} 
                  onClick={() => {
                    setIsMobileOpen(false);
                    setShowFooterMenu(false);
                  }} 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {(!isCollapsed || isMobileOpen) && <span className="nav-text">{item.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          {showFooterMenu && (!isCollapsed || isMobileOpen) && (
            <div className="sidebar-footer-dropdown">
              <button onClick={() => { navigate("/doctor/profile"); setShowFooterMenu(false); setIsMobileOpen(false); }}>
                👤 My Profile
              </button>
              <button className="logout-item" onClick={handleLogout}>
                🚪 Logout
              </button>
            </div>
          )}

          <div className={`sidebar-user-card ${(isCollapsed && !isMobileOpen) ? "centered" : ""}`} onClick={handleUserCardClick}>
            <img src="https://i.pravatar.cc/150?img=12" alt="Profile" className="user-avatar" />
            {(!isCollapsed || isMobileOpen) && (
              <div className="user-info">
                <p className="user-name">Dr. {user?.fullName || "Sameer"}</p>
                <p className="user-role">{user?.role || "Surgeon"}</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default DoctorSidebar;
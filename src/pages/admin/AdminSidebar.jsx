// // src/components/admin/AdminSidebar.jsx
// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./AdminSidebar.css";

// const AdminSidebar = () => {
//   const menu = [
//     { name: "Dashboard", path: "/admin/dashboard" },
//     { name: "Doctors", path: "/admin/doctors" },
//     { name: "Pending Verification", path: "/admin/verify-doctors" },
//     { name: "Doctors Management", path: "/admin/doctors-management" },
//     { name: "Users", path: "/admin/users" },
//     { name: "Hospitals", path: "/admin/hospitals" },
//     { name: "Labs", path: "/admin/labs" },
//     { name: "Appointments", path: "/admin/appointments" },
//     { name: "System Logs", path: "/admin/system-logs" },
//   ];

//   return (
//     <aside className="admin-sidebar">
//       <h2 className="sidebar-logo">Admin Panel</h2>
//       <ul>
//         {menu.map((item) => (
//           <li key={item.name}>
//             <NavLink
//               to={item.path}
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               {item.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// export default AdminSidebar;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";
import Logo from "../../assets/images/logo.png"


const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsCollapsed(true);
      else setIsCollapsed(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { name: "Doctors", path: "/admin/doctors", icon: "👨‍⚕️" },
    { name: "Pending Verification", path: "/admin/verify-doctors", icon: "🛡️" },
    { name: "Users", path: "/admin/users", icon: "👥" },
    { name: "Hospitals", path: "/admin/hospitals", icon: "🏥" },
    { name: "Labs", path: "/admin/labs", icon: "🧪" },
    { name: "Appointments", path: "/admin/appointments", icon: "📅" },
    { name: "System Logs", path: "/admin/system-logs", icon: "📑" },
  ];

  return (
    <aside className={`admin-sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="logo-area"  style={{ cursor: 'pointer' }}>
             {/* Jab sidebar collapsed ho aur mobile open na ho, tab sirf chota icon dikhega */}
             
               <img src={Logo} alt="DH" className="sidebar-logo-icon" />
            
               <div className="full-logo-wrapper">
                 <img src={Logo} alt="Doctor's Hub" className="sidebar-logo-img" />
                 <h2 className="doctor-logo">
                   Doctor's <span>Hub</span>
                 </h2>
               </div>
             
           </div>
        
        <button 
          className="menu-toggle-btn" 
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <div className={`hamburger ${isCollapsed ? "is-active" : ""}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>
      </div>

      <nav className="admin-nav">
        <ul className="admin-menu">
          {menu.map((item) => (
            <li key={item.name} className="menu-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "admin-link active" : "admin-link")}
              >
                <span className="menu-icon">{item.icon}</span>
                {!isCollapsed && <span className="menu-text">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
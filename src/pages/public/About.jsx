// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./About.css";

// const AboutUs = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-wrapper">
//       {/* Shared Header */}
//       <header className="home-header">
//         <div className="header-brand" onClick={() => navigate("/")}>
//           <h1>Doctor's Hub</h1>
//         </div>
//         <nav className="header-nav">
//           <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
//           <span className="nav-item" onClick={() => navigate("/blogs")}>Blogs</span>
//           <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
//                       <span className="nav-item" onClick={() => navigate("/all-services")}>All Services</span>

//         </nav>
//         <div className="auth-buttons">
//           <Link to="/login" className="login-link">Login</Link>
//           <button className="signup-btn" onClick={() => navigate("/signup")}>SignUp</button>
//         </div>
//       </header>

//       <main className="main-content">
//         {/* Modern Hero Section */}
//         <section className="about-hero-modern">
//           <div className="hero-overlay">
//             <span className="hero-badge">Since 2026</span>
//             <h2>Your Health, Our <span>Mission</span></h2>
//             <p>
//               Doctor's Hub is a leading digital healthcare platform dedicated to 
//               simplifying the connection between patients and specialized medical 
//               care through innovation and transparency.
//             </p>
//           </div>
//         </section>

//         {/* Value Proposition Grid */}
//         <section className="about-values">
//           <div className="section-header">
//             <h2>Why Millions Trust Us</h2>
//             <div className="accent-line"></div>
//           </div>
//           <div className="values-grid">
//             <div className="value-card">
//               <div className="value-icon">🛡️</div>
//               <h3>Verified Care</h3>
//               <p>Every doctor on our platform undergoes a multi-step credential verification process.</p>
//             </div>
//             <div className="value-card">
//               <div className="value-icon">⚡</div>
//               <h3>Instant Access</h3>
//               <p>Book appointments in real-time without waiting for call-backs or busy lines.</p>
//             </div>
//             <div className="value-card">
//               <div className="value-icon">📱</div>
//               <h3>User Centric</h3>
//               <p>An intuitive interface designed for patients of all ages to navigate with ease.</p>
//             </div>
//           </div>
//         </section>

//         {/* Strategic Mission Section */}
//         <section className="mission-split">
//           <div className="mission-image">
//              {/* This side usually has a nice medical stock photo */}
//              <div className="image-placeholder-inner">🏥</div>
//           </div>
//           <div className="mission-text">
//             <h2>Bridging the Gap in Modern Healthcare</h2>
//             <p>
//               We realized that the hardest part of being sick is the stress of finding the right help. 
//               Doctor's Hub was built to remove that friction. By aggregating top-tier hospitals, 
//               clinics, and independent specialists, we provide a 360-degree healthcare ecosystem.
//             </p>
//             <div className="mission-stats">
//               <div className="stat"><strong>500+</strong><p>Specialists</p></div>
//               <div className="stat"><strong>50k+</strong><p>Appointments</p></div>
//               <div className="stat"><strong>4.9/5</strong><p>User Rating</p></div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Shared Sticky Footer */}
//       <footer className="main-footer">
//         <div className="footer-container">
//           <div className="footer-left">
//             <h2>Doctor's Hub</h2>
//             <p>Your trusted healthcare partner.</p>
//           </div>
//           <div className="footer-right">
//             <p>© 2026 All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./About.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const [saasDropdown, setSaasDropdown] = useState(false);
  const [doctorDropdown, setDoctorDropdown] = useState(false);
  const [patientDropdown, setPatientDropdown] = useState(false);
  const saasRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (saasRef.current && !saasRef.current.contains(e.target)) {
        setSaasDropdown(false);
        setDoctorDropdown(false);
        setPatientDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="home-wrapper">
      <header className="home-header">
        <div className="header-brand" onClick={() => navigate("/")}>
          <h1>Doctor's Hub</h1>
        </div>

        <nav className="header-nav">
          <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
          <span className="nav-item" onClick={() => navigate("/blogs")}>Blogs</span>
          <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
          <span className="nav-item" onClick={() => navigate("/all-services")}>All Services</span>

          {/* SaaS Dropdown */}
          <div className="nav-item dropdown-toggle" ref={saasRef}>
            <span onClick={() => setSaasDropdown(!saasDropdown)}>SaaS For ▾</span>
            {saasDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <span onClick={(e) => { e.stopPropagation(); setDoctorDropdown(!doctorDropdown); }}>
                    For Doctor ▸
                  </span>
                  {doctorDropdown && (
                    <div className="nested-dropdown">
                      <span onClick={() => { navigate("/doctor/dashboard"); setSaasDropdown(false); setDoctorDropdown(false); }}>
                        Doctor SaaS
                      </span>
                    </div>
                  )}
                </div>

                <div className="dropdown-item">
                  <span onClick={(e) => { e.stopPropagation(); setPatientDropdown(!patientDropdown); }}>
                    For Patient ▸
                  </span>
                  {patientDropdown && (
                    <div className="nested-dropdown">
                      <span onClick={() => { navigate("/patient/dashboard"); setSaasDropdown(false); setPatientDropdown(false); }}>
                        Patient SaaS
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="auth-buttons">
          <Link to="/login" className="login-link">Login</Link>
          <button className="signup-btn" onClick={() => navigate("/signup")}>SignUp</button>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="about-hero-modern">
          <div className="hero-overlay">
            <span className="hero-badge">Since 2026</span>
            <h2>Your Health, Our <span>Mission</span></h2>
            <p>
              Doctor's Hub is a leading digital healthcare platform dedicated to simplifying the connection between patients and specialized medical care.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="section-header">
            <h2>Why Millions Trust Us</h2>
            <div className="accent-line"></div>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Verified Care</h3>
              <p>Every doctor undergoes a multi-step credential verification process.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Instant Access</h3>
              <p>Book appointments in real-time without waiting for call-backs or busy lines.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📱</div>
              <h3>User Centric</h3>
              <p>An intuitive interface designed for patients of all ages to navigate with ease.</p>
            </div>
          </div>
        </section>

        {/* Mission Split Section */}
        <section className="mission-split">
          <div className="mission-image">
            <div className="image-placeholder-inner">🏥</div>
          </div>
          <div className="mission-text">
            <h2>Bridging the Gap in Modern Healthcare</h2>
            <p>
              Doctor's Hub removes the friction of finding the right medical help by aggregating top hospitals and specialists in one place.
            </p>
            <div className="mission-stats">
              <div className="stat"><strong>500+</strong><p>Specialists</p></div>
              <div className="stat"><strong>50k+</strong><p>Appointments</p></div>
              <div className="stat"><strong>4.9/5</strong><p>User Rating</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2>Doctor's Hub</h2>
            <p>Your trusted healthcare partner.</p>
          </div>
          <div className="footer-right">
            <p>© 2026 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;

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
import Logo from "../../assets/images/logo.png"

const AboutUs = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [saasDropdown, setSaasDropdown] = useState(false);
  const [doctorSub, setDoctorSub] = useState(false);
  const [patientSub, setPatientSub] = useState(false);
  const saasRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (saasRef.current && !saasRef.current.contains(e.target)) setSaasDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="home-wrapper">
      {/* --- SIDEBAR SYSTEM --- */}
      <div className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`} onClick={() => setIsSidebarOpen(false)}></div>
      <aside className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="brand-logo-sidebar">Doc<span>Hub</span></h2>
          <button className="close-sidebar" onClick={() => setIsSidebarOpen(false)}>×</button>
        </div>
        <div className="sidebar-content">
          <p className="sidebar-label">Navigation</p>
          <div className="sidebar-nav-link" onClick={() => {navigate("/"); setIsSidebarOpen(false);}}>🏠 Home</div>
          <div className="sidebar-nav-link active-side">ℹ️ About Us</div>
                    <div className="sidebar-nav-link" onClick={() => {navigate("/all-services"); setIsSidebarOpen(false);}}>🛠️ Services</div>

          <div className="sidebar-nav-link" onClick={() => {navigate("/blogs"); setIsSidebarOpen(false);}}>📰Doctor's Blogs</div>
                    <div className="sidebar-nav-link " onClick={() => {navigate("/contact"); setIsSidebarOpen(false);}}>📞 Contact Us</div>

          <p className="sidebar-label">SaaS Solutions</p>
          <div className="sidebar-nav-link" onClick={() => setDoctorSub(!doctorSub)}>👨‍⚕️ For Doctors {doctorSub ? "▾" : "▸"}</div>
          {doctorSub && <div className="sidebar-sub-link" onClick={() => navigate("/doctor/dashboard")}>→ Dashboard</div>}
          <div className="sidebar-nav-link" onClick={() => setPatientSub(!patientSub)}>👤 For Patients {patientSub ? "▾" : "▸"}</div>
          {patientSub && <div className="sidebar-sub-link" onClick={() => navigate("/patient/dashboard")}>→ Portal</div>}
        </div>
        <div className="sidebar-footer">
          <button className="secondary-btn-mob" onClick={() => navigate("/login")}>Login</button>
          <button className="primary-btn-mob" onClick={() => navigate("/signup")}>Sign Up Now</button>
        </div>
      </aside>

      {/* --- HEADER --- */}
      <header className="home-header">
        <div className="header-brand" onClick={() => navigate("/")}>
          <img src={Logo} alt="Doctor's Hub Logo" className="logo-img" />
    <h1>Doctor's <span>Hub</span></h1>
        </div>
        <nav className="header-nav desktop-only">
          <span className="nav-item" onClick={() => navigate("/")}>Home</span>
          <span className="nav-item active-tab">About Us</span>
          <span className="nav-item" onClick={() => navigate("/all-services")}>Services</span>
          <span className="nav-item" onClick={() => navigate("/blogs")}>Doctor's Blogs</span>
           <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
          <div className="nav-item dropdown-toggle" ref={saasRef}>
            <span onClick={() => setSaasDropdown(!saasDropdown)}>SaaS For ▾</span>
            {saasDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => navigate("/doctor/dashboard")}>For Doctors ▸</div>
                <div className="dropdown-item" onClick={() => navigate("/patient/dashboard")}>For Patients ▸</div>
              </div>
            )}
          </div>                    

        </nav>
        <div className="auth-buttons">
          <button className="login-btn-styled desktop-only" onClick={() => navigate("/login")}>Login</button>
          <button className="primary-btn desktop-only" onClick={() => navigate("/signup")}>SignUp</button>
          <button className="hamburger-menu" onClick={() => setIsSidebarOpen(true)}>☰</button>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="about-hero-modern">
          <div className="hero-overlay">
            <span className="hero-badge">Since 2026</span>
            <h2>Your Health, Our <span>Mission</span></h2>
            <p>Simplifying healthcare connectivity in Mumbai through innovation and trust.</p>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="section-header-center">
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
              <p>Book appointments in real-time without waiting for call-backs.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📱</div>
              <h3>User Centric</h3>
              <p>Intuitive interface designed for patients of all ages.</p>
            </div>
          </div>
        </section>

        {/* NEW: Team Section */}
        <section className="team-section">
          <div className="section-header-center">
            <h2>Meet Our Leadership</h2>
            <div className="accent-line"></div>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-img-placeholder">👨‍💼</div>
              <h4>Dr. Raj Sharma</h4>
              <p></p>
            </div>
            <div className="team-card">
              <div className="team-img-placeholder">👩‍⚕️</div>
              <h4>Dr. Anjali Rao</h4>
              <p></p>
            </div>
          </div>
        </section>

        {/* Mission Split Section */}
        <section className="mission-split">
          <div className="mission-image">🏥</div>
          <div className="mission-text">
            <h2>Bridging the Gap in Modern Healthcare</h2>
            <p>Doctor's Hub aggregates top hospitals and specialists in one place to remove friction.</p>
            <div className="mission-stats">
              <div className="stat"><strong>500+</strong><p>Specialists</p></div>
              <div className="stat"><strong>50k+</strong><p>Appointments</p></div>
              <div className="stat"><strong>4.9/5</strong><p>User Rating</p></div>
            </div>
          </div>
        </section>
      </main>

      {/* --- PREMIUM NEWSLETTER SECTION --- */}
        <section className="newsletter-premium">
          <div className="news-card">
            <div className="news-content">
              <h3>Stay Healthier. <span>Every Day.</span></h3>
              <p>Join 10k+ Mumbaikars getting weekly health tips and priority booking alerts.</p>
            </div>
            <div className="news-action">
              <div className="news-input-wrapper">
                <input type="email" placeholder="Email Address" />
                <button className="news-submit-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </section>

     <footer className="main-footer">
  <div className="footer-container">
    {/* Column 1: Brand & About */}
    <div className="footer-column brand-col">
      <h2 className="footer-logo">Doc<span>Hub</span></h2>
      <p className="footer-desc">
        Mumbai's trusted healthcare network. Booking appointments, 
        finding labs, and managing health records made simple.
      </p>
      <div className="footer-socials">
        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>

    {/* Column 2: Services */}
    <div className="footer-column">
      <h4>Services</h4>
      <ul className="footer-list">
        <li  onClick={() => navigate("/all-services")}>Find Doctors</li>
        <li  onClick={() => navigate("/all-services")}>Hospitals</li>
        <li  onClick={() => navigate("/all-services")}>Diagnostic Labs</li>
        <li  onClick={() => navigate("/all-services")}>Online Pharmacy</li>
      </ul>
    </div>

    {/* Column 3: Quick Links */}
    <div className="footer-column">
      <h4>Support</h4>
      <ul className="footer-list">
         <li onClick={() => navigate("/")}>Home</li>
         <li onClick={() => navigate("/about")}>About Us</li>
              <li onClick={() => navigate("/blogs")}>Doctor's Blogs</li>
               <li onClick={() => navigate("/all-services")}>Services</li>
        <li onClick={() => navigate("/contact")}>Contact Us</li>
      </ul>
    </div>

    {/* Column 4: Contact info */}
    <div className="footer-column">
      <h4>Contact Us</h4>
      <div className="footer-contact-info">
        <p>📍 Andheri West, Mumbai, MH</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ support@dochub.com</p>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <div className="footer-bottom-content">
      <p>&copy; 2026 Doctor's Hub Mumbai. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default AboutUs;
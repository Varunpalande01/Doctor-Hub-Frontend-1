// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Contact.css";

// const ContactUs = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-wrapper">
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
//         <section className="contact-main">
//           <div className="contact-container-box">
//             <div className="contact-text-side">
//               <h2>Get in <span>Touch</span></h2>
//               <p>Our team is here to help you 24/7.</p>
//               <div className="contact-details">
//                 <p>📍 123 Health St, Mumbai</p>
//                 <p>📞 +91 (000) 000-0000</p>
//               </div>
//             </div>
//             <form className="contact-form-side">
//               <input type="text" placeholder="Name" required />
//               <input type="email" placeholder="Email" required />
//               <textarea placeholder="Message" rows="4" required></textarea>
//               <button type="submit" className="primary-btn">Send</button>
//             </form>
//           </div>
//         </section>
//       </main>

//       <footer className="main-footer">
//         <div className="footer-container">
//           <div className="footer-left">
//             <h2>Doctor's Hub</h2>
//             <p>Elevating digital healthcare.</p>
//           </div>
//           <div className="footer-right">
//             <p>© 2026 All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const ContactUs = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [saasDropdown, setSaasDropdown] = useState(false);
  const [doctorSub, setDoctorSub] = useState(false);
  const [patientSub, setPatientSub] = useState(false);
  
  const saasRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (saasRef.current && !saasRef.current.contains(e.target)) setSaasDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="home-wrapper">
      {/* --- SIDEBAR OVERLAY --- */}
      <div className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`} onClick={() => setIsSidebarOpen(false)}></div>

      {/* --- MOBILE SIDEBAR (Same as Home) --- */}
      <aside className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 style={{color:'var(--primary)', fontWeight:'800'}}>Doc<span>Hub</span></h2>
          <button onClick={() => setIsSidebarOpen(false)} className="close-sidebar-btn">×</button>
        </div>

        <div className="sidebar-content">
          <p className="sidebar-label">Navigation</p>
          <div className="sidebar-nav-link" onClick={() => {navigate("/"); setIsSidebarOpen(false);}}>🏠 Home</div>
          <div className="sidebar-nav-link" onClick={() => {navigate("/about"); setIsSidebarOpen(false);}}>ℹ️ About Us</div>
          <div className="sidebar-nav-link" onClick={() => {navigate("/all-services"); setIsSidebarOpen(false);}}>🛠️Services</div>
          <div className="sidebar-nav-link" onClick={() => {navigate("/blogs"); setIsSidebarOpen(false);}}>📰  Blogs</div>
                    <div className="sidebar-nav-link active-side" onClick={() => {navigate("/contact"); setIsSidebarOpen(false);}}>📞 Contact Us</div>

          <p className="sidebar-label">SaaS Solutions</p>
          <div className="sidebar-nav-link" onClick={() => setDoctorSub(!doctorSub)}>
            👨‍⚕️ For Doctors {doctorSub ? "▾" : "▸"}
          </div>
          {doctorSub && <div className="sidebar-sub-link" onClick={() => navigate("/doctor/dashboard")}>→ Dashboard</div>}
          
          <div className="sidebar-nav-link" onClick={() => setPatientSub(!patientSub)}>
            👤 For Patients {patientSub ? "▾" : "▸"}
          </div>
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
          <h1>Doctor's <span>Hub</span></h1>
        </div>
        
        <nav className="header-nav desktop-only">
          <span className="nav-item" onClick={() => navigate("/")}>Home</span>
          <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>

          <span className="nav-item" onClick={() => navigate("/all-services")}> Services</span>
                    <span className="nav-item" onClick={() => navigate("/blogs")}>Doctor's Blogs</span>
 <span className="nav-item active-tab" onClick={() => navigate("/contact")}>Contact Us</span>
          <div className="nav-item dropdown-toggle" ref={saasRef}>
            <span onClick={() => setSaasDropdown(!saasDropdown)}>SaaS Solutions ▾</span>
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
          <button className="primary-btn-styled desktop-only" onClick={() => navigate("/signup")}>SignUp</button>
          <button className="hamburger-menu" onClick={() => setIsSidebarOpen(true)}>☰</button>
        </div>
      </header>

      {/* --- CONTACT CONTENT --- */}
      <main className="main-content">
        <section className="contact-hero">
          <h1>Get In <span>Touch</span></h1>
          <p>We're here to help you 24/7. Reach out to us anytime.</p>
        </section>

        <section className="contact-main-section">
          <div className="contact-card">
            <div className="contact-info-panel">
              <div>
                <h2>Contact <span>Info</span></h2>
                <p style={{marginTop:'10px', opacity:'0.8'}}>Say something to start a live chat!</p>
              </div>
              
              <div className="info-items">
                <div className="info-item"><span>📍</span> <p>123 Health Tower, Mumbai</p></div>
                <div className="info-item"><span>📞</span> <p>+91 (800) 123-4567</p></div>
                <div className="info-item"><span>✉️</span> <p>support@dochub.com</p></div>
              </div>

              <div className="social-box">
                <div className="social-icon">In</div>
                <div className="social-icon">Tw</div>
                <div className="social-icon">Fb</div>
              </div>
            </div>

            <form className="contact-form-panel">
              <div className="form-grid">
                <div className="input-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="input-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Surname" required />
                </div>
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="YourEmail@gmail.com" required />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>

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

export default ContactUs;
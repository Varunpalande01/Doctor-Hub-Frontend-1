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
import { Link, useNavigate } from "react-router-dom";
import "./Contact.css";

const ContactUs = () => {
  const navigate = useNavigate();
  const [saasDropdown, setSaasDropdown] = useState(false);
  const [doctorDropdown, setDoctorDropdown] = useState(false);
  const [patientDropdown, setPatientDropdown] = useState(false);
  const saasRef = useRef(null);

  // Close dropdowns when clicking outside
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
      {/* HEADER */}
      <header className="home-header">
        <div className="header-brand" onClick={() => navigate("/")}>
          <h1>Doctor's Hub</h1>
        </div>

        <nav className="header-nav">
          <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
          <span className="nav-item" onClick={() => navigate("/blogs")}>Blogs</span>
          <span className="nav-item active-tab" onClick={() => navigate("/contact")}>Contact Us</span>
          <span className="nav-item" onClick={() => navigate("/all-services")}>All Services</span>

          {/* SaaS Dropdown */}
          <div className="nav-item dropdown-toggle" ref={saasRef}>
            <span onClick={() => setSaasDropdown(!saasDropdown)}>SaaS For ▾</span>

            {saasDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setDoctorDropdown(!doctorDropdown);
                    }}
                  >
                    For Doctor ▸
                  </span>
                  {doctorDropdown && (
                    <div className="nested-dropdown">
                      <span
                        onClick={() => {
                          navigate("/doctor/dashboard");
                          setSaasDropdown(false);
                          setDoctorDropdown(false);
                        }}
                      >
                        Doctor SaaS
                      </span>
                    </div>
                  )}
                </div>

                <div className="dropdown-item">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setPatientDropdown(!patientDropdown);
                    }}
                  >
                    For Patient ▸
                  </span>
                  {patientDropdown && (
                    <div className="nested-dropdown">
                      <span
                        onClick={() => {
                          navigate("/patient/dashboard");
                          setSaasDropdown(false);
                          setPatientDropdown(false);
                        }}
                      >
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
          <Link to="/login" className="secondary-btn">Login</Link>
          <button className="signup-btn" onClick={() => navigate("/signup")}>SignUp</button>
        </div>
      </header>

      {/* MAIN CONTACT CONTENT */}
      <main className="main-content">
        <section className="contact-main">
          <div className="contact-container-box">
            <div className="contact-text-side">
              <h2>Get in <span>Touch</span></h2>
              <p>Our team is here to help you 24/7.</p>
              <div className="contact-details">
                <p>📍 123 Health St, Mumbai</p>
                <p>📞 +91 (000) 000-0000</p>
              </div>
            </div>
            <form className="contact-form-side">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" rows="4" required></textarea>
              <button type="submit" className="primary-btn">Send</button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-left">
            <h2>Doctor's Hub</h2>
            <p>Elevating digital healthcare.</p>
          </div>
          <div className="footer-right">
            <p>© 2026 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;

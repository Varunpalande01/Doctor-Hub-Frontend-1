// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./blogs.css";

// const Blogs = () => {
//   const navigate = useNavigate();
//   const articles = [
//     { title: "Mental Health in 2026", cat: "Wellness", date: "Feb 10" },
//     { title: "The Future of Telemedicine", cat: "Tech", date: "Jan 28" },
//     { title: "Top 5 Winter Superfoods", cat: "Diet", date: "Jan 15" }
//   ];

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
//         <section className="blogs-hero">
//           <div className="section-header">
//             <h2>Health <span>Insights</span></h2>
//             <div className="accent-line"></div>
//           </div>
//         </section>

//         <div className="blogs-grid-container">
//           {articles.map((post, i) => (
//             <div key={i} className="modern-doctor-card">
//               <div className="card-img-wrapper" style={{background: '#d1fae5', height: '150px'}}></div>
//               <div className="card-details">
//                 <span className="specialty-tag">{post.cat}</span>
//                 <h3>{post.title}</h3>
//                 <p className="experience-text">📅 {post.date}, 2026</p>
//                 <button className="book-mini-btn">Read More</button>
//               </div>
//             </div>
//           ))}
//         </div>
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

// export default Blogs;


import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./blogs.css";

const Blogs = () => {
  const navigate = useNavigate();
  const [saasDropdown, setSaasDropdown] = useState(false);
  const [doctorDropdown, setDoctorDropdown] = useState(false);
  const [patientDropdown, setPatientDropdown] = useState(false);
  const saasRef = useRef(null);

  const articles = [
    { title: "Mental Health in 2026", cat: "Wellness", date: "Feb 10" },
    { title: "The Future of Telemedicine", cat: "Tech", date: "Jan 28" },
    { title: "Top 5 Winter Superfoods", cat: "Diet", date: "Jan 15" }
  ];

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
          <span className="nav-item active-tab" onClick={() => navigate("/blogs")}>Blogs</span>
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
          <Link to="/login" className="secondary-btn">Login</Link>
          <button className="signup-btn" onClick={() => navigate("/signup")}>SignUp</button>
        </div>
      </header>

      {/* HERO */}
      <main className="main-content">
        <section className="blogs-hero">
          <div className="section-header">
            <h2>Health <span>Insights</span></h2>
            <div className="accent-line"></div>
          </div>
        </section>

        {/* BLOG CARDS */}
        <div className="blogs-grid-container">
          {articles.map((post, i) => (
            <div key={i} className="modern-doctor-card">
              <div className="card-img-wrapper" style={{background: '#d1fae5', height: '150px'}}></div>
              <div className="card-details">
                <span className="specialty-tag">{post.cat}</span>
                <h3>{post.title}</h3>
                <p className="experience-text">📅 {post.date}, 2026</p>
                <button className="book-mini-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
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

export default Blogs;

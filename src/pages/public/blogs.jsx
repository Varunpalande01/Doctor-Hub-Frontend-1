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
import { useNavigate } from "react-router-dom";
import "./blogs.css";

const Blogs = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [saasDropdown, setSaasDropdown] = useState(false);
  const [doctorSub, setDoctorSub] = useState(false);
  const [patientSub, setPatientSub] = useState(false);
  const saasRef = useRef(null);

  const articles = [
    { title: "Mental Health in 2026", cat: "Wellness", date: "Feb 10", img: "#d1fae5" },
    { title: "Future of Telemedicine", cat: "Tech", date: "Jan 28", img: "#dbeafe" },
    { title: "Top 5 Winter Superfoods", cat: "Diet", date: "Jan 15", img: "#fef3c7" },
    { title: "Yoga vs Gym Guide", cat: "Fitness", date: "Jan 05", img: "#fee2e2" },
    { title: "Heart Health in Youth", cat: "Medical", date: "Dec 28", img: "#e0e7ff" },
    { title: "Posture at Work", cat: "Lifestyle", date: "Dec 20", img: "#f1f5f9" }
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (saasRef.current && !saasRef.current.contains(e.target)) setSaasDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="home-wrapper">
      {/* --- BACKGROUND BLOBS --- */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* --- SIDEBAR OVERLAY --- */}
      <div className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`} onClick={() => setIsSidebarOpen(false)}></div>

      {/* --- MOBILE SIDEBAR --- */}
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

          <div className="sidebar-nav-link active-side" onClick={() => {navigate("/blogs"); setIsSidebarOpen(false);}}>📰 Blogs</div>
          <div className="sidebar-nav-link" onClick={() => {navigate("/contact"); setIsSidebarOpen(false);}}>📞 Contact Us</div>
          
          <p className="sidebar-label">SaaS Solutions</p>
          <div className="sidebar-nav-link" onClick={() => setDoctorSub(!doctorSub)}>👨‍⚕️ For Doctors {doctorSub ? "▾" : "▸"}</div>
          {doctorSub && <div className="sidebar-sub-link" onClick={() => navigate("/doctor/dashboard")}>→ Dashboard</div>}
          <div className="sidebar-nav-link" onClick={() => setPatientSub(!patientSub)}>👤 For Patients {patientSub ? "▾" : "▸"}</div>
          {patientSub && <div className="sidebar-sub-link" onClick={() => navigate("/patient/dashboard")}>→ Portal</div>}
        </div>
        <div className="sidebar-footer">
          <button className="secondary-btn-mob" onClick={() => navigate("/login")}>Login</button>
          <button className="primary-btn-mob" onClick={() => navigate("/signup")}>Sign Up</button>
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

          <span className="nav-item active-tab" onClick={() => navigate("/blogs")}> Doctor'sBlogs</span>
        <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
          <div className="nav-item dropdown-toggle" ref={saasRef}>
            <span onClick={() => setSaasDropdown(!saasDropdown)}>SaaS For {saasDropdown ? "▴" : "▾"}</span>
            {saasDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => navigate("/doctor/dashboard")}>For Doctors</div>
                <div className="dropdown-item" onClick={() => navigate("/patient/dashboard")}>For Patients</div>
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

      {/* --- MAIN CONTENT --- */}
      <main className="main-content">
        <section className="blogs-hero">
          <div className="section-header">
            <h2>Health <span>Insights</span></h2>
            <div className="accent-line"></div>
          </div>
        </section>

        <div className="blogs-grid-container">
          {articles.map((post, i) => (
            <div key={i} className="modern-doctor-card">
              <div className="card-img-wrapper" style={{background: post.img}}></div>
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

      {/* --- FOOTER --- */}
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

export default Blogs;
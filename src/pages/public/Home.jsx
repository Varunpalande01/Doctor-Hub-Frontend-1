
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom"; 
// // import { doctorsDummyData } from "../../utils/doctorsDummyData";
// // import "./Home.css";

// // // Import your hero image
// // import heroImg from "../../assets/images/d.jpg"; 

// // const HomePage = () => {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [showAuthPrompt, setShowAuthPrompt] = useState(false);
// //   const navigate = useNavigate();

// //   // Filter logic for the search bar
// //   const filteredDoctors = doctorsDummyData.filter((doctor) => {
// //     const query = searchQuery.toLowerCase();
// //     return (
// //       doctor.name.toLowerCase().includes(query) ||
// //       doctor.specialty.toLowerCase().includes(query) ||
// //       doctor.city.toLowerCase().includes(query) ||
// //       doctor.location.toLowerCase().includes(query)
// //     );
// //   });

// //   const handleActionClick = () => setShowAuthPrompt(true);

// //   return (
// //     <div className="home-wrapper">
// //       {/* --- AUTH POPUP MODAL --- */}
// //       {showAuthPrompt && (
// //         <div className="auth-overlay" onClick={() => setShowAuthPrompt(false)}>
// //           <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
// //             <div className="modal-icon">🔒</div>
// //             <h3>Access Required</h3>
// //             <p>Please login or signup to view full doctor details and book appointments.</p>
// //             <div className="auth-modal-buttons">
// //               <button className="modal-login-btn" onClick={() => navigate("/login")}>
// //                 Login to Account
// //               </button>
// //               <button className="modal-signup-btn" onClick={() => navigate("/signup")}>
// //                 Register New Account
// //               </button>
// //               <button className="modal-cancel-btn" onClick={() => setShowAuthPrompt(false)}>
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}

      
// //       <div className="home-page">
// //         {/* Header - Updated with Navigation in Center */}
// //         <header className="home-header">
// //           <h1 onClick={() => navigate("/")} style={{cursor: 'pointer'}}>Doctor's Hub</h1>
          
// //           <nav className="header-nav">
// //             <span onClick={handleActionClick}>About Us</span>
// //             <span onClick={handleActionClick}>Blogs</span>
// //             <span onClick={handleActionClick}>Contact Us</span>
// //           </nav>

// //           <div className="auth-buttons">
// //             <Link to="/login"><button className="login-btn">Login</button></Link>
// //             <Link to="/signup"><button className="signup-btn">Signup</button></Link>
// //           </div>
// //         </header>

// //         {/* Hero Section */}
// //         <section className="hero-section">
// //           <div className="hero-text">
// //             <h2>Your Trusted Healthcare Partner</h2>
// //             <p>Find the best doctors, book appointments, and stay healthy.</p>
// //             <button className="get-started-btn" onClick={handleActionClick}>Get Started</button>
// //           </div>
// //           <div className="hero-image">
// //             <img src={heroImg} alt="Healthcare" />
// //           </div>
// //         </section>

// //         {/* Search Section */}
// //         <div className="search-section">
// //           <input
// //             type="text"
// //             placeholder="Search doctors by name, specialty, city, or location..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //           />
// //         </div>

// //         {/* Doctors Section */}
// //         <section className="doctors-section">
// //           <h2>Our Expert Doctors</h2>
// //           <div className="doctor-cards">
// //             {filteredDoctors.length > 0 ? (
// //               filteredDoctors.map((doctor) => (
// //                 <div key={doctor.id} className="doctor-card" onClick={handleActionClick}>
// //                   <img src={doctor.profileImage} alt={doctor.name} />
// //                   <h3>{doctor.name}</h3>
// //                   <p className="specialty-text">{doctor.specialty}</p>
// //                   <p className="exp-text">{doctor.experience} years experience</p>
// //                   <p className="loc-text">📍 {doctor.city}, {doctor.location}</p>
// //                 </div>
// //               ))
// //             ) : (
// //               <p className="no-results">No doctors found.</p>
// //             )}
// //           </div>
// //         </section>

// //         {/* Testimonials Section */}
// //         <section className="testimonials-section">
// //           <div className="section-title">
// //             <h2>What Our Patients Say</h2>
// //             <div className="underline"></div>
// //           </div>
// //           <div className="testimonial-cards">
// //             <div className="testimonial-card">
// //               <p className="testimonial-text">"Amazing doctors and excellent service. Highly recommend!"</p>
// //               <h4>- Priya Sharma</h4>
// //             </div>
// //             <div className="testimonial-card">
// //               <p className="testimonial-text">"Booking appointments was super easy and fast."</p>
// //               <h4>- Adam Wilson</h4>
// //             </div>
// //             <div className="testimonial-card">
// //               <p className="testimonial-text">"Professional and caring staff. My health improved quickly."</p>
// //               <h4>- Neha Verma</h4>
// //             </div>
// //             <div className="testimonial-card">
// //               <p className="testimonial-text">"My health improved quickly. Best experience ever!"</p>
// //               <h4>- Varun Palande</h4>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Blogs Section */}
// //         <section className="blogs-section">
// //           <div className="section-title">
// //             <h2>Health Tips & Articles</h2>
// //             <div className="underline"></div>
// //           </div>
// //           <div className="blog-cards">
// //             <div className="blog-card">
// //               <h3>10 Tips for Healthy Skin</h3>
// //               <p>Learn the best ways to care for your skin and stay radiant.</p>
// //               <button className="read-more" onClick={handleActionClick}>Read More</button>
// //             </div>
// //             <div className="blog-card">
// //               <h3>Managing Stress</h3>
// //               <p>Simple techniques to reduce stress and boost mental health.</p>
// //               <button className="read-more" onClick={handleActionClick}>Read More</button>
// //             </div>
// //             <div className="blog-card">
// //               <h3>Nutrition for Wellness</h3>
// //               <p>Essential diet tips to keep your body and mind healthy.</p>
// //               <button className="read-more" onClick={handleActionClick}>Read More</button>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Footer */}
// //         <footer className="home-footer">
// //           <div className="footer-content">
// //             <h3>Doctor's Hub</h3>
// //             <p>© 2026 Doctor's Hub. All rights reserved.</p>
// //           </div>
// //         </footer>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; 
// import { doctorsDummyData } from "../../utils/doctorsDummyData";
// import "./Home.css";
// import heroImg from "../../assets/images/d.png"; 

// const HomePage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showAuthPrompt, setShowAuthPrompt] = useState(false);
//   const navigate = useNavigate();

//   const filteredDoctors = doctorsDummyData.filter((doctor) => {
//     const query = searchQuery.toLowerCase();
//     return (
//       doctor.name.toLowerCase().includes(query) ||
//       doctor.specialty.toLowerCase().includes(query) ||
//       doctor.city.toLowerCase().includes(query) ||
//       doctor.location.toLowerCase().includes(query)
//     );
//   });

//   // Function for restricted items
//   const handleRestrictedAction = () => setShowAuthPrompt(true);

//   return (
//     <div className="home-wrapper">
//       {/* --- AUTH POPUP MODAL --- */}
//       {showAuthPrompt && (
//         <div className="auth-overlay" onClick={() => setShowAuthPrompt(false)}>
//           <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-icon">🔒</div>
//             <h3>Access Restricted</h3>
//             <p>Please log in or create an account to view specialist profiles and book your appointment.</p>
//             <div className="auth-modal-buttons">
//               <button className="modal-login-btn" onClick={() => navigate("/login")}>Login</button>
//               <button className="modal-signup-btn" onClick={() => navigate("/signup")}>Register</button>
//               <button className="modal-cancel-btn" onClick={() => setShowAuthPrompt(false)}>Maybe Later</button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="home-page">
//         {/* Header - Nav updated for direct access */}
//         <header className="home-header">
//           <div className="header-brand" onClick={() => navigate("/")}>
//             <h1>Doctor's Hub</h1>
//           </div>
          
//           <nav className="header-nav">
//             <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
//             <span className="nav-item" onClick={() => navigate("/blogs")}>Blogs</span>
//             <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
//           </nav>

//           <div className="auth-buttons">
//             <Link to="/login" className="secondary-btn">Login</Link>
//             <button className="signup-btn" onClick={() => navigate("/signup")}>SignUp</button>
//           </div>
//         </header>

//         {/* Hero Section */}
//         <section className="hero-section">
//           <div className="hero-content">
//             <span className="hero-badge">Healthcare made simple</span>
//             <h2>Your Trusted <br/><span>Healthcare Partner</span></h2>
//             <p>Connect with top-rated medical professionals in your area. Secure, fast, and reliable booking.</p>
//             <div className="hero-cta">
//               <button className="primary-btn" onClick={handleRestrictedAction}>Find a Doctor</button>
//               <button className="secondary-btn" onClick={() => navigate("/about")}>Learn More</button>
//             </div>
//           </div>
//           <div className="hero-visual">
//             {/* The transparent image is styled via the .hero-visual-img class in CSS */}
//             <img src={heroImg} alt="Professional Doctor" className="hero-visual-img" />
//             <div className="floating-card">
//               <span style={{color: 'var(--primary)', fontWeight: 'bold'}}>✓</span>
//               <div>
//                 <strong>Verified Experts</strong>
//                 <p style={{fontSize: '12px', margin: 0}}>1000+ Specialists</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Search Bar */}
//         <div className="search-container">
//           <div className="search-bar">
//             <span className="search-icon">🔍</span>
//             <input
//               type="text"
//               placeholder="Search by name, specialty, or location..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Doctors Listing */}
//         <section className="doctors-section">
//           <div className="section-header">
//             <h2>Our Expert Doctors</h2>
//             <div className="accent-line"></div>
//           </div>
          
//           <div className="doctor-grid">
//             {filteredDoctors.length > 0 ? (
//               filteredDoctors.map((doctor) => (
//                 <div key={doctor.id} className="modern-doctor-card" onClick={handleRestrictedAction}>
//                   <div className="card-img-wrapper">
//                     <img src={doctor.profileImage} alt={doctor.name} />
//                   </div>
//                   <div className="card-details">
//                     <span className="specialty-tag">{doctor.specialty}</span>
//                     <h3>{doctor.name}</h3>
//                     <p className="experience-text">💼 {doctor.experience} Years Exp.</p>
//                     <p className="location-text">📍 {doctor.city}, {doctor.location}</p>
//                     <button className="book-mini-btn">View Profile</button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="empty-state">
//                 <p>No specialists found matching your search.</p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="main-footer">
//           <div className="footer-top">
//             <h2>Doctor's Hub</h2>
//             <p>Elevating the standard of digital healthcare.</p>
//           </div>
//           <div className="footer-bottom">
//             <p>© 2026 Doctor's Hub. All rights reserved.</p>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default HomePage;




import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { doctorsDummyData } from "../../utils/doctorsDummyData";
import heroImg from "../../assets/images/d.png";
import "./home.css";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [saasDropdown, setSaasDropdown] = useState(false);
  const [doctorDropdown, setDoctorDropdown] = useState(false);
  const [patientDropdown, setPatientDropdown] = useState(false);
  const navigate = useNavigate();
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

  const filteredDoctors = doctorsDummyData.filter((doctor) => {
    const query = searchQuery.toLowerCase();
    return (
      doctor.name.toLowerCase().includes(query) ||
      doctor.specialty.toLowerCase().includes(query) ||
      doctor.city.toLowerCase().includes(query) ||
      doctor.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="home-wrapper">
      <div className="home-page">
        {/* HEADER */}
        <header className="home-header">
          <div className="header-brand" onClick={() => navigate("/")}>
            <h1>Doctor's Hub</h1>
          </div>

          <nav className="header-nav">
            <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
            <span className="nav-item" onClick={() => navigate("/blogs")}>Blogs</span>
            <span className="nav-item" onClick={() => navigate("/all-services")}>All Services</span>
            <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>

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

        {/* HERO */}
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">Healthcare made simple</span>
            <h2>Your Trusted <br/><span>Healthcare Partner</span></h2>
            <p>Connect with top-rated medical professionals in your area. Secure, fast, and reliable booking.</p>
            <div className="hero-cta">
              <button className="primary-btn" onClick={() => navigate("/all-services")}>Find a Doctor</button>
              <button className="secondary-btn" onClick={() => navigate("/about")}>Learn More</button>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImg} alt="Professional Doctor" className="hero-visual-img" />
          </div>
        </section>

        {/* SEARCH */}
        <div className="search-container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by name, specialty, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* DOCTORS */}
        <section className="doctors-section">
          <div className="section-header">
            <h2>Our Expert Doctors</h2>
            <div className="accent-line"></div>
          </div>

          <div className="doctor-grid">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="modern-doctor-card">
                  <div className="card-img-wrapper">
                    <img src={doctor.profileImage} alt={doctor.name} />
                  </div>
                  <div className="card-details">
                    <span className="specialty-tag">{doctor.specialty}</span>
                    <h3>{doctor.name}</h3>
                    <p className="experience-text">💼 {doctor.experience} Years Exp.</p>
                    <p className="location-text">📍 {doctor.city}, {doctor.location}</p>
                    <button className="book-mini-btn">View Profile</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <p>No specialists found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="main-footer">
          <div className="footer-top">
            <h2>Doctor's Hub</h2>
            <p>Elevating the standard of digital healthcare.</p>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Doctor's Hub. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;

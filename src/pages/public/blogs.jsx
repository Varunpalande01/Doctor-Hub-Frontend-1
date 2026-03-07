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
import Logo from "../../assets/images/logo.png"

const Blogs = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [saasDropdown, setSaasDropdown] = useState(false);
  const [doctorSub, setDoctorSub] = useState(false);
  const [patientSub, setPatientSub] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); // State for Modal
  const saasRef = useRef(null);

  const articles = [
    { 
      title: "The Microbiome Connection: Gut Health & Immunity", 
      cat: "Gastroenterology", 
      date: "Feb 10", 
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
      desc: "Recent clinical studies reveal how your gut flora dictates your body's immune response to viral infections.",
      content: "The human gut is home to trillions of microbes that play a crucial role in our overall health. In 2026, research has solidified the 'Gut-Lung Axis' theory, showing that a diverse microbiome can significantly reduce the severity of respiratory illnesses. To maintain this balance, doctors recommend a diet rich in fermented foods like Kefir and Kimchi, alongside high-fiber prebiotics. Avoiding over-processed sugars is vital, as they feed harmful bacteria that trigger systemic inflammation. This article explores how personalized probiotic therapy is becoming the next frontier in preventive medicine in Mumbai's leading clinics."
    },
    { 
      title: "Advancements in Early Cardiac Detection", 
      cat: "Cardiology", 
      date: "Jan 28", 
      img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800",
      desc: "How AI-integrated ECG wearables are saving lives by detecting silent arrhythmias before symptoms occur.",
      content: "Cardiovascular diseases remains a top concern in urban populations. However, the rise of medical-grade wearables has changed the game. These devices now monitor heart rate variability (HRV) and QT intervals with 98% accuracy. Cardiologists emphasize that early detection of Atrial Fibrillation can prevent up to 80% of related strokes. At Doctor's Hub, we analyze how these data points are synced directly with physician dashboards for real-time intervention. We also discuss the importance of 'Heart-Healthy' sleep cycles and why deep sleep is the heart's primary recovery phase."
    },
    { 
      title: "The Silent Epidemic: Vitamin D Deficiency in Tropics", 
      cat: "Endocrinology", 
      date: "Jan 15", 
      img: "https://images.unsplash.com/photo-1505151741134-b8296518f2b8?auto=format&fit=crop&q=80&w=800",
      desc: "Why 70% of urban Indians are deficient in Vitamin D despite abundant sunlight, and its impact on bone density.",
      content: "It is a medical irony: despite being a sun-drenched country, Vitamin D deficiency is rampant. This is largely due to increased indoor lifestyles and high pollution levels blocking UVB rays. Vitamin D isn't just a vitamin; it's a pro-hormone that regulates calcium absorption and mood stability. Doctors now recommend 'Sun-Drenching' during specific hours (11 AM to 1 PM) for at least 15 minutes, or supplementation under clinical supervision. This blog breaks down the link between low Vitamin D and chronic fatigue, and why a simple blood test could be the key to unlocking your energy levels."
    },
    { 
      title: "Understanding Cortisol: Managing Stress Biologically", 
      cat: "Psychiatry", 
      date: "Jan 05", 
      img: "https://images.unsplash.com/photo-1499209974431-9dac3adaf471?auto=format&fit=crop&q=80&w=800",
      desc: "An in-depth look at how chronic stress hormone elevation leads to metabolic syndrome and brain fog.",
      content: "Stress is often viewed as a feeling, but it is a biological process driven by Cortisol. When your body stays in 'fight or flight' mode for too long, it leads to muscle breakdown, abdominal fat storage, and impaired cognitive function. Professional wellness strategies now focus on Vagus Nerve stimulation and diaphragmatic breathing to switch the body into the 'Rest and Digest' parasympathetic state. We cover evidence-based techniques like Forest Bathing (Shinrin-yoku) and how even 10 minutes of nature exposure can drop salivary cortisol levels by 20%."
    },
    { 
      title: "Precision Nutrition: The End of One-Size-Fits-All Diets", 
      cat: "Nutrition", 
      date: "Dec 28", 
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      desc: "Using genetic markers to determine the perfect macronutrient ratio for your unique DNA profile.",
      content: "Why does one person lose weight on a keto diet while another feels sluggish? The answer lies in Nutrigenomics. In 2026, we are moving away from generic diet charts. By analyzing DNA markers related to carbohydrate metabolism and fat oxidation, nutritionists can now craft plans that optimize cellular energy. This article explains the role of Continuous Glucose Monitors (CGM) in understanding how specific foods—like white rice or whole wheat—affect your blood sugar spikes individually. It's time to stop guessing and start measuring your metabolic health."
    },
    { 
      title: "Digital Eye Strain: Protecting Vision in the AI Era", 
      cat: "Ophthalmology", 
      date: "Dec 20", 
      img: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800",
      desc: "Preventing Computer Vision Syndrome with the latest ergonomic research and blue-light filtration truths.",
      content: "With screen time averaging 9 hours a day for working professionals, our eyes are under constant fatigue. Digital Eye Strain (DES) causes headaches, dry eyes, and blurred vision. Ophthalmic experts suggest that the 'Blue Light' concern is secondary to 'Blink Rate' reduction. When staring at screens, we blink 60% less, leading to tear film evaporation. This blog details the 'Rule of 20s', the importance of proper ambient lighting to reduce glare, and why artificial tears are becoming a desk-staple for the modern workforce."
    }
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
          <div className="sidebar-nav-link active-side" onClick={() => {navigate("/blogs"); setIsSidebarOpen(false);}}>📰 Doctor Blogs</div>
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
          <img src={Logo} alt="Doctor's Hub Logo" className="logo-img" />
          <h1>Doctor's <span>Hub</span></h1>
        </div>

        <nav className="header-nav desktop-only">
          <span className="nav-item" onClick={() => navigate("/")}>Home</span>
          <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
          <span className="nav-item" onClick={() => navigate("/all-services")}> Services</span>
          <span className="nav-item active-tab" onClick={() => navigate("/blogs")}> Doctor'sBlogs</span>
          <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
          <div className="nav-item dropdown-toggle" ref={saasRef}>
            <span onClick={() => setSaasDropdown(!saasDropdown)}>
              SaaS For {saasDropdown ? "▴" : "▾"}
            </span>
            {saasDropdown && (
              <div className="dropdown-menu-desktop">
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
            <h2>Medical <span>Journal</span></h2>
            <p style={{color:'var(--text-light)', marginTop:'10px', fontSize:'15px'}}>Verified health insights and research from Mumbai's top clinical specialists</p>
            <div className="accent-line"></div>
          </div>
        </section>

        <div className="blogs-grid-container">
          {articles.map((post, i) => (
            <div key={i} className="modern-doctor-card">
              <div 
                className="card-img-wrapper" 
                style={{backgroundImage: `url(${post.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
              ></div>
              <div className="card-details">
                <span className="specialty-tag">{post.cat}</span>
                <h3>{post.title}</h3>
                <p className="experience-text" style={{margin:'5px 0 15px', lineHeight:'1.5', color:'#475569'}}>{post.desc}</p>
                <div style={{marginTop:'auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span className="experience-text" style={{fontWeight:'600'}}>📅 {post.date}, 2026</span>
                    <button className="book-mini-btn" onClick={() => setSelectedPost(post)}>Read Article</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- RESEARCH-GRADE BLOG MODAL --- */}
      {selectedPost && (
        <div className="blog-modal-overlay" onClick={() => setSelectedPost(null)}>
            <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={() => setSelectedPost(null)}>×</button>
                
                <div className="modal-scroll-area">
                    <div className="modal-image-header" style={{backgroundImage: `url(${selectedPost.img})`}}>
                        <div className="modal-img-overlay">
                            <span className="specialty-tag modal-tag">{selectedPost.cat}</span>
                        </div>
                    </div>
                    
                    <div className="modal-body-text">
                        <div className="modal-header-info">
                            <span className="modal-date">Clinical Review • {selectedPost.date}, 2026</span>
                            <h2>{selectedPost.title}</h2>
                            <div className="author-badge">
                                <img src={Logo} alt="DocHub" className="author-img" />
                                <div>
                                    <p className="author-name">DocHub Medical Editorial Board</p>
                                    <p className="author-sub">Reviewed by Chief Medical Officer</p>
                                </div>
                            </div>
                        </div>

                        <hr className="modal-divider" />
                        
                        <div className="modal-article-content">
                            {selectedPost.content.split('. ').map((para, idx) => (
                                <p key={idx} className="content-paragraph">{para}.</p>
                            ))}
                        </div>

                        <div className="modal-disclaimer">
                            <p><strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider for personal health concerns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="main-footer">
        <div className="footer-container">
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

          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-list">
              <li onClick={() => navigate("/all-services")}>Find Doctors</li>
              <li onClick={() => navigate("/all-services")}>Hospitals</li>
              <li onClick={() => navigate("/all-services")}>Diagnostic Labs</li>
              <li onClick={() => navigate("/all-services")}>Online Pharmacy</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul className="footer-list">
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/about")}>About Us</li>
              <li onClick={() => navigate("/blogs")}>Doctor Blogs</li>
              <li onClick={() => navigate("/all-services")}>Services</li>
              <li onClick={() => navigate("/contact")}>Contact Us</li>
            </ul>
          </div>

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
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./AllServices.css";

// const AllServicesPage = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("Doctors");

//   // --- Mumbai-Centric Data (at least 5 each) ---
//   const doctors = [
//     { id: 1, name: "Dr. Aditi Sharma", specialty: "Cardiologist", location: "Andheri West, Mumbai", age: 45, experience: 20 },
//     { id: 2, name: "Dr. Rohan Mehta", specialty: "Dermatologist", location: "Bandra East, Mumbai", age: 38, experience: 12 },
//     { id: 3, name: "Dr. Kavita Desai", specialty: "Pediatrician", location: "Chembur, Mumbai", age: 42, experience: 15 },
//     { id: 4, name: "Dr. Sameer Kapoor", specialty: "Orthopedic", location: "Malad West, Mumbai", age: 50, experience: 25 },
//     { id: 5, name: "Dr. Neha Patil", specialty: "Neurologist", location: "Powai, Mumbai", age: 37, experience: 10 },
//     { id: 6, name: "Dr. Rajiv Nair", specialty: "Gynecologist", location: "Lower Parel, Mumbai", age: 44, experience: 18 }
//   ];

//   const hospitals = [
//     { id: 1, name: "Lilavati Hospital", location: "Bandra West, Mumbai", departments: ["Cardiology", "Neurology"], rating: 4.7 },
//     { id: 2, name: "Bombay Hospital", location: "Marine Lines, Mumbai", departments: ["Dermatology", "Pediatrics"], rating: 4.5 },
//     { id: 3, name: "Wockhardt Hospital", location: "Mira Road, Mumbai", departments: ["Orthopedics", "Gynecology"], rating: 4.4 },
//     { id: 4, name: "SevenHills Hospital", location: "Andheri East, Mumbai", departments: ["Cardiology", "Oncology"], rating: 4.6 },
//     { id: 5, name: "Hiranandani Hospital", location: "Powai, Mumbai", departments: ["Neurology", "Pediatrics"], rating: 4.5 }
//   ];

//   const labs = [
//     { id: 1, name: "Thyrocare Labs", location: "Andheri East, Mumbai", tests: ["Blood Test", "MRI", "X-Ray"], rating: 4.6 },
//     { id: 2, name: "Dr. Lal PathLabs", location: "Bandra West, Mumbai", tests: ["COVID Test", "Cholesterol Test"], rating: 4.5 },
//     { id: 3, name: "Metropolis Labs", location: "Powai, Mumbai", tests: ["CT Scan", "Blood Test"], rating: 4.4 },
//     { id: 4, name: "SRL Diagnostics", location: "Malad West, Mumbai", tests: ["Urine Test", "ECG"], rating: 4.3 },
//     { id: 5, name: "Healthians Labs", location: "Chembur, Mumbai", tests: ["Blood Sugar Test", "Vitamin Test"], rating: 4.2 }
//   ];

//   const clinics = [
//     { id: 1, name: "Sunrise Clinic", location: "Andheri West, Mumbai", services: ["General Physician", "Dermatology"], rating: 4.3 },
//     { id: 2, name: "Healthy Life Clinic", location: "Bandra East, Mumbai", services: ["Pediatrics", "Gynecology"], rating: 4.2 },
//     { id: 3, name: "WellCare Clinic", location: "Powai, Mumbai", services: ["Cardiology", "Neurology"], rating: 4.4 },
//     { id: 4, name: "City Health Clinic", location: "Malad West, Mumbai", services: ["Orthopedic", "Physiotherapy"], rating: 4.1 },
//     { id: 5, name: "LifePlus Clinic", location: "Chembur, Mumbai", services: ["General Physician", "Pediatrics"], rating: 4.2 }
//   ];

//   const pharmacies = [
//     { id: 1, name: "Apollo Pharmacy", location: "Chembur, Mumbai", services: ["Medicines", "Health Supplements"], rating: 4.5 },
//     { id: 2, name: "MedPlus Pharmacy", location: "Malad West, Mumbai", services: ["Medicines", "OTC Products"], rating: 4.4 },
//     { id: 3, name: "Guardian Pharmacy", location: "Bandra West, Mumbai", services: ["Medicines", "Wellness Products"], rating: 4.3 },
//     { id: 4, name: "PharmaWorld", location: "Andheri East, Mumbai", services: ["Medicines", "Vitamins"], rating: 4.2 },
//     { id: 5, name: "CarePoint Pharmacy", location: "Powai, Mumbai", services: ["Medicines", "Health Checks"], rating: 4.4 }
//   ];

//   const diagnostics = [
//     { id: 1, name: "HealthCheck Diagnostics", location: "Powai, Mumbai", tests: ["Blood Test", "ECG"], rating: 4.3 },
//     { id: 2, name: "Precision Diagnostics", location: "Lower Parel, Mumbai", tests: ["X-Ray", "MRI"], rating: 4.2 },
//     { id: 3, name: "MediScan Diagnostics", location: "Andheri West, Mumbai", tests: ["CT Scan", "Ultrasound"], rating: 4.4 },
//     { id: 4, name: "CityLab Diagnostics", location: "Bandra East, Mumbai", tests: ["Blood Sugar Test", "ECG"], rating: 4.1 },
//     { id: 5, name: "PathCare Labs", location: "Chembur, Mumbai", tests: ["MRI", "Vitamin Test"], rating: 4.2 }
//   ];

//   // Filter function based on active tab
//   const filteredData = () => {
//     const query = searchQuery.toLowerCase();
//     if (activeTab === "Doctors") {
//       return doctors.filter(
//         doc =>
//           doc.name.toLowerCase().includes(query) ||
//           doc.specialty.toLowerCase().includes(query) ||
//           doc.location.toLowerCase().includes(query) ||
//           doc.age.toString().includes(query)
//       );
//     } else if (activeTab === "Hospitals") {
//       return hospitals.filter(
//         hosp =>
//           hosp.name.toLowerCase().includes(query) ||
//           hosp.location.toLowerCase().includes(query) ||
//           hosp.departments.some(dep => dep.toLowerCase().includes(query))
//       );
//     } else if (activeTab === "Labs") {
//       return labs.filter(
//         lab =>
//           lab.name.toLowerCase().includes(query) ||
//           lab.location.toLowerCase().includes(query) ||
//           lab.tests.some(test => test.toLowerCase().includes(query))
//       );
//     } else if (activeTab === "Clinics") {
//       return clinics.filter(
//         clinic =>
//           clinic.name.toLowerCase().includes(query) ||
//           clinic.location.toLowerCase().includes(query) ||
//           clinic.services.some(service => service.toLowerCase().includes(query))
//       );
//     } else if (activeTab === "Pharmacies") {
//       return pharmacies.filter(
//         phar =>
//           phar.name.toLowerCase().includes(query) ||
//           phar.location.toLowerCase().includes(query) ||
//           phar.services.some(service => service.toLowerCase().includes(query))
//       );
//     } else if (activeTab === "Diagnostics") {
//       return diagnostics.filter(
//         diag =>
//           diag.name.toLowerCase().includes(query) ||
//           diag.location.toLowerCase().includes(query) ||
//           diag.tests.some(test => test.toLowerCase().includes(query))
//       );
//     }
//     return [];
//   };

//   const getIcon = () => {
//     switch (activeTab) {
//       case "Doctors": return "🩺";
//       case "Hospitals": return "🏥";
//       case "Labs": return "🧪";
//       case "Clinics": return "🏨";
//       case "Pharmacies": return "💊";
//       case "Diagnostics": return "🔬";
//       default: return "❓";
//     }
//   };

//   return (
//     <div className="home-wrapper">
//       {/* HEADER */}
//       <header className="home-header">
//         <div className="header-brand" onClick={() => navigate("/")}>
//           <h1>Doctor's Hub</h1>
//         </div>
//         <nav className="header-nav">
//           <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
//           <span className="nav-item" onClick={() => navigate("/blogs")}>Blogs</span>
//           <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
//           <span className="nav-item active-tab">All Services</span>
//         </nav>
//         <div className="auth-buttons">
//           <Link to="/login" className="secondary-btn">Login</Link>
//           <button className="signup-btn" onClick={() => navigate("/signup")}>SignUp</button>
//         </div>
//       </header>

//       {/* HERO + SEARCH */}
//       <section className="services-hero">
//         <div className="section-header">
//           <h2>Explore Our <span>Healthcare Services</span></h2>
//           <div className="accent-line"></div>
//         </div>

//         {/* SEARCH BAR */}
//         <div className="search-container">
//           <div className="search-bar">
//             <span className="search-icon">🔍</span>
//             <input
//               type="text"
//               placeholder={`Search ${activeTab.toLowerCase()}...`}
//               value={searchQuery}
//               onChange={e => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* CATEGORY TABS */}
//         <div className="category-tabs">
//           {["Doctors","Hospitals","Labs","Clinics","Pharmacies","Diagnostics"].map(tab => (
//             <button
//               key={tab}
//               className={`tab-btn ${activeTab === tab ? "active" : ""}`}
//               onClick={() => { setActiveTab(tab); setSearchQuery(""); }}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* DATA GRID */}
//       <section className="services-grid">
//         {filteredData().length > 0 ? (
//           filteredData().map(item => (
//             <div key={item.id} className="modern-doctor-card">
//               <div className="card-img-wrapper" style={{background:'#d1fae5', height:'150px'}}>
//                 <span style={{fontSize:'3rem', display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
//                   {getIcon()}
//                 </span>
//               </div>
//               <div className="card-details">
//                 {activeTab === "Doctors" && (
//                   <>
//                     <h3>{item.name}</h3>
//                     <p>Specialty: {item.specialty}</p>
//                     <p>Location: {item.location}</p>
//                     <p>Age: {item.age}</p>
//                     <p>Experience: {item.experience} yrs</p>
//                   </>
//                 )}
//                 {activeTab === "Hospitals" && (
//                   <>
//                     <h3>{item.name}</h3>
//                     <p>Location: {item.location}</p>
//                     <p>Departments: {item.departments.join(", ")}</p>
//                     <p>Rating: {item.rating}</p>
//                   </>
//                 )}
//                 {activeTab === "Labs" && (
//                   <>
//                     <h3>{item.name}</h3>
//                     <p>Location: {item.location}</p>
//                     <p>Tests: {item.tests.join(", ")}</p>
//                     <p>Rating: {item.rating}</p>
//                   </>
//                 )}
//                 {activeTab === "Clinics" && (
//                   <>
//                     <h3>{item.name}</h3>
//                     <p>Location: {item.location}</p>
//                     <p>Services: {item.services.join(", ")}</p>
//                     <p>Rating: {item.rating}</p>
//                   </>
//                 )}
//                 {activeTab === "Pharmacies" && (
//                   <>
//                     <h3>{item.name}</h3>
//                     <p>Location: {item.location}</p>
//                     <p>Services: {item.services.join(", ")}</p>
//                     <p>Rating: {item.rating}</p>
//                   </>
//                 )}
//                 {activeTab === "Diagnostics" && (
//                   <>
//                     <h3>{item.name}</h3>
//                     <p>Location: {item.location}</p>
//                     <p>Tests: {item.tests.join(", ")}</p>
//                     <p>Rating: {item.rating}</p>
//                   </>
//                 )}
//                 <button className="book-mini-btn" onClick={() => navigate(`/${activeTab.toLowerCase()}`)}>
//                   View {activeTab}
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="empty-state">
//             <p>No {activeTab.toLowerCase()} found matching your search.</p>
//           </div>
//         )}
//       </section>

//       {/* FOOTER */}
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

// export default AllServicesPage;



import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AllServices.css";

const AllServicesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Doctors");

  // SaaS dropdown states
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

  // --- Mumbai-Centric Data (at least 5 each) ---
  const doctors = [
    { id: 1, name: "Dr. Aditi Sharma", specialty: "Cardiologist", location: "Andheri West, Mumbai", age: 45, experience: 20 },
    { id: 2, name: "Dr. Rohan Mehta", specialty: "Dermatologist", location: "Bandra East, Mumbai", age: 38, experience: 12 },
    { id: 3, name: "Dr. Kavita Desai", specialty: "Pediatrician", location: "Chembur, Mumbai", age: 42, experience: 15 },
    { id: 4, name: "Dr. Sameer Kapoor", specialty: "Orthopedic", location: "Malad West, Mumbai", age: 50, experience: 25 },
    { id: 5, name: "Dr. Neha Patil", specialty: "Neurologist", location: "Powai, Mumbai", age: 37, experience: 10 },
    { id: 6, name: "Dr. Rajiv Nair", specialty: "Gynecologist", location: "Lower Parel, Mumbai", age: 44, experience: 18 }
  ];

  const hospitals = [
    { id: 1, name: "Lilavati Hospital", location: "Bandra West, Mumbai", departments: ["Cardiology", "Neurology"], rating: 4.7 },
    { id: 2, name: "Bombay Hospital", location: "Marine Lines, Mumbai", departments: ["Dermatology", "Pediatrics"], rating: 4.5 },
    { id: 3, name: "Wockhardt Hospital", location: "Mira Road, Mumbai", departments: ["Orthopedics", "Gynecology"], rating: 4.4 },
    { id: 4, name: "SevenHills Hospital", location: "Andheri East, Mumbai", departments: ["Cardiology", "Oncology"], rating: 4.6 },
    { id: 5, name: "Hiranandani Hospital", location: "Powai, Mumbai", departments: ["Neurology", "Pediatrics"], rating: 4.5 }
  ];

  const labs = [
    { id: 1, name: "Thyrocare Labs", location: "Andheri East, Mumbai", tests: ["Blood Test", "MRI", "X-Ray"], rating: 4.6 },
    { id: 2, name: "Dr. Lal PathLabs", location: "Bandra West, Mumbai", tests: ["COVID Test", "Cholesterol Test"], rating: 4.5 },
    { id: 3, name: "Metropolis Labs", location: "Powai, Mumbai", tests: ["CT Scan", "Blood Test"], rating: 4.4 },
    { id: 4, name: "SRL Diagnostics", location: "Malad West, Mumbai", tests: ["Urine Test", "ECG"], rating: 4.3 },
    { id: 5, name: "Healthians Labs", location: "Chembur, Mumbai", tests: ["Blood Sugar Test", "Vitamin Test"], rating: 4.2 }
  ];

  const clinics = [
    { id: 1, name: "Sunrise Clinic", location: "Andheri West, Mumbai", services: ["General Physician", "Dermatology"], rating: 4.3 },
    { id: 2, name: "Healthy Life Clinic", location: "Bandra East, Mumbai", services: ["Pediatrics", "Gynecology"], rating: 4.2 },
    { id: 3, name: "WellCare Clinic", location: "Powai, Mumbai", services: ["Cardiology", "Neurology"], rating: 4.4 },
    { id: 4, name: "City Health Clinic", location: "Malad West, Mumbai", services: ["Orthopedic", "Physiotherapy"], rating: 4.1 },
    { id: 5, name: "LifePlus Clinic", location: "Chembur, Mumbai", services: ["General Physician", "Pediatrics"], rating: 4.2 }
  ];

  const pharmacies = [
    { id: 1, name: "Apollo Pharmacy", location: "Chembur, Mumbai", services: ["Medicines", "Health Supplements"], rating: 4.5 },
    { id: 2, name: "MedPlus Pharmacy", location: "Malad West, Mumbai", services: ["Medicines", "OTC Products"], rating: 4.4 },
    { id: 3, name: "Guardian Pharmacy", location: "Bandra West, Mumbai", services: ["Medicines", "Wellness Products"], rating: 4.3 },
    { id: 4, name: "PharmaWorld", location: "Andheri East, Mumbai", services: ["Medicines", "Vitamins"], rating: 4.2 },
    { id: 5, name: "CarePoint Pharmacy", location: "Powai, Mumbai", services: ["Medicines", "Health Checks"], rating: 4.4 }
  ];

  const diagnostics = [
    { id: 1, name: "HealthCheck Diagnostics", location: "Powai, Mumbai", tests: ["Blood Test", "ECG"], rating: 4.3 },
    { id: 2, name: "Precision Diagnostics", location: "Lower Parel, Mumbai", tests: ["X-Ray", "MRI"], rating: 4.2 },
    { id: 3, name: "MediScan Diagnostics", location: "Andheri West, Mumbai", tests: ["CT Scan", "Ultrasound"], rating: 4.4 },
    { id: 4, name: "CityLab Diagnostics", location: "Bandra East, Mumbai", tests: ["Blood Sugar Test", "ECG"], rating: 4.1 },
    { id: 5, name: "PathCare Labs", location: "Chembur, Mumbai", tests: ["MRI", "Vitamin Test"], rating: 4.2 }
  ];

  const filteredData = () => {
    const query = searchQuery.toLowerCase();
    if (activeTab === "Doctors") {
      return doctors.filter(
        doc =>
          doc.name.toLowerCase().includes(query) ||
          doc.specialty.toLowerCase().includes(query) ||
          doc.location.toLowerCase().includes(query) ||
          doc.age.toString().includes(query)
      );
    } else if (activeTab === "Hospitals") {
      return hospitals.filter(
        hosp =>
          hosp.name.toLowerCase().includes(query) ||
          hosp.location.toLowerCase().includes(query) ||
          hosp.departments.some(dep => dep.toLowerCase().includes(query))
      );
    } else if (activeTab === "Labs") {
      return labs.filter(
        lab =>
          lab.name.toLowerCase().includes(query) ||
          lab.location.toLowerCase().includes(query) ||
          lab.tests.some(test => test.toLowerCase().includes(query))
      );
    } else if (activeTab === "Clinics") {
      return clinics.filter(
        clinic =>
          clinic.name.toLowerCase().includes(query) ||
          clinic.location.toLowerCase().includes(query) ||
          clinic.services.some(service => service.toLowerCase().includes(query))
      );
    } else if (activeTab === "Pharmacies") {
      return pharmacies.filter(
        phar =>
          phar.name.toLowerCase().includes(query) ||
          phar.location.toLowerCase().includes(query) ||
          phar.services.some(service => service.toLowerCase().includes(query))
      );
    } else if (activeTab === "Diagnostics") {
      return diagnostics.filter(
        diag =>
          diag.name.toLowerCase().includes(query) ||
          diag.location.toLowerCase().includes(query) ||
          diag.tests.some(test => test.toLowerCase().includes(query))
      );
    }
    return [];
  };

  const getIcon = () => {
    switch (activeTab) {
      case "Doctors": return "🩺";
      case "Hospitals": return "🏥";
      case "Labs": return "🧪";
      case "Clinics": return "🏨";
      case "Pharmacies": return "💊";
      case "Diagnostics": return "🔬";
      default: return "❓";
    }
  };

  return (
    <div className="home-wrapper">
      {/* HEADER */}
      <header className="home-header">
        <div className="header-brand" onClick={() => navigate("/")}>
          <h1>Doctor's Hub</h1>
        </div>

        {/* NAVIGATION */}
        <nav className="header-nav">
          <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
          <span className="nav-item" onClick={() => navigate("/blogs")}>Blogs</span>
          <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
          <span className="nav-item active-tab">All Services</span>

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

        {/* AUTH BUTTONS */}
        <div className="auth-buttons">
          <Link to="/login" className="secondary-btn">Login</Link>
          <button className="signup-btn" onClick={() => navigate("/signup")}>SignUp</button>
        </div>
      </header>

      {/* HERO + SEARCH */}
      <section className="services-hero">
        <div className="section-header">
          <h2>Explore Our <span>Healthcare Services</span></h2>
          <div className="accent-line"></div>
        </div>

        {/* SEARCH BAR */}
        <div className="search-container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder={`Search ${activeTab.toLowerCase()}...`}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="category-tabs">
          {["Doctors","Hospitals","Labs","Clinics","Pharmacies","Diagnostics"].map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => { setActiveTab(tab); setSearchQuery(""); }}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* DATA GRID */}
      <section className="services-grid">
        {filteredData().length > 0 ? (
          filteredData().map(item => (
            <div key={item.id} className="modern-doctor-card">
              <div className="card-img-wrapper" style={{background:'#d1fae5', height:'150px'}}>
                <span style={{fontSize:'3rem', display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                  {getIcon()}
                </span>
              </div>
              <div className="card-details">
                {activeTab === "Doctors" && (
                  <>
                    <h3>{item.name}</h3>
                    <p>Specialty: {item.specialty}</p>
                    <p>Location: {item.location}</p>
                    <p>Age: {item.age}</p>
                    <p>Experience: {item.experience} yrs</p>
                  </>
                )}
                {activeTab === "Hospitals" && (
                  <>
                    <h3>{item.name}</h3>
                    <p>Location: {item.location}</p>
                    <p>Departments: {item.departments.join(", ")}</p>
                    <p>Rating: {item.rating}</p>
                  </>
                )}
                {activeTab === "Labs" && (
                  <>
                    <h3>{item.name}</h3>
                    <p>Location: {item.location}</p>
                    <p>Tests: {item.tests.join(", ")}</p>
                    <p>Rating: {item.rating}</p>
                  </>
                )}
                {activeTab === "Clinics" && (
                  <>
                    <h3>{item.name}</h3>
                    <p>Location: {item.location}</p>
                    <p>Services: {item.services.join(", ")}</p>
                    <p>Rating: {item.rating}</p>
                  </>
                )}
                {activeTab === "Pharmacies" && (
                  <>
                    <h3>{item.name}</h3>
                    <p>Location: {item.location}</p>
                    <p>Services: {item.services.join(", ")}</p>
                    <p>Rating: {item.rating}</p>
                  </>
                )}
                {activeTab === "Diagnostics" && (
                  <>
                    <h3>{item.name}</h3>
                    <p>Location: {item.location}</p>
                    <p>Tests: {item.tests.join(", ")}</p>
                    <p>Rating: {item.rating}</p>
                  </>
                )}
                <button className="book-mini-btn" onClick={() => navigate(`/${activeTab.toLowerCase()}`)}>
                  View {activeTab}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No {activeTab.toLowerCase()} found matching your search.</p>
          </div>
        )}
      </section>

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

export default AllServicesPage;

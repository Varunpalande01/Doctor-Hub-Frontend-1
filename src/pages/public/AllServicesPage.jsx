// // import React, { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import "./AllServices.css";

// // const AllServicesPage = () => {
// //   const navigate = useNavigate();
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [activeTab, setActiveTab] = useState("Doctors");

// //   // --- Mumbai-Centric Data (at least 5 each) ---
// //   const doctors = [
// //     { id: 1, name: "Dr. Aditi Sharma", specialty: "Cardiologist", location: "Andheri West, Mumbai", age: 45, experience: 20 },
// //     { id: 2, name: "Dr. Rohan Mehta", specialty: "Dermatologist", location: "Bandra East, Mumbai", age: 38, experience: 12 },
// //     { id: 3, name: "Dr. Kavita Desai", specialty: "Pediatrician", location: "Chembur, Mumbai", age: 42, experience: 15 },
// //     { id: 4, name: "Dr. Sameer Kapoor", specialty: "Orthopedic", location: "Malad West, Mumbai", age: 50, experience: 25 },
// //     { id: 5, name: "Dr. Neha Patil", specialty: "Neurologist", location: "Powai, Mumbai", age: 37, experience: 10 },
// //     { id: 6, name: "Dr. Rajiv Nair", specialty: "Gynecologist", location: "Lower Parel, Mumbai", age: 44, experience: 18 }
// //   ];

// //   const hospitals = [
// //     { id: 1, name: "Lilavati Hospital", location: "Bandra West, Mumbai", departments: ["Cardiology", "Neurology"], rating: 4.7 },
// //     { id: 2, name: "Bombay Hospital", location: "Marine Lines, Mumbai", departments: ["Dermatology", "Pediatrics"], rating: 4.5 },
// //     { id: 3, name: "Wockhardt Hospital", location: "Mira Road, Mumbai", departments: ["Orthopedics", "Gynecology"], rating: 4.4 },
// //     { id: 4, name: "SevenHills Hospital", location: "Andheri East, Mumbai", departments: ["Cardiology", "Oncology"], rating: 4.6 },
// //     { id: 5, name: "Hiranandani Hospital", location: "Powai, Mumbai", departments: ["Neurology", "Pediatrics"], rating: 4.5 }
// //   ];

// //   const labs = [
// //     { id: 1, name: "Thyrocare Labs", location: "Andheri East, Mumbai", tests: ["Blood Test", "MRI", "X-Ray"], rating: 4.6 },
// //     { id: 2, name: "Dr. Lal PathLabs", location: "Bandra West, Mumbai", tests: ["COVID Test", "Cholesterol Test"], rating: 4.5 },
// //     { id: 3, name: "Metropolis Labs", location: "Powai, Mumbai", tests: ["CT Scan", "Blood Test"], rating: 4.4 },
// //     { id: 4, name: "SRL Diagnostics", location: "Malad West, Mumbai", tests: ["Urine Test", "ECG"], rating: 4.3 },
// //     { id: 5, name: "Healthians Labs", location: "Chembur, Mumbai", tests: ["Blood Sugar Test", "Vitamin Test"], rating: 4.2 }
// //   ];

// //   const clinics = [
// //     { id: 1, name: "Sunrise Clinic", location: "Andheri West, Mumbai", services: ["General Physician", "Dermatology"], rating: 4.3 },
// //     { id: 2, name: "Healthy Life Clinic", location: "Bandra East, Mumbai", services: ["Pediatrics", "Gynecology"], rating: 4.2 },
// //     { id: 3, name: "WellCare Clinic", location: "Powai, Mumbai", services: ["Cardiology", "Neurology"], rating: 4.4 },
// //     { id: 4, name: "City Health Clinic", location: "Malad West, Mumbai", services: ["Orthopedic", "Physiotherapy"], rating: 4.1 },
// //     { id: 5, name: "LifePlus Clinic", location: "Chembur, Mumbai", services: ["General Physician", "Pediatrics"], rating: 4.2 }
// //   ];

// //   const pharmacies = [
// //     { id: 1, name: "Apollo Pharmacy", location: "Chembur, Mumbai", services: ["Medicines", "Health Supplements"], rating: 4.5 },
// //     { id: 2, name: "MedPlus Pharmacy", location: "Malad West, Mumbai", services: ["Medicines", "OTC Products"], rating: 4.4 },
// //     { id: 3, name: "Guardian Pharmacy", location: "Bandra West, Mumbai", services: ["Medicines", "Wellness Products"], rating: 4.3 },
// //     { id: 4, name: "PharmaWorld", location: "Andheri East, Mumbai", services: ["Medicines", "Vitamins"], rating: 4.2 },
// //     { id: 5, name: "CarePoint Pharmacy", location: "Powai, Mumbai", services: ["Medicines", "Health Checks"], rating: 4.4 }
// //   ];

// //   const diagnostics = [
// //     { id: 1, name: "HealthCheck Diagnostics", location: "Powai, Mumbai", tests: ["Blood Test", "ECG"], rating: 4.3 },
// //     { id: 2, name: "Precision Diagnostics", location: "Lower Parel, Mumbai", tests: ["X-Ray", "MRI"], rating: 4.2 },
// //     { id: 3, name: "MediScan Diagnostics", location: "Andheri West, Mumbai", tests: ["CT Scan", "Ultrasound"], rating: 4.4 },
// //     { id: 4, name: "CityLab Diagnostics", location: "Bandra East, Mumbai", tests: ["Blood Sugar Test", "ECG"], rating: 4.1 },
// //     { id: 5, name: "PathCare Labs", location: "Chembur, Mumbai", tests: ["MRI", "Vitamin Test"], rating: 4.2 }
// //   ];

// //   // Filter function based on active tab
// //   const filteredData = () => {
// //     const query = searchQuery.toLowerCase();
// //     if (activeTab === "Doctors") {
// //       return doctors.filter(
// //         doc =>
// //           doc.name.toLowerCase().includes(query) ||
// //           doc.specialty.toLowerCase().includes(query) ||
// //           doc.location.toLowerCase().includes(query) ||
// //           doc.age.toString().includes(query)
// //       );
// //     } else if (activeTab === "Hospitals") {
// //       return hospitals.filter(
// //         hosp =>
// //           hosp.name.toLowerCase().includes(query) ||
// //           hosp.location.toLowerCase().includes(query) ||
// //           hosp.departments.some(dep => dep.toLowerCase().includes(query))
// //       );
// //     } else if (activeTab === "Labs") {
// //       return labs.filter(
// //         lab =>
// //           lab.name.toLowerCase().includes(query) ||
// //           lab.location.toLowerCase().includes(query) ||
// //           lab.tests.some(test => test.toLowerCase().includes(query))
// //       );
// //     } else if (activeTab === "Clinics") {
// //       return clinics.filter(
// //         clinic =>
// //           clinic.name.toLowerCase().includes(query) ||
// //           clinic.location.toLowerCase().includes(query) ||
// //           clinic.services.some(service => service.toLowerCase().includes(query))
// //       );
// //     } else if (activeTab === "Pharmacies") {
// //       return pharmacies.filter(
// //         phar =>
// //           phar.name.toLowerCase().includes(query) ||
// //           phar.location.toLowerCase().includes(query) ||
// //           phar.services.some(service => service.toLowerCase().includes(query))
// //       );
// //     } else if (activeTab === "Diagnostics") {
// //       return diagnostics.filter(
// //         diag =>
// //           diag.name.toLowerCase().includes(query) ||
// //           diag.location.toLowerCase().includes(query) ||
// //           diag.tests.some(test => test.toLowerCase().includes(query))
// //       );
// //     }
// //     return [];
// //   };

// //   const getIcon = () => {
// //     switch (activeTab) {
// //       case "Doctors": return "🩺";
// //       case "Hospitals": return "🏥";
// //       case "Labs": return "🧪";
// //       case "Clinics": return "🏨";
// //       case "Pharmacies": return "💊";
// //       case "Diagnostics": return "🔬";
// //       default: return "❓";
// //     }
// //   };

// //   return (
// //     <div className="home-wrapper">
// //       {/* HEADER */}
// //       <header className="home-header">
// //         <div className="header-brand" onClick={() => navigate("/")}>
// //           <h1>Doctor's Hub</h1>
// //         </div>
// //         <nav className="header-nav">
// //           <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
// //           <span className="nav-item" onClick={() => navigate("/blogs")}>Blogs</span>
// //           <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
// //           <span className="nav-item active-tab">All Services</span>
// //         </nav>
// //         <div className="auth-buttons">
// //           <Link to="/login" className="secondary-btn">Login</Link>
// //           <button className="signup-btn" onClick={() => navigate("/signup")}>SignUp</button>
// //         </div>
// //       </header>

// //       {/* HERO + SEARCH */}
// //       <section className="services-hero">
// //         <div className="section-header">
// //           <h2>Explore Our <span>Healthcare Services</span></h2>
// //           <div className="accent-line"></div>
// //         </div>

// //         {/* SEARCH BAR */}
// //         <div className="search-container">
// //           <div className="search-bar">
// //             <span className="search-icon">🔍</span>
// //             <input
// //               type="text"
// //               placeholder={`Search ${activeTab.toLowerCase()}...`}
// //               value={searchQuery}
// //               onChange={e => setSearchQuery(e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         {/* CATEGORY TABS */}
// //         <div className="category-tabs">
// //           {["Doctors","Hospitals","Labs","Clinics","Pharmacies","Diagnostics"].map(tab => (
// //             <button
// //               key={tab}
// //               className={`tab-btn ${activeTab === tab ? "active" : ""}`}
// //               onClick={() => { setActiveTab(tab); setSearchQuery(""); }}
// //             >
// //               {tab}
// //             </button>
// //           ))}
// //         </div>
// //       </section>

// //       {/* DATA GRID */}
// //       <section className="services-grid">
// //         {filteredData().length > 0 ? (
// //           filteredData().map(item => (
// //             <div key={item.id} className="modern-doctor-card">
// //               <div className="card-img-wrapper" style={{background:'#d1fae5', height:'150px'}}>
// //                 <span style={{fontSize:'3rem', display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
// //                   {getIcon()}
// //                 </span>
// //               </div>
// //               <div className="card-details">
// //                 {activeTab === "Doctors" && (
// //                   <>
// //                     <h3>{item.name}</h3>
// //                     <p>Specialty: {item.specialty}</p>
// //                     <p>Location: {item.location}</p>
// //                     <p>Age: {item.age}</p>
// //                     <p>Experience: {item.experience} yrs</p>
// //                   </>
// //                 )}
// //                 {activeTab === "Hospitals" && (
// //                   <>
// //                     <h3>{item.name}</h3>
// //                     <p>Location: {item.location}</p>
// //                     <p>Departments: {item.departments.join(", ")}</p>
// //                     <p>Rating: {item.rating}</p>
// //                   </>
// //                 )}
// //                 {activeTab === "Labs" && (
// //                   <>
// //                     <h3>{item.name}</h3>
// //                     <p>Location: {item.location}</p>
// //                     <p>Tests: {item.tests.join(", ")}</p>
// //                     <p>Rating: {item.rating}</p>
// //                   </>
// //                 )}
// //                 {activeTab === "Clinics" && (
// //                   <>
// //                     <h3>{item.name}</h3>
// //                     <p>Location: {item.location}</p>
// //                     <p>Services: {item.services.join(", ")}</p>
// //                     <p>Rating: {item.rating}</p>
// //                   </>
// //                 )}
// //                 {activeTab === "Pharmacies" && (
// //                   <>
// //                     <h3>{item.name}</h3>
// //                     <p>Location: {item.location}</p>
// //                     <p>Services: {item.services.join(", ")}</p>
// //                     <p>Rating: {item.rating}</p>
// //                   </>
// //                 )}
// //                 {activeTab === "Diagnostics" && (
// //                   <>
// //                     <h3>{item.name}</h3>
// //                     <p>Location: {item.location}</p>
// //                     <p>Tests: {item.tests.join(", ")}</p>
// //                     <p>Rating: {item.rating}</p>
// //                   </>
// //                 )}
// //                 <button className="book-mini-btn" onClick={() => navigate(`/${activeTab.toLowerCase()}`)}>
// //                   View {activeTab}
// //                 </button>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <div className="empty-state">
// //             <p>No {activeTab.toLowerCase()} found matching your search.</p>
// //           </div>
// //         )}
// //       </section>

// //       {/* FOOTER */}
// //       <footer className="main-footer">
// //         <div className="footer-container">
// //           <div className="footer-left">
// //             <h2>Doctor's Hub</h2>
// //             <p>Elevating digital healthcare.</p>
// //           </div>
// //           <div className="footer-right">
// //             <p>© 2026 All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default AllServicesPage;



// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./AllServices.css";

// const AllServicesPage = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeTab, setActiveTab] = useState("Doctors");

//   // SaaS dropdown states
//   const [saasDropdown, setSaasDropdown] = useState(false);
//   const [doctorDropdown, setDoctorDropdown] = useState(false);
//   const [patientDropdown, setPatientDropdown] = useState(false);
//   const saasRef = useRef(null);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (saasRef.current && !saasRef.current.contains(e.target)) {
//         setSaasDropdown(false);
//         setDoctorDropdown(false);
//         setPatientDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

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

//         {/* NAVIGATION */}
//         <nav className="header-nav">
//           <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
//           <span className="nav-item" onClick={() => navigate("/blogs")}>Blogs</span>
//           <span className="nav-item" onClick={() => navigate("/contact")}>Contact Us</span>
//           <span className="nav-item active-tab">All Services</span>

//           {/* SaaS Dropdown */}
//           <div className="nav-item dropdown-toggle" ref={saasRef}>
//             <span onClick={() => setSaasDropdown(!saasDropdown)}>SaaS For ▾</span>

//             {saasDropdown && (
//               <div className="dropdown-menu">
//                 <div className="dropdown-item">
//                   <span
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setDoctorDropdown(!doctorDropdown);
//                     }}
//                   >
//                     For Doctor ▸
//                   </span>
//                   {doctorDropdown && (
//                     <div className="nested-dropdown">
//                       <span
//                         onClick={() => {
//                           navigate("/doctor/dashboard");
//                           setSaasDropdown(false);
//                           setDoctorDropdown(false);
//                         }}
//                       >
//                         Doctor SaaS
//                       </span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="dropdown-item">
//                   <span
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setPatientDropdown(!patientDropdown);
//                     }}
//                   >
//                     For Patient ▸
//                   </span>
//                   {patientDropdown && (
//                     <div className="nested-dropdown">
//                       <span
//                         onClick={() => {
//                           navigate("/patient/dashboard");
//                           setSaasDropdown(false);
//                           setPatientDropdown(false);
//                         }}
//                       >
//                         Patient SaaS
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* AUTH BUTTONS */}
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // SaaS states for Sidebar and Header
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

  // --- Data Sections ---
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

  const getFilteredData = () => {
    const query = searchQuery.toLowerCase();
    // FIXED: Yahan ab saare variables use ho rahe hain
    const dataMap = { 
      Doctors: doctors, 
      Hospitals: hospitals, 
      Labs: labs, 
      Clinics: clinics, 
      Pharmacies: pharmacies, 
      Diagnostics: diagnostics 
    };
    
    const currentData = dataMap[activeTab] || [];
    return currentData.filter(item => 
      item.name.toLowerCase().includes(query) || 
      (item.specialty && item.specialty.toLowerCase().includes(query)) ||
      (item.location && item.location.toLowerCase().includes(query))
    );
  };

  const getIcon = () => {
    const icons = { Doctors: "🩺", Hospitals: "🏥", Labs: "🧪", Clinics: "🏨", Pharmacies: "💊", Diagnostics: "🔬" };
    return icons[activeTab] || "❓";
  };

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
          <div className="sidebar-nav-link" onClick={() => {navigate("/about"); setIsSidebarOpen(false);}}>ℹ️ About Us</div>
                    <div className="sidebar-nav-link active-link">🛠️ Services</div>

          <div className="sidebar-nav-link" onClick={() => {navigate("/blogs"); setIsSidebarOpen(false);}}>📰 Blogs</div>
          <div className="sidebar-nav-link" onClick={() => {navigate("/contact"); setIsSidebarOpen(false);}}>📞 Contact Us</div>

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
          <h1>Doctor's <span>Hub</span></h1>
        </div>
        <nav className="header-nav desktop-only">
          <span className="nav-item" onClick={() => navigate("/")}>Home</span>
          <span className="nav-item" onClick={() => navigate("/about")}>About Us</span>
                    <span className="nav-item active-tab">Services</span>

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

      {/* --- SEARCH SECTION --- */}
      <section className="services-hero">
        <div className="section-header">
          <h2>Explore Our <span>Healthcare Services</span></h2>
          <div className="accent-line"></div>
        </div>
        <div className="search-container-wrapper">
          <div className="search-container-v2">
            <span className="search-icon-v2">🔍</span>
            <input
              type="text"
              placeholder={`Search ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="category-tabs">
          {["Doctors", "Hospitals", "Labs", "Clinics", "Pharmacies", "Diagnostics"].map((tab) => (
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

      {/* --- CARDS GRID --- */}
      <section className="services-grid">
        {getFilteredData().map((item) => (
          <div key={item.id} className="professional-card">
            <div className="card-badge">Verified</div>
            <div className="icon-circle">{getIcon()}</div>
            <div className="card-body">
              <h3>{item.name}</h3>
              <p className="loc-text">📍 {item.location}</p>
              {activeTab === "Doctors" && <p className="spec-text">🩺 {item.specialty}</p>}
              <button className="action-btn">Book Now</button>
            </div>
          </div>
        ))}
      </section>
      {/* --- FOOTER SECTION --- */}
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

export default AllServicesPage;
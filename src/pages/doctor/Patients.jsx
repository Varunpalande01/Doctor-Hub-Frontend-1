// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Patients.css";

// const Patients = () => {
//   const navigate = useNavigate();

//   // Dummy data (will replace with API later)
//   const [patients, setPatients] = useState([
//     { id: "P-1001", name: "Rahul Sharma", phone: "9876543210", age: 34, gender: "Male" },
//     { id: "P-1002", name: "Priya Verma", phone: "9123456780", age: 28, gender: "Female" },
//     { id: "P-1003", name: "Aman Gupta", phone: "9988776655", age: 45, gender: "Male" },
//     { id: "P-1004", name: "Neha Singh", phone: "9871234560", age: 30, gender: "Female" },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredPatients, setFilteredPatients] = useState(patients);
//   const [genderFilter, setGenderFilter] = useState("All");
//   const [ageSort, setAgeSort] = useState("None");

//   // Live filtering and sorting
//   useEffect(() => {
//     let temp = [...patients];

//     // Filter by gender
//     if (genderFilter !== "All") {
//       temp = temp.filter(p => p.gender === genderFilter);
//     }

//     // Filter by search term
//     if (searchTerm) {
//       temp = temp.filter(
//         p =>
//           p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           p.phone.includes(searchTerm)
//       );
//     }

//     // Sort by age
//     if (ageSort === "LowToHigh") {
//       temp.sort((a, b) => a.age - b.age);
//     } else if (ageSort === "HighToLow") {
//       temp.sort((a, b) => b.age - a.age);
//     }

//     setFilteredPatients(temp);
//   }, [searchTerm, genderFilter, ageSort, patients]);

//   // Reset all filters
//   const handleReset = () => {
//     setSearchTerm("");
//     setGenderFilter("All");
//     setAgeSort("None");
//   };

//   // Highlight search text
//   const highlightText = (text) => {
//     if (!searchTerm) return text;
//     const regex = new RegExp(`(${searchTerm})`, "gi");
//     return text.split(regex).map((part, i) =>
//       regex.test(part) ? <span key={i} className="highlight">{part}</span> : part
//     );
//   };

//   return (
//     <div className="patients-page">
//       <h2>All Patients</h2>

//       <div className="search-filter-container">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search by name, ID or phone..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <select
//           value={genderFilter}
//           onChange={(e) => setGenderFilter(e.target.value)}
//         >
//           <option value="All">All Genders</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>

//         <select value={ageSort} onChange={(e) => setAgeSort(e.target.value)}>
//           <option value="None">Sort by Age</option>
//           <option value="LowToHigh">Low → High</option>
//           <option value="HighToLow">High → Low</option>
//         </select>

//         <button className="reset-btn" onClick={handleReset}>Reset</button>
//       </div>

//       {filteredPatients.length === 0 ? (
//         <div className="no-records">
//           <p>No patients found</p>
//         </div>
//       ) : (
//         <table className="patient-table">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Phone</th>
//               <th>Age</th>
//               <th>Gender</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPatients.map((p) => (
//               <tr key={p.id}>
//                 <td>{highlightText(p.id)}</td>
//                 <td>{highlightText(p.name)}</td>
//                 <td>{highlightText(p.phone)}</td>
//                 <td>{p.age}</td>
//                 <td>{p.gender}</td>
//                 <td>
//                   <button
//                     className="view-btn"
//                     onClick={() => navigate(`/doctor/patients/${p.id}`)}
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Patients;










// import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Patients.css";
// import { patientDummyData } from "../../utils/patientDummyData";

// const Patients = () => {
//   const navigate = useNavigate();

//   const [patients] = useState(patientDummyData);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [genderFilter, setGenderFilter] = useState("All");
//   const [ageSort, setAgeSort] = useState("None");
//   const [clinicFilter, setClinicFilter] = useState("All");
//   const [criticalFilter, setCriticalFilter] = useState(false);

//   // ✅ Dynamic Clinic List (no hardcoded values)
//   const clinicOptions = useMemo(() => {
//     const uniqueClinics = [...new Set(patients.map(p => p.hospitalName))];
//     return uniqueClinics;
//   }, [patients]);

//   const filteredPatients = useMemo(() => {
//     let temp = [...patients];

//     // Gender filter
//     if (genderFilter !== "All") {
//       temp = temp.filter(p => p.gender === genderFilter);
//     }

//     // Search filter
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase();
//       temp = temp.filter(p =>
//         p.name.toLowerCase().includes(term) ||
//         p.id.toLowerCase().includes(term) ||
//         p.phone.includes(term)
//       );
//     }

//     // Clinic filter
//     if (clinicFilter !== "All") {
//       temp = temp.filter(p => p.hospitalName === clinicFilter);
//     }

//     // Critical filter
//     if (criticalFilter) {
//       temp = temp.filter(p => p.isCritical === true);
//     }

//     // Age sorting
//     if (ageSort === "LowToHigh") {
//       temp.sort((a, b) => a.age - b.age);
//     } else if (ageSort === "HighToLow") {
//       temp.sort((a, b) => b.age - a.age);
//     }

//     return temp;
//   }, [patients, searchTerm, genderFilter, ageSort, clinicFilter, criticalFilter]);

//   return (
//     <div className="patients-page">
//       <div className="patients-header-section">
//         <h2>Patient Directory</h2>
//         <div className="total-badge">{filteredPatients.length} Active</div>
//       </div>

//       <div className="search-filter-container">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Search patients..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <div className="filter-actions">
//           <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
//             <option value="All">All Genders</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>

//           <select value={ageSort} onChange={(e) => setAgeSort(e.target.value)}>
//             <option value="None">Sort Age</option>
//             <option value="LowToHigh">Youngest First</option>
//             <option value="HighToLow">Oldest First</option>
//           </select>

//           {/* ✅ Dynamic Clinic Filter */}
//           <select value={clinicFilter} onChange={(e) => setClinicFilter(e.target.value)}>
//             <option value="All">All Clinics</option>
//             {clinicOptions.map((clinic, index) => (
//               <option key={index} value={clinic}>
//                 {clinic}
//               </option>
//             ))}
//           </select>

//           {/* ✅ Critical Checkbox */}
//           <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//             <input
//               type="checkbox"
//               checked={criticalFilter}
//               onChange={(e) => setCriticalFilter(e.target.checked)}
//             />
//             Critical Only
//           </label>

//           <button
//             className="reset-btn"
//             onClick={() => {
//               setSearchTerm("");
//               setGenderFilter("All");
//               setAgeSort("None");
//               setClinicFilter("All");
//               setCriticalFilter(false);
//             }}
//           >
//             Reset Filters
//           </button>
//         </div>
//       </div>

//       <div className="patient-list-container">
//         {filteredPatients.map((p) => (
//           <div className="patient-card" key={p.id}>
//             <div className="card-row">
//               <span className="row-label">ID</span>
//               <span className="row-value">{p.id}</span>
//             </div>

//             <div className="card-row">
//               <span className="row-label">Name</span>
//               <span className="row-value">{p.name}</span>
//             </div>

//             <div className="card-row">
//               <span className="row-label">Phone</span>
//               <span className="row-value">{p.phone}</span>
//             </div>

//             <div className="card-row">
//               <span className="row-label">Age</span>
//               <span className="row-value">{p.age} Yrs</span>
//             </div>

//             <div className="card-row">
//               <span className="row-label">Gender</span>
//               <span className="row-value">
//                 <span className={`gender-tag ${p.gender.toLowerCase()}`}>
//                   {p.gender}
//                 </span>
//               </span>
//             </div>

//             {/* ✅ New Fields */}
//             <div className="card-row">
//               <span className="row-label">Complaint</span>
//               <span className="row-value">{p.complaint}</span>
//             </div>

//             <div className="card-row">
//               <span className="row-label">Clinic</span>
//               <span className="row-value">{p.hospitalName}</span>
//             </div>

//             <div className="card-row">
//               <span className="row-label">Critical</span>
//               <span className="row-value">
//                 {p.isCritical ? "Yes ⚠️" : "No"}
//               </span>
//             </div>

//             <button
//               className="view-btn"
//               onClick={() => navigate(`/doctor/patients/${p.id}`)}
//             >
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Patients;




import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Patients.css";
import { patientDummyData } from "../../utils/patientDummyData";

const Patients = () => {
  const navigate = useNavigate();
  const [patients] = useState(patientDummyData);

  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("All");
  const [clinicFilter, setClinicFilter] = useState("All");
  const [criticalFilter, setCriticalFilter] = useState(false);

  const clinicOptions = useMemo(() => {
    return [...new Set(patients.map(p => p.hospital_name))];
  }, [patients]);

  const filteredPatients = useMemo(() => {
    let temp = [...patients];

    if (genderFilter !== "All") {
      temp = temp.filter(p => p.gender === genderFilter);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      temp = temp.filter(p =>
        p.full_name.toLowerCase().includes(term) ||
        p.complaint.toLowerCase().includes(term)
      );
    }

    if (clinicFilter !== "All") {
      temp = temp.filter(p => p.hospital_name === clinicFilter);
    }

    if (criticalFilter) {
      temp = temp.filter(p => p.is_critical);
    }

    return temp;
  }, [patients, searchTerm, genderFilter, clinicFilter, criticalFilter]);

  return (
    <div className="patients-page">
      <div className="patients-header">
        <h2>Patient Directory</h2>
        <span className="count-badge">{filteredPatients.length}</span>
      </div>

      {/* Filters */}
<div className="filters">
  <div className="filter-left">
    <input
      type="text"
      className="search-input"
      placeholder="Search by name or complaint..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <select
      value={genderFilter}
      onChange={(e) => setGenderFilter(e.target.value)}
    >
      <option value="All">All Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>

    <select
      value={clinicFilter}
      onChange={(e) => setClinicFilter(e.target.value)}
    >
      <option value="All">All Clinics</option>
      {clinicOptions.map((clinic, index) => (
        <option key={index} value={clinic}>
          {clinic}
        </option>
      ))}
    </select>

    <div className="critical-wrapper">
      <input
        type="checkbox"
        id="criticalOnly"
        checked={criticalFilter}
        onChange={(e) => setCriticalFilter(e.target.checked)}
      />
      <label htmlFor="criticalOnly">Critical Only</label>
    </div>
  </div>

  <button
    className="reset-btn"
    onClick={() => {
      setSearchTerm("");
      setGenderFilter("All");
      setClinicFilter("All");
      setCriticalFilter(false);
    }}
  >
    Reset
  </button>
</div>


      {/* Desktop Table */}
      <div className="table-view">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Complaint</th>
              <th>Clinic</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.full_name}</td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>{p.complaint}</td>
                <td>{p.hospital_name}</td>
                <td>
                  {p.is_critical ? (
                    <span className="critical-badge">Critical</span>
                  ) : (
                    "Normal"
                  )}
                </td>
                <td>
                  <button onClick={() => navigate(`/doctor/patients/${p.id}`)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="card-view">
        {filteredPatients.map((p) => (
          <div className="patient-card" key={p.id}>
            <h4>{p.full_name}</h4>
            <p><strong>Age:</strong> {p.age}</p>
            <p><strong>Gender:</strong> {p.gender}</p>
            <p><strong>Complaint:</strong> {p.complaint}</p>
            <p><strong>Clinic:</strong> {p.hospital_name}</p>
            <p>
              <strong>Status:</strong>{" "}
              {p.is_critical ? (
                <span className="critical-badge">Critical</span>
              ) : (
                "Normal"
              )}
            </p>
            <button onClick={() => navigate(`/doctor/patients/${p.id}`)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;

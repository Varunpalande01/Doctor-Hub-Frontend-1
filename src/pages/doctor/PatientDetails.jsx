// import React, { useState } from "react";
// import "./PatientDetails.css";
// import AddVisitModal from "./AddVisitModal";
// import AddPrescriptionModal from "./AddPrescriptionModal";
// import AddReportModal from "./AddReportModal";
// import { useParams } from "react-router-dom";

// const PatientDetails = () => {
//   const { patientId } = useParams();

//   // Dummy patient (API later)
//   const patient = {
//     id: patientId || "P-1023",
//     name: "Rahul Sharma",
//     age: 34,
//     gender: "Male",
//     phone: "9876543210",
//   };

//   const [activeTab, setActiveTab] = useState("visits");
//   const [showVisitModal, setShowVisitModal] = useState(false);
//   const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
//   const [showReportModal, setShowReportModal] = useState(false);

//   // Dummy data (API later)
//   const visits = [
//     {
//       id: 1,
//       date: "10 Jan 2026",
//       complaint: "Fever",
//       notes: "Paracetamol advised",
//     },
//   ];

//   const prescriptions = [
//     {
//       id: 1,
//       date: "10 Jan 2026",
//       medicines: "Paracetamol 500mg – 5 days",
//     },
//   ];

//   const reports = [
//     {
//       id: 1,
//       date: "11 Jan 2026",
//       name: "Blood Test Report",
//     },
//   ];

//   const appointments = [
//     {
//       id: 1,
//       date: "10 Jan 2026",
//       time: "10:00 AM",
//       status: "Completed",
//     },
//   ];

//   return (
//     <div className="patient-details-page">
//       {/* LEFT SUMMARY */}
//       <div className="patient-summary">
//         <div className="avatar">
//           {patient.name
//             .split(" ")
//             .map((n) => n[0])
//             .join("")}
//         </div>
//         <h3>{patient.name}</h3>
//         <p>ID: {patient.id}</p>
//         <p>Age: {patient.age}</p>
//         <p>Gender: {patient.gender}</p>
//         <p>Phone: {patient.phone}</p>
//       </div>

//       {/* RIGHT RECORDS */}
//       <div className="patient-records">
//         {/* Tabs */}
//         <div className="patient-tabs">
//           {["visits", "prescriptions", "reports", "appointments"].map(
//             (tab) => (
//               <button
//                 key={tab}
//                 className={activeTab === tab ? "active" : ""}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             )
//           )}
//         </div>

//         {/* CONTENT */}
//         <div className="tab-content">
//           {/* VISITS */}
//           {activeTab === "visits" && (
//             <>
//               <div className="tab-header">
//                 <h3>Visit History</h3>
//                 <button
//                   className="add-btn"
//                   onClick={() => setShowVisitModal(true)}
//                 >
//                   + Add Visit
//                 </button>
//               </div>

//               {visits.map((v) => (
//                 <div key={v.id} className="card">
//                   <strong>{v.date}</strong>
//                   <p>Complaint: {v.complaint}</p>
//                   <p>Notes: {v.notes}</p>
//                 </div>
//               ))}
//             </>
//           )}

//           {/* PRESCRIPTIONS */}
//           {activeTab === "prescriptions" && (
//             <>
//               <div className="tab-header">
//                 <h3>Prescriptions</h3>
//                 <button
//                   className="add-btn"
//                   onClick={() => setShowPrescriptionModal(true)}
//                 >
//                   + Add Prescription
//                 </button>
//               </div>

//               {prescriptions.length === 0 ? (
//                 <div className="empty-state">No prescriptions added yet</div>
//               ) : (
//                 prescriptions.map((p) => (
//                   <div key={p.id} className="card">
//                     <strong>{p.date}</strong>
//                     <p>{p.medicines}</p>
//                   </div>
//                 ))
//               )}
//             </>
//           )}

//           {/* REPORTS */}
//           {activeTab === "reports" && (
//             <>
//               <div className="tab-header">
//                 <h3>Medical Reports</h3>
//                 <button
//                   className="add-btn"
//                   onClick={() => setShowReportModal(true)}
//                 >
//                   + Add Report
//                 </button>
//               </div>

//               {reports.length === 0 ? (
//                 <div className="empty-state">No reports added yet</div>
//               ) : (
//                 reports.map((r) => (
//                   <div key={r.id} className="card">
//                     <strong>{r.date}</strong>
//                     <p>{r.name}</p>
//                   </div>
//                 ))
//               )}
//             </>
//           )}

//           {/* APPOINTMENTS */}
//           {activeTab === "appointments" && (
//             <>
//               {appointments.map((a) => (
//                 <div key={a.id} className="card">
//                   <strong>{a.date}</strong>
//                   <p>
//                     {a.time} – {a.status}
//                   </p>
//                 </div>
//               ))}
//             </>
//           )}
//         </div>
//       </div>

//       {/* MODALS */}
//       {showVisitModal && (
//         <AddVisitModal onClose={() => setShowVisitModal(false)} />
//       )}

//       {showPrescriptionModal && (
//         <AddPrescriptionModal
//           onClose={() => setShowPrescriptionModal(false)}
//         />
//       )}

//       {showReportModal && (
//         <AddReportModal onClose={() => setShowReportModal(false)} />
//       )}
//     </div>
//   );
// };

// export default PatientDetails;


import React, { useState } from "react";
import "./PatientDetails.css";
import AddVisitModal from "./AddVisitModal";
import AddPrescriptionModal from "./AddPrescriptionModal";
import AddReportModal from "./AddReportModal";
import { useParams, useNavigate } from "react-router-dom";
import AddAppointmentModal from "./AddAppointmentModal";

const PatientDetails = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();

  const patient = {
    id: patientId || "P-1023",
    name: "Rahul Sharma",
    age: 34,
    gender: "Male",
    phone: "9876543210",
  };

  const [activeTab, setActiveTab] = useState("visits");
  
  // Modal States
  const [showVisitModal, setShowVisitModal] = useState(false);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);

  // Dummy data
  const visits = [{ id: 1, date: "10 Jan 2026", complaint: "Fever", notes: "Paracetamol advised" }];
  const prescriptions = [{ id: 1, date: "10 Jan 2026", medicines: "Paracetamol 500mg – 5 days" }];
  const reports = [{ id: 1, date: "11 Jan 2026", name: "Blood Test Report" }];
  const appointments = [{ id: 1, date: "10 Jan 2026", time: "10:00 AM", status: "Completed" }];

  return (
    <div className="patient-details-page">
      {/* TOP HEADER WITH BACK BUTTON */}
      <div className="details-top-nav">
        <button className="back-link-btn" onClick={() => navigate("/doctor/patients")}>
            ← Back to Patients
        </button>
      </div>

      <div className="details-main-container">
        {/* LEFT SUMMARY SIDEBAR */}
        <div className="patient-summary">
          <div className="avatar">
            {patient.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <h3>{patient.name}</h3>
          
          <div className="patient-info-list">
            <div className="info-item">
              <span className="info-label">Patient ID</span>
              <span className="info-value">{patient.id}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Age</span>
              <span className="info-value">{patient.age} Yrs</span>
            </div>
            <div className="info-item">
              <span className="info-label">Gender</span>
              <span className="info-value">{patient.gender}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">{patient.phone}</span>
            </div>
          </div>
        </div>

        {/* RIGHT RECORDS SECTION */}
        <div className="patient-records">
          <div className="patient-tabs">
            {["visits", "prescriptions", "reports", "appointments"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {/* --- VISITS TAB --- */}
            {activeTab === "visits" && (
              <>
                <div className="tab-header">
                  <h3>Visit History</h3>
                  <button className="add-btn" onClick={() => setShowVisitModal(true)}>
                    + Add New Visit
                  </button>
                </div>
                {visits.map((v) => (
                  <div key={v.id} className="record-card">
                    <span className="record-date">{v.date}</span>
                    <p><strong>Complaint:</strong> {v.complaint}</p>
                    <p><strong>Notes:</strong> {v.notes}</p>
                  </div>
                ))}
              </>
            )}

            {/* --- PRESCRIPTIONS TAB --- */}
            {activeTab === "prescriptions" && (
              <>
                <div className="tab-header">
                  <h3>Active Prescriptions</h3>
                  <button className="add-btn" onClick={() => setShowPrescriptionModal(true)}>
                    + New Prescription
                  </button>
                </div>
                {prescriptions.length === 0 ? (
                  <div className="empty-state">No prescriptions found.</div>
                ) : (
                  prescriptions.map((p) => (
                    <div key={p.id} className="record-card">
                      <span className="record-date">{p.date}</span>
                      <p><strong>Medicines:</strong> {p.medicines}</p>
                    </div>
                  ))
                )}
              </>
            )}

            {/* --- REPORTS TAB --- */}
            {activeTab === "reports" && (
              <>
                <div className="tab-header">
                  <h3>Medical Reports</h3>
                  <button className="add-btn" onClick={() => setShowReportModal(true)}>
                    + Upload Report
                  </button>
                </div>
                {reports.length === 0 ? (
                  <div className="empty-state">No lab reports available.</div>
                ) : (
                  reports.map((r) => (
                    <div key={r.id} className="record-card">
                      <span className="record-date">{r.date}</span>
                      <p><strong>Report Name:</strong> {r.name}</p>
                    </div>
                  ))
                )}
              </>
            )}

            {/* --- APPOINTMENTS TAB (FIXED) --- */}
            {activeTab === "appointments" && (
              <>
                <div className="tab-header">
                  <h3>Appointments</h3>
                  {/* Yahan maine button add kar diya hai */}
                  <button className="add-btn" onClick={() => setShowAppointment(true)}>
                    + New Appointment
                  </button>
                </div>
                {appointments.length === 0 ? (
                    <div className="empty-state">No appointments found.</div>
                ) : (
                    appointments.map((a) => (
                        <div key={a.id} className="record-card">
                          <span className="record-date">{a.date}</span>
                          <p><strong>Time:</strong> {a.time}</p>
                          <p><strong>Status:</strong> {a.status}</p>
                        </div>
                      ))
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* --- ALL MODALS --- */}
      {showVisitModal && <AddVisitModal onClose={() => setShowVisitModal(false)} />}
      {showPrescriptionModal && <AddPrescriptionModal onClose={() => setShowPrescriptionModal(false)} />}
      {showReportModal && <AddReportModal onClose={() => setShowReportModal(false)} />}
      {showAppointment && <AddAppointmentModal onClose={() => setShowAppointment(false)} />}
 
    </div>
  );
};

export default PatientDetails;
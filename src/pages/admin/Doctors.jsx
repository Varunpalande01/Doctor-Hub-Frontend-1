import React, { useState } from "react";
import "./Doctors.css";
import { Eye } from "lucide-react";
const initialDoctors = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    gender: "Male",
    email: "amit.sharma@gmail.com",
    phone: "9876543210",
    specialty: "Cardiology",
    experience: 12,
    qualification: "MBBS, MD (Cardiology)",
    registrationNumber: "MCI-458796",
    consultationFee: "₹800",
    clinic: {
      name: "Heart Care Clinic",
      city: "Mumbai",
      area: "Andheri West",
      address: "SV Road, Andheri West, Mumbai"
    },
    documents: {
      degree: "Degree Certificate",
      registration: "Medical Registration Proof",
      id: "Government ID"
    },
    status: "pending",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 2,
    name: "Dr. Neha Verma",
    gender: "Female",
    email: "neha.verma@gmail.com",
    phone: "9988776655",
    specialty: "Dermatology",
    experience: 7,
    qualification: "MBBS, MD (Dermatology)",
    registrationNumber: "MCI-784512",
    consultationFee: "₹600",
    clinic: {
      name: "SkinCare Plus",
      city: "Pune",
      area: "Baner",
      address: "Baner Road, Pune"
    },
    documents: {
      degree: "Degree Certificate",
      registration: "Medical Registration Proof",
      id: "Government ID"
    },
    status: "verified",
    image: "https://i.pravatar.cc/150?img=32"
  }
];

const Doctors = () => {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [rejectReason, setRejectReason] = useState("");

  const filteredDoctors = doctors.filter((doc) => {
    const searchMatch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase());
    const statusMatch = statusFilter ? doc.status === statusFilter : true;
    const cityMatch = cityFilter ? doc.clinic.city === cityFilter : true;
    const specialtyMatch = specialtyFilter ? doc.specialty === specialtyFilter : true;
    const experienceMatch = experienceFilter
      ? doc.experience >= Number(experienceFilter)
      : true;
    return searchMatch && statusMatch && cityMatch && specialtyMatch && experienceMatch;
  });

  const updateStatus = (id, newStatus) => {
    setDoctors((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, status: newStatus } : doc))
    );
    setSelectedDoctor(null);
    setRejectReason("");
  };

  const handleClose = () => {
    setSelectedDoctor(null);
    setRejectReason("");
  };

  return (
    <div className="admin-doctors-page">
      <h1 className="page-title">Doctor Verification & Management</h1>

      <div className="top-controls">
        <input
          type="text"
          placeholder="Search name or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="verified">Verified</option>
          <option value="rejected">Rejected</option>
        </select>
        <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
          <option value="">All Cities</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
        </select>
        <select value={specialtyFilter} onChange={(e) => setSpecialtyFilter(e.target.value)}>
          <option value="">All Specialties</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Dermatology">Dermatology</option>
        </select>
        <select value={experienceFilter} onChange={(e) => setExperienceFilter(e.target.value)}>
          <option value="">Any Experience</option>
          <option value="5">5+ Years</option>
          <option value="10">10+ Years</option>
        </select>
      </div>

      <div className="table-wrapper">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Specialty</th>
              <th>Experience</th>
              <th>City</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "40px" }}>No doctors found</td>
              </tr>
            ) : (
              filteredDoctors.map((doc) => (
                <tr key={doc.id}>
                  <td className="doctor-cell" data-label="Doctor">
                    <img src={doc.image} alt="doctor" />
                    <div>
                      <strong>{doc.name}</strong>
                      <div className="sub-text">{doc.qualification}</div>
                    </div>
                  </td>
                  <td data-label="Specialty">{doc.specialty}</td>
                  <td data-label="Experience">{doc.experience} yrs</td>
                  <td data-label="City">{doc.clinic.city}</td>
                  <td data-label="Status">
                    <span className={`status ${doc.status}`}>{doc.status}</span>
                  </td>
                  <td data-label="Action">
                    <button className="view-btn" onClick={() => setSelectedDoctor(doc)}><Eye size={18} /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedDoctor && (
        <div className="modal-overlay">
          <div className="modal">
            {/* X is now strictly inside the modal div at the top */}
            <button className="modal-top-close" onClick={handleClose}>✕</button>
            
            <div className="modal-header">
              <img src={selectedDoctor.image} alt="doctor" />
              <div>
                <h2>{selectedDoctor.name}</h2>
                <p style={{ color: "#64748b" }}>{selectedDoctor.specialty}</p>
              </div>
            </div>

            <div className="modal-scroll-area">
              <section>
                <h3>Basic Information</h3>
                <p><b>Email:</b> {selectedDoctor.email}</p>
                <p><b>Phone:</b> {selectedDoctor.phone}</p>
                <p><b>Gender:</b> {selectedDoctor.gender}</p>
              </section>

              <section>
                <h3>Professional Details</h3>
                <p><b>Experience:</b> {selectedDoctor.experience} Years</p>
                <p><b>Qualification:</b> {selectedDoctor.qualification}</p>
                <p><b>Registration No:</b> {selectedDoctor.registrationNumber}</p>
                <p><b>Fee:</b> {selectedDoctor.consultationFee}</p>
              </section>

              <section>
                <h3>Clinic Details</h3>
                <p><b>Name:</b> {selectedDoctor.clinic.name}</p>
                <p><b>Location:</b> {selectedDoctor.clinic.area}, {selectedDoctor.clinic.city}</p>
                <p><b>Address:</b> {selectedDoctor.clinic.address}</p>
              </section>

              <section>
                <h3>Documents</h3>
                <ul className="docs">
                  <li>
                    <span>{selectedDoctor.documents.degree}</span>
                    <button className="doc-view"><Eye size={18} /></button>
                  </li>
                  <li>
                    <span>{selectedDoctor.documents.registration}</span>
                    <button className="doc-view"><Eye size={18} /></button>
                  </li>
                  <li>
                    <span>{selectedDoctor.documents.id}</span>
                    <button className="doc-view"><Eye size={18} /></button>
                  </li>
                </ul>
              </section>

              {/* Actions at the bottom of data */}
              <div className="modal-actions">
                {selectedDoctor.status === "pending" && (
                  <>
                    <textarea
                      className="rejection-reason"
                      placeholder="Enter reason for rejection..."
                      value={rejectReason}
                      onChange={(e) => setRejectReason(e.target.value)}
                    />
                    <div className="action-buttons-row">
                      <button className="verify" onClick={() => updateStatus(selectedDoctor.id, "verified")}>Verify</button>
                      <button className="reject" onClick={() => updateStatus(selectedDoctor.id, "rejected")}>Reject</button>
                    </div>
                  </>
                )}
                <button className="close-btn-bottom" onClick={handleClose}>Close Window</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
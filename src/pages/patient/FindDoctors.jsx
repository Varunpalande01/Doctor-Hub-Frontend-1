import React, { useState, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./FindDoctors.css";
import {DOCTORS} from "../../utils/doctorsDummyprofileData"
const SPECIALTIES = [
  "All",
  "Physician",
  "Dermatologist",
  "Neurologist",
  "Cardiologist",
  "Dentist",
  "ENT",
  "Gynecologist",
  "Psychiatrist",
  "Pediatrician"
];


export default function FindDoctors() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeSpec, setActiveSpec] = useState("All");
  const [selected, setSelected] = useState(null);

  /* --- Drag Scroll Logic (Desktop) --- */
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft.current = e.currentTarget.scrollLeft;
    e.currentTarget.classList.add("dragging");
  };

  const handleMouseUpLeave = (e) => {
    isDown.current = false;
    e.currentTarget.classList.remove("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    e.currentTarget.scrollLeft = scrollLeft.current - walk;
  };

  /* --- Filtering --- */
  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((d) => {
      const text = `
        ${d.name}
        ${d.specialty}
        ${d.location}
        ${d.city}
        ${d.clinicName}
        ${d.fee}
      `.toLowerCase();

      return (
        text.includes(search.toLowerCase()) &&
        (activeSpec === "All" || d.specialty === activeSpec)
      );
    });
  }, [search, activeSpec]);

  return (
    <div className="find-doctor-container">
      <h1>Find Doctors</h1>

      <div className="search-wrapper">
  <input
    className="doctor-search"
    placeholder="Search doctor, clinic, area, fee…"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

      <div className="specialty-tabs">
        {SPECIALTIES.map((s) => (
          <button
            key={s}
            className={`spec-chip ${activeSpec === s ? "active" : ""}`}
            onClick={() => setActiveSpec(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {/* --- Rows --- */}
      <div className="doctor-rows">
        {[0, 1, 2].map((row) => (
          <div
            key={row}
            className="doctor-row"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpLeave}
            onMouseLeave={handleMouseUpLeave}
            onMouseMove={handleMouseMove}
          >
            {filteredDoctors.slice(row * 8, row * 8 + 8).map((doc) => (
              <div
                key={doc.id}
                className="doctor-card"
                onClick={() => setSelected(doc)}
              >
                <div className="card-left">
                  <img src={doc.image} alt={doc.name} />
                </div>

                <div className="card-right">
                  <h3 className="doc-name">{doc.name}</h3>
                  <p className="spec">{doc.specialty}</p>

                  <div className="row">
                    ⭐ {doc.rating} • {doc.experience} yrs
                  </div>

                  <div className="row clinic">
                    {doc.clinicName}
                  </div>

                  <div className="row location">
                    📍 {doc.location}, {doc.city}
                  </div>

                  <div className="row fee">
                    ₹ {doc.fee}
                  </div>
                </div>

                {doc.availableToday && (
                  <span className="badge">Today</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* --- Popup --- */}
      {selected && (
        <div className="doctor-modal">
          <div className="modal-card">
            <button className="modal-close" onClick={() => setSelected(null)}>
              ✕
            </button>

            <img src={selected.image} alt={selected.name} />
            <h2>{selected.name}</h2>
            <p className="spec">{selected.specialty}</p>

            <p className="about">{selected.about}</p>

            <div className="modal-meta">
              <span>🏥 {selected.clinicName}</span>
              <span>📍 {selected.clinicAddress}</span>
              <span>🗣 {selected.languages.join(", ")}</span>
              <span>📄 Reg No: {selected.registrationNo}</span>
              <span>⭐ {selected.rating}</span>
              <span>💼 {selected.experience} yrs</span>
              <span>💰 ₹ {selected.fee}</span>
            </div>

            <div className="modal-actions">
              <button className="primary-btn">
                Book Appointment
              </button>

              <button
                className="secondary-btn"
                onClick={() =>
                  navigate(`/patient/doctorsprofile/${selected.id}`)
                }
              >
                View Full Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
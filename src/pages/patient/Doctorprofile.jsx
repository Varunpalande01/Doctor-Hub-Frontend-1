import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {DOCTORS} from "../../utils/doctorsDummyprofileData"
import "./DoctorProfile.css";

export default function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* 🔑 ID ke base pe doctor find karna */
  const doctor = useMemo(
    () => DOCTORS.find((d) => d.id === Number(id)),
    [id]
  );

  /* Safety check */
  if (!doctor) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Doctor not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="doctor-profile-page">
      {/* HERO */}
      <div className="profile-hero">
        <img src={doctor.image} alt={doctor.name} />

        <div className="hero-info">
          <h1>{doctor.name}</h1>
          <p className="degree">{doctor.degree}</p>
          <p className="spec">{doctor.specialty}</p>

          <div className="hero-meta">
            ⭐ {doctor.rating} ({doctor.reviews} reviews)
            <span>• {doctor.experience} yrs</span>
          </div>

          <p className="clinic">
            🏥 {doctor.clinicName}, {doctor.city}
          </p>

          <button className="book-btn">
            Book Appointment • ₹{doctor.fee}
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="profile-content">
        <section className="profile-section">
          <h2>About Doctor</h2>
          <p>{doctor.about}</p>
        </section>

        <section className="profile-section">
          <h2>Clinic & Location</h2>
          <div className="clinic-card">
            <strong>{doctor.clinicName}</strong>
            <p>{doctor.clinicAddress}</p>
            <p>{doctor.city}</p>
          </div>
        </section>

        <section className="profile-section grid">
          <div>
            <span>Consultation Fee</span>
            <strong>₹ {doctor.fee}</strong>
          </div>
          <div>
            <span>Languages</span>
            <strong>{doctor.languages.join(", ")}</strong>
          </div>
          <div>
            <span>Registration No</span>
            <strong>{doctor.registrationNo}</strong>
          </div>
          <div>
            <span>Availability</span>
            <strong>{doctor.availability}</strong>
          </div>
        </section>

        <section className="profile-section">
          <h2>Conditions Treated</h2>
          <div className="symptoms">
            {doctor.symptoms.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </section>

        <div className="profile-actions">
          <button className="primary-btn">Book Appointment</button>
          <button className="secondary-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
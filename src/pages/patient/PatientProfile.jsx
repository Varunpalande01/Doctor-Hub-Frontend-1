// src/pages/patient/UpdateProfile.jsx
import React, { useState } from "react";
import { FiUser, FiPhone, FiMail, FiActivity, FiAlertCircle, FiClipboard, FiEye, FiEyeOff } from "react-icons/fi";
import "./PatientProfile.css";

const UpdateProfile = () => {
  const doctorData = JSON.parse(localStorage.getItem("doctorAddedPatient")) || {};
  const patientLoginData = JSON.parse(localStorage.getItem("currentUser")) || {};

  const [formData, setFormData] = useState({
    fullName: doctorData.fullName || patientLoginData.fullName || "",
    email: doctorData.email || patientLoginData.email || "",
    phone: doctorData.phone || patientLoginData.phone || "",
    age: patientLoginData.age || "",
    gender: patientLoginData.gender || "",
    bloodGroup: patientLoginData.bloodGroup || "",
    symptoms: patientLoginData.symptoms || "",
    history: patientLoginData.history || "",
    allergies: patientLoginData.allergies || "",
    chronic: patientLoginData.chronic || "",
    surgeries: patientLoginData.surgeries || "",
    medications: patientLoginData.medications || "",
    emergencyName: patientLoginData.emergencyName || "",
    emergencyPhone: patientLoginData.emergencyPhone || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const validate = (field, value) => {
    switch (field) {
      case "phone":
      case "emergencyPhone":
        return /^\d{10}$/.test(value) ? "" : "Enter 10-digit number";
      case "email":
        return value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Invalid email" : "";
      case "age":
        return value && (value <= 0 || value > 120) ? "Enter valid age" : "";
      case "confirmPassword":
        return value !== formData.newPassword ? "Passwords do not match" : "";
      default:
        return "";
    }
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    const error = validate(field, value);
    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    ["phone","emergencyPhone","email","age","confirmPassword"].forEach(f => {
      const err = validate(f, formData[f]);
      if(err) newErrors[f] = err;
    });
    setErrors(newErrors);
    if(Object.keys(newErrors).length === 0){
      console.log("Profile Updated:", formData);
      alert("Profile updated successfully!");
      // Backend call: update patient info and doctor record if email/phone changed
    } else {
      alert("Fix errors before saving!");
    }
  };

  return (
    <div className="update-profile-container">
      <div className="form-page-header">
        <h2>Update Profile</h2>
        <p>Edit your details and complete your medical profile.</p>
      </div>

      <form className="update-profile-form" onSubmit={handleSubmit}>

        {/* Personal Details */}
        <div className="form-card">
          <h3><FiUser /> Personal Details</h3>
          <div className="form-row">
            <div className="form-group" title="Enter your full name">
              <label>Full Name <span className="mandatory">*</span></label>
              <input 
                type="text"
                value={formData.fullName}
                required
                onChange={(e) => handleChange("fullName", e.target.value)}
              />
            </div>
            <div className="form-row-inner">
              <div className="form-group" title="Enter your age in years">
                <label>Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                />
                {errors.age && <span className="error-msg">{errors.age}</span>}
              </div>
              <div className="form-group" title="Select your gender">
                <label>Gender</label>
                <select value={formData.gender} onChange={(e) => handleChange("gender", e.target.value)}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="form-card">
          <h3><FiPhone /> Contact Info</h3>
          <div className="form-group" title="Enter your phone number">
            <label>Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>
          <div className="form-group" title="Enter your email address">
            <label>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>
        </div>

        {/* Medical Info */}
        <div className="form-card full-span">
          <h3><FiActivity /> Medical Information</h3>
          <div className="form-row">
            <div className="form-group" title="Enter your blood group">
              <label>Blood Group</label>
              <input type="text" value={formData.bloodGroup} onChange={(e)=>handleChange("bloodGroup", e.target.value)} />
            </div>
            <div className="form-group" title="Enter your current symptoms">
              <label>Current Symptoms</label>
              <input type="text" value={formData.symptoms} onChange={(e)=>handleChange("symptoms", e.target.value)} />
            </div>
          </div>

          <div className="form-group" title="Enter past medical history or notes">
            <label>Medical History / Notes</label>
            <textarea value={formData.history} onChange={(e)=>handleChange("history", e.target.value)} />
          </div>

          <div className="form-row">
            <div className="form-group" title="Known allergies (if any)">
              <label>Known Allergies</label>
              <input type="text" value={formData.allergies} onChange={(e)=>handleChange("allergies", e.target.value)} />
            </div>
            <div className="form-group" title="Any chronic conditions">
              <label>Chronic Conditions</label>
              <input type="text" value={formData.chronic} onChange={(e)=>handleChange("chronic", e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" title="Past surgeries">
              <label>Past Surgeries</label>
              <input type="text" value={formData.surgeries} onChange={(e)=>handleChange("surgeries", e.target.value)} />
            </div>
            <div className="form-group" title="Medications taken">
              <label>Medications Taken</label>
              <input type="text" value={formData.medications} onChange={(e)=>handleChange("medications", e.target.value)} />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="form-card">
          <h3><FiAlertCircle /> Emergency Contact</h3>
          <div className="form-group" title="Emergency contact name">
            <label>Contact Name</label>
            <input type="text" value={formData.emergencyName} onChange={(e)=>handleChange("emergencyName", e.target.value)} />
          </div>
          <div className="form-group" title="Emergency contact phone number">
            <label>Contact Phone</label>
            <input type="tel" value={formData.emergencyPhone} onChange={(e)=>handleChange("emergencyPhone", e.target.value)} />
            {errors.emergencyPhone && <span className="error-msg">{errors.emergencyPhone}</span>}
          </div>
        </div>

        {/* Password Section */}
        <div className="form-card full-span">
          <h3><FiMail /> Update Password</h3>
          <div className="form-group password-group" title="Enter current password">
            <label>Current Password</label>
            <input
              type={showPassword.current ? "text" : "password"}
              value={formData.currentPassword}
              onChange={(e)=>handleChange("currentPassword", e.target.value)}
            />
            <span className="eye-icon" onClick={()=>setShowPassword({...showPassword, current: !showPassword.current})}>
              {showPassword.current ? <FiEyeOff /> : <FiEye />}
            </span>
            <a href="/forgot-password" className="forgot-link">Forgot password?</a>
          </div>

          <div className="form-group password-group" title="Enter new password">
            <label>New Password</label>
            <input
              type={showPassword.new ? "text" : "password"}
              value={formData.newPassword}
              onChange={(e)=>handleChange("newPassword", e.target.value)}
            />
            <span className="eye-icon" onClick={()=>setShowPassword({...showPassword, new: !showPassword.new})}>
              {showPassword.new ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="form-group password-group" title="Confirm new password">
            <label>Confirm Password</label>
            <input
              type={showPassword.confirm ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e)=>handleChange("confirmPassword", e.target.value)}
            />
            <span className="eye-icon" onClick={()=>setShowPassword({...showPassword, confirm: !showPassword.confirm})}>
              {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
            </span>
            {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn"><FiClipboard /> Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
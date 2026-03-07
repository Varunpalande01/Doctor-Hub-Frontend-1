import React, { useState } from "react";
import { FiUser, FiPhone, FiMail, FiActivity, FiAlertCircle, FiClipboard, FiEye, FiEyeOff, FiEdit2, FiCamera } from "react-icons/fi";
import "./PatientProfile.css";

const UpdateProfile = () => {
  const doctorData = JSON.parse(localStorage.getItem("doctorAddedPatient")) || {};
  const patientLoginData = JSON.parse(localStorage.getItem("currentUser")) || {};

  // --- Naya state: View ya Edit mode toggle karne ke liye ---
  const [isEditing, setIsEditing] = useState(false);

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
    profileImage: patientLoginData.profileImage || "https://i.pravatar.cc/150", // Default image
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

  // --- Naya function: Image upload handle karne ke liye ---
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    ["phone", "emergencyPhone", "email", "age", "confirmPassword"].forEach(f => {
      const err = validate(f, formData[f]);
      if (err) newErrors[f] = err;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Profile Updated:", formData);
      alert("Profile updated successfully!");
      setIsEditing(false); // Update ke baad wapas view mode mein
    } else {
      alert("Fix errors before saving!");
    }
  };

  return (
    <div className="update-profile-container">
      <div className="form-page-header">
        <h2>{isEditing ? "Update Profile" : "My Profile Settings"}</h2>
        <p>{isEditing ? "Edit your details and complete your medical profile." : "Manage your personal and medical information."}</p>
      </div>

      {/* --- View Mode: Jab isEditing false ho --- */}
      {!isEditing ? (
        <div className="profile-view-section">
          <div className="profile-header-card">
            <div className="view-avatar-wrapper">
              <img src={formData.profileImage} alt="Profile" className="view-avatar-img" />
            </div>
            <div className="view-user-info">
              <h3>{formData.fullName}</h3>
              <p>{formData.email}</p>
              <button className="edit-toggle-btn" onClick={() => setIsEditing(true)}>
                <FiEdit2 /> Edit Profile
              </button>
            </div>
          </div>

          <div className="profile-details-grid">
            <div className="view-card">
              <h4><FiUser /> Personal</h4>
              <p><strong>Age:</strong> {formData.age || "N/A"}</p>
              <p><strong>Gender:</strong> {formData.gender || "N/A"}</p>
              <p><strong>Blood Group:</strong> {formData.bloodGroup || "N/A"}</p>
            </div>
            <div className="view-card">
              <h4><FiPhone /> Contact</h4>
              <p><strong>Phone:</strong> {formData.phone || "N/A"}</p>
              <p><strong>Emergency:</strong> {formData.emergencyName} ({formData.emergencyPhone})</p>
            </div>
            <div className="view-card full-span">
              <h4><FiActivity /> Medical Summary</h4>
              <div className="medical-tags">
                <p><strong>Symptoms:</strong> {formData.symptoms || "None"}</p>
                <p><strong>Conditions:</strong> {formData.chronic || "None"}</p>
                <p><strong>Allergies:</strong> {formData.allergies || "None"}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* --- Edit Mode: Jab isEditing true ho --- */
        <form className="update-profile-form" onSubmit={handleSubmit}>
          
          {/* Profile Image Edit */}
          <div className="form-card profile-image-edit">
            <div className="avatar-edit-container">
               <img src={formData.profileImage} alt="Preview" className="edit-avatar-preview" />
               <label htmlFor="imageUpload" className="camera-icon-label">
                  <FiCamera />
                  <input type="file" id="imageUpload" hidden onChange={handleImageUpload} accept="image/*" />
               </label>
            </div>
            <p>Click camera icon to change photo</p>
          </div>

          {/* Personal Details */}
          <div className="form-card">
            <h3><FiUser /> Personal Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name <span className="mandatory">*</span></label>
                <input
                  type="text"
                  value={formData.fullName}
                  required
                  onChange={(e) => handleChange("fullName", e.target.value)}
                />
              </div>
              <div className="form-row-inner">
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                  />
                  {errors.age && <span className="error-msg">{errors.age}</span>}
                </div>
                <div className="form-group">
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
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              {errors.phone && <span className="error-msg">{errors.phone}</span>}
            </div>
            <div className="form-group">
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
              <div className="form-group">
                <label>Blood Group</label>
                <input type="text" value={formData.bloodGroup} onChange={(e) => handleChange("bloodGroup", e.target.value)} />
              </div>
              <div className="form-group">
                <label>Current Symptoms</label>
                <input type="text" value={formData.symptoms} onChange={(e) => handleChange("symptoms", e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>Medical History / Notes</label>
              <textarea value={formData.history} onChange={(e) => handleChange("history", e.target.value)} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Known Allergies</label>
                <input type="text" value={formData.allergies} onChange={(e) => handleChange("allergies", e.target.value)} />
              </div>
              <div className="form-group">
                <label>Chronic Conditions</label>
                <input type="text" value={formData.chronic} onChange={(e) => handleChange("chronic", e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Past Surgeries</label>
                <input type="text" value={formData.surgeries} onChange={(e) => handleChange("surgeries", e.target.value)} />
              </div>
              <div className="form-group">
                <label>Medications Taken</label>
                <input type="text" value={formData.medications} onChange={(e) => handleChange("medications", e.target.value)} />
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="form-card">
            <h3><FiAlertCircle /> Emergency Contact</h3>
            <div className="form-group">
              <label>Contact Name</label>
              <input type="text" value={formData.emergencyName} onChange={(e) => handleChange("emergencyName", e.target.value)} />
            </div>
            <div className="form-group">
              <label>Contact Phone</label>
              <input type="tel" value={formData.emergencyPhone} onChange={(e) => handleChange("emergencyPhone", e.target.value)} />
              {errors.emergencyPhone && <span className="error-msg">{errors.emergencyPhone}</span>}
            </div>
          </div>

          {/* Password Section */}
          <div className="form-card full-span">
            <h3><FiMail /> Update Password</h3>
            <div className="form-group password-group">
              <label>Current Password</label>
              <input
                type={showPassword.current ? "text" : "password"}
                value={formData.currentPassword}
                onChange={(e) => handleChange("currentPassword", e.target.value)}
              />
              <span className="eye-icon" onClick={() => setShowPassword({ ...showPassword, current: !showPassword.current })}>
                {showPassword.current ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <div className="form-group password-group">
              <label>New Password</label>
              <input
                type={showPassword.new ? "text" : "password"}
                value={formData.newPassword}
                onChange={(e) => handleChange("newPassword", e.target.value)}
              />
              <span className="eye-icon" onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}>
                {showPassword.new ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <div className="form-group password-group">
              <label>Confirm Password</label>
              <input
                type={showPassword.confirm ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
              />
              <span className="eye-icon" onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}>
                {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
              </span>
              {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            <button type="submit" className="save-btn"><FiClipboard /> Save Profile</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateProfile;
// import React, { useState } from "react";
// import "./Profile.css";

// const DoctorProfile = () => {
//   const storedUser = JSON.parse(localStorage.getItem("currentUser"));

//   const [form, setForm] = useState({
//     fullName: storedUser?.fullName || "",
//     email: storedUser?.email || "",
//     phone: "",
//     specialization: "",
//     experience: "",
//     gender:"",
//     clinicName: "",
//     clinicAddress: "",
//     consultationFee: "",
//     registrationNumber: "",
//     about: "",
//     govtIdType: "",
//   });

//   const [files, setFiles] = useState({
//     govtId: null,
//     degreeCert: null,
//     registrationCert: null,
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFiles({ ...files, [e.target.name]: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Profile saved (UI only – backend later)");
//   };

//   return (
//     <div className="doctor-profile-page">
//       <h2>Complete Your Profile</h2>
//       <p className="profile-subtext">
//         This information is required to activate appointments and go live.
//       </p>

//       <form className="profile-form" onSubmit={handleSubmit}>
//         {/* BASIC INFO */}
//         <div className="section">
//           <h4>Basic Information</h4>

//           <label>Full Name *</label>
// <input
//   name="fullName"
//   value={form.fullName}
//   onChange={handleChange}
//   required
// />

// <label>Email *</label>
// <input
//   type="email"
//   name="email"
//   value={form.email}
//   onChange={handleChange}
//   required
// />


//           <label>Phone Number *</label>
//           <input name="phone" onChange={handleChange} required />

//           <label>Specialization *</label>
//           <input name="specialization" onChange={handleChange} required />

//           <label>Experience (Years) *</label>
//           <input type="number" name="experience" onChange={handleChange} required />
//           <label>Gender *</label>
// <select name="gender" value={form.gender} onChange={handleChange} required>
//   <option value="">Select Gender</option>
//   <option value="Male">Male</option> 
//   <option value="Female">Female</option>
// </select>


//         </div>

//         {/* CLINIC INFO */}
//         <div className="section">
//           <h4>Clinic Information</h4>

//           <label>Clinic Name *</label>
//           <input name="clinicName" onChange={handleChange} required />

//           <label>Clinic Address *</label>
//           <textarea name="clinicAddress" onChange={handleChange} required />

//           <label>Consultation Fee (₹) *</label>
//           <input type="number" name="consultationFee" onChange={handleChange} required />
//         </div>

//         {/* DOCUMENTS */}
//         <div className="section">
//           <h4>Verification Documents</h4>

//           <label>Government ID Type *</label>
//           <select name="govtIdType" onChange={handleChange} required>
//             <option value="">Select</option>
//             <option value="AADHAAR">Aadhaar</option>
//             <option value="PAN">PAN</option>
//             <option value="PASSPORT">Passport</option>
//           </select>

//           <label>Upload Government ID *</label>
//           <input type="file" name="govtId" onChange={handleFileChange} required />

//           <label>Medical Degree Certificate *</label>
//           <input type="file" name="degreeCert" onChange={handleFileChange} required />

//           <label>Medical Council Registration Number *</label>
//           <input name="registrationNumber" onChange={handleChange} required />

//           <label>Registration Certificate *</label>
//           <input type="file" name="registrationCert" onChange={handleFileChange} required />
//         </div>

//         {/* OPTIONAL */}
//         <div className="section">
//           <h4>About (Optional)</h4>
//           <textarea
//             name="about"
//             placeholder="Tell patients about your experience (optional)"
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="save-btn">
//           Save Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DoctorProfile;

import React, { useState } from "react";
import "./Profile.css";

const DoctorProfile = () => {
  // --- LOCAL STORAGE SE DATA NIKALNA ---
  // Login/Signup ka data 'currentUser' key mein hota hai
  const storedUser = JSON.parse(localStorage.getItem("currentUser")) || {};

  // --- TOGGLE STATE FOR VIEW/EDIT ---
  const [isEditing, setIsEditing] = useState(false);

  // --- FORM STATE ---
  // Yaha storedUser ka data direct initialize ho raha hai taaki Edit mein dikhe
  const [form, setForm] = useState({
    fullName: storedUser.fullName || "",
    email: storedUser.email || "",
    phone: storedUser.phone || "",
    specialization: storedUser.specialization || "",
    experience: storedUser.experience || "",
    gender: storedUser.gender || "",
    about: storedUser.about || "",
    profilePic: storedUser.profilePic || null, 
    clinics: storedUser.clinics || [{ clinicName: "", clinicAddress: "", consultationFee: "" }],
    visitingPositions: storedUser.visitingPositions || [],
    councilName: storedUser.councilName || "", 
    registrationNumber: storedUser.registrationNumber || "",
    registrationYear: storedUser.registrationYear || "",
  });

  // --- FILES STATE ---
  const [files, setFiles] = useState({
    signature: null,
    govtIds: [{ type: "", file: null }],
    certificates: [{ title: "", file: null }],
  });

  // --- HANDLERS ---
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const addClinic = () => setForm({ ...form, clinics: [...form.clinics, { clinicName: "", clinicAddress: "", consultationFee: "" }] });
  const addVisiting = () => setForm({ ...form, visitingPositions: [...form.visitingPositions, { location: "", time: "", fees: "" }] });
  const addGovtId = () => setFiles({ ...files, govtIds: [...files.govtIds, { type: "", file: null }] });
  const addCert = () => setFiles({ ...files, certificates: [...files.certificates, { title: "", file: null }] });

  const handleClinicChange = (index, e) => {
    const newClinics = [...form.clinics];
    newClinics[index][e.target.name] = e.target.value;
    setForm({ ...form, clinics: newClinics });
  };

  const handleVisitingChange = (index, e) => {
    const newPositions = [...form.visitingPositions];
    newPositions[index][e.target.name] = e.target.value;
    setForm({ ...form, visitingPositions: newPositions });
  };

  const handleFileArrayChange = (index, e, category) => {
    const newArr = [...files[category]];
    if (e.target.type === "file") {
      newArr[index].file = e.target.files[0];
    } else {
      const field = category === "govtIds" ? "type" : "title";
      newArr[index][field] = e.target.value;
    }
    setFiles({ ...files, [category]: newArr });
  };

  // --- SUBMIT: LOCAL STORAGE MEIN DATA SAVE KARNA ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = { ...storedUser, ...form };
    localStorage.setItem("currentUser", JSON.stringify(updatedUserData));
    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="doctor-profile-page">
      <div className="profile-top-header">
        <div>
          <h2>{isEditing ? "Edit Professional Profile" : "Doctor Profile"}</h2>
          <p className="profile-subtext">Manage your public identity and verification documents.</p>
        </div>
        {!isEditing && (
          <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        )}
      </div>

      {isEditing ? (
        <form className="profile-form" onSubmit={handleSubmit}>
          {/* PROFILE IMAGE UPLOAD SECTION */}
          <div className="section photo-upload-section">
            <h4>Profile Picture</h4>
            <div className="photo-upload-container">
              <div className="photo-preview">
                {form.profilePic ? (
                  <img src={form.profilePic} alt="Profile" className="avatar-img" />
                ) : (
                  <span className="default-avatar">👨‍⚕️</span>
                )}
              </div>
              <div className="photo-input-group">
                <label className="custom-file-upload">
                  Choose Photo
                  <input type="file" accept="image/*" onChange={handleImageUpload} />
                </label>
                <p className="subtext">Upload a professional headshot (JPG/PNG).</p>
              </div>
            </div>
          </div>

          {/* BASIC INFORMATION */}
          <div className="section">
            <h4>Basic Information</h4>
            <div className="input-grid">
              <div>
                <label>Full Name *</label>
                <input name="fullName" value={form.fullName} onChange={handleChange} required />
              </div>
              <div>
                <label>Gender *</label>
                <select name="gender" value={form.gender} onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
            <div className="input-grid">
              <div>
                <label>Specialization *</label>
                <input name="specialization" value={form.specialization} placeholder="e.g. Cardiologist" onChange={handleChange} required />
              </div>
              <div>
                <label>Experience (Years) *</label>
                <input type="number" name="experience" value={form.experience} onChange={handleChange} required />
              </div>
            </div>
            <div className="input-grid">
              <div>
                <label>Email Address *</label>
                <input name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <label>Phone Number *</label>
                <input name="phone" value={form.phone} placeholder="+91" onChange={handleChange} required />
              </div>
            </div>
            <div>
              <label>About Me</label>
              <textarea name="about" value={form.about} placeholder="Brief about your medical career..." onChange={handleChange} />
            </div>
          </div>

          {/* CLINIC LOCATIONS */}
          <div className="section">
            <h4>Clinic Information</h4>
            {form.clinics.map((clinic, index) => (
              <div key={index} className="multi-entry-block">
                <p className="entry-tag">Clinic #{index + 1}</p>
                <label>Clinic Name *</label>
                <input name="clinicName" value={clinic.clinicName} onChange={(e) => handleClinicChange(index, e)} required />
                <label>Clinic Address *</label>
                <textarea name="clinicAddress" value={clinic.clinicAddress} onChange={(e) => handleClinicChange(index, e)} required />
                <label>Consultation Fee (₹) *</label>
                <input type="number" name="consultationFee" value={clinic.consultationFee} onChange={(e) => handleClinicChange(index, e)} required />
              </div>
            ))}
            <button type="button" className="add-more-btn" onClick={addClinic}>+ Add Another Clinic</button>
          </div>

          {/* VISITING FACULTY */}
          <div className="section">
            <h4>Visiting Faculty Info</h4>
            {form.visitingPositions.map((vp, index) => (
              <div key={index} className="multi-entry-block visiting">
                <div className="input-grid">
                  <div>
                    <label>Visiting Location</label>
                    <input name="location" value={vp.location} placeholder="Hospital Name" onChange={(e) => handleVisitingChange(index, e)} />
                  </div>
                  <div>
                    <label>Timings</label>
                    <input name="time" value={vp.time} placeholder="e.g. Sat 10am-2pm" onChange={(e) => handleVisitingChange(index, e)} />
                  </div>
                  <div>
                    <label>Fee (₹)</label>
                    <input type="number" name="fees" value={vp.fees} onChange={(e) => handleVisitingChange(index, e)} />
                  </div>
                </div>
              </div>
            ))}
            <button type="button" className="add-more-btn" onClick={addVisiting}>+ Add Visiting Hospital</button>
          </div>

          {/* VERIFICATION & DOCUMENTS */}
          <div className="section">
            <h4>Professional Verification</h4>
            <div className="input-grid">
              <div>
                <label>Medical Council Name *</label>
                <input name="councilName" value={form.councilName} placeholder="Enter your Medical Council" onChange={handleChange} required />
              </div>
              <div>
                <label>Registration Year *</label>
                <input type="number" name="registrationYear" value={form.registrationYear} placeholder="YYYY" onChange={handleChange} required />
              </div>
            </div>
            <label>Medical Council Registration Number *</label>
            <input name="registrationNumber" value={form.registrationNumber} placeholder="Reg No." onChange={handleChange} required />

            <p className="sub-label-header">Government Identity Proofs</p>
            {files.govtIds.map((item, index) => (
              <div key={index} className="file-row">
                <select value={item.type} onChange={(e) => handleFileArrayChange(index, e, "govtIds")} required>
                  <option value="">Select ID Type</option>
                  <option value="AADHAAR">Aadhaar Card</option>
                  <option value="PAN">PAN Card</option>
                  <option value="PASSPORT">Passport</option>
                  <option value="VOTER_ID">Voter ID</option>
                  <option value="DRIVING_LICENSE">Driving License</option>
                  <option value="OTHER">Other Govt ID</option>
                </select>
                <input type="file" onChange={(e) => handleFileArrayChange(index, e, "govtIds")} required />
              </div>
            ))}
            <button type="button" className="add-more-btn" onClick={addGovtId}>+ Add Another ID</button>

            <p className="sub-label-header">Certificates (Degree/Registration)</p>
            {files.certificates.map((item, index) => (
              <div key={index} className="file-row">
                <input placeholder="Name (e.g. MBBS, MD, Fellowship)" value={item.title} onChange={(e) => handleFileArrayChange(index, e, "certificates")} required />
                <input type="file" onChange={(e) => handleFileArrayChange(index, e, "certificates")} required />
              </div>
            ))}
            <button type="button" className="add-more-btn" onClick={addCert}>+ Add More Certificates</button>

            <div className="signature-box">
              <label>Digital Signature *</label>
              <input type="file" name="signature" onChange={handleFileChange} required />
              <p className="subtext">Upload image of signature on white background.</p>
            </div>
          </div>

          <div className="form-buttons-fixed">
            <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            <button type="submit" className="save-btn">Save & Update Profile</button>
          </div>
        </form>
      ) : (
        /* --- VIEW MODE: DETAILED DOCTOR PROFILE --- */
        <div className="profile-view-container">
          <div className="view-card main-info-card">
            <div className="doctor-header-top">
              <div className="view-avatar">
                {form.profilePic ? (
                  <img src={form.profilePic} alt="Doctor" className="avatar-img" />
                ) : (
                  "👨‍⚕️"
                )}
              </div>
              <div className="view-title-group">
                <h3>{form.fullName || "Update Your Name"} <span className="verified-check">✔</span></h3>
                <p className="view-spec">{form.specialization || "Set Specialization"}</p>
                <div className="view-tags">
                  <span>{form.experience || "0"} Years Exp</span>
                  <span>{form.gender || "Gender"}</span>
                </div>
              </div>
            </div>
            {form.about && (
              <div className="view-about">
                <p><strong>About:</strong> {form.about}</p>
              </div>
            )}
          </div>

          <div className="view-grid">
            <div className="view-card">
              <h4>Contact & Verification</h4>
              <div className="view-details">
                <p><strong>📧 Email:</strong> {form.email}</p>
                <p><strong>📞 Phone:</strong> {form.phone || "Not Provided"}</p>
                <hr className="view-divider" />
                <p><strong>Council:</strong> {form.councilName || "N/A"}</p>
                <p><strong>Reg No:</strong> {form.registrationNumber || "N/A"}</p>
                <p><strong>Year:</strong> {form.registrationYear || "N/A"}</p>
              </div>
            </div>

            <div className="view-card">
              <h4>Clinics ({form.clinics.length})</h4>
              {form.clinics.map((c, i) => (
                <div key={i} className="view-entry-item">
                  <p className="view-entry-title">{c.clinicName || "Clinic Name"}</p>
                  <p className="view-entry-sub">{c.clinicAddress || "Address"}</p>
                  <p className="view-fee">Fee: ₹{c.consultationFee || "0"}</p>
                </div>
              ))}
            </div>

            {form.visitingPositions.length > 0 && (
              <div className="view-card">
                <h4>Visiting Positions</h4>
                {form.visitingPositions.map((v, i) => (
                  <div key={i} className="view-entry-item">
                    <p className="view-entry-title">{v.location}</p>
                    <p className="view-entry-sub">🕒 {v.time}</p>
                    <p className="view-fee">Fee: ₹{v.fees}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
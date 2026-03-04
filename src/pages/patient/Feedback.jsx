import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    type: "",
    rating: 0,
    message: "",
    allowContact: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleRating = (value) => {
    setFormData((prev) => ({
      ...prev,
      rating: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 Dummy submit (future me API call yahan lagegi)
    console.log("Feedback Submitted:", formData);

    alert("Thank you for your feedback. We are reviewing it.");

    // reset form
    setFormData({
      type: "",
      rating: 0,
      message: "",
      allowContact: false
    });
  };

  return (
    <div className="feedback-container">
      <h1>Feedback</h1>
      <p className="subtitle">
        Your feedback helps us improve your care experience
      </p>

      <form className="feedback-form" onSubmit={handleSubmit}>
        {/* Feedback Type */}
        <label>
          Feedback Type
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="APPOINTMENT">Appointment</option>
            <option value="DOCTOR">Doctor Consultation</option>
            <option value="LAB">Lab / Reports</option>
            <option value="APP">App Experience</option>
            <option value="OTHER">Other</option>
          </select>
        </label>

        {/* Rating */}
        <div className="rating-section">
          <span>Rating (optional)</span>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= formData.rating ? "star active" : "star"
                }
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Message */}
        <label>
          Your Feedback
          <textarea
            name="message"
            placeholder="Tell us what went well or what we can improve..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        {/* Contact Permission */}
        <label className="checkbox">
          <input
            type="checkbox"
            name="allowContact"
            checked={formData.allowContact}
            onChange={handleChange}
          />
          You may contact me regarding this feedback
        </label>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
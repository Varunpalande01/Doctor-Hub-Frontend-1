import React, { useState, useMemo, useEffect } from "react";
import { 
  FiSearch, FiFilter, FiStar, FiMessageSquare, 
  FiFileText, FiCheckCircle, FiX
} from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/free-mode';
import "./MyDoctors.css";

// Dummy Data
const RECENT_DOCTORS = [
  { id: 1, name: "Dr. R.K. Anand", specialty: "Physician", fee: 500, lastVisit: "5 days ago", reason: "Viral Fever", image: "https://i.pravatar.cc/150?img=11", isOnline: true },
  { id: 2, name: "Dr. S. Sharma", specialty: "Cardiologist", fee: 800, lastVisit: "12 days ago", reason: "Chest Pain", image: "https://i.pravatar.cc/150?img=32", isOnline: false },
  { id: 3, name: "Dr. Ananya Roy", specialty: "Dentist", fee: 400, lastVisit: "20 days ago", reason: "Root Canal", image: "https://i.pravatar.cc/150?img=45", isOnline: true },
  { id: 4, name: "Dr. Vikram Singh", specialty: "Neurologist", fee: 1200, lastVisit: "1 month ago", reason: "Migraine", image: "https://i.pravatar.cc/150?img=12", isOnline: true },
];

const ALL_DOCTORS = [
  { id: 101, name: "Dr. R.K. Anand", specialty: "Physician", exp: 12, rating: 4.8, fee: 500, availableToday: true, image: "https://i.pravatar.cc/150?img=11" },
  { id: 102, name: "Dr. Amit Verma", specialty: "Ortho", exp: 8, rating: 4.5, fee: 700, availableToday: false, image: "https://i.pravatar.cc/150?img=53" },
  { id: 103, name: "Dr. Neha Kapoor", specialty: "Dermatology", exp: 10, rating: 4.9, fee: 900, availableToday: true, image: "https://i.pravatar.cc/150?img=47" },
  { id: 104, name: "Dr. Rajesh Koothrappali", specialty: "Neurologist", exp: 15, rating: 4.2, fee: 1500, availableToday: true, image: "https://i.pravatar.cc/150?img=68" },
  { id: 105, name: "Dr. Priya Das", specialty: "Dentist", exp: 5, rating: 4.0, fee: 300, availableToday: true, image: "https://i.pravatar.cc/150?img=26" },
];

const CATEGORIES = ["All", "Dentist", "Neurologist", "Ortho", "Physician", "Dermatology"];

const MyDoctors = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [maxFee, setMaxFee] = useState(2000);

  const filteredDoctors = useMemo(() => {
    return ALL_DOCTORS.filter((doc) => {
      const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || doc.specialty === activeCategory;
      const matchesRating = doc.rating >= minRating;
      const matchesFee = doc.fee <= maxFee;

      return matchesSearch && matchesCategory && matchesRating && matchesFee;
    });
  }, [searchQuery, activeCategory, minRating, maxFee]);

  const resetFilters = () => {
    setMinRating(0);
    setMaxFee(2000);
    setActiveCategory("All");
    setSearchQuery("");
  };

  useEffect(() => {
    const chipContainer = document.querySelector('.chip-container-premium');
    if(chipContainer) chipContainer.scrollLeft = 0;
  }, []);

  return (
    <div className="doctors-page-wrapper">
      <header className="docs-header-premium">
        <div className="search-row-premium">
          <div className="main-search-bar">
            <FiSearch className="s-icon" />
            <input 
              type="text" 
              placeholder="Search by name or specialty..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-wrapper">
            <button className={`filter-config-btn ${showFilters ? 'active-btn' : ''}`} onClick={() => setShowFilters(!showFilters)}>
              <FiFilter /> <span>Filters</span>
            </button>
            
            {showFilters && (
              <div className="filter-dropdown-menu">
                <div className="filter-header">
                  <span>Advanced Filters</span>
                  <FiX onClick={() => setShowFilters(false)} className="close-filter" />
                </div>
                
                <div className="filter-body">
                  <div className="filter-group">
                    <label>Min Rating: {minRating}★</label>
                    <input type="range" min="0" max="5" step="0.5" value={minRating} onChange={(e) => setMinRating(e.target.value)} />
                  </div>
                  <div className="filter-group">
                    <label>Max Fee: ₹{maxFee}</label>
                    <input type="range" min="300" max="2000" step="100" value={maxFee} onChange={(e) => setMaxFee(e.target.value)} />
                  </div>
                </div>
                <button className="reset-filter-btn" onClick={resetFilters}>Reset All</button>
              </div>
            )}
          </div>

          <div className="chip-container-premium">
            {CATEGORIES.map(cat => (
              <button 
                key={cat} 
                className={`cat-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* --- RECENTLY CONSULTED --- */}
      <section className="recent-consult-section">
        <div className="section-head">
          <h2>Recently Consulted</h2>
          <button className="view-all-link">History</button>
        </div>
        <Swiper slidesPerView={"auto"} spaceBetween={16} freeMode={true} modules={[FreeMode]}>
          {RECENT_DOCTORS.map(doc => (
            <SwiperSlide key={doc.id} className="recent-slide-item">
              <div className="premium-recent-card">
                <div className="card-top-action">
                  <div className="doc-pfp-wrapper">
                    <img src={doc.image} alt={doc.name} />
                    {doc.isOnline && <span className="online-indicator"></span>}
                  </div>
                  <button className="mini-action-btn"><FiFileText /></button>
                </div>
                <div className="doc-brief">
                  <h3>{doc.name}</h3>
                  <p className="spec-tag">{doc.specialty}</p>
                  <p className="visit-meta">Visited {doc.lastVisit} • {doc.reason}</p>
                </div>
                <button className="follow-up-btn-primary">Book Follow-up ₹{doc.fee}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* --- ALL SAVED SPECIALISTS --- */}
      <section className="saved-specialists-section">
        <div className="section-head">
          <h2>Available Specialists ({filteredDoctors.length})</h2>
        </div>
        
        {filteredDoctors.length > 0 ? (
          <Swiper slidesPerView={"auto"} spaceBetween={16} freeMode={true} modules={[FreeMode]}>
            {filteredDoctors.map(doc => (
              <SwiperSlide key={doc.id} className="directory-slide-item">
                <div className="directory-card-premium">
                  {doc.availableToday && <div className="status-badge-premium"><FiCheckCircle size={12} /> Available Today</div>}
                  <div className="directory-main-content">
                    <img src={doc.image} alt={doc.name} className="dir-doc-img" />
                    <div className="dir-doc-details">
                      <h3>{doc.name}</h3>
                      <p className="dir-spec">{doc.specialty}</p>
                      <div className="dir-stats">
                        <span className="rating"><FiStar /> {doc.rating}</span>
                        <span className="divider">|</span>
                        <span className="exp">{doc.exp} yrs exp</span>
                      </div>
                      <p className="fee-text">Consultation: ₹{doc.fee}</p>
                    </div>
                  </div>
                  <div className="dir-card-footer">
                    <div className="secondary-actions">
                      <button className="sec-btn"><FiMessageSquare /> Chat</button>
                      <button className="sec-btn">Profile</button>
                    </div>
                    <button className="primary-booking-btn">Book Appointment</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="no-results">No doctors found matching your filters.</div>
        )}
      </section>
    </div>
  );
};

export default MyDoctors;

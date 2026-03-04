import React, { useState, useMemo } from "react";
import "./Prescriptions.css";
import { 
    FiSearch, FiDownload, FiShare2, FiEye, FiActivity, FiX, 
    FiCheckCircle, FiInfo, FiShoppingBag, FiExternalLink, FiCalendar, FiMapPin 
} from "react-icons/fi";

const dummyPrescriptions = [
    { 
        id: 1, docName: "Dr. Aisha Khan", docImg: "https://i.pravatar.cc/150?u=aisha", 
        date: "24 Feb 2026", diagnosis: "Chronic Hypertension", status: "Active", 
        clinic: "City Heart Hospital", specialization: "Cardiologist",
        medicines: [
            { name: "Telmisartan 40mg", dose: "1-0-0", dur: "30 Days", instr: "Empty Stomach" },
            { name: "Amlodipine 5mg", dose: "0-0-1", dur: "30 Days", instr: "After Meal" }
        ], 
        notes: "Monitor BP every morning. Reduce salt intake and walk for 30 mins daily." 
    },
    { 
        id: 2, docName: "Dr. Sameer Verma", docImg: "https://i.pravatar.cc/150?u=sameer", 
        date: "10 Jan 2026", diagnosis: "Severe Viral Flu", status: "Past", 
        clinic: "Apex Family Care", specialization: "General Physician",
        medicines: [
            { name: "Paracetamol 650mg", dose: "1-1-1", dur: "5 Days", instr: "After Meal" },
            { name: "Vitamin C 500mg", dose: "1-0-0", dur: "10 Days", instr: "After Breakfast" }
        ], 
        notes: "Complete bed rest for 3 days. Drink plenty of warm fluids like soup." 
    },
    { 
        id: 3, docName: "Dr. Raj Patel", docImg: "https://i.pravatar.cc/150?u=raj", 
        date: "15 Dec 2025", diagnosis: "Lower Back Pain", status: "Past", 
        clinic: "Ortho Spine Center", specialization: "Orthopedic",
        medicines: [
            { name: "Etoshine 90mg", dose: "0-0-1", dur: "7 Days", instr: "After Meal" },
            { name: "Pantocid 40mg", dose: "1-0-0", dur: "7 Days", instr: "30 min Before Food" }
        ], 
        notes: "Avoid lifting heavy weights. Daily light stretching exercises recommended." 
    },
    { 
        id: 4, docName: "Dr. Meera Joshi", docImg: "https://i.pravatar.cc/150?u=meera", 
        date: "05 Nov 2025", diagnosis: "Skin Allergy", status: "Past", 
        clinic: "Dermacare Clinic", specialization: "Dermatologist",
        medicines: [
            { name: "Levocetirizine 5mg", dose: "0-0-1", dur: "14 Days", instr: "At Night" },
            { name: "Mometasone Cream", dose: "Apply", dur: "7 Days", instr: "Affected area" }
        ], 
        notes: "Avoid harsh soaps. Apply calamine if itching persists. No dairy for 1 week." 
    }
];

const Prescriptions = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");
    const [selectedPres, setSelectedPres] = useState(null);
    const [toast, setToast] = useState("");

    const showToast = (msg) => { 
        setToast(msg); 
        setTimeout(() => setToast(""), 3000); 
    };

    const filteredData = useMemo(() => {
        return dummyPrescriptions.filter(p => {
            const matchesSearch = p.docName.toLowerCase().includes(search.toLowerCase()) || 
                                 p.diagnosis.toLowerCase().includes(search.toLowerCase()) ||
                                 p.clinic.toLowerCase().includes(search.toLowerCase());
            const matchesTab = filter === "All" || p.status === filter;
            return matchesSearch && matchesTab;
        });
    }, [search, filter]);

    return (
        <div className="pres-container">
            {/* Header Section */}
            <header className="pres-header-premium">
                <div className="header-titles">
                    <h1>Health Records</h1>
                    <p>Manage and track your medical history & prescriptions</p>
                </div>
                
                <div className="search-controls">
                    <div className="premium-search">
                        <FiSearch className="s-icon" />
                        <input 
                            type="text" 
                            placeholder="Search records, doctors..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="filter-pills">
                        {["All", "Active", "Past"].map(tab => (
                            <button 
                                key={tab} 
                                className={`pill ${filter === tab ? "active" : ""}`}
                                onClick={() => setFilter(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Featured Section: Ongoing Medication */}
            <section className="ongoing-highlight">
                <div className="highlight-content">
                    <div className="highlight-text">
                        <h3><FiActivity className="pulse-icon" /> Ongoing Medication</h3>
                        <p>Your current active treatment plan</p>
                    </div>
                    <div className="medication-grid-mini">
                        {dummyPrescriptions[0].medicines.map((m, i) => (
                            <div key={i} className="mini-med-card">
                                <div className="med-info">
                                    <span className="med-name">{m.name}</span>
                                    <span className="med-dosage">{m.dose} • {m.instr}</span>
                                </div>
                                <button className="alert-btn" onClick={() => showToast(`Reminder set for ${m.name}`)}>
                                    Set Alert
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Records Grid */}
            <div className="records-grid">
                {filteredData.length > 0 ? filteredData.map(pres => (
                    <div key={pres.id} className="premium-record-card">
                        <div className="card-status-indicator" data-status={pres.status}></div>
                        <div className="card-main-info">
                            <div className="doctor-profile">
                                <img src={pres.docImg} alt={pres.docName} />
                                <div className="doc-details">
                                    <h4>{pres.docName}</h4>
                                    <span>{pres.specialization}</span>
                                </div>
                            </div>
                            <div className="diagnosis-info">
                                <span className="label">Diagnosis</span>
                                <p>{pres.diagnosis}</p>
                            </div>
                            <div className="meta-footer">
                                <span><FiMapPin /> {pres.clinic}</span>
                                <span><FiCalendar /> {pres.date}</span>
                            </div>
                        </div>
                        <div className="card-actions">
                            <button className="btn-icon" title="View" onClick={() => setSelectedPres(pres)}>
                                <FiEye />
                            </button>
                            <button className="btn-icon" title="Download" onClick={() => showToast("Downloading PDF...")}>
                                <FiDownload />
                            </button>
                            <button className="btn-icon" title="Share" onClick={() => showToast("Link Copied!")}>
                                <FiShare2 />
                            </button>
                        </div>
                    </div>
                )) : (
                    <div className="no-results" style={{textAlign: 'center', padding: '40px'}}>
                        <p>No records found for "{search}"</p>
                    </div>
                )}
            </div>

            {/* Professional Modal / Bottom Sheet */}
            {selectedPres && (
                <div className="modal-backdrop" onClick={() => setSelectedPres(null)}>
                    <div className="premium-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-head">
                            <div className="title-grp">
                                <h2>Prescription Details</h2>
                            </div>
                            <button className="close-btn" style={{background: 'none', border: 'none', fontSize: '24px'}} onClick={() => setSelectedPres(null)}><FiX /></button>
                        </div>
                        
                        <div className="modal-scroll-area">
                            <div className="doc-notes" style={{marginBottom: '20px'}}>
                                <h4><FiInfo /> {selectedPres.diagnosis}</h4>
                                <p style={{fontSize: '13px', color: 'var(--text-sub)'}}>{selectedPres.date} • {selectedPres.clinic}</p>
                            </div>

                            <h4 className="section-title" style={{marginBottom: '10px', fontSize: '14px'}}>Medication List</h4>
                            <div className="meds-table-container">
                                <table className="meds-table">
                                    <thead>
                                        <tr>
                                            <th>Medicine</th>
                                            <th>Schedule</th>
                                            <th>Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedPres.medicines.map((m, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <strong>{m.name}</strong>
                                                    <small style={{fontSize: '11px', color: 'var(--primary)'}}>{m.instr}</small>
                                                </td>
                                                <td><span className="dose-badge">{m.dose}</span></td>
                                                <td style={{fontSize: '12px'}}>{m.dur}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="doc-notes" style={{marginTop: '20px'}}>
                                <h4 style={{fontSize: '14px', marginBottom: '8px'}}><FiInfo /> Doctor's Instructions</h4>
                                <p style={{fontSize: '13px', lineHeight: '1.5'}}>{selectedPres.notes}</p>
                            </div>

                            <div className="modal-footer-btns">
                                <button className="btn-order" onClick={() => showToast("Redirecting to Pharmacy...")}>
                                    <FiShoppingBag /> Order
                                </button>
                                <button className="btn-reports" style={{flex: 1}} onClick={() => showToast("Opening Reports...")}>
                                    <FiExternalLink /> Reports
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Toast */}
            {toast && (
                <div className="premium-toast">
                    <FiCheckCircle className="toast-icon" style={{color: 'var(--accent)'}} />
                    <span>{toast}</span>
                </div>
            )}
        </div>
    );
};

export default Prescriptions;
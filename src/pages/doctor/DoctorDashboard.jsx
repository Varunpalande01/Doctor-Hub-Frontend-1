// import React from "react";
// import { doctorDashboardData } from "../../utils/doctorDashboardDummyData";
// import "./DoctorDashboard.css";
// import { Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { useNavigate } from "react-router-dom";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend
// );

// const DoctorDashboard = () => {
//   const { stats, todaysAppointments } = doctorDashboardData;
//   const navigate = useNavigate();

//   // TEMP (later from backend)
//   const profileCompletion = 65;

//   const barData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "New Patients",
//         data: [12, 19, 8, 15, 22, 10],
//         backgroundColor: "rgba(72, 187, 120, 0.7)",
//         borderRadius: 6,
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["Visits", "Prescriptions", "Reports"],
//     datasets: [
//       {
//         data: [45, 25, 30],
//         backgroundColor: [
//           "rgba(99, 179, 237, 0.7)",
//           "rgba(248, 181, 149, 0.7)",
//           "rgba(155, 165, 177, 0.7)",
//         ],
//         borderWidth: 0,
//       },
//     ],
//   };

//   return (
//     <div className="doctor-dashboard">

//       {/* ENHANCED PROFILE ALERT */}
//       {profileCompletion < 100 && (
//         <div className="profile-alert-card">
//           <div className="profile-alert-left">
//             <span className="alert-icon">⚠️</span>
//             <div>
//               <h4>Complete Your Profile</h4>
//               <p>Your profile is {profileCompletion}% completed. Complete it to go live and accept appointments.</p>
//             </div>
//           </div>
//           <div className="profile-alert-right">
//             <div className="progress-container">
//               <div
//                 className="progress-fill"
//                 style={{ width: `${profileCompletion}%` }}
//               />
//             </div>
//             <button
//               className="complete-profile-btn"
//               onClick={() => navigate("/doctor/profile")}
//             >
//               Complete Profile
//             </button>
//           </div>
//         </div>
//       )}

//       {/* STATS */}
//       <div className="doctor-stats">
//         <div className="doctor-card">
//           <span>Total Patients</span>
//           <h3>{stats.totalPatients}</h3>
//         </div>
//         <div className="doctor-card">
//           <span>Today’s Appointments</span>
//           <h3>{stats.todayAppointments}</h3>
//         </div>
//         <div className="doctor-card">
//           <span>Pending Approvals</span>
//           <h3>{stats.pendingApprovals}</h3>
//         </div>
//       </div>

//       {/* TODAY APPOINTMENTS */}
//       <div className="doctor-section">
//         <h4>Today’s Appointments</h4>
//         <table className="doctor-table">
//           <thead>
//             <tr>
//               <th>Time</th>
//               <th>Patient</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {todaysAppointments.map((a) => (
//               <tr key={a.id}>
//                 <td>{a.time}</td>
//                 <td>{a.patient}</td>
//                 <td>
//                   <span className={`doctor-status ${a.status.toLowerCase()}`}>
//                     {a.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* CHARTS */}
//       <div className="doctor-charts">
//         <div className="chart-card">
//           <h4>New Patients (Monthly)</h4>
//           <Bar data={barData} />
//         </div>
//         <div className="chart-card">
//           <h4>Records Distribution</h4>
//           <Pie data={pieData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorDashboard;




import React from "react";
import { doctorDashboardData } from "../../utils/doctorDashboardDummyData";
import "./DoctorDashboard.css";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const DoctorDashboard = () => {
  const { stats, todaysAppointments } = doctorDashboardData;
  const navigate = useNavigate();
  const profileCompletion = 65;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } }
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "New Patients",
      data: [12, 19, 8, 15, 22, 10],
      backgroundColor: "rgba(16, 185, 129, 0.7)",
      borderRadius: 6,
    }],
  };

  const pieData = {
    labels: ["Visits", "Prescriptions", "Reports"],
    datasets: [{
      data: [45, 25, 30],
      backgroundColor: ["#3b82f6", "#f59e0b", "#6b7280"],
      borderWidth: 0,
    }],
  };

  return (
    <div className="doctor-dashboard-container">
      {/* 1. PROFILE ALERT */}
      {profileCompletion < 100 && (
        <div className="profile-alert-box">
          <div className="alert-content-left">
            <span className="icon-warning">⚠️</span>
            <div>
              <h4>Complete Your Profile</h4>
              <p>Your profile is {profileCompletion}% completed. Finish it to accept appointments.</p>
            </div>
          </div>
          <div className="alert-content-right">
            <div className="custom-progress-bar">
              <div className="progress-active" style={{ width: `${profileCompletion}%` }} />
            </div>
            <button className="btn-complete" onClick={() => navigate("/doctor/profile")}>
              Complete Now
            </button>
          </div>
        </div>
      )}

      {/* 2. STATS GRID */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="label">Total Patients</span>
          <h3>{stats.totalPatients}</h3>
        </div>
        <div className="stat-card">
          <span className="label">Today's Appointments</span>
          <h3>{stats.todayAppointments}</h3>
        </div>
        <div className="stat-card">
          <span className="label">Pending Approvals</span>
          <h3>{stats.pendingApprovals}</h3>
        </div>
      </div>

      {/* 3. ADAPTIVE APPOINTMENTS TABLE */}
      <div className="appointments-section">
        <h4 className="section-title">Today's Appointments</h4>
        <div className="table-wrapper">
          <table className="doctor-data-table">
            <thead>
              <tr>
                <th>TIME</th>
                <th>PATIENT NAME</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {todaysAppointments.map((item) => (
                <tr key={item.id}>
                  {/* data-label is the secret to show name on mobile */}
                  <td data-label="TIME">{item.time}</td>
                  <td data-label="NAME" className="name-highlight">{item.patient}</td>
                  <td data-label="STATUS">
                    <span className={`badge-status ${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. CHARTS GRID */}
      <div className="dashboard-charts">
        <div className="chart-item">
          <h5>New Patients (Monthly)</h5>
          <div className="canvas-container">
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
        <div className="chart-item">
          <h5>Records Distribution</h5>
          <div className="canvas-container">
            <Pie data={pieData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
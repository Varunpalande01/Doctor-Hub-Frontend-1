// import React from "react";
// import { Routes, Route } from "react-router-dom";

// /* PUBLIC PAGES */
// import Home from "./pages/public/Home";
// import LoginPage from "./pages/auth/LoginPage";
// import SignupPage from "./pages/auth/SignupPage";
// import AboutUs from "./pages/public/About";    // New
// import ContactUs from "./pages/public/Contact"; // New
// import Blogs from "./pages/public/blogs";       // New

// /* ADMIN PAGES */
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import DoctorsManagement from "./pages/admin/DoctorsManagement";
// import Doctors from "./pages/admin/Doctors";
// import DoctorDetails from "./pages/admin/DoctorDetails";
// import Users from "./pages/admin/Users";
// import Hospitals from "./pages/admin/Hospitals";
// import Labs from "./pages/admin/Labs";
// import AdminAppointments from "./pages/admin/Appointments";
// import SystemLogs from "./pages/admin/SystemLogs";
// import PendingVerifications from "./pages/admin/PendingVerifications";
// import AdminProfile from "./pages/admin/AdminProfile";

// /* DOCTOR PAGES */
// import DoctorDashboard from "./pages/doctor/DoctorDashboard";
// import Appointments from "./pages/doctor/Appointments";
// import DoctorAppointmentView from "./pages/doctor/DoctorAppointmentView";
// import Patients from "./pages/doctor/Patients";
// import PatientDetails from "./pages/doctor/PatientDetails";
// import DoctorNotifications from "./pages/doctor/Notifications";
// import Availability from "./pages/doctor/Availability";
// import Profile from "./pages/doctor/Profile";

// /* PATIENT PAGES */
// import PatientDashboard from "./pages/patient/Dashboard";

// /* LAYOUTS */
// import AdminLayout from "./components/layout/AdminLayout";
// import DoctorLayout from "./components/layout/DoctorLayout";
// import PatientLayout from "./components/layout/PatientLayout";

// /* ROUTES PROTECTION */
// import ProtectedRoute from "./routes/ProtectedRoute";

// function App() {
//   return (
//     <Routes>
//       {/* --- PUBLIC ROUTES --- */}
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />
      
//       {/* New Informational Routes */}
//       <Route path="/about" element={<AboutUs />} />
//       <Route path="/contact" element={<ContactUs />} />
//       <Route path="/blogs" element={<Blogs />} />

//       {/* --- ADMIN ROUTES --- */}
//       <Route
//         path="/admin/*"
//         element={
//           <ProtectedRoute role="ADMIN">
//             <AdminLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route path="dashboard" element={<AdminDashboard />} />
//         <Route path="doctors-management" element={<DoctorsManagement />} />
//         <Route path="doctors" element={<Doctors />} />
//         <Route path="doctors/:id" element={<DoctorDetails />} />
//         <Route path="verify-doctors" element={<PendingVerifications />} />
//         <Route path="users" element={<Users />} />
//         <Route path="hospitals" element={<Hospitals />} />
//         <Route path="labs" element={<Labs />} />
//         <Route path="appointments" element={<AdminAppointments />} />
//         <Route path="profile" element={<AdminProfile />} />
//         <Route path="system-logs" element={<SystemLogs />} />
//       </Route>

//       {/* --- DOCTOR ROUTES --- */}
//       <Route
//         path="/doctor/*"
//         element={
//           <ProtectedRoute role="DOCTOR">
//             <DoctorLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route path="dashboard" element={<DoctorDashboard />} />
//         <Route path="appointments" element={<Appointments />} />
//         <Route path="appointments/:id" element={<DoctorAppointmentView />} />
//         <Route path="patients" element={<Patients />} />
//         <Route path="patients/:patientId" element={<PatientDetails />} />
//         <Route path="notifications" element={<DoctorNotifications />} />
//         <Route path="availability" element={<Availability />} />
//         <Route path="profile" element={<Profile />} />
//       </Route>

//       {/* --- PATIENT ROUTES --- */}
//       <Route
//         path="/patient/*"
//         element={
//           <ProtectedRoute role="PATIENT">
//             <PatientLayout />
//           </ProtectedRoute>
//         }
//       >
//         <Route path="dashboard" element={<PatientDashboard />} />
//       </Route>

//       {/* --- FALLBACK --- */}
//       {/* Redirects any unknown URL back to Home */}
//       <Route path="*" element={<Home />} />
//     </Routes>
//   );
// }

// export default App;





import React from "react";
import { Routes, Route } from "react-router-dom";

/* PUBLIC PAGES */
import Home from "./pages/public/Home";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import AboutUs from "./pages/public/About";
import ContactUs from "./pages/public/Contact";
import Blogs from "./pages/public/blogs";
import AllServicesPage from "./pages/public/AllServicesPage";

/* ADMIN PAGES */
import AdminDashboard from "./pages/admin/AdminDashboard";
import DoctorsManagement from "./pages/admin/DoctorsManagement";
import Doctors from "./pages/admin/Doctors";
import DoctorDetails from "./pages/admin/DoctorDetails";
import Users from "./pages/admin/Users";
import Hospitals from "./pages/admin/Hospitals";
import Labs from "./pages/admin/Labs";
import AdminAppointments from "./pages/admin/Appointments";
import SystemLogs from "./pages/admin/SystemLogs";
import PendingVerifications from "./pages/admin/PendingVerifications";
import AdminProfile from "./pages/admin/AdminProfile";

/* DOCTOR PAGES */
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import Appointments from "./pages/doctor/Appointments";
import DoctorAppointmentView from "./pages/doctor/DoctorAppointmentView";
import Patients from "./pages/doctor/Patients";
import PatientDetails from "./pages/doctor/PatientDetails";
import DoctorNotifications from "./pages/doctor/Notifications";
import Availability from "./pages/doctor/Availability";
import Profile from "./pages/doctor/Profile";

/* PATIENT PAGES */
import PatientDashboard from "./pages/patient/Dashboard";

/* LAYOUTS */
import AdminLayout from "./components/layout/AdminLayout";
import DoctorLayout from "./components/layout/DoctorLayout";
import PatientLayout from "./components/layout/PatientLayout";

function App() {
  return (
    <Routes>
      {/* --- PUBLIC ROUTES --- */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/all-services" element={<AllServicesPage />} />

      {/* --- ADMIN ROUTES --- */}
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="doctors-management" element={<DoctorsManagement />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:id" element={<DoctorDetails />} />
        <Route path="verify-doctors" element={<PendingVerifications />} />
        <Route path="users" element={<Users />} />
        <Route path="hospitals" element={<Hospitals />} />
        <Route path="labs" element={<Labs />} />
        <Route path="appointments" element={<AdminAppointments />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="system-logs" element={<SystemLogs />} />
      </Route>

      {/* --- DOCTOR ROUTES --- */}
      <Route path="/doctor/*" element={<DoctorLayout />}>
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="appointments/:id" element={<DoctorAppointmentView />} />
        <Route path="patients" element={<Patients />} />
        <Route path="patients/:patientId" element={<PatientDetails />} />
        <Route path="notifications" element={<DoctorNotifications />} />
        <Route path="availability" element={<Availability />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* --- PATIENT ROUTES --- */}
      <Route path="/patient/*" element={<PatientLayout />}>
        <Route path="dashboard" element={<PatientDashboard />} />
      </Route>

      {/* --- FALLBACK --- */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;

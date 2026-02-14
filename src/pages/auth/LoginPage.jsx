

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import MessageCard from "../../components/common/MessageCard";
// import "./Login.css";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [identifier, setIdentifier] = useState(""); // username or email
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!identifier) {
//       setMessage({ text: "Please enter username/email", type: "error" });
//       return;
//     }
//     if (!password) {
//       setMessage({ text: "Password cannot be empty", type: "error" });
//       return;
//     }

//     setLoading(true);
//     setMessage(null);

//     try {
//       const response = await fetch("http://localhost:8080/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ identifier, password }),
//       });

//       if (!response.ok) {
//         const errorMsg = await response.text();
//         setMessage({ text: errorMsg, type: "error" });
//         setLoading(false);
//         return;
//       }

//       const user = await response.json();
//       localStorage.setItem("currentUser", JSON.stringify(user));

//       setMessage({ text: `Welcome back, ${user.fullName || user.username || user.email}!`, type: "success" });

//       setTimeout(() => {
//         setLoading(false);
//         if (user.role === "ADMIN") navigate("/admin/dashboard");
//         else if (user.role === "DOCTOR") navigate("/doctor/dashboard");
//         else navigate("/patient/dashboard");
//       }, 1000);

//     } catch {
//       setMessage({ text: "Server not reachable. Try later.", type: "error" });
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-page">
//         <div className="login-left">
//           <img src="src/assets/images/userlogin.png" alt="Login" className="auth-img" />
//         </div>
//         <div className="login-right">
//           <form className="login-card" onSubmit={handleLogin}>
//             <h2>Login</h2>

//             {message && <MessageCard message={message.text} type={message.type} onClose={() => setMessage(null)} />}

//             <div className="input-field">
//               <input
//                 type="text"
//                 placeholder="Username or Email"
//                 value={identifier}
//                 onChange={(e) => setIdentifier(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="input-field">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button type="submit" className="login-btn" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <p className="forgot-pass" onClick={() => alert("Send OTP flow")}>Forgot Password?</p>
//             <p className="signup-text">
//               Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// import userlogin from "../../assets/images/userlogin.png";

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [popupMessage, setPopupMessage] = useState("");
//   const [popupType, setPopupType] = useState("");
//   const [loading, setLoading] = useState(false);

//   const showPopup = (message, type) => {
//     setPopupMessage(message);
//     setPopupType(type);

//     setTimeout(() => {
//       setPopupMessage("");
//     }, 2300);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Get dummy users from localStorage or create default ones
//     let users = JSON.parse(localStorage.getItem("users"));
//     if (!users) {
//       users = [
//         { role: "ADMIN", email: "admin@demo.com", password: "admin123", fullName: "Admin User" },
//         { role: "DOCTOR", email: "doctor@demo.com", password: "doctor123", fullName: "Dr. Demo" },
//         { role: "PATIENT", email: "patient@demo.com", password: "patient123", fullName: "Patient Demo" },
//       ];
//       localStorage.setItem("users", JSON.stringify(users));
//     }

//     const validUser = users.find(
//       (u) => u.email === email && u.password === password
//     );

//     if (!validUser) {
//       showPopup("Invalid email or password", "error");
//       setLoading(false);
//       return;
//     }

//     localStorage.setItem("currentUser", JSON.stringify(validUser));

//     showPopup("Login successful! Redirecting...", "success");

//     setTimeout(() => {
//       setLoading(false);
//       if (validUser.role === "ADMIN") navigate("/admin/dashboard");
//       else if (validUser.role === "DOCTOR") navigate("/doctor/dashboard");
//       else navigate("/patient/dashboard");
//     }, 800);
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-page">

//         {/* LEFT IMAGE */}
//         <div className="login-left">
//           <img src={userlogin} alt="Login" />
//         </div>

//         {/* RIGHT FORM */}
//         <div className="login-right">

//           {/* POPUP MESSAGE */}
//           {popupMessage && (
//             <div className={`popup-card ${popupType}`}>
//               {popupMessage}
//             </div>
//           )}

//           <form onSubmit={handleLogin} className="login-card">
//             <h2>Login</h2>

//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <button type="submit" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>

//             <p className="signup-text">
//               Don't have an account?{" "}
//               <span onClick={() => navigate("/signup")}>Signup</span>
//             </p>
//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Combined CSS for both login and signup
import userlogin from "../../assets/images/userlogin.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const [loading, setLoading] = useState(false);

  const showPopup = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setTimeout(() => setPopupMessage(""), 2300);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      users = [
        { role: "ADMIN", email: "admin@demo.com", password: "admin123", fullName: "Admin User" },
        { role: "DOCTOR", email: "doctor@demo.com", password: "doctor123", fullName: "Dr. Demo" },
        { role: "PATIENT", email: "patient@demo.com", password: "patient123", fullName: "Patient Demo" },
      ];
      localStorage.setItem("users", JSON.stringify(users));
    }

    const validUser = users.find(u => u.email === email && u.password === password);

    if (!validUser) {
      showPopup("Invalid email or password", "error");
      setLoading(false);
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(validUser));
    showPopup("Login successful! Redirecting...", "success");

    setTimeout(() => {
      setLoading(false);
      if (validUser.role === "ADMIN") navigate("/admin/dashboard");
      else if (validUser.role === "DOCTOR") navigate("/doctor/dashboard");
      else navigate("/patient/dashboard");
    }, 800);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-page">

        {/* LEFT IMAGE */}
        <div className="auth-left">
          <img src={userlogin} alt="Login" />
        </div>

        {/* RIGHT FORM */}
        <div className="auth-right">

          {/* POPUP MESSAGE */}
          {popupMessage && <div className={`popup-card ${popupType}`}>{popupMessage}</div>}

          <form onSubmit={handleLogin} className="auth-card">
            <h2>Login</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="switch-auth">
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")}>Signup</span>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;

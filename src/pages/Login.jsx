// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import API from "../api";
// // // // // // // import { toast } from "react-toastify";
// // // // // // // import "./Login.css";

// // // // // // // const Login = () => {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const [form, setForm] = useState({
// // // // // // //     email: "ybt878@gmail.com",
// // // // // // //     password: "ybt@87808",
// // // // // // //   });

// // // // // // //   const [showForm, setShowForm] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     // Form shows after the man's sequence is done
// // // // // // //     const timer = setTimeout(() => setShowForm(true), 3500);
// // // // // // //     return () => clearTimeout(timer);
// // // // // // //   }, []);

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       const res = await API.post("/auth/login", form);
// // // // // // //       localStorage.setItem("token", res.data.token);
// // // // // // //       localStorage.setItem("user", JSON.stringify(res.data.user));
// // // // // // //       toast.success("Login successful!");
// // // // // // //       navigate("/");
// // // // // // //     } catch (err) {
// // // // // // //       toast.error(err.response?.data?.msg || "Login failed");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="scene">
// // // // // // //       {/* Cartoon Man PNG */}
// // // // // // //       <div className="man">
// // // // // // //         <img src="/man.png" alt="Cartoon Man" className="man-img" />
// // // // // // //         <div className="bag"></div>
// // // // // // //       </div>

// // // // // // //       {/* Login Form coming out of bag */}
// // // // // // //       {showForm && (
// // // // // // //         <form className="login-form" onSubmit={handleSubmit}>
// // // // // // //           <h2 className="login-title">Login</h2>
// // // // // // //           <input
// // // // // // //             type="email"
// // // // // // //             placeholder="Email"
// // // // // // //             value={form.email}
// // // // // // //             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // // // // // //             className="login-input"
// // // // // // //             required
// // // // // // //           />
// // // // // // //           <input
// // // // // // //             type="password"
// // // // // // //             placeholder="Password"
// // // // // // //             value={form.password}
// // // // // // //             onChange={(e) => setForm({ ...form, password: e.target.value })}
// // // // // // //             className="login-input"
// // // // // // //             required
// // // // // // //           />
// // // // // // //           <button className="login-button" type="submit">
// // // // // // //             Login
// // // // // // //           </button>
// // // // // // //           <p className="login-footer">
// // // // // // //             Don’t have an account?{" "}
// // // // // // //             <span
// // // // // // //               onClick={() => navigate("/register")}
// // // // // // //               className="register-link"
// // // // // // //             >
// // // // // // //               Register
// // // // // // //             </span>
// // // // // // //           </p>
// // // // // // //         </form>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Login;

// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import API from "../api";
// // // // // // import { toast } from "react-toastify";
// // // // // // import "./Login.css";

// // // // // // const Login = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const [form, setForm] = useState({
// // // // // //     email: "ybt878@gmail.com",
// // // // // //     password: "ybt@87808",
// // // // // //   });

// // // // // //   const [showForm, setShowForm] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     // Show form after animation
// // // // // //     const timer = setTimeout(() => setShowForm(true), 3500);
// // // // // //     return () => clearTimeout(timer);
// // // // // //   }, []);

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();

// // // // // //     // ✅ Check for frontend-only admin login
// // // // // //     if (form.email === "admin@campus.com" && form.password === "12345678") {
// // // // // //       const adminUser = {
// // // // // //         name: "Admin",
// // // // // //         email: "admin@campus.com",
// // // // // //         isAdmin: true,
// // // // // //       };
// // // // // //       localStorage.setItem("user", JSON.stringify(adminUser));
// // // // // //       localStorage.setItem("token", "mock-admin-token"); // dummy
// // // // // //       toast.success("Admin login successful!");
// // // // // //       navigate("/admin");
// // // // // //       return;
// // // // // //     }

// // // // // //     // ✅ Normal student login via backend
// // // // // //     try {
// // // // // //       const res = await API.post("/auth/login", form);
// // // // // //       localStorage.setItem("token", res.data.token);
// // // // // //       // Ensure student login has no isAdmin flag
// // // // // //       const studentUser = { ...res.data.user, isAdmin: false };
// // // // // //       localStorage.setItem("user", JSON.stringify(studentUser));
// // // // // //       toast.success("Login successful!");
// // // // // //       navigate("/");
// // // // // //     } catch (err) {
// // // // // //       toast.error(err.response?.data?.msg || "Login failed");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="scene">
// // // // // //       {/* Cartoon Man PNG */}
// // // // // //       <div className="man">
// // // // // //         <img src="/man.png" alt="Cartoon Man" className="man-img" />
// // // // // //         <div className="bag"></div>
// // // // // //       </div>

// // // // // //       {/* Login Form */}
// // // // // //       {showForm && (
// // // // // //         <form className="login-form" onSubmit={handleSubmit}>
// // // // // //           <h2 className="login-title">Login</h2>
// // // // // //           <input
// // // // // //             type="email"
// // // // // //             placeholder="Email"
// // // // // //             value={form.email}
// // // // // //             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // // // // //             className="login-input"
// // // // // //             required
// // // // // //           />
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             placeholder="Password"
// // // // // //             value={form.password}
// // // // // //             onChange={(e) => setForm({ ...form, password: e.target.value })}
// // // // // //             className="login-input"
// // // // // //             required
// // // // // //           />
// // // // // //           <button className="login-button" type="submit">
// // // // // //             Login
// // // // // //           </button>
// // // // // //           <p className="login-footer">
// // // // // //             Don’t have an account?{" "}
// // // // // //             <span
// // // // // //               onClick={() => navigate("/register")}
// // // // // //               className="register-link"
// // // // // //             >
// // // // // //               Register
// // // // // //             </span>
// // // // // //           </p>
// // // // // //         </form>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Login;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import API from "../api";
// // // // // import { toast } from "react-toastify";
// // // // // import { useAuth } from "../context/AuthContext";
// // // // // import "./Login.css";

// // // // // const Login = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const { login } = useAuth();

// // // // //   const [form, setForm] = useState({
// // // // //     email: "ybt878@gmail.com",
// // // // //     password: "ybt@87808",
// // // // //   });

// // // // //   const [showForm, setShowForm] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const timer = setTimeout(() => setShowForm(true), 3500);
// // // // //     return () => clearTimeout(timer);
// // // // //   }, []);

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     // Admin login check
// // // // //     if (form.email === "admin@campus.com" && form.password === "12345678") {
// // // // //       const adminUser = {
// // // // //         name: "Admin",
// // // // //         email: "admin@campus.com",
// // // // //         isAdmin: true,
// // // // //       };
// // // // //       login(adminUser, "mock-admin-token");
// // // // //       toast.success("Admin login successful!");
// // // // //       navigate("/admin");
// // // // //       return;
// // // // //     }

// // // // //     // Student login
// // // // //     try {
// // // // //       const res = await API.post("/auth/login", form);
// // // // //       const studentUser = { ...res.data.user, isAdmin: false };
// // // // //       login(studentUser, res.data.token);
// // // // //       toast.success("Login successful!");
// // // // //       navigate("/");
// // // // //     } catch (err) {
// // // // //       toast.error(err.response?.data?.msg || "Login failed");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="scene">
// // // // //       {/* Cartoon Man PNG */}
// // // // //       <div className="man">
// // // // //         <img src="/man.png" alt="Cartoon Man" className="man-img" />
// // // // //         <div className="bag"></div>
// // // // //       </div>

// // // // //       {/* Login Form */}
// // // // //       {showForm && (
// // // // //         <form className="login-form" onSubmit={handleSubmit}>
// // // // //           <h2 className="login-title">Login</h2>
// // // // //           <input
// // // // //             type="email"
// // // // //             placeholder="Email"
// // // // //             value={form.email}
// // // // //             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // // // //             className="login-input"
// // // // //             required
// // // // //           />
// // // // //           <input
// // // // //             type="password"
// // // // //             placeholder="Password"
// // // // //             value={form.password}
// // // // //             onChange={(e) => setForm({ ...form, password: e.target.value })}
// // // // //             className="login-input"
// // // // //             required
// // // // //           />
// // // // //           <button className="login-button" type="submit">
// // // // //             Login
// // // // //           </button>
// // // // //           <p className="login-footer">
// // // // //             Don’t have an account?{" "}
// // // // //             <span
// // // // //               onClick={() => navigate("/register")}
// // // // //               className="register-link"
// // // // //             >
// // // // //               Register
// // // // //             </span>
// // // // //           </p>
// // // // //         </form>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Login;

// // // // import React, { useState, useEffect } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import API from "../api";
// // // // import { toast } from "react-toastify";
// // // // import { useAuth } from "../context/AuthContext"; // ✅ import login function
// // // // import "./Login.css";

// // // // const Login = () => {
// // // //   const navigate = useNavigate();
// // // //   const { login } = useAuth(); // ✅ get login function from AuthContext
// // // //   const [form, setForm] = useState({
// // // //     email: "ybt878@gmail.com",
// // // //     password: "ybt@87808",
// // // //   });

// // // //   const [showForm, setShowForm] = useState(false);

// // // //   useEffect(() => {
// // // //     // Show form after animation
// // // //     const timer = setTimeout(() => setShowForm(true), 3500);
// // // //     return () => clearTimeout(timer);
// // // //   }, []);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     // ✅ Frontend-only admin login
// // // //     if (form.email === "admin@campus.com" && form.password === "12345678") {
// // // //       const adminUser = {
// // // //         name: "Admin",
// // // //         email: "admin@campus.com",
// // // //         isAdmin: true,
// // // //       };
// // // //       login({ ...adminUser, token: "mock-admin-token" }); // ✅ use login()
// // // //       toast.success("Admin login successful!");
// // // //       navigate("/admin");
// // // //       return;
// // // //     }

// // // //     // ✅ Normal student login via backend
// // // //     try {
// // // //       const res = await API.post("/auth/login", form);

// // // //       // Store token and student info
// // // //       const studentUser = { ...res.data.user, isAdmin: false };
// // // //       login({ ...studentUser, token: res.data.token }); // ✅ use login()
// // // //       toast.success("Login successful!");
// // // //       navigate("/");
// // // //     } catch (err) {
// // // //       toast.error(err.response?.data?.msg || "Login failed");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="scene">
// // // //       {/* Cartoon Man PNG */}
// // // //       <div className="man">
// // // //         <img src="/man.png" alt="Cartoon Man" className="man-img" />
// // // //         <div className="bag"></div>
// // // //       </div>

// // // //       {/* Login Form */}
// // // //       {showForm && (
// // // //         <form className="login-form" onSubmit={handleSubmit}>
// // // //           <h2 className="login-title">Login</h2>
// // // //           <input
// // // //             type="email"
// // // //             placeholder="Email"
// // // //             value={form.email}
// // // //             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // // //             className="login-input"
// // // //             required
// // // //           />
// // // //           <input
// // // //             type="password"
// // // //             placeholder="Password"
// // // //             value={form.password}
// // // //             onChange={(e) => setForm({ ...form, password: e.target.value })}
// // // //             className="login-input"
// // // //             required
// // // //           />
// // // //           <button className="login-button" type="submit">
// // // //             Login
// // // //           </button>
// // // //           <p className="login-footer">
// // // //             Don’t have an account?{" "}
// // // //             <span
// // // //               onClick={() => navigate("/register")}
// // // //               className="register-link"
// // // //             >
// // // //               Register
// // // //             </span>
// // // //           </p>
// // // //         </form>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;

// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import API from "../api";
// // // import { toast } from "react-toastify";
// // // import { useAuth } from "../context/AuthContext"; // ✅ import login
// // // import "./Login.css";

// // // const Login = () => {
// // //   const navigate = useNavigate();
// // //   const { login } = useAuth(); // ✅ get login function
// // //   const [form, setForm] = useState({
// // //     email: "ybt878@gmail.com",
// // //     password: "ybt@87808",
// // //   });

// // //   const [showForm, setShowForm] = useState(false);

// // //   useEffect(() => {
// // //     // Show form after animation
// // //     const timer = setTimeout(() => setShowForm(true), 3500);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     // ✅ Frontend-only admin login
// // //     if (form.email === "admin@campus.com" && form.password === "12345678") {
// // //       const adminUser = {
// // //         name: "Admin",
// // //         email: "admin@campus.com",
// // //         isAdmin: true,
// // //         token: "mock-admin-token", // include token here
// // //       };
// // //       login(adminUser); // ✅ use login() properly
// // //       toast.success("Admin login successful!");
// // //       navigate("/admin"); // redirect to admin dashboard
// // //       return;
// // //     }

// // //     // ✅ Normal student login via backend
// // //     try {
// // //       const res = await API.post("/auth/login", form);
// // //       const studentUser = {
// // //         ...res.data.user,
// // //         isAdmin: false,
// // //         token: res.data.token,
// // //       };
// // //       login(studentUser); // ✅ use login()
// // //       toast.success("Login successful!");
// // //       navigate("/"); // redirect to home
// // //     } catch (err) {
// // //       toast.error(err.response?.data?.msg || "Login failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="scene">
// // //       {/* Cartoon Man PNG */}
// // //       <div className="man">
// // //         <img src="/man.png" alt="Cartoon Man" className="man-img" />
// // //         <div className="bag"></div>
// // //       </div>

// // //       {/* Login Form */}
// // //       {showForm && (
// // //         <form className="login-form" onSubmit={handleSubmit}>
// // //           <h2 className="login-title">Login</h2>
// // //           <input
// // //             type="email"
// // //             placeholder="Email"
// // //             value={form.email}
// // //             onChange={(e) => setForm({ ...form, email: e.target.value })}
// // //             className="login-input"
// // //             required
// // //           />
// // //           <input
// // //             type="password"
// // //             placeholder="Password"
// // //             value={form.password}
// // //             onChange={(e) => setForm({ ...form, password: e.target.value })}
// // //             className="login-input"
// // //             required
// // //           />
// // //           <button className="login-button" type="submit">
// // //             Login
// // //           </button>
// // //           <p className="login-footer">
// // //             Don’t have an account?{" "}
// // //             <span
// // //               onClick={() => navigate("/register")}
// // //               className="register-link"
// // //             >
// // //               Register
// // //             </span>
// // //           </p>
// // //         </form>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Login;
// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import API from "../api";
// // import { toast } from "react-toastify";
// // import { useAuth } from "../context/AuthContext"; // ✅ import login
// // import "./Login.css";

// // const Login = () => {
// //   const navigate = useNavigate();
// //   const { login } = useAuth(); // ✅ get login function
// //   const [form, setForm] = useState({
// //     email: "ybt878@gmail.com",
// //     password: "ybt@87808",
// //   });

// //   const [showForm, setShowForm] = useState(false);

// //   useEffect(() => {
// //     // Show form after animation
// //     const timer = setTimeout(() => setShowForm(true), 3500);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // ✅ Frontend-only admin login
// //     if (form.email === "admin@campus.com" && form.password === "12345678") {
// //       const adminUser = {
// //         name: "Admin",
// //         email: "admin@campus.com",
// //         isAdmin: true,
// //         token: "mock-admin-token", // include token here
// //       };
// //       login(adminUser); // ✅ use login() properly
// //       toast.success("Admin login successful!");
// //       navigate("/admin"); // redirect to admin dashboard
// //       return;
// //     }

// //     // ✅ Normal student login via backend
// //     try {
// //       const res = await API.post("/auth/login", form);
// //       const studentUser = {
// //         ...res.data.user,
// //         isAdmin: false,
// //         token: res.data.token,
// //       };
// //       login(studentUser); // ✅ use login()
// //       toast.success("Login successful!");
// //       navigate("/"); // redirect to home
// //     } catch (err) {
// //       toast.error(err.response?.data?.msg || "Login failed");
// //     }
// //   };

// //   return (
// //     <div className="scene">
// //       {/* Cartoon Man PNG */}
// //       <div className="man">
// //         <img src="/man.png" alt="Cartoon Man" className="man-img" />
// //         <div className="bag"></div>
// //       </div>

// //       {/* Login Form */}
// //       {showForm && (
// //         <form className="login-form" onSubmit={handleSubmit}>
// //           <h2 className="login-title">Login</h2>
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={form.email}
// //             onChange={(e) => setForm({ ...form, email: e.target.value })}
// //             className="login-input"
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={form.password}
// //             onChange={(e) => setForm({ ...form, password: e.target.value })}
// //             className="login-input"
// //             required
// //           />
// //           <button className="login-button" type="submit">
// //             Login
// //           </button>
// //           <p className="login-footer">
// //             Don’t have an account?{" "}
// //             <span
// //               onClick={() => navigate("/register")}
// //               className="register-link"
// //             >
// //               Register
// //             </span>
// //           </p>
// //         </form>
// //       )}
// //     </div>
// //   );
// // };

// // export default Login;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";
// import "./Login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth(); // ✅ always use login()

//   const [form, setForm] = useState({
//     email: "ybt878@gmail.com",
//     password: "ybt@87808",
//   });

//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowForm(true), 3500);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ Frontend admin login
//     if (form.email === "admin@campus.com" && form.password === "12345678") {
//       const adminUser = { name: "Admin", email: "admin@campus.com", isAdmin: true };
//       login({ ...adminUser, token: "mock-admin-token" });
//       toast.success("Admin login successful!");
//       navigate("/admin");
//       return;
//     }

//     // ✅ Student login via backend
//     try {
//       const res = await API.post("/auth/login", form);
//       const studentUser = { ...res.data.user, isAdmin: false };
//       login({ ...studentUser, token: res.data.token });
//       toast.success("Login successful!");
//       navigate("/");
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Login failed");
//     }
//   };

//   return (
//     <div className="scene">
//       <div className="man">
//         <img src="/man.png" alt="Cartoon Man" className="man-img" />
//         <div className="bag"></div>
//       </div>

//       {showForm && (
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h2 className="login-title">Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="login-input"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             className="login-input"
//             required
//           />
//           <button className="login-button" type="submit">
//             Login
//           </button>
//           <p className="login-footer">
//             Don’t have an account?{" "}
//             <span onClick={() => navigate("/register")} className="register-link">
//               Register
//             </span>
//           </p>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });
    
  const [form, setForm] = useState({
  email: "ybt878@gmail.com",
  password: "ybt@87808",
});

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);
      const studentUser = { ...res.data.user, isAdmin: false }; // just in case
      login(studentUser, res.data.token);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="scene">
      <div className="man">
        <img src="/man.png" alt="Cartoon Man" className="man-img" />
        <div className="bag"></div>
      </div>

      {showForm && (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="login-input"
            required
          />
          <button className="login-button" type="submit">
            Login
          </button>
          <p className="login-footer">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")} className="register-link">
              Register
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;

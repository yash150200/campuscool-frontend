
// // import React, { useState, useEffect } from "react";

// // const AdminPage = () => {
// //   const [enteredPassword, setEnteredPassword] = useState("");
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [logs, setLogs] = useState([]);

// //   const correctPassword = "yash";
// //   const API_BASE = "http://localhost:5000"; // ✅ change if backend runs elsewhere

// //   // Fetch logs from backend
// //   const fetchLogs = async () => {
// //     try {
// //       const res = await fetch(`${API_BASE}/api/admin/logs`);
// //       const data = await res.json();
// //       setLogs(data);
// //     } catch (err) {
// //       console.error("Failed to fetch logs:", err);
// //     }
// //   };

// //   // Delete a single log
// //   const deleteLog = async (id) => {
// //     try {
// //       await fetch(`${API_BASE}/api/admin/logs/${id}`, { method: "DELETE" });
// //       fetchLogs(); // refresh
// //     } catch (err) {
// //       console.error("Failed to delete log:", err);
// //     }
// //   };

// //   // Delete all logs
// //   const clearLogs = async () => {
// //     try {
// //       await fetch(`${API_BASE}/api/admin/logs`, { method: "DELETE" });
// //       fetchLogs(); // refresh
// //     } catch (err) {
// //       console.error("Failed to clear logs:", err);
// //     }
// //   };

// //   // Refresh logs every 5s when authenticated
// //   useEffect(() => {
// //     let interval;
// //     if (isAuthenticated) {
// //       fetchLogs();
// //       interval = setInterval(fetchLogs, 5000);
// //     }
// //     return () => clearInterval(interval);
// //   }, [isAuthenticated]);

// //   const handleLogin = () => {
// //     if (enteredPassword === correctPassword) {
// //       setIsAuthenticated(true);
// //     } else {
// //       alert("Incorrect password!");
// //     }
// //   };

// //   if (!isAuthenticated) {
// //     return (
// //       <div className="flex items-center justify-center h-screen bg-gray-100">
// //         <div className="bg-white shadow-lg rounded-lg p-8 w-96">
// //           <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
// //             🔑 Admin Access
// //           </h2>
// //           <input
// //             type="password"
// //             value={enteredPassword}
// //             onChange={(e) => setEnteredPassword(e.target.value)}
// //             placeholder="Enter Admin Password"
// //             className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           <button
// //             onClick={handleLogin}
// //             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
// //           >
// //             Login
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="p-6 bg-gray-50 min-h-screen">
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-3xl font-bold text-gray-800">📊 Admin Dashboard</h1>
// //         <button
// //           onClick={clearLogs}
// //           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
// //         >
// //           🗑️ Clear All Logs
// //         </button>
// //       </div>
// //       <p className="text-gray-600 mb-6">Monitoring all activities in CampusCool</p>

// //       <div className="bg-white shadow rounded-lg p-4 h-[70vh] overflow-y-auto border">
// //         {logs.length === 0 ? (
// //           <p className="text-gray-500 text-center">No activity logs yet.</p>
// //         ) : (
// //           <ul className="space-y-3">
// //             {logs.map((log) => (
// //               <li
// //                 key={log._id}
// //                 className="p-3 bg-gray-100 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center"
// //               >
// //                 <div>
// //                   <p className="text-gray-800">{log.message}</p>
// //                   <p className="text-xs text-gray-500">{log.time}</p>
// //                 </div>
// //                 <button
// //                   onClick={() => deleteLog(log._id)}
// //                   className="ml-4 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
// //                 >
// //                   Delete
// //                 </button>
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminPage;
// import React, { useState, useEffect } from "react";

// const AdminPage = () => {
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [logs, setLogs] = useState([]);

//   const correctPassword = "yash";
//   const API_BASE = "http://localhost:5000"; // ✅ change if backend runs elsewhere

//   // Fetch logs
//   const fetchLogs = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/api/admin/logs`);
//       const data = await res.json();
//       setLogs(data);
//     } catch (err) {
//       console.error("Failed to fetch logs:", err);
//     }
//   };

//   // Delete single log
//   const deleteLog = async (id) => {
//     try {
//       await fetch(`${API_BASE}/api/admin/logs/${id}`, { method: "DELETE" });
//       fetchLogs();
//     } catch (err) {
//       console.error("Failed to delete log:", err);
//     }
//   };

//   // Clear all logs
//   const clearLogs = async () => {
//     try {
//       await fetch(`${API_BASE}/api/admin/logs`, { method: "DELETE" });
//       fetchLogs();
//     } catch (err) {
//       console.error("Failed to clear logs:", err);
//     }
//   };

//   // Auto-refresh logs
//   useEffect(() => {
//     let interval;
//     if (isAuthenticated) {
//       fetchLogs();
//       interval = setInterval(fetchLogs, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isAuthenticated]);

//   const handleLogin = () => {
//     if (enteredPassword === correctPassword) {
//       setIsAuthenticated(true);
//     } else {
//       alert("Incorrect password!");
//     }
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
//         <div className="bg-white shadow-2xl rounded-xl p-10 w-96 border border-gray-200">
//           <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//             🔑 Admin Access
//           </h2>
//           <input
//             type="password"
//             value={enteredPassword}
//             onChange={(e) => setEnteredPassword(e.target.value)}
//             placeholder="Enter Admin Password"
//             className="w-full px-4 py-2 border rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleLogin}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-extrabold text-gray-800">
//           📊 Admin Dashboard
//         </h1>
//         <button
//           onClick={clearLogs}
//           className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition flex items-center gap-2 shadow"
//         >
//           🗑️ Clear All Logs
//         </button>
//       </div>

//       <p className="text-gray-600 mb-6 italic">
//         Monitoring all activities in <span className="font-semibold">CampusCool</span>
//       </p>

//       <div className="bg-white shadow-xl rounded-lg p-6 h-[70vh] overflow-y-auto border border-gray-200">
//         {logs.length === 0 ? (
//           <p className="text-gray-500 text-center">No activity logs yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {logs.map((log) => (
//               <li
//                 key={log._id}
//                 className="p-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md border border-gray-300 flex justify-between items-center hover:shadow-lg transition"
//               >
//                 <div>
//                   <p className="text-gray-800 font-medium">{log.message}</p>
//                   <p className="text-xs text-gray-500 mt-1">{log.time}</p>
//                 </div>
//                 <button
//                   onClick={() => deleteLog(log._id)}
//                   className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
// import React, { useState, useEffect } from "react";

// const AdminPage = () => {
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [logs, setLogs] = useState([]);
//   const [locks, setLocks] = useState({}); // Track lock status of pages

//   const correctPassword = "yash";
//   const API_BASE = "http://localhost:5000"; // ✅ change if backend runs elsewhere

//   // Fetch logs
//   const fetchLogs = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/api/admin/logs`);
//       const data = await res.json();
//       setLogs(data);
//     } catch (err) {
//       console.error("Failed to fetch logs:", err);
//     }
//   };

//   // Fetch lock status
//   const fetchLocks = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/api/admin/locks`);
//       const data = await res.json();
//       setLocks(data);
//     } catch (err) {
//       console.error("Failed to fetch locks:", err);
//     }
//   };

//   // Toggle lock/unlock for a page
//   const toggleLock = async (page) => {
//     try {
//       await fetch(`${API_BASE}/api/admin/locks/${page}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ locked: !locks[page] }),
//       });
//       fetchLocks(); // refresh after update
//     } catch (err) {
//       console.error("Failed to toggle lock:", err);
//     }
//   };

//   // Delete single log
//   const deleteLog = async (id) => {
//     try {
//       await fetch(`${API_BASE}/api/admin/logs/${id}`, { method: "DELETE" });
//       fetchLogs();
//     } catch (err) {
//       console.error("Failed to delete log:", err);
//     }
//   };

//   // Clear all logs
//   const clearLogs = async () => {
//     try {
//       await fetch(`${API_BASE}/api/admin/logs`, { method: "DELETE" });
//       fetchLogs();
//     } catch (err) {
//       console.error("Failed to clear logs:", err);
//     }
//   };

//   // Auto-refresh logs and locks
//   useEffect(() => {
//     let interval;
//     if (isAuthenticated) {
//       fetchLogs();
//       fetchLocks();
//       interval = setInterval(() => {
//         fetchLogs();
//         fetchLocks();
//       }, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isAuthenticated]);

//   const handleLogin = () => {
//     if (enteredPassword === correctPassword) {
//       setIsAuthenticated(true);
//     } else {
//       alert("Incorrect password!");
//     }
//   };

//   // Login Screen
//   if (!isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
//         <div className="bg-white shadow-2xl rounded-xl p-10 w-96 border border-gray-200">
//           <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//             🔑 Admin Access
//           </h2>
//           <input
//             type="password"
//             value={enteredPassword}
//             onChange={(e) => setEnteredPassword(e.target.value)}
//             placeholder="Enter Admin Password"
//             className="w-full px-4 py-2 border rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleLogin}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Dashboard
//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-extrabold text-gray-800">
//           📊 Admin Dashboard
//         </h1>
//         <button
//           onClick={clearLogs}
//           className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition flex items-center gap-2 shadow"
//         >
//           🗑️ Clear All Logs
//         </button>
//       </div>

//       <p className="text-gray-600 mb-6 italic">
//         Monitoring all activities in <span className="font-semibold">CampusCool</span>
//       </p>

//       {/* 🔒 Lock/Unlock Pages Section */}
//       <div className="bg-white shadow-xl rounded-lg p-6 mb-8 border border-gray-200">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">🔒 Page Access Control</h2>
//         <ul className="space-y-4">
//           {["feed", "events", "materials", "profile", "attendance"].map((page) => (
//             <li
//               key={page}
//               className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow border"
//             >
//               <span className="capitalize font-medium text-gray-800">{page}</span>
//               <button
//                 onClick={() => toggleLock(page)}
//                 className={`px-4 py-2 rounded-lg font-semibold shadow transition ${
//                   locks[page]
//                     ? "bg-green-600 text-white hover:bg-green-700"
//                     : "bg-red-600 text-white hover:bg-red-700"
//                 }`}
//               >
//                 {locks[page] ? "Unlock" : "Lock"}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Logs Section */}
//       <div className="bg-white shadow-xl rounded-lg p-6 h-[50vh] overflow-y-auto border border-gray-200">
//         {logs.length === 0 ? (
//           <p className="text-gray-500 text-center">No activity logs yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {logs.map((log) => (
//               <li
//                 key={log._id}
//                 className="p-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md border border-gray-300 flex justify-between items-center hover:shadow-lg transition"
//               >
//                 <div>
//                   <p className="text-gray-800 font-medium">{log.message}</p>
//                   <p className="text-xs text-gray-500 mt-1">{log.time}</p>
//                 </div>
//                 <button
//                   onClick={() => deleteLog(log._id)}
//                   className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
// import React, { useState, useEffect } from "react";

// const AdminPage = () => {
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [logs, setLogs] = useState([]);
//   const [locks, setLocks] = useState({});
//   const [error, setError] = useState("");

//   const correctPassword = "yash"; // UI login password
//   const ADMIN_PASS_HEADER = "yash"; // 🔑 password sent in x-admin-pass header
//   const API_BASE = "http://localhost:5000"; // ✅ change if backend runs elsewhere

//   // Fetch logs
//   const fetchLogs = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/api/admin/logs`);
//       const data = await res.json();
//       setLogs(data);
//     } catch (err) {
//       console.error("Failed to fetch logs:", err);
//     }
//   };

//   // Fetch lock status
//   const fetchLocks = async () => {
//     try {
//       const res = await fetch(`${API_BASE}/api/locks`);
//       const data = await res.json();
//       setLocks(data);
//     } catch (err) {
//       console.error("Failed to fetch locks:", err);
//     }
//   };

//   // Toggle lock/unlock for a page
//   const toggleLock = async (page) => {
//     try {
//       await fetch(`${API_BASE}/api/locks/${page}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-admin-pass": ADMIN_PASS_HEADER, // 🔑 backend validation
//         },
//         body: JSON.stringify({ locked: !locks[page] }),
//       });
//       fetchLocks();
//     } catch (err) {
//       console.error("Failed to toggle lock:", err);
//       setError("Failed to update lock");
//     }
//   };

//   // Delete single log
//   const deleteLog = async (id) => {
//     try {
//       await fetch(`${API_BASE}/api/admin/logs/${id}`, { method: "DELETE" });
//       fetchLogs();
//     } catch (err) {
//       console.error("Failed to delete log:", err);
//     }
//   };

//   // Clear all logs
//   const clearLogs = async () => {
//     try {
//       await fetch(`${API_BASE}/api/admin/logs`, { method: "DELETE" });
//       fetchLogs();
//     } catch (err) {
//       console.error("Failed to clear logs:", err);
//     }
//   };

//   // Auto-refresh logs + locks
//   useEffect(() => {
//     let interval;
//     if (isAuthenticated) {
//       fetchLogs();
//       fetchLocks();
//       interval = setInterval(() => {
//         fetchLogs();
//         fetchLocks();
//       }, 5000);
//     }
//     return () => clearInterval(interval);
//   }, [isAuthenticated]);

//   const handleLogin = () => {
//     if (enteredPassword === correctPassword) {
//       setIsAuthenticated(true);
//     } else {
//       alert("Incorrect password!");
//     }
//   };

//   // Login Screen
//   if (!isAuthenticated) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
//         <div className="bg-white shadow-2xl rounded-xl p-10 w-96 border border-gray-200">
//           <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//             🔑 Admin Access
//           </h2>
//           <input
//             type="password"
//             value={enteredPassword}
//             onChange={(e) => setEnteredPassword(e.target.value)}
//             placeholder="Enter Admin Password"
//             className="w-full px-4 py-2 border rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleLogin}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//           {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
//         </div>
//       </div>
//     );
//   }

//   // Dashboard
//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-extrabold text-gray-800">
//           📊 Admin Dashboard
//         </h1>
//         <button
//           onClick={clearLogs}
//           className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition flex items-center gap-2 shadow"
//         >
//           🗑️ Clear All Logs
//         </button>
//       </div>

//       <p className="text-gray-600 mb-6 italic">
//         Monitoring all activities in{" "}
//         <span className="font-semibold">CampusCool</span>
//       </p>

//       {/* 🔒 Lock/Unlock Pages Section */}
//       <div className="bg-white shadow-xl rounded-lg p-6 mb-8 border border-gray-200">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">
//           🔒 Page Access Control
//         </h2>
//         <ul className="space-y-4">
//           {["feed", "events", "materials", "profile", "attendance"].map(
//             (page) => (
//               <li
//                 key={page}
//                 className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow border"
//               >
//                 <span className="capitalize font-medium text-gray-800">
//                   {page}
//                 </span>
//                 <button
//                   onClick={() => toggleLock(page)}
//                   className={`px-4 py-2 rounded-lg font-semibold shadow transition ${
//                     locks[page]
//                       ? "bg-green-600 text-white hover:bg-green-700"
//                       : "bg-red-600 text-white hover:bg-red-700"
//                   }`}
//                 >
//                   {locks[page] ? "Unlock" : "Lock"}
//                 </button>
//               </li>
//             )
//           )}
//         </ul>
//       </div>

//       {/* Logs Section */}
//       <div className="bg-white shadow-xl rounded-lg p-6 h-[50vh] overflow-y-auto border border-gray-200">
//         {logs.length === 0 ? (
//           <p className="text-gray-500 text-center">No activity logs yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {logs.map((log) => (
//               <li
//                 key={log._id}
//                 className="p-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md border border-gray-300 flex justify-between items-center hover:shadow-lg transition"
//               >
//                 <div>
//                   <p className="text-gray-800 font-medium">{log.message}</p>
//                   <p className="text-xs text-gray-500 mt-1">{log.time}</p>
//                 </div>
//                 <button
//                   onClick={() => deleteLog(log._id)}
//                   className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPage;
import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logs, setLogs] = useState([]);
  const [locks, setLocks] = useState({});
  const [error, setError] = useState("");

  const correctPassword = "yash"; // UI login password
  const ADMIN_PASS_HEADER = "yash"; // 🔑 backend validation
  const API_BASE = "http://localhost:5000"; // ✅ change if backend runs elsewhere

  // Fetch logs
  const fetchLogs = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/admin/logs`);
      const data = await res.json();
      setLogs(data);
    } catch (err) {
      console.error("Failed to fetch logs:", err);
    }
  };

  // Fetch lock status
  const fetchLocks = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/locks`);
      const data = await res.json();
      setLocks(data);
    } catch (err) {
      console.error("Failed to fetch locks:", err);
    }
  };

  // Toggle lock/unlock for a page
  const toggleLock = async (page) => {
    try {
      await fetch(`${API_BASE}/api/locks/${page}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-pass": ADMIN_PASS_HEADER, // 🔑 backend validation
        },
        body: JSON.stringify({ locked: !locks[page] }),
      });
      fetchLocks();
    } catch (err) {
      console.error("Failed to toggle lock:", err);
      setError("Failed to update lock");
    }
  };

  // Delete single log
  const deleteLog = async (id) => {
    try {
      await fetch(`${API_BASE}/api/admin/logs/${id}`, { method: "DELETE" });
      fetchLogs();
    } catch (err) {
      console.error("Failed to delete log:", err);
    }
  };

  // Clear all logs
  const clearLogs = async () => {
    try {
      await fetch(`${API_BASE}/api/admin/logs`, { method: "DELETE" });
      fetchLogs();
    } catch (err) {
      console.error("Failed to clear logs:", err);
    }
  };

  // Auto-refresh logs + locks
  useEffect(() => {
    let interval;
    if (isAuthenticated) {
      fetchLogs();
      fetchLocks();
      interval = setInterval(() => {
        fetchLogs();
        fetchLocks();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const handleLogin = () => {
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
        <div className="bg-white shadow-2xl rounded-xl p-10 w-96 border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            🔑 Admin Access
          </h2>
          <input
            type="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Enter Admin Password"
            className="w-full px-4 py-2 border rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
          {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
        </div>
      </div>
    );
  }

  // Dashboard
  const pages = [
    "feed",
    "events",
    "materials",
    "profile",
    "attendance",
    "fees",
    "result",
    "career-choice",
    "achievements",
    "timetable",
    "quiz",
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">
          📊 Admin Dashboard
        </h1>
        <button
          onClick={clearLogs}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition flex items-center gap-2 shadow"
        >
          🗑️ Clear All Logs
        </button>
      </div>

      <p className="text-gray-600 mb-6 italic">
        Monitoring all activities in{" "}
        <span className="font-semibold">CampusCool</span>
      </p>

      {/* 🔒 Lock/Unlock Pages Section */}
      <div className="bg-white shadow-xl rounded-lg p-6 mb-8 border border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          🔒 Page Access Control
        </h2>
        <ul className="space-y-4">
          {pages.map((page) => (
            <li
              key={page}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow border"
            >
              <span className="capitalize font-medium text-gray-800">
                {page.replace("-", " ")}
              </span>
              <button
                onClick={() => toggleLock(page)}
                className={`px-4 py-2 rounded-lg font-semibold shadow transition ${
                  locks[page]
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                {locks[page] ? "Unlock" : "Lock"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Logs Section */}
      <div className="bg-white shadow-xl rounded-lg p-6 h-[50vh] overflow-y-auto border border-gray-200">
        {logs.length === 0 ? (
          <p className="text-gray-500 text-center">No activity logs yet.</p>
        ) : (
          <ul className="space-y-4">
            {logs.map((log) => (
              <li
                key={log._id}
                className="p-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-md border border-gray-300 flex justify-between items-center hover:shadow-lg transition"
              >
                <div>
                  <p className="text-gray-800 font-medium">{log.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{log.time}</p>
                </div>
                <button
                  onClick={() => deleteLog(log._id)}
                  className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminPage;

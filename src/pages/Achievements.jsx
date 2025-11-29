// // // // // import React, { useState } from "react";
// // // // // import "../styles/achievements.css";

// // // // // const Achievements = () => {
// // // // //   const [id, setId] = useState("");
// // // // //   const [file, setFile] = useState(null);

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     alert(`ID: ${id}\nScholarship File: ${file ? file.name : "None"}`);
// // // // //   };

// // // // //   return (
// // // // //     <div className="achievements-container">
// // // // //       <h2>Scholarship / Achievement Record</h2>
// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <label>Enter ID Number</label>
// // // // //         <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />

// // // // //         <label>Upload Scholarship / Achievement Document</label>
// // // // //         <input type="file" onChange={(e) => setFile(e.target.files[0])} />

// // // // //         <button type="submit">Save</button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Achievements;
// // // // import React, { useState } from "react";
// // // // import "../styles/achievements.css";

// // // // const Achievements = () => {
// // // //   const [id, setId] = useState("");
// // // //   const [file, setFile] = useState(null);
// // // //   const [submitted, setSubmitted] = useState(false);

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     setSubmitted(true);

// // // //     // reset after a delay
// // // //     setTimeout(() => {
// // // //       setSubmitted(false);
// // // //       setId("");
// // // //       setFile(null);
// // // //     }, 3000);
// // // //   };

// // // //   return (
// // // //     <div className="achievements-container">
// // // //       <h2>Scholarship / Achievement Record</h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <label>Enter ID Number</label>
// // // //         <input
// // // //           type="text"
// // // //           value={id}
// // // //           onChange={(e) => setId(e.target.value)}
// // // //           required
// // // //         />

// // // //         <label>Upload Scholarship / Achievement Document</label>
// // // //         <input
// // // //           type="file"
// // // //           onChange={(e) => setFile(e.target.files[0])}
// // // //         />
// // // //         {file && <p className="file-info">📂 Selected File: {file.name}</p>}


// // // //         <button type="submit">Save</button>
// // // //       </form>

// // // //       {submitted && (
// // // //         <p className="success-message">✅ Achievement Submitted Successfully!</p>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Achievements;
// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // import "../styles/achievements.css";

// // // const Achievements = () => {
// // //   const [id, setId] = useState("");
// // //   const [file, setFile] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [message, setMessage] = useState("");

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!file) {
// // //       setMessage("⚠️ Please select a file before submitting.");
// // //       return;
// // //     }

// // //     const formData = new FormData();
// // //     formData.append("id", id);
// // //     formData.append("file", file);

// // //     try {
// // //       setLoading(true);
// // //       setMessage("");

// // //       const res = await axios.post("http://localhost:5000/api/achievements", formData, {
// // //         headers: {
// // //           "Content-Type": "multipart/form-data",
// // //         },
// // //       });

// // //       setMessage("✅ Achievement submitted successfully!");
// // //       setId("");
// // //       setFile(null);
// // //     } catch (err) {
// // //       console.error("❌ Error uploading achievement:", err);
// // //       setMessage("❌ Failed to submit achievement. Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="achievements-container">
// // //       <h2>Scholarship / Achievement Record</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <label>Enter ID Number</label>
// // //         <input
// // //           type="text"
// // //           value={id}
// // //           onChange={(e) => setId(e.target.value)}
// // //           required
// // //         />

// // //         <label>Upload Scholarship / Achievement Document</label>
// // //         <input
// // //           type="file"
// // //           onChange={(e) => setFile(e.target.files[0])}
// // //           required
// // //         />
// // //         {file && <p className="file-info">📂 Selected File: {file.name}</p>}

// // //         <button type="submit" disabled={loading}>
// // //           {loading ? "Saving..." : "Save"}
// // //         </button>
// // //       </form>

// // //       {message && <p className="success-message">{message}</p>}
// // //     </div>
// // //   );
// // // };

// // // export default Achievements;
// // import React, { useState } from "react";
// // import "../styles/achievements.css";

// // const Achievements = () => {
// //   const [id, setId] = useState("");
// //   const [file, setFile] = useState(null);
// //   const [submitted, setSubmitted] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setSubmitted(true);

// //     // reset after a delay
// //     setTimeout(() => {
// //       setSubmitted(false);
// //       setId("");
// //       setFile(null);
// //     }, 3000);
// //   };

// //   return (
// //     <div className="achievements-container">
// //       <h2>Scholarship / Achievement Record</h2>
// //       <form onSubmit={handleSubmit}>
// //         <label>Enter ID Number</label>
// //         <input
// //           type="text"
// //           value={id}
// //           onChange={(e) => setId(e.target.value)}
// //           required
// //         />

// //         <label>Upload Scholarship / Achievement Document</label>
// //         <input
// //           type="file"
// //           onChange={(e) => setFile(e.target.files[0])}
// //         />

// //         {file && (
// //           <p className="file-info">📂 Selected File: {file.name}</p>
// //         )}

// //         <button type="submit">Save</button>
// //       </form>

// //       {submitted && (
// //         <p className="success-message">
// //           ✅ Achievement Submitted Successfully!
// //         </p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Achievements;
// import React, { useState } from "react";
// import "../styles/achievements.css";

// const Achievements = () => {
//   const [id, setId] = useState("");
//   const [file, setFile] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [celebrate, setCelebrate] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setCelebrate(true);

//     setTimeout(() => {
//       setCelebrate(false);
//       setSubmitted(true);

//       // reset after a delay
//       setTimeout(() => {
//         setSubmitted(false);
//         setId("");
//         setFile(null);
//       }, 3000);
//     }, 2500); // crackers show for 2.5 sec
//   };

//   return (
//     <div className="achievements-page">
//       <div className="achievements-container">
//         <h2>Scholarship / Achievement Record</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Enter ID Number</label>
//           <input
//             type="text"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             required
//           />

//           <label>Upload Scholarship / Achievement Document</label>
//           <input
//             type="file"
//             onChange={(e) => setFile(e.target.files[0])}
//           />

//           {file && <p className="file-info">📂 Selected File: {file.name}</p>}

//           <button type="submit">Save</button>
//         </form>

//         {submitted && (
//           <p className="success-message">
//             ✅ Achievement Submitted Successfully!
//           </p>
//         )}
//       </div>

//       {/* 🎆 Celebration Cracker Overlay */}
//       {celebrate && (
//         <div className="celebration-overlay">
//           <div className="firework"></div>
//           <div className="firework"></div>
//           <div className="firework"></div>
//           <div className="firework"></div>
//           <div className="firework"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Achievements;
import React, { useState, useEffect } from "react";
import "../styles/achievements.css";

const API_BASE = "http://localhost:5000";

const Achievements = () => {
  const [id, setId] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  // 🔒 Lock state
  const [locked, setLocked] = useState(false);
  const [unlockPass, setUnlockPass] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/locks`)
      .then((res) => res.json())
      .then((data) => setLocked(data.achievements));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCelebrate(true);

    setTimeout(() => {
      setCelebrate(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setId("");
        setFile(null);
      }, 3000);
    }, 2500);
  };

  return (
    <div className="achievements-page">
      {locked && !unlocked ? (
        <div className="lock-screen">
          <h2>🔒 Achievements Page Locked</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={unlockPass}
            onChange={(e) => setUnlockPass(e.target.value)}
          />
          <button
            onClick={() =>
              unlockPass === "yash"
                ? setUnlocked(true)
                : alert("Wrong password!")
            }
          >
            Unlock
          </button>
        </div>
      ) : (
        <div className="achievements-container">
          <h2>Scholarship / Achievement Record</h2>
          <form onSubmit={handleSubmit}>
            <label>Enter ID Number</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />

            <label>Upload Scholarship / Achievement Document</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />

            {file && <p className="file-info">📂 Selected File: {file.name}</p>}

            <button type="submit">Save</button>
          </form>

          {submitted && (
            <p className="success-message">
              ✅ Achievement Submitted Successfully!
            </p>
          )}

          {celebrate && (
            <div className="celebration-overlay">
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Achievements;

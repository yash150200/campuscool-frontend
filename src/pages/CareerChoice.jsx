// // // // // // // import React, { useState } from "react";
// // // // // // // import "../styles/careerchoice.css";

// // // // // // // const CareerChoice = () => {
// // // // // // //   const [id, setId] = useState("");
// // // // // // //   const [option, setOption] = useState("");
// // // // // // //   const [file, setFile] = useState(null);

// // // // // // //   const handleSubmit = (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     alert(`ID: ${id}\nOption: ${option}\nFile: ${file ? file.name : "None"}`);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="career-container">
// // // // // // //       <h2>Career Choice</h2>
// // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // //         <label>ID Number (CS000, ITXXX, CEXXX)</label>
// // // // // // //         <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />

// // // // // // //         <label>Choose Option</label>
// // // // // // //         <select value={option} onChange={(e) => setOption(e.target.value)} required>
// // // // // // //           <option value="">-- Select --</option>
// // // // // // //           <option value="placement">Placement (Upload Resume)</option>
// // // // // // //           <option value="higher-studies">Higher Studies (Upload Admission Letter)</option>
// // // // // // //         </select>

// // // // // // //         <label>Upload File</label>
// // // // // // //         <input type="file" onChange={(e) => setFile(e.target.files[0])} />

// // // // // // //         <button type="submit">Submit</button>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CareerChoice;
// // // // // // import React, { useState } from "react";
// // // // // // import "../styles/careerchoice.css";

// // // // // // const CareerChoice = () => {
// // // // // //   const [id, setId] = useState("");
// // // // // //   const [option, setOption] = useState("");
// // // // // //   const [file, setFile] = useState(null);
// // // // // //   const [submitted, setSubmitted] = useState(false);

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setSubmitted(true);

// // // // // //     // reset after a delay
// // // // // //     setTimeout(() => {
// // // // // //       setSubmitted(false);
// // // // // //       setId("");
// // // // // //       setOption("");
// // // // // //       setFile(null);
// // // // // //     }, 3000);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="career-container">
// // // // // //       <h2>Career Choice</h2>
// // // // // //       <form onSubmit={handleSubmit}>
// // // // // //         <label>ID Number (CS000, ITXXX, CEXXX)</label>
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           value={id}
// // // // // //           onChange={(e) => setId(e.target.value)}
// // // // // //           required
// // // // // //         />

// // // // // //         <label>Choose Option</label>
// // // // // //         <select
// // // // // //           value={option}
// // // // // //           onChange={(e) => setOption(e.target.value)}
// // // // // //           required
// // // // // //         >
// // // // // //           <option value="">-- Select --</option>
// // // // // //           <option value="placement">Placement (Upload Resume)</option>
// // // // // //           <option value="higher-studies">
// // // // // //             Higher Studies (Upload Admission Letter)
// // // // // //           </option>
// // // // // //         </select>

// // // // // //         <label>Upload File</label>
// // // // // //         <input
// // // // // //           type="file"
// // // // // //           onChange={(e) => setFile(e.target.files[0])}
// // // // // //         />
// // // // // //         {file && <p className="file-info">📂 Selected File: {file.name}</p>}


// // // // // //         <button type="submit">Submit</button>
// // // // // //       </form>

// // // // // //       {submitted && (
// // // // // //         <p className="success-message">✅ Career Choice Submitted Successfully!</p>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CareerChoice;
// // // // // import React, { useState } from "react";
// // // // // import "../styles/careerchoice.css";

// // // // // const CareerChoice = () => {
// // // // //   const [id, setId] = useState("");
// // // // //   const [option, setOption] = useState("");
// // // // //   const [file, setFile] = useState(null);
// // // // //   const [submitted, setSubmitted] = useState(false);
// // // // //   const [showCelebration, setShowCelebration] = useState(false);

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();

// // // // //     // ✅ Trigger celebration
// // // // //     setShowCelebration(true);
// // // // //     setSubmitted(true);

// // // // //     // Reset after 3s
// // // // //     setTimeout(() => {
// // // // //       setShowCelebration(false);
// // // // //       setSubmitted(false);
// // // // //       setId("");
// // // // //       setOption("");
// // // // //       setFile(null);
// // // // //     }, 3000);
// // // // //   };

// // // // //   return (
// // // // //     <div className="career-page">
// // // // //       <div className="career-container">
// // // // //         <h2>🎯 Career Choice</h2>
// // // // //         <form onSubmit={handleSubmit}>
// // // // //           <label>ID Number (CS000, ITXXX, CEXXX)</label>
// // // // //           <input
// // // // //             type="text"
// // // // //             value={id}
// // // // //             onChange={(e) => setId(e.target.value)}
// // // // //             required
// // // // //           />

// // // // //           <label>Choose Option</label>
// // // // //           <select
// // // // //             value={option}
// // // // //             onChange={(e) => setOption(e.target.value)}
// // // // //             required
// // // // //           >
// // // // //             <option value="">-- Select --</option>
// // // // //             <option value="placement">Placement (Upload Resume)</option>
// // // // //             <option value="higher-studies">
// // // // //               Higher Studies (Upload Admission Letter)
// // // // //             </option>
// // // // //           </select>

// // // // //           <label>Upload File</label>
// // // // //           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// // // // //           {file && <p className="file-info">📂 Selected File: {file.name}</p>}

// // // // //           <button type="submit">Submit</button>
// // // // //         </form>

// // // // //         {submitted && !showCelebration && (
// // // // //           <p className="success-message">
// // // // //             ✅ Career Choice Submitted Successfully!
// // // // //           </p>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* 🎉 Celebration Overlay */}
// // // // //       {showCelebration && (
// // // // //         <div className="celebration-overlay">
// // // // //           <div className="celebration-box">👍<br />Submitted!</div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CareerChoice;


// // // // import React, { useState, useEffect } from "react";
// // // // import "../styles/careerchoice.css";

// // // // const API_BASE = "http://localhost:5000";

// // // // const CareerChoice = () => {
// // // //   const [id, setId] = useState("");
// // // //   const [option, setOption] = useState("");
// // // //   const [file, setFile] = useState(null);
// // // //   const [submitted, setSubmitted] = useState(false);
// // // //   const [showCelebration, setShowCelebration] = useState(false);

// // // //   // 🔒 Lock system
// // // //   const [locked, setLocked] = useState(false);
// // // //   const [unlockPass, setUnlockPass] = useState("");
// // // //   const [unlocked, setUnlocked] = useState(false);

// // // //   useEffect(() => {
// // // //     fetch(`${API_BASE}/api/locks`)
// // // //       .then((res) => res.json())
// // // //       .then((data) => setLocked(data["career-choice"]));
// // // //   }, []);

// // // //   if (locked && !unlocked) {
// // // //     return (
// // // //       <div className="lock-screen">
// // // //         <h2>🔒 Career Choice Page Locked</h2>
// // // //         <input type="password" value={unlockPass} onChange={(e) => setUnlockPass(e.target.value)} placeholder="Enter password" />
// // // //         <button onClick={() => (unlockPass === "yash" ? setUnlocked(true) : alert("Wrong password"))}>Unlock</button>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     setShowCelebration(true);
// // // //     setSubmitted(true);
// // // //     setTimeout(() => {
// // // //       setShowCelebration(false);
// // // //       setSubmitted(false);
// // // //       setId("");
// // // //       setOption("");
// // // //       setFile(null);
// // // //     }, 3000);
// // // //   };

// // // //   return (
// // // //     <div className="career-page">
// // // //       <h2>🎯 Career Choice</h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Student ID" required />
// // // //         <select value={option} onChange={(e) => setOption(e.target.value)} required>
// // // //           <option value="">-- Select --</option>
// // // //           <option value="placement">Placement</option>
// // // //           <option value="higher-studies">Higher Studies</option>
// // // //         </select>
// // // //         <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// // // //         {file && <p>📂 {file.name}</p>}
// // // //         <button type="submit">Submit</button>
// // // //       </form>

// // // //       {submitted && !showCelebration && <p>✅ Career Choice Submitted!</p>}
// // // //       {showCelebration && <div className="celebration-box">👍 Submitted!</div>}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CareerChoice;


// // // import React, { useState } from "react";
// // // import "../styles/careerchoice.css";

// // // const CareerChoice = () => {
// // //   const [id, setId] = useState("");
// // //   const [option, setOption] = useState("");
// // //   const [file, setFile] = useState(null);
// // //   const [submitted, setSubmitted] = useState(false);
// // //   const [showCelebration, setShowCelebration] = useState(false);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     // ✅ Trigger celebration
// // //     setShowCelebration(true);
// // //     setSubmitted(true);

// // //     // Reset after 3s
// // //     setTimeout(() => {
// // //       setShowCelebration(false);
// // //       setSubmitted(false);
// // //       setId("");
// // //       setOption("");
// // //       setFile(null);
// // //     }, 3000);
// // //   };

// // //   return (
// // //     <div className="career-page">
// // //       <div className="career-container">
// // //         <h2>🎯 Career Choice</h2>
// // //         <form onSubmit={handleSubmit}>
// // //           <label>ID Number (CS000, ITXXX, CEXXX)</label>
// // //           <input
// // //             type="text"
// // //             value={id}
// // //             onChange={(e) => setId(e.target.value)}
// // //             required
// // //           />

// // //           <label>Choose Option</label>
// // //           <select
// // //             value={option}
// // //             onChange={(e) => setOption(e.target.value)}
// // //             required
// // //           >
// // //             <option value="">-- Select --</option>
// // //             <option value="placement">Placement (Upload Resume)</option>
// // //             <option value="higher-studies">
// // //               Higher Studies (Upload Admission Letter)
// // //             </option>
// // //           </select>

// // //           <label>Upload File</label>
// // //           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// // //           {file && <p className="file-info">📂 Selected File: {file.name}</p>}

// // //           <button type="submit">Submit</button>
// // //         </form>

// // //         {submitted && !showCelebration && (
// // //           <p className="success-message">
// // //             ✅ Career Choice Submitted Successfully!
// // //           </p>
// // //         )}
// // //       </div>

// // //       {/* 🎉 Celebration Overlay */}
// // //       {showCelebration && (
// // //         <div className="celebration-overlay">
// // //           <div className="celebration-box">👍<br />Submitted!</div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default CareerChoice;

// // import React, { useState, useEffect } from "react";
// // import "../styles/careerchoice.css";

// // const API_BASE = "http://localhost:5000";

// // const CareerChoice = () => {
// //   const [id, setId] = useState("");
// //   const [option, setOption] = useState("");
// //   const [file, setFile] = useState(null);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [showCelebration, setShowCelebration] = useState(false);

// //   // 🔒 Lock system states
// //   const [locked, setLocked] = useState(false);
// //   const [unlockPass, setUnlockPass] = useState("");
// //   const [unlocked, setUnlocked] = useState(false);

// //   // ✅ Check lock status from backend
// //   useEffect(() => {
// //     fetch(`${API_BASE}/api/locks`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         // Make sure your backend locks.json has "careerchoice": false by default
// //         setLocked(data.careerchoice);
// //       })
// //       .catch((err) => console.error("Failed to fetch lock state:", err));
// //   }, []);

// //   // ✅ If locked, show unlock screen
// //   if (locked && !unlocked) {
// //     return (
// //       <div className="lock-screen">
// //         <h2>🔒 Career Choice Page Locked</h2>
// //         <input
// //           type="password"
// //           placeholder="Enter password"
// //           value={unlockPass}
// //           onChange={(e) => setUnlockPass(e.target.value)}
// //         />
// //         <button
// //           onClick={() =>
// //             unlockPass === "yash"
// //               ? setUnlocked(true)
// //               : alert("❌ Wrong password")
// //           }
// //         >
// //           Unlock
// //         </button>
// //       </div>
// //     );
// //   }

// //   // ✅ Your existing functionality remains unchanged
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setShowCelebration(true);
// //     setSubmitted(true);

// //     setTimeout(() => {
// //       setShowCelebration(false);
// //       setSubmitted(false);
// //       setId("");
// //       setOption("");
// //       setFile(null);
// //     }, 3000);
// //   };

// //   return (
// //     <div className="career-page">
// //       <div className="career-container">
// //         <h2>🎯 Career Choice</h2>
// //         <form onSubmit={handleSubmit}>
// //           <label>ID Number (CS000, ITXXX, CEXXX)</label>
// //           <input
// //             type="text"
// //             value={id}
// //             onChange={(e) => setId(e.target.value)}
// //             required
// //           />

// //           <label>Choose Option</label>
// //           <select
// //             value={option}
// //             onChange={(e) => setOption(e.target.value)}
// //             required
// //           >
// //             <option value="">-- Select --</option>
// //             <option value="placement">Placement (Upload Resume)</option>
// //             <option value="higher-studies">
// //               Higher Studies (Upload Admission Letter)
// //             </option>
// //           </select>

// //           <label>Upload File</label>
// //           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
// //           {file && <p className="file-info">📂 Selected File: {file.name}</p>}

// //           <button type="submit">Submit</button>
// //         </form>

// //         {submitted && !showCelebration && (
// //           <p className="success-message">
// //             ✅ Career Choice Submitted Successfully!
// //           </p>
// //         )}
// //       </div>

// //       {/* 🎉 Celebration Overlay */}
// //       {showCelebration && (
// //         <div className="celebration-overlay">
// //           <div className="celebration-box">
// //             👍
// //             <br />
// //             Submitted!
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default CareerChoice;
// import React, { useState, useEffect } from "react";
// import "../styles/careerchoice.css";

// const CareerChoice = () => {
//   const [id, setId] = useState("");
//   const [option, setOption] = useState("");
//   const [file, setFile] = useState(null);
//   const [submitted, setSubmitted] = useState(false);
//   const [showCelebration, setShowCelebration] = useState(false);

//   // 🔒 Lock states
//   const [locked, setLocked] = useState(false);
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [unlocked, setUnlocked] = useState(false);

//   const API_BASE = "http://localhost:5000"; 
//   const PAGE_KEY = "careerchoice"; 
//   const CORRECT_PASS = "yash"; // same as Admin password

//   // ✅ Fetch lock status from backend
//   useEffect(() => {
//     const fetchLockStatus = async () => {
//       try {
//         const res = await fetch(`${API_BASE}/api/locks`);
//         const data = await res.json();
//         setLocked(data[PAGE_KEY]);
//       } catch (err) {
//         console.error("Failed to fetch lock status:", err);
//       }
//     };
//     fetchLockStatus();
//   }, []);

//   const handleUnlock = () => {
//     if (enteredPassword === CORRECT_PASS) {
//       setUnlocked(true);
//     } else {
//       alert("❌ Incorrect password");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setShowCelebration(true);
//     setSubmitted(true);

//     setTimeout(() => {
//       setShowCelebration(false);
//       setSubmitted(false);
//       setId("");
//       setOption("");
//       setFile(null);
//     }, 3000);
//   };

//   // 🔒 If locked and not yet unlocked → show password screen
//   if (locked && !unlocked) {
//     return (
//       <div className="lock-screen">
//         <div className="lock-box">
//           <h2>🔒 Career Choice Locked</h2>
//           <input
//             type="password"
//             placeholder="Enter password to unlock"
//             value={enteredPassword}
//             onChange={(e) => setEnteredPassword(e.target.value)}
//           />
//           <button onClick={handleUnlock}>Unlock</button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="career-page">
//       <div className="career-container">
//         <h2>🎯 Career Choice</h2>
//         <form onSubmit={handleSubmit}>
//           <label>ID Number (CS000, ITXXX, CEXXX)</label>
//           <input
//             type="text"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             required
//           />

//           <label>Choose Option</label>
//           <select
//             value={option}
//             onChange={(e) => setOption(e.target.value)}
//             required
//           >
//             <option value="">-- Select --</option>
//             <option value="placement">Placement (Upload Resume)</option>
//             <option value="higher-studies">
//               Higher Studies (Upload Admission Letter)
//             </option>
//           </select>

//           <label>Upload File</label>
//           <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//           {file && <p className="file-info">📂 Selected File: {file.name}</p>}

//           <button type="submit">Submit</button>
//         </form>

//         {submitted && !showCelebration && (
//           <p className="success-message">
//             ✅ Career Choice Submitted Successfully!
//           </p>
//         )}
//       </div>

//       {showCelebration && (
//         <div className="celebration-overlay">
//           <div className="celebration-box">
//             👍
//             <br />
//             Submitted!
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CareerChoice;
import React, { useState, useEffect } from "react";
import "../styles/careerchoice.css";

const API_BASE = "http://localhost:5000";

const CareerChoice = () => {
  const [id, setId] = useState("");
  const [option, setOption] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  // 🔒 Lock state
  const [locked, setLocked] = useState(false);
  const [unlockPass, setUnlockPass] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/locks`)
      .then((res) => res.json())
      .then((data) => setLocked(data["career-choice"]));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCelebration(true);
    setSubmitted(true);

    setTimeout(() => {
      setShowCelebration(false);
      setSubmitted(false);
      setId("");
      setOption("");
      setFile(null);
    }, 3000);
  };

  return (
    <div className="career-page">
      {locked && !unlocked ? (
        <div className="lock-screen">
          <h2>🔒 Career Choice Page Locked</h2>
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
        <div className="career-container">
          <h2>🎯 Career Choice</h2>
          <form onSubmit={handleSubmit}>
            <label>ID Number (CS000, ITXXX, CEXXX)</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />

            <label>Choose Option</label>
            <select
              value={option}
              onChange={(e) => setOption(e.target.value)}
              required
            >
              <option value="">-- Select --</option>
              <option value="placement">Placement (Upload Resume)</option>
              <option value="higher-studies">
                Higher Studies (Upload Admission Letter)
              </option>
            </select>

            <label>Upload File</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {file && <p className="file-info">📂 Selected File: {file.name}</p>}

            <button type="submit">Submit</button>
          </form>

          {submitted && !showCelebration && (
            <p className="success-message">
              ✅ Career Choice Submitted Successfully!
            </p>
          )}

          {showCelebration && (
            <div className="celebration-overlay">
              <div className="celebration-box">👍<br />Submitted!</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CareerChoice;


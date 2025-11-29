// // // // import React, { useRef, useState } from "react";
// // // // import jsPDF from "jspdf";
// // // // import html2canvas from "html2canvas";
// // // // import "../styles/result.css";

// // // // const GRADES = ["A", "B", "C", "D", "E"];

// // // // const SUBJECTS = {
// // // //   cs: ["Maths", "DSA", "OS", "Networks", "DBMS"],
// // // //   it: ["Maths", "Web Tech", "Networks", "DBMS", "SE"],
// // // //   ce: ["Maths", "Mechanics", "Thermo", "Fluid Mechanics", "Surveying"],
// // // // };

// // // // // Convert grade → points
// // // // const gradeToPoints = (g) => ({ A: 10, B: 9, C: 8, D: 7, E: 0 }[g]);

// // // // const Result = () => {
// // // //   const [studentId, setStudentId] = useState("");
// // // //   const [semester, setSemester] = useState("");
// // // //   const [card, setCard] = useState(null);
// // // //   const [seenIds, setSeenIds] = useState(new Set());
// // // //   const cardRef = useRef(null);

// // // //   const validateId = (id) => /^(cs|it|ce)\d{3}$/i.test(id.trim());

// // // //   const generate = () => {
// // // //     if (!validateId(studentId)) {
// // // //       alert("Enter a valid ID like cs125, it001, ce045");
// // // //       return;
// // // //     }
// // // //     if (!semester) {
// // // //       alert("Please select a semester.");
// // // //       return;
// // // //     }

// // // //     const branch = studentId.slice(0, 2).toLowerCase();
// // // //     const subs = SUBJECTS[branch];

// // // //     // Random grades for subjects
// // // //     const rows = subs.map((s) => ({
// // // //       subject: s,
// // // //       grade: GRADES[Math.floor(Math.random() * GRADES.length)],
// // // //     }));

// // // //     // Calculate average & default pass/fail
// // // //     const hasFail = rows.some((r) => r.grade === "E");
// // // //     const avgPoints =
// // // //       rows.reduce((acc, r) => acc + gradeToPoints(r.grade), 0) / rows.length;

// // // //     let finalGrade;
// // // //     if (hasFail) {
// // // //       finalGrade = "E";
// // // //     } else if (avgPoints >= 9.5) {
// // // //       finalGrade = "A";
// // // //     } else if (avgPoints >= 8.5) {
// // // //       finalGrade = "B";
// // // //     } else if (avgPoints >= 7.5) {
// // // //       finalGrade = "C";
// // // //     } else {
// // // //       finalGrade = "D";
// // // //     }

// // // //     // Force first ID → Fail, next IDs → Pass
// // // //     let status;
// // // //     if (!seenIds.has(studentId.toLowerCase())) {
// // // //       if (seenIds.size === 0) {
// // // //         status = "Fail";
// // // //         finalGrade = "E"; // fail means E
// // // //       } else {
// // // //         status = "Pass";
// // // //       }
// // // //       setSeenIds(new Set([...seenIds, studentId.toLowerCase()]));
// // // //     } else {
// // // //       // If same ID entered again, keep original grading
// // // //       status = hasFail ? "Fail" : "Pass";
// // // //     }

// // // //     setCard({
// // // //       id: studentId.toUpperCase(),
// // // //       semester,
// // // //       rows,
// // // //       finalGrade,
// // // //       status,
// // // //       generatedOn: new Date().toLocaleString(),
// // // //     });
// // // //   };

// // // //   const downloadPDF = async () => {
// // // //     if (!cardRef.current) return;
// // // //     const canvas = await html2canvas(cardRef.current, {
// // // //       scale: 2,
// // // //       backgroundColor: "#ffffff",
// // // //     });
// // // //     const imgData = canvas.toDataURL("image/png");
// // // //     const pdf = new jsPDF("p", "mm", "a4");
// // // //     const pdfW = pdf.internal.pageSize.getWidth();
// // // //     const imgProps = pdf.getImageProperties(imgData);
// // // //     const pdfH = (imgProps.height * pdfW) / imgProps.width;
// // // //     pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
// // // //     const today = new Date().toISOString().split("T")[0];
// // // //     pdf.save(`result_${card.id}_${today}.pdf`);
// // // //   };

// // // //   return (
// // // //     <div className="result-container">
// // // //       <h2>📄 Result</h2>

// // // //       <div className="input-section">
// // // //         <label>Enter Student ID (cs### / it### / ce###)</label>
// // // //         <input
// // // //           type="text"
// // // //           value={studentId}
// // // //           onChange={(e) => setStudentId(e.target.value)}
// // // //           placeholder="e.g. cs125"
// // // //         />

// // // //         <label>Select Semester</label>
// // // //         <select value={semester} onChange={(e) => setSemester(e.target.value)}>
// // // //           <option value="">-- Select Semester --</option>
// // // //           <option value="Sem 1">Semester 1</option>
// // // //           <option value="Sem 2">Semester 2</option>
// // // //           <option value="Sem 3">Semester 3</option>
// // // //           <option value="Sem 4">Semester 4</option>
// // // //           <option value="Sem 5">Semester 5</option>
// // // //           <option value="Sem 6">Semester 6</option>
// // // //           <option value="Sem 7">Semester 7</option>
// // // //           <option value="Sem 8">Semester 8</option>
// // // //         </select>

// // // //         <button className="generate-btn" onClick={generate}>
// // // //           Generate Result
// // // //         </button>
// // // //       </div>

// // // //       {card && (
// // // //         <>
// // // //           <div className="report-section" ref={cardRef}>
// // // //             <h3>Campus Cool — Result</h3>
// // // //             <p>
// // // //               <strong>Student ID:</strong> {card.id}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Semester:</strong> {card.semester}
// // // //             </p>
// // // //             <p>
// // // //               <strong>Generated On:</strong> {card.generatedOn}
// // // //             </p>

// // // //             <div className="report-lists two-col">
// // // //               <div>
// // // //                 <h4>Subjects & Grades</h4>
// // // //                 <ul className="grade-list">
// // // //                   {card.rows.map((r, i) => (
// // // //                     <li key={i}>
// // // //                       <span>{r.subject}</span>
// // // //                       <span
// // // //                         className={`badge ${r.grade === "E" ? "bad" : "ok"}`}
// // // //                       >
// // // //                         {r.grade}
// // // //                       </span>
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //               <div>
// // // //                 <h4>Summary</h4>
// // // //                 <p>
// // // //                   <strong>Final Grade:</strong> {card.finalGrade}
// // // //                 </p>
// // // //                 <p>
// // // //                   <strong>Status:</strong>{" "}
// // // //                   {card.status === "Pass" ? "✅ Pass" : "❌ Fail"}
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="download-buttons">
// // // //             <button className="pdf-btn" onClick={downloadPDF}>
// // // //               📥 Download PDF
// // // //             </button>
// // // //           </div>
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Result;
// // // import React, { useRef, useState, } from "react";
// // // import jsPDF from "jspdf";
// // // import html2canvas from "html2canvas";
// // // import "../styles/result.css";

// // // const GRADES = ["A", "B", "C", "D", "E"];
// // // const SUBJECTS = {
// // //   cs: ["Maths", "DSA", "OS", "Networks", "DBMS"],
// // //   it: ["Maths", "Web Tech", "Networks", "DBMS", "SE"],
// // //   ce: ["Maths", "Mechanics", "Thermo", "Fluid Mechanics", "Surveying"],
// // // };

// // // // Convert grade → points
// // // const gradeToPoints = (g) => ({ A: 10, B: 9, C: 8, D: 7, E: 0 }[g]);

// // // const Result = () => {
// // //   const [studentId, setStudentId] = useState("");
// // //   const [semester, setSemester] = useState("");
// // //   const [card, setCard] = useState(null);
// // //   const [attempts, setAttempts] = useState(0);
// // //   const [showCelebration, setShowCelebration] = useState(false);
// // //   const [confetti, setConfetti] = useState([]); // ✅ confetti state
// // //   const cardRef = useRef(null);

// // //   const validateId = (id) => /^(cs|it|ce)\d{3}$/i.test(id.trim());

// // //   const generateConfetti = () => {
// // //     const pieces = [];
// // //     for (let i = 0; i < 40; i++) {
// // //       pieces.push({
// // //         id: i,
// // //         left: Math.random() * 100, // %
// // //         delay: Math.random() * 2, // seconds
// // //         color: ["#f87171", "#34d399", "#60a5fa", "#fbbf24", "#a78bfa"][
// // //           Math.floor(Math.random() * 5)
// // //         ],
// // //       });
// // //     }
// // //     setConfetti(pieces);
// // //   };

// // //   const generate = () => {
// // //     if (!validateId(studentId)) {
// // //       alert("Enter a valid ID like cs125, it001, ce045");
// // //       return;
// // //     }
// // //     if (!semester) {
// // //       alert("Please select a semester.");
// // //       return;
// // //     }

// // //     const branch = studentId.slice(0, 2).toLowerCase();
// // //     const subs = SUBJECTS[branch];

// // //     // Random grades
// // //     const rows = subs.map((s) => ({
// // //       subject: s,
// // //       grade: GRADES[Math.floor(Math.random() * GRADES.length)],
// // //     }));

// // //     const avgPoints =
// // //       rows.reduce((acc, r) => acc + gradeToPoints(r.grade), 0) / rows.length;

// // //     let finalGrade;
// // //     if (avgPoints >= 9.5) finalGrade = "A";
// // //     else if (avgPoints >= 8.5) finalGrade = "B";
// // //     else if (avgPoints >= 7.5) finalGrade = "C";
// // //     else finalGrade = "D";

// // //     // ✅ Fail logic: 1 in every 5 tries
// // //     let status = "Pass";
// // //     if ((attempts + 1) % 5 === 0) {
// // //       status = "Fail";
// // //       finalGrade = "E";
// // //       rows[0].grade = "E"; // force one fail subject
// // //     }

// // //     const newCard = {
// // //       id: studentId.toUpperCase(),
// // //       semester,
// // //       rows,
// // //       finalGrade,
// // //       status,
// // //       generatedOn: new Date().toLocaleString(),
// // //     };

// // //     // ✅ Celebration first
// // //     generateConfetti();
// // //     setShowCelebration(true);
// // //     setTimeout(() => {
// // //       setShowCelebration(false);
// // //       setCard(newCard);
// // //       setAttempts(attempts + 1);
// // //     }, 2000);
// // //   };

// // //   const downloadPDF = async () => {
// // //     if (!cardRef.current) return;
// // //     const canvas = await html2canvas(cardRef.current, { scale: 2, backgroundColor: "#ffffff" });
// // //     const imgData = canvas.toDataURL("image/png");
// // //     const pdf = new jsPDF("p", "mm", "a4");
// // //     const pdfW = pdf.internal.pageSize.getWidth();
// // //     const imgProps = pdf.getImageProperties(imgData);
// // //     const pdfH = (imgProps.height * pdfW) / imgProps.width;
// // //     pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
// // //     const today = new Date().toISOString().split("T")[0];
// // //     pdf.save(`result_${card.id}_${today}.pdf`);
// // //   };

// // //   return (
// // //     <div className="result-page">
// // //       <div className="result-container">
// // //         <h2>📄 Result</h2>

// // //         <div className="input-section">
// // //           <label>Enter Student ID (cs### / it### / ce###)</label>
// // //           <input
// // //             type="text"
// // //             value={studentId}
// // //             onChange={(e) => setStudentId(e.target.value)}
// // //             placeholder="e.g. cs125"
// // //           />

// // //           <label>Select Semester</label>
// // //           <select value={semester} onChange={(e) => setSemester(e.target.value)}>
// // //             <option value="">-- Select Semester --</option>
// // //             {Array.from({ length: 8 }, (_, i) => (
// // //               <option key={i} value={`Sem ${i + 1}`}>
// // //                 Semester {i + 1}
// // //               </option>
// // //             ))}
// // //           </select>

// // //           <button className="generate-btn" onClick={generate}>
// // //             Generate Result
// // //           </button>
// // //         </div>

// // //         {/* ✅ Celebration Overlay */}
// // //         {showCelebration && (
// // //           <div className="celebration-overlay">
// // //             <div className="celebration-box">🎉<br /><span>Result Generated!</span></div>
// // //             {confetti.map((c) => (
// // //               <div
// // //                 key={c.id}
// // //                 className="confetti"
// // //                 style={{
// // //                   left: `${c.left}%`,
// // //                   backgroundColor: c.color,
// // //                   animationDelay: `${c.delay}s`,
// // //                 }}
// // //               />
// // //             ))}
// // //           </div>
// // //         )}

// // //         {card && !showCelebration && (
// // //           <>
// // //             <div className="report-section" ref={cardRef}>
// // //               <h3>Campus Cool — Result</h3>
// // //               <p><strong>Student ID:</strong> {card.id}</p>
// // //               <p><strong>Semester:</strong> {card.semester}</p>
// // //               <p><strong>Generated On:</strong> {card.generatedOn}</p>

// // //               <div className="report-lists two-col">
// // //                 <div>
// // //                   <h4>Subjects & Grades</h4>
// // //                   <ul className="grade-list">
// // //                     {card.rows.map((r, i) => (
// // //                       <li key={i}>
// // //                         <span>{r.subject}</span>
// // //                         <span className={`badge ${r.grade === "E" ? "bad" : "ok"}`}>
// // //                           {r.grade}
// // //                         </span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //                 <div>
// // //                   <h4>Summary</h4>
// // //                   <p><strong>Final Grade:</strong> {card.finalGrade}</p>
// // //                   <p><strong>Status:</strong> {card.status === "Pass" ? "✅ Pass" : "❌ Fail"}</p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="download-buttons">
// // //               <button className="pdf-btn" onClick={downloadPDF}>📥 Download PDF</button>
// // //             </div>
// // //           </>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Result;


// // import React, { useRef, useState, useEffect } from "react";
// // import jsPDF from "jspdf";
// // import html2canvas from "html2canvas";
// // import "../styles/result.css";

// // const GRADES = ["A", "B", "C", "D", "E"];
// // const SUBJECTS = {
// //   cs: ["Maths", "DSA", "OS", "Networks", "DBMS"],
// //   it: ["Maths", "Web Tech", "Networks", "DBMS", "SE"],
// //   ce: ["Maths", "Mechanics", "Thermo", "Fluid Mechanics", "Surveying"],
// // };

// // const gradeToPoints = (g) => ({ A: 10, B: 9, C: 8, D: 7, E: 0 }[g]);
// // const API_BASE = "http://localhost:5000";

// // const Result = () => {
// //   const [studentId, setStudentId] = useState("");
// //   const [semester, setSemester] = useState("");
// //   const [card, setCard] = useState(null);
// //   const [attempts, setAttempts] = useState(0);
// //   const [showCelebration, setShowCelebration] = useState(false);
// //   const [confetti, setConfetti] = useState([]);
// //   const cardRef = useRef(null);

// //   // 🔒 Lock system
// //   const [locked, setLocked] = useState(false);
// //   const [unlockPass, setUnlockPass] = useState("");
// //   const [unlocked, setUnlocked] = useState(false);

// //   useEffect(() => {
// //     fetch(`${API_BASE}/api/locks`)
// //       .then((res) => res.json())
// //       .then((data) => setLocked(data.result));
// //   }, []);

// //   if (locked && !unlocked) {
// //     return (
// //       <div className="lock-screen">
// //         <h2>🔒 Result Page Locked</h2>
// //         <input
// //           type="password"
// //           placeholder="Enter password"
// //           value={unlockPass}
// //           onChange={(e) => setUnlockPass(e.target.value)}
// //         />
// //         <button onClick={() => (unlockPass === "yash" ? setUnlocked(true) : alert("Wrong password!"))}>
// //           Unlock
// //         </button>
// //       </div>
// //     );
// //   }

// //   const validateId = (id) => /^(cs|it|ce)\d{3}$/i.test(id.trim());

// //   const generateConfetti = () => {
// //     const pieces = [];
// //     for (let i = 0; i < 40; i++) {
// //       pieces.push({
// //         id: i,
// //         left: Math.random() * 100,
// //         delay: Math.random() * 2,
// //         color: ["#f87171", "#34d399", "#60a5fa", "#fbbf24", "#a78bfa"][Math.floor(Math.random() * 5)],
// //       });
// //     }
// //     setConfetti(pieces);
// //   };

// //   const generate = () => {
// //     if (!validateId(studentId)) {
// //       alert("Enter a valid ID like cs125, it001, ce045");
// //       return;
// //     }
// //     if (!semester) {
// //       alert("Please select a semester.");
// //       return;
// //     }

// //     const branch = studentId.slice(0, 2).toLowerCase();
// //     const subs = SUBJECTS[branch];

// //     const rows = subs.map((s) => ({ subject: s, grade: GRADES[Math.floor(Math.random() * GRADES.length)] }));
// //     const avgPoints = rows.reduce((acc, r) => acc + gradeToPoints(r.grade), 0) / rows.length;

// //     let finalGrade;
// //     if (avgPoints >= 9.5) finalGrade = "A";
// //     else if (avgPoints >= 8.5) finalGrade = "B";
// //     else if (avgPoints >= 7.5) finalGrade = "C";
// //     else finalGrade = "D";

// //     let status = "Pass";
// //     if ((attempts + 1) % 5 === 0) {
// //       status = "Fail";
// //       finalGrade = "E";
// //       rows[0].grade = "E";
// //     }

// //     const newCard = {
// //       id: studentId.toUpperCase(),
// //       semester,
// //       rows,
// //       finalGrade,
// //       status,
// //       generatedOn: new Date().toLocaleString(),
// //     };

// //     generateConfetti();
// //     setShowCelebration(true);
// //     setTimeout(() => {
// //       setShowCelebration(false);
// //       setCard(newCard);
// //       setAttempts(attempts + 1);
// //     }, 2000);
// //   };

// //   const downloadPDF = async () => {
// //     if (!cardRef.current) return;
// //     const canvas = await html2canvas(cardRef.current, { scale: 2 });
// //     const imgData = canvas.toDataURL("image/png");
// //     const pdf = new jsPDF("p", "mm", "a4");
// //     pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
// //     pdf.save(`result_${card.id}.pdf`);
// //   };

// //   return (
// //     <div className="result-page">
// //       <div className="result-container">
// //         <h2>📄 Result</h2>
// //         <input value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="e.g. cs101" />
// //         <select value={semester} onChange={(e) => setSemester(e.target.value)}>
// //           <option value="">-- Select Semester --</option>
// //           {Array.from({ length: 8 }, (_, i) => (
// //             <option key={i} value={`Sem ${i + 1}`}>
// //               Semester {i + 1}
// //             </option>
// //           ))}
// //         </select>
// //         <button onClick={generate}>Generate Result</button>

// //         {showCelebration && (
// //           <div className="celebration-overlay">
// //             {confetti.map((c) => (
// //               <div key={c.id} className="confetti" style={{ left: `${c.left}%`, backgroundColor: c.color, animationDelay: `${c.delay}s` }} />
// //             ))}
// //           </div>
// //         )}

// //         {card && (
// //           <>
// //             <div ref={cardRef} className="report-section">
// //               <h3>Campus Cool — Result</h3>
// //               <p>ID: {card.id}</p>
// //               <p>Semester: {card.semester}</p>
// //               <p>Status: {card.status}</p>
// //             </div>
// //             <button onClick={downloadPDF}>📥 Download PDF</button>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Result;
// import React, { useRef, useState, } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import "../styles/result.css";

// const GRADES = ["A", "B", "C", "D", "E"];
// const SUBJECTS = {
//   cs: ["Maths", "DSA", "OS", "Networks", "DBMS"],
//   it: ["Maths", "Web Tech", "Networks", "DBMS", "SE"],
//   ce: ["Maths", "Mechanics", "Thermo", "Fluid Mechanics", "Surveying"],
// };

// // Convert grade → points
// const gradeToPoints = (g) => ({ A: 10, B: 9, C: 8, D: 7, E: 0 }[g]);

// const Result = () => {
//   const [studentId, setStudentId] = useState("");
//   const [semester, setSemester] = useState("");
//   const [card, setCard] = useState(null);
//   const [attempts, setAttempts] = useState(0);
//   const [showCelebration, setShowCelebration] = useState(false);
//   const [confetti, setConfetti] = useState([]); // ✅ confetti state
//   const cardRef = useRef(null);

//   const validateId = (id) => /^(cs|it|ce)\d{3}$/i.test(id.trim());

//   const generateConfetti = () => {
//     const pieces = [];
//     for (let i = 0; i < 40; i++) {
//       pieces.push({
//         id: i,
//         left: Math.random() * 100, // %
//         delay: Math.random() * 2, // seconds
//         color: ["#f87171", "#34d399", "#60a5fa", "#fbbf24", "#a78bfa"][
//           Math.floor(Math.random() * 5)
//         ],
//       });
//     }
//     setConfetti(pieces);
//   };

//   const generate = () => {
//     if (!validateId(studentId)) {
//       alert("Enter a valid ID like cs125, it001, ce045");
//       return;
//     }
//     if (!semester) {
//       alert("Please select a semester.");
//       return;
//     }

//     const branch = studentId.slice(0, 2).toLowerCase();
//     const subs = SUBJECTS[branch];

//     // Random grades
//     const rows = subs.map((s) => ({
//       subject: s,
//       grade: GRADES[Math.floor(Math.random() * GRADES.length)],
//     }));

//     const avgPoints =
//       rows.reduce((acc, r) => acc + gradeToPoints(r.grade), 0) / rows.length;

//     let finalGrade;
//     if (avgPoints >= 9.5) finalGrade = "A";
//     else if (avgPoints >= 8.5) finalGrade = "B";
//     else if (avgPoints >= 7.5) finalGrade = "C";
//     else finalGrade = "D";

//     // ✅ Fail logic: 1 in every 5 tries
//     let status = "Pass";
//     if ((attempts + 1) % 5 === 0) {
//       status = "Fail";
//       finalGrade = "E";
//       rows[0].grade = "E"; // force one fail subject
//     }

//     const newCard = {
//       id: studentId.toUpperCase(),
//       semester,
//       rows,
//       finalGrade,
//       status,
//       generatedOn: new Date().toLocaleString(),
//     };

//     // ✅ Celebration first
//     generateConfetti();
//     setShowCelebration(true);
//     setTimeout(() => {
//       setShowCelebration(false);
//       setCard(newCard);
//       setAttempts(attempts + 1);
//     }, 2000);
//   };

//   const downloadPDF = async () => {
//     if (!cardRef.current) return;
//     const canvas = await html2canvas(cardRef.current, { scale: 2, backgroundColor: "#ffffff" });
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfW = pdf.internal.pageSize.getWidth();
//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfH = (imgProps.height * pdfW) / imgProps.width;
//     pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
//     const today = new Date().toISOString().split("T")[0];
//     pdf.save(`result_${card.id}_${today}.pdf`);
//   };

//   return (
//     <div className="result-page">
//       <div className="result-container">
//         <h2>📄 Result</h2>

//         <div className="input-section">
//           <label>Enter Student ID (cs### / it### / ce###)</label>
//           <input
//             type="text"
//             value={studentId}
//             onChange={(e) => setStudentId(e.target.value)}
//             placeholder="e.g. cs125"
//           />

//           <label>Select Semester</label>
//           <select value={semester} onChange={(e) => setSemester(e.target.value)}>
//             <option value="">-- Select Semester --</option>
//             {Array.from({ length: 8 }, (_, i) => (
//               <option key={i} value={`Sem ${i + 1}`}>
//                 Semester {i + 1}
//               </option>
//             ))}
//           </select>

//           <button className="generate-btn" onClick={generate}>
//             Generate Result
//           </button>
//         </div>

//         {/* ✅ Celebration Overlay */}
//         {showCelebration && (
//           <div className="celebration-overlay">
//             <div className="celebration-box">🎉<br /><span>Result Generated!</span></div>
//             {confetti.map((c) => (
//               <div
//                 key={c.id}
//                 className="confetti"
//                 style={{
//                   left: `${c.left}%`,
//                   backgroundColor: c.color,
//                   animationDelay: `${c.delay}s`,
//                 }}
//               />
//             ))}
//           </div>
//         )}

//         {card && !showCelebration && (
//           <>
//             <div className="report-section" ref={cardRef}>
//               <h3>Campus Cool — Result</h3>
//               <p><strong>Student ID:</strong> {card.id}</p>
//               <p><strong>Semester:</strong> {card.semester}</p>
//               <p><strong>Generated On:</strong> {card.generatedOn}</p>

//               <div className="report-lists two-col">
//                 <div>
//                   <h4>Subjects & Grades</h4>
//                   <ul className="grade-list">
//                     {card.rows.map((r, i) => (
//                       <li key={i}>
//                         <span>{r.subject}</span>
//                         <span className={`badge ${r.grade === "E" ? "bad" : "ok"}`}>
//                           {r.grade}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div>
//                   <h4>Summary</h4>
//                   <p><strong>Final Grade:</strong> {card.finalGrade}</p>
//                   <p><strong>Status:</strong> {card.status === "Pass" ? "✅ Pass" : "❌ Fail"}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="download-buttons">
//               <button className="pdf-btn" onClick={downloadPDF}>📥 Download PDF</button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Result;
import React, { useRef, useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../styles/result.css";

const GRADES = ["A", "B", "C", "D", "E"];
const SUBJECTS = {
  cs: ["Maths", "DSA", "OS", "Networks", "DBMS"],
  it: ["Maths", "Web Tech", "Networks", "DBMS", "SE"],
  ce: ["Maths", "Mechanics", "Thermo", "Fluid Mechanics", "Surveying"],
};
const API_BASE = "http://localhost:5000";

const gradeToPoints = (g) => ({ A: 10, B: 9, C: 8, D: 7, E: 0 }[g]);

const Result = () => {
  const [studentId, setStudentId] = useState("");
  const [semester, setSemester] = useState("");
  const [card, setCard] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const cardRef = useRef(null);

  // 🔒 Lock state
  const [locked, setLocked] = useState(false);
  const [unlockPass, setUnlockPass] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/locks`)
      .then((res) => res.json())
      .then((data) => setLocked(data.result));
  }, []);

  const validateId = (id) => /^(cs|it|ce)\d{3}$/i.test(id.trim());

  const generateConfetti = () => {
    const pieces = [];
    for (let i = 0; i < 40; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        color: ["#f87171", "#34d399", "#60a5fa", "#fbbf24", "#a78bfa"][
          Math.floor(Math.random() * 5)
        ],
      });
    }
    setConfetti(pieces);
  };

  const generate = () => {
    if (!validateId(studentId)) {
      alert("Enter a valid ID like cs125, it001, ce045");
      return;
    }
    if (!semester) {
      alert("Please select a semester.");
      return;
    }

    const branch = studentId.slice(0, 2).toLowerCase();
    const subs = SUBJECTS[branch];
    const rows = subs.map((s) => ({
      subject: s,
      grade: GRADES[Math.floor(Math.random() * GRADES.length)],
    }));

    const avgPoints =
      rows.reduce((acc, r) => acc + gradeToPoints(r.grade), 0) / rows.length;

    let finalGrade;
    if (avgPoints >= 9.5) finalGrade = "A";
    else if (avgPoints >= 8.5) finalGrade = "B";
    else if (avgPoints >= 7.5) finalGrade = "C";
    else finalGrade = "D";

    let status = "Pass";
    if ((attempts + 1) % 5 === 0) {
      status = "Fail";
      finalGrade = "E";
      rows[0].grade = "E";
    }

    const newCard = {
      id: studentId.toUpperCase(),
      semester,
      rows,
      finalGrade,
      status,
      generatedOn: new Date().toLocaleString(),
    };

    generateConfetti();
    setShowCelebration(true);
    setTimeout(() => {
      setShowCelebration(false);
      setCard(newCard);
      setAttempts(attempts + 1);
    }, 2000);
  };

  const downloadPDF = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, { scale: 2, backgroundColor: "#ffffff" });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfW = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfH = (imgProps.height * pdfW) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
    pdf.save(`result_${card.id}.pdf`);
  };

  return (
    <div className="result-page">
      {/* 🔒 Show lock screen OR full page */}
      {locked && !unlocked ? (
        <div className="lock-screen">
          <h2>🔒 Result Page Locked</h2>
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
        <div className="result-container">
          <h2>📄 Result</h2>

          {/* ✅ Original content unchanged */}
          <div className="input-section">
            <label>Enter Student ID (cs### / it### / ce###)</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="e.g. cs125"
            />

            <label>Select Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">-- Select Semester --</option>
              {Array.from({ length: 8 }, (_, i) => (
                <option key={i} value={`Sem ${i + 1}`}>
                  Semester {i + 1}
                </option>
              ))}
            </select>

            <button className="generate-btn" onClick={generate}>
              Generate Result
            </button>
          </div>

          {/* 🎉 Celebration */}
          {showCelebration && (
            <div className="celebration-overlay">
              <div className="celebration-box">
                🎉
                <br />
                <span>Result Generated!</span>
              </div>
              {confetti.map((c) => (
                <div
                  key={c.id}
                  className="confetti"
                  style={{
                    left: `${c.left}%`,
                    backgroundColor: c.color,
                    animationDelay: `${c.delay}s`,
                  }}
                />
              ))}
            </div>
          )}

          {/* 📝 Report Card */}
          {card && !showCelebration && (
            <>
              <div className="report-section" ref={cardRef}>
                <h3>Campus Cool — Result</h3>
                <p>
                  <strong>Student ID:</strong> {card.id}
                </p>
                <p>
                  <strong>Semester:</strong> {card.semester}
                </p>
                <p>
                  <strong>Generated On:</strong> {card.generatedOn}
                </p>

                <div className="report-lists two-col">
                  <div>
                    <h4>Subjects & Grades</h4>
                    <ul className="grade-list">
                      {card.rows.map((r, i) => (
                        <li key={i}>
                          <span>{r.subject}</span>
                          <span
                            className={`badge ${
                              r.grade === "E" ? "bad" : "ok"
                            }`}
                          >
                            {r.grade}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Summary</h4>
                    <p>
                      <strong>Final Grade:</strong> {card.finalGrade}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      {card.status === "Pass" ? "✅ Pass" : "❌ Fail"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="download-buttons">
                <button className="pdf-btn" onClick={downloadPDF}>
                  📥 Download PDF
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Result;

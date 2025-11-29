// // import React, { useState, useRef } from "react";
// // import "../styles/attendance.css";
// // import jsPDF from "jspdf";
// // import html2canvas from "html2canvas";
// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// // } from "recharts";

// // const Attendance = () => {
// //   const [startId, setStartId] = useState("");
// //   const [endId, setEndId] = useState("");
// //   const [absentInput, setAbsentInput] = useState("");
// //   const [department, setDepartment] = useState("");
// //   const [className, setClassName] = useState("");
// //   const [report, setReport] = useState(null);

// //   const [studentId, setStudentId] = useState(""); // for view attendance by ID
// //   const [studentAttendance, setStudentAttendance] = useState(null);

// //   const reportRef = useRef();

// //   const subjects = ["Maths", "Physics", "Chemistry", "CS", "English"];

// //   const generateReport = () => {
// //     if (!startId || !endId) {
// //       alert("Please enter start and end ID range");
// //       return;
// //     }
// //     if (!department || !className) {
// //       alert("Please enter both Department and Class Name");
// //       return;
// //     }

// //     const start = parseInt(startId);
// //     const end = parseInt(endId);

// //     if (start > end) {
// //       alert("Start ID should be less than End ID");
// //       return;
// //     }

// //     const allIds = [];
// //     for (let i = start; i <= end; i++) {
// //       allIds.push(i);
// //     }

// //     let absentIds = [];
// //     if (absentInput.trim() !== "") {
// //       absentIds = absentInput
// //         .split(",")
// //         .map((id) => parseInt(id.trim()))
// //         .filter((id) => !isNaN(id) && id >= start && id <= end);
// //     }

// //     const presentIds = allIds.filter((id) => !absentIds.includes(id));

// //     setReport({
// //       department,
// //       className,
// //       present: presentIds,
// //       absent: absentIds,
// //       generatedOn: new Date().toLocaleString(),
// //     });
// //   };

// //   // ✅ Download as PDF
// //   const downloadPDF = () => {
// //     const input = reportRef.current;
// //     const today = new Date().toISOString().split("T")[0];
// //     const fileName = `${report.department}_${report.className}_${today}.pdf`;

// //     html2canvas(input, { scale: 2 }).then((canvas) => {
// //       const imgData = canvas.toDataURL("image/png");
// //       const pdf = new jsPDF("p", "mm", "a4");
// //       const imgProps = pdf.getImageProperties(imgData);
// //       const pdfWidth = pdf.internal.pageSize.getWidth();
// //       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
// //       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
// //       pdf.save(fileName);
// //     });
// //   };

// //   // ✅ Download as JPG
// //   const downloadJPG = () => {
// //     const input = reportRef.current;
// //     const today = new Date().toISOString().split("T")[0];
// //     const fileName = `${report.department}_${report.className}_${today}.jpg`;

// //     html2canvas(input, { scale: 2 }).then((canvas) => {
// //       const link = document.createElement("a");
// //       link.download = fileName;
// //       link.href = canvas.toDataURL("image/jpeg", 0.9);
// //       link.click();
// //     });
// //   };

// //   // ✅ Generate random attendance for a single student
// //   const viewAttendanceById = () => {
// //     if (!studentId.match(/^(cs|it|ce)\d+$/i)) {
// //       alert("Invalid ID format! Use cs001, it123, ce456 etc.");
// //       return;
// //     }

// //     const data = subjects.map((sub) => ({
// //       subject: sub,
// //       percentage: Math.floor(Math.random() * 41) + 50, // random 50-90%
// //     }));

// //     setStudentAttendance({ id: studentId.toUpperCase(), data });
// //   };

// //   return (
// //     <div classname="whole">
// //     <div className="attendance-container">
// //       <h2>📌 Attendance Management</h2>

// //       {/* Section 1 - Range Attendance */}
// //       <div className="input-section">
// //         <label>Department:</label>
// //         <input
// //           type="text"
// //           value={department}
// //           onChange={(e) => setDepartment(e.target.value)}
// //           placeholder="Enter department name"
// //         />

// //         <label>Class Name:</label>
// //         <input
// //           type="text"
// //           value={className}
// //           onChange={(e) => setClassName(e.target.value)}
// //           placeholder="Enter class name"
// //         />

// //         <label>Start ID:</label>
// //         <input
// //           type="number"
// //           value={startId}
// //           onChange={(e) => setStartId(e.target.value)}
// //           placeholder="Enter start ID"
// //         />

// //         <label>End ID:</label>
// //         <input
// //           type="number"
// //           value={endId}
// //           onChange={(e) => setEndId(e.target.value)}
// //           placeholder="Enter end ID"
// //         />

// //         <label>Absent IDs (comma separated):</label>
// //         <input
// //           type="text"
// //           value={absentInput}
// //           onChange={(e) => setAbsentInput(e.target.value)}
// //           placeholder="e.g. 2, 5, 10"
// //         />

// //         <button className="generate-btn" onClick={generateReport}>
// //           Generate Report
// //         </button>
// //       </div>

// //       {report && (
// //         <div className="report-section" ref={reportRef}>
// //           <h3>📊 Attendance Report</h3>
// //           <p>
// //             <strong>Department:</strong> {report.department}
// //           </p>
// //           <p>
// //             <strong>Class:</strong> {report.className}
// //           </p>
// //           <p>
// //             <strong>Total Students:</strong>{" "}
// //             {report.present.length + report.absent.length}
// //           </p>
// //           <p>
// //             <strong>Present:</strong> {report.present.length}
// //           </p>
// //           <p>
// //             <strong>Absent:</strong> {report.absent.length}
// //           </p>
// //           <p>
// //             <strong>Report Generated On:</strong> {report.generatedOn}
// //           </p>

// //           <div className="report-lists">
// //             <div>
// //               <h4>✅ Present IDs</h4>
// //               <p>{report.present.join(", ") || "None"}</p>
// //             </div>
// //             <div>
// //               <h4>❌ Absent IDs</h4>
// //               <p>{report.absent.join(", ") || "None"}</p>
// //             </div>
// //           </div>

// //           <div className="download-buttons">
// //             <button onClick={downloadPDF} className="pdf-btn">
// //               📥 Download as PDF
// //             </button>
// //             <button onClick={downloadJPG} className="jpg-btn">
// //               📸 Download as JPG
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Section 2 - View by ID */}
// //       <div className="view-id-section">
// //         <h3>🔍 View Attendance by Student ID</h3>
// //         <input
// //           type="text"
// //           value={studentId}
// //           onChange={(e) => setStudentId(e.target.value)}
// //           placeholder="Enter ID (e.g. cs001)"
// //         />
// //         <button onClick={viewAttendanceById} className="view-btn">
// //           View Attendance
// //         </button>

// //         {studentAttendance && (
// //           <div className="student-report">
// //             <h4>📌 Attendance for {studentAttendance.id}</h4>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <BarChart data={studentAttendance.data}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="subject" />
// //                 <YAxis domain={[0, 100]} />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Bar dataKey="percentage" fill="#8884d8" />
// //               </BarChart>
// //             </ResponsiveContainer>

// //             {/* ✅ Overall Average Attendance */}
// //             <div style={{ marginTop: "20px", textAlign: "center" }}>
// //               <h4>
// //                 📌 Overall Average Attendance:{" "}
// //                 {(
// //                   studentAttendance.data.reduce(
// //                     (sum, sub) => sum + sub.percentage,
// //                     0
// //                   ) / studentAttendance.data.length
// //                 ).toFixed(2)}
// //                 %
// //               </h4>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //     </div>
// //   );
// // };

// // export default Attendance;

// import React, { useState, useRef } from "react";
// import "../styles/attendance.css";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const Attendance = () => {
//   const [startId, setStartId] = useState("");
//   const [endId, setEndId] = useState("");
//   const [absentInput, setAbsentInput] = useState("");
//   const [department, setDepartment] = useState("");
//   const [className, setClassName] = useState("");
//   const [report, setReport] = useState(null);

//   const [studentId, setStudentId] = useState("");
//   const [studentAttendance, setStudentAttendance] = useState(null);

//   const reportRef = useRef();

//   const subjects = ["Maths", "Physics", "Chemistry", "CS", "English"];

//   const generateReport = () => {
//     if (!startId || !endId) {
//       alert("Please enter start and end ID range");
//       return;
//     }
//     if (!department || !className) {
//       alert("Please enter both Department and Class Name");
//       return;
//     }

//     const start = parseInt(startId);
//     const end = parseInt(endId);

//     if (start > end) {
//       alert("Start ID should be less than End ID");
//       return;
//     }

//     const allIds = [];
//     for (let i = start; i <= end; i++) {
//       allIds.push(i);
//     }

//     let absentIds = [];
//     if (absentInput.trim() !== "") {
//       absentIds = absentInput
//         .split(",")
//         .map((id) => parseInt(id.trim()))
//         .filter((id) => !isNaN(id) && id >= start && id <= end);
//     }

//     const presentIds = allIds.filter((id) => !absentIds.includes(id));

//     setReport({
//       department,
//       className,
//       present: presentIds,
//       absent: absentIds,
//       generatedOn: new Date().toLocaleString(),
//     });
//   };

//   const downloadPDF = () => {
//     const input = reportRef.current;
//     const today = new Date().toISOString().split("T")[0];
//     const fileName = `${report.department}_${report.className}_${today}.pdf`;

//     html2canvas(input, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4");
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save(fileName);
//     });
//   };

//   const downloadJPG = () => {
//     const input = reportRef.current;
//     const today = new Date().toISOString().split("T")[0];
//     const fileName = `${report.department}_${report.className}_${today}.jpg`;

//     html2canvas(input, { scale: 2 }).then((canvas) => {
//       const link = document.createElement("a");
//       link.download = fileName;
//       link.href = canvas.toDataURL("image/jpeg", 0.9);
//       link.click();
//     });
//   };

//   const viewAttendanceById = () => {
//     if (!studentId.match(/^(cs|it|ce)\d+$/i)) {
//       alert("Invalid ID format! Use cs001, it123, ce456 etc.");
//       return;
//     }

//     const data = subjects.map((sub) => ({
//       subject: sub,
//       percentage: Math.floor(Math.random() * 41) + 50,
//     }));

//     setStudentAttendance({ id: studentId.toUpperCase(), data });
//   };

//   return (
//     <div className="attendance-page">
//       <div className="attendance-container">
//         <h2>📌 Attendance Management</h2>

//         {/* Section 1 - Range Attendance */}
//         <div className="input-section">
//           <label>Department:</label>
//           <input
//             type="text"
//             value={department}
//             onChange={(e) => setDepartment(e.target.value)}
//             placeholder="Enter department name"
//           />

//           <label>Class Name:</label>
//           <input
//             type="text"
//             value={className}
//             onChange={(e) => setClassName(e.target.value)}
//             placeholder="Enter class name"
//           />

//           <label>Start ID:</label>
//           <input
//             type="number"
//             value={startId}
//             onChange={(e) => setStartId(e.target.value)}
//             placeholder="Enter start ID"
//           />

//           <label>End ID:</label>
//           <input
//             type="number"
//             value={endId}
//             onChange={(e) => setEndId(e.target.value)}
//             placeholder="Enter end ID"
//           />

//           <label>Absent IDs (comma separated):</label>
//           <input
//             type="text"
//             value={absentInput}
//             onChange={(e) => setAbsentInput(e.target.value)}
//             placeholder="e.g. 2, 5, 10"
//           />

//           <button className="generate-btn" onClick={generateReport}>
//             Generate Report
//           </button>
//         </div>

//         {report && (
//           <div className="report-section" ref={reportRef}>
//             <h3>📊 Attendance Report</h3>
//             <p>
//               <strong>Department:</strong> {report.department}
//             </p>
//             <p>
//               <strong>Class:</strong> {report.className}
//             </p>
//             <p>
//               <strong>Total Students:</strong>{" "}
//               {report.present.length + report.absent.length}
//             </p>
//             <p>
//               <strong>Present:</strong> {report.present.length}
//             </p>
//             <p>
//               <strong>Absent:</strong> {report.absent.length}
//             </p>
//             <p>
//               <strong>Report Generated On:</strong> {report.generatedOn}
//             </p>

//             <div className="report-lists">
//               <div>
//                 <h4>✅ Present IDs</h4>
//                 <p>{report.present.join(", ") || "None"}</p>
//               </div>
//               <div>
//                 <h4>❌ Absent IDs</h4>
//                 <p>{report.absent.join(", ") || "None"}</p>
//               </div>
//             </div>

//             <div className="download-buttons">
//               <button onClick={downloadPDF} className="pdf-btn">
//                 📥 Download as PDF
//               </button>
//               <button onClick={downloadJPG} className="jpg-btn">
//                 📸 Download as JPG
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Section 2 - View by ID */}
//         <div className="view-id-section">
//           <h3>🔍 View Attendance by Student ID</h3>
//           <input
//             type="text"
//             value={studentId}
//             onChange={(e) => setStudentId(e.target.value)}
//             placeholder="Enter ID (e.g. cs001)"
//           />
//           <button onClick={viewAttendanceById} className="view-btn">
//             View Attendance
//           </button>

//           {studentAttendance && (
//             <div className="student-report">
//               <h4>📌 Attendance for {studentAttendance.id}</h4>
//               <ResponsiveContainer width="100%" height={300}>
//                 <BarChart data={studentAttendance.data}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="subject" />
//                   <YAxis domain={[0, 100]} />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="percentage" fill="#8884d8" />
//                 </BarChart>
//               </ResponsiveContainer>

//               <div style={{ marginTop: "20px", textAlign: "center" }}>
//                 <h4>
//                   📌 Overall Average Attendance:{" "}
//                   {(
//                     studentAttendance.data.reduce(
//                       (sum, sub) => sum + sub.percentage,
//                       0
//                     ) / studentAttendance.data.length
//                   ).toFixed(2)}
//                   %
//                 </h4>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Attendance;

// Add imports ...
import React, { useState, useRef, useEffect } from "react";
import API from "../api";
import { toast } from "react-toastify";
import "../styles/attendance.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PAGE_PASSWORD = "yash";

const Attendance = () => {
  const [startId, setStartId] = useState("");
  const [endId, setEndId] = useState("");
  const [absentInput, setAbsentInput] = useState("");
  const [department, setDepartment] = useState("");
  const [className, setClassName] = useState("");
  const [report, setReport] = useState(null);

  const [studentId, setStudentId] = useState("");
  const [studentAttendance, setStudentAttendance] = useState(null);

  const reportRef = useRef();

  const [locked, setLocked] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");

  const subjects = ["Maths", "Physics", "Chemistry", "CS", "English"];

  // 🔒 Check lock status from backend
  const checkLock = async () => {
    try {
      const res = await API.get("/locks");
      if (res.data?.attendance) setLocked(true);
    } catch {
      console.error("Failed to fetch lock state");
    }
  };

  useEffect(() => {
    checkLock();
  }, []);

  // Attendance functions
  const generateReport = () => {
    if (!startId || !endId) {
      alert("Please enter start and end ID range");
      return;
    }
    if (!department || !className) {
      alert("Please enter both Department and Class Name");
      return;
    }

    const start = parseInt(startId);
    const end = parseInt(endId);

    if (start > end) {
      alert("Start ID should be less than End ID");
      return;
    }

    const allIds = [];
    for (let i = start; i <= end; i++) {
      allIds.push(i);
    }

    let absentIds = [];
    if (absentInput.trim() !== "") {
      absentIds = absentInput
        .split(",")
        .map((id) => parseInt(id.trim()))
        .filter((id) => !isNaN(id) && id >= start && id <= end);
    }

    const presentIds = allIds.filter((id) => !absentIds.includes(id));

    setReport({
      department,
      className,
      present: presentIds,
      absent: absentIds,
      generatedOn: new Date().toLocaleString(),
    });
  };

  const downloadPDF = () => {
    const input = reportRef.current;
    const today = new Date().toISOString().split("T")[0];
    const fileName = `${report.department}_${report.className}_${today}.pdf`;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(fileName);
    });
  };

  const downloadJPG = () => {
    const input = reportRef.current;
    const today = new Date().toISOString().split("T")[0];
    const fileName = `${report.department}_${report.className}_${today}.jpg`;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const link = document.createElement("a");
      link.download = fileName;
      link.href = canvas.toDataURL("image/jpeg", 0.9);
      link.click();
    });
  };

  const viewAttendanceById = () => {
    if (!studentId.match(/^(cs|it|ce)\d+$/i)) {
      alert("Invalid ID format! Use cs001, it123, ce456 etc.");
      return;
    }

    const data = subjects.map((sub) => ({
      subject: sub,
      percentage: Math.floor(Math.random() * 41) + 50,
    }));

    setStudentAttendance({ id: studentId.toUpperCase(), data });
  };

  // 🔒 Show lock screen if locked
  if (locked && !unlocked) {
    return (
      <div className="locked-page">
        <div className="locked-box">
          <h2>🔒 Attendance Page Locked</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="locked-input"
          />
          <button
            className="locked-btn"
            onClick={() => {
              if (password === PAGE_PASSWORD) setUnlocked(true);
              else toast.error("Incorrect password!");
            }}
          >
            Unlock
          </button>
        </div>
      </div>
    );
  }

  // ✅ Normal Attendance UI
  return (
    <div className="attendance-page">
      <div className="attendance-container">
        <h2>📌 Attendance Management</h2>

        {/* Section 1 - Range Attendance */}
        <div className="input-section">
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter department name"
          />
          <label>Class Name:</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter class name"
          />
          <label>Start ID:</label>
          <input
            type="number"
            value={startId}
            onChange={(e) => setStartId(e.target.value)}
            placeholder="Enter start ID"
          />
          <label>End ID:</label>
          <input
            type="number"
            value={endId}
            onChange={(e) => setEndId(e.target.value)}
            placeholder="Enter end ID"
          />
          <label>Absent IDs (comma separated):</label>
          <input
            type="text"
            value={absentInput}
            onChange={(e) => setAbsentInput(e.target.value)}
            placeholder="e.g. 2, 5, 10"
          />
          <button className="generate-btn" onClick={generateReport}>
            Generate Report
          </button>
        </div>

        {report && (
          <div className="report-section" ref={reportRef}>
            <h3>📊 Attendance Report</h3>
            <p><strong>Department:</strong> {report.department}</p>
            <p><strong>Class:</strong> {report.className}</p>
            <p><strong>Total Students:</strong> {report.present.length + report.absent.length}</p>
            <p><strong>Present:</strong> {report.present.length}</p>
            <p><strong>Absent:</strong> {report.absent.length}</p>
            <p><strong>Report Generated On:</strong> {report.generatedOn}</p>

            <div className="report-lists">
              <div>
                <h4>✅ Present IDs</h4>
                <p>{report.present.join(", ") || "None"}</p>
              </div>
              <div>
                <h4>❌ Absent IDs</h4>
                <p>{report.absent.join(", ") || "None"}</p>
              </div>
            </div>

            <div className="download-buttons">
              <button onClick={downloadPDF} className="pdf-btn">📥 Download as PDF</button>
              <button onClick={downloadJPG} className="jpg-btn">📸 Download as JPG</button>
            </div>
          </div>
        )}

        {/* Section 2 - View by ID */}
        <div className="view-id-section">
          <h3>🔍 View Attendance by Student ID</h3>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Enter ID (e.g. cs001)"
          />
          <button onClick={viewAttendanceById} className="view-btn">
            View Attendance
          </button>

          {studentAttendance && (
            <div className="student-report">
              <h4>📌 Attendance for {studentAttendance.id}</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={studentAttendance.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="percentage" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <h4>
                  📌 Overall Average Attendance:{" "}
                  {(
                    studentAttendance.data.reduce(
                      (sum, sub) => sum + sub.percentage,
                      0
                    ) / studentAttendance.data.length
                  ).toFixed(2)}
                  %
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;

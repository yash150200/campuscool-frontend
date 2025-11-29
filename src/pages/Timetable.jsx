// // // import React, { useState } from "react";
// // // import "../styles/timetable.css";

// // // const Timetable = () => {
// // //   const [className, setClassName] = useState("");
// // //   const [timetable, setTimetable] = useState([]);

// // //   const times = [
// // //     "9:10 - 10:10",
// // //     "10:10 - 11:10",
// // //     "11:10 - 12:10 (Break)",
// // //     "12:10 - 1:10",
// // //     "1:10 - 2:10",
// // //     "2:10 - 2:20 (Break)",
// // //     "2:20 - 3:20",
// // //     "3:20 - 4:20"
// // //   ];

// // //   const subjects = [
// // //     "Data Structures",
// // //     "Operating Systems",
// // //     "DBMS",
// // //     "Computer Networks",
// // //     "Web Tech",
// // //     "AI/ML",
// // //     "Cloud Computing",
// // //     "Compiler Design"
// // //   ];

// // //   const generateTimetable = () => {
// // //     const generated = times.map((slot) => {
// // //       if (slot.includes("Break")) return { time: slot, subject: "Break" };
// // //       return { time: slot, subject: subjects[Math.floor(Math.random() * subjects.length)] };
// // //     });
// // //     setTimetable(generated);
// // //   };

// // //   return (
// // //     <div className="timetable-container">
// // //       <h2>Class Timetable</h2>
// // //       <input
// // //         type="text"
// // //         placeholder="Enter class (e.g. 4CSE1, 4IT1)"
// // //         value={className}
// // //         onChange={(e) => setClassName(e.target.value)}
// // //       />
// // //       <button onClick={generateTimetable}>Show Timetable</button>

// // //       {timetable.length > 0 && (
// // //         <table>
// // //           <thead>
// // //             <tr>
// // //               <th>Time</th>
// // //               <th>Subject</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {timetable.map((row, idx) => (
// // //               <tr key={idx}>
// // //                 <td>{row.time}</td>
// // //                 <td>{row.subject}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Timetable;
// // import React, { useState, useEffect } from "react";
// // import "../styles/timetable.css";

// // const Timetable = () => {
// //   const [className, setClassName] = useState("");
// //   const [timetable, setTimetable] = useState([]);
// //   const [time, setTime] = useState(new Date());

// //   const times = [
// //     "9:10 - 10:10",
// //     "10:10 - 11:10",
// //     "11:10 - 12:10 (Break)",
// //     "12:10 - 1:10",
// //     "1:10 - 2:10",
// //     "2:10 - 2:20 (Break)",
// //     "2:20 - 3:20",
// //     "3:20 - 4:20"
// //   ];

// //   const subjects = [
// //     "Data Structures",
// //     "Operating Systems",
// //     "DBMS",
// //     "Computer Networks",
// //     "Web Tech",
// //     "AI/ML",
// //     "Cloud Computing",
// //     "Compiler Design"
// //   ];

// //   useEffect(() => {
// //     const timer = setInterval(() => setTime(new Date()), 1000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const generateTimetable = () => {
// //     const generated = times.map((slot) => {
// //       if (slot.includes("Break")) return { time: slot, subject: "Break" };
// //       return {
// //         time: slot,
// //         subject: subjects[Math.floor(Math.random() * subjects.length)],
// //       };
// //     });
// //     setTimetable(generated);
// //   };

// //   // Clock hands rotation
// //   const seconds = time.getSeconds() * 6;
// //   const minutes = time.getMinutes() * 6 + seconds / 60;
// //   const hours = ((time.getHours() % 12) / 12) * 360 + minutes / 12;

// //   return (
// //     <div className="timetable-page">
// //       {/* ⏰ Live Clock */}
// //       <div className="clock">
// //         <div className="hand hour" style={{ transform: `rotate(${hours}deg)` }}></div>
// //         <div className="hand minute" style={{ transform: `rotate(${minutes}deg)` }}></div>
// //         <div className="hand second" style={{ transform: `rotate(${seconds}deg)` }}></div>
// //         <div className="center-dot"></div>
// //       </div>

// //       {/* Timetable Container */}
// //       <div className="timetable-container">
// //         <h2>Class Timetable</h2>
// //         <input
// //           type="text"
// //           placeholder="Enter class (e.g. 4CSE1, 4IT1)"
// //           value={className}
// //           onChange={(e) => setClassName(e.target.value)}
// //         />
// //         <button onClick={generateTimetable}>Show Timetable</button>

// //         {timetable.length > 0 && (
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Time</th>
// //                 <th>Subject</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {timetable.map((row, idx) => (
// //                 <tr key={idx}>
// //                   <td>{row.time}</td>
// //                   <td>{row.subject}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Timetable;
import React, { useState, useEffect } from "react";
import "../styles/timetable.css";

const API_BASE = "http://localhost:5000";

const Timetable = () => {
  const [className, setClassName] = useState("");
  const [timetable, setTimetable] = useState([]);
  const [time, setTime] = useState(new Date());

  // 🔒 Lock state
  const [locked, setLocked] = useState(false);
  const [unlockPass, setUnlockPass] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const times = [
    "9:10 - 10:10",
    "10:10 - 11:10",
    "11:10 - 12:10 (Break)",
    "12:10 - 1:10",
    "1:10 - 2:10",
    "2:10 - 2:20 (Break)",
    "2:20 - 3:20",
    "3:20 - 4:20",
  ];

  const subjects = [
    "Data Structures",
    "Operating Systems",
    "DBMS",
    "Computer Networks",
    "Web Tech",
    "AI/ML",
    "Cloud Computing",
    "Compiler Design",
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch(`${API_BASE}/api/locks`)
      .then((res) => res.json())
      .then((data) => setLocked(data.timetable));
  }, []);

  const generateTimetable = () => {
    const generated = times.map((slot) =>
      slot.includes("Break")
        ? { time: slot, subject: "Break" }
        : { time: slot, subject: subjects[Math.floor(Math.random() * subjects.length)] }
    );
    setTimetable(generated);
  };

  const seconds = time.getSeconds() * 6;
  const minutes = time.getMinutes() * 6 + seconds / 60;
  const hours = ((time.getHours() % 12) / 12) * 360 + minutes / 12;

  return (
    <div className="timetable-page">
      {locked && !unlocked ? (
        <div className="lock-screen">
          <h2>🔒 Timetable Page Locked</h2>
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
        <>
          <div className="clock">
            <div
              className="hand hour"
              style={{ transform: `rotate(${hours}deg)` }}
            ></div>
            <div
              className="hand minute"
              style={{ transform: `rotate(${minutes}deg)` }}
            ></div>
            <div
              className="hand second"
              style={{ transform: `rotate(${seconds}deg)` }}
            ></div>
            <div className="center-dot"></div>
          </div>

          <div className="timetable-container">
            <h2>Class Timetable</h2>
            <input
              type="text"
              placeholder="Enter class (e.g. 4CSE1, 4IT1)"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
            <button onClick={generateTimetable}>Show Timetable</button>

            {timetable.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.time}</td>
                      <td>{row.subject}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Timetable;


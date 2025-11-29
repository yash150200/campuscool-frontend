
// // import React, { useRef, useState } from "react";
// // import jsPDF from "jspdf";
// // import html2canvas from "html2canvas";
// // import "../styles/fees.css";

// // const TOTAL_FEES = 51000;

// // // ✅ Allowed ID format: cs### / ce### / it###
// // const idPattern = /^(cs|ce|it)\d{3}$/i;

// // const Fees = () => {
// //   const [studentId, setStudentId] = useState("");
// //   const [semester, setSemester] = useState("");
// //   const [method, setMethod] = useState("GPay");
// //   const [amountToPay, setAmountToPay] = useState(TOTAL_FEES);
// //   const [receipt, setReceipt] = useState(null);
// //   const [showGateway, setShowGateway] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [showSuccess, setShowSuccess] = useState(false); // ✅ thumbs-up state

// //   const receiptRef = useRef(null);

// //   const handlePaymentClick = () => {
// //     if (!studentId.trim()) {
// //       alert("Please enter Student ID");
// //       return;
// //     }
// //     if (!idPattern.test(studentId)) {
// //       alert("❌ Invalid Student ID. Use format like cs101, it202, ce303");
// //       return;
// //     }
// //     if (!semester) {
// //       alert("Please select semester");
// //       return;
// //     }
// //     const amt = Number(amountToPay);
// //     if (Number.isNaN(amt) || amt <= 0) {
// //       alert("Enter a valid amount to pay");
// //       return;
// //     }
// //     // ✅ Open fake gateway modal
// //     setShowGateway(true);
// //   };

// //   const processPayment = () => {
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       setShowGateway(false);

// //       const paid = Math.min(Number(amountToPay), TOTAL_FEES);
// //       const pending = Math.max(0, TOTAL_FEES - paid);
// //       const txnId = "TXN" + Math.floor(100000 + Math.random() * 900000);
// //       const date = new Date().toLocaleString();

// //       const receiptData = {
// //         studentId,
// //         semester,
// //         method,
// //         paid,
// //         pending,
// //         total: TOTAL_FEES,
// //         txnId,
// //         date,
// //       };

// //       // ✅ Show thumbs-up first
// //       setShowSuccess(true);

// //       // ✅ After 2s, hide thumbs-up and show receipt
// //       setTimeout(() => {
// //         setShowSuccess(false);
// //         setReceipt(receiptData);
// //       }, 2000);
// //     }, 2500); // simulate 2.5 sec delay
// //   };

// //   const downloadPDF = async () => {
// //     if (!receiptRef.current) return;
// //     const canvas = await html2canvas(receiptRef.current, { scale: 2, backgroundColor: "#ffffff" });
// //     const imgData = canvas.toDataURL("image/png");
// //     const pdf = new jsPDF("p", "mm", "a4");
// //     const pdfW = pdf.internal.pageSize.getWidth();
// //     const imgProps = pdf.getImageProperties(imgData);
// //     const pdfH = (imgProps.height * pdfW) / imgProps.width;
// //     pdf.addImage(imgData, "PNG", 0, 0, pdfW, pdfH);
// //     const today = new Date().toISOString().split("T")[0];
// //     pdf.save(`fees_${receipt.studentId}_sem${receipt.semester}_${today}.pdf`);
// //   };

// //   return (
// //     <div className="fees-page">
// //       <div className="fees-container">
// //         <h2>💳 Fees Payment</h2>

// //         <div className="input-section">
// //           <label>Student ID (cs### / it### / ce###)</label>
// //           <input
// //             type="text"
// //             value={studentId}
// //             onChange={(e) => setStudentId(e.target.value)}
// //             placeholder="e.g. cs101"
// //           />

// //           <label>Semester</label>
// //           <select value={semester} onChange={(e) => setSemester(e.target.value)}>
// //             <option value="">-- Select Semester --</option>
// //             {Array.from({ length: 8 }, (_, i) => i + 1).map((s) => (
// //               <option key={s} value={s}>{s}</option>
// //             ))}
// //           </select>

// //           <label>Payment Method</label>
// //           <select value={method} onChange={(e) => setMethod(e.target.value)}>
// //             <option>GPay</option>
// //             <option>UPI</option>
// //             <option>Credit Card</option>
// //           </select>

// //           <label>Amount to Pay (₹)</label>
// //           <input
// //             type="number"
// //             value={amountToPay}
// //             onChange={(e) => setAmountToPay(e.target.value)}
// //             placeholder="51000"
// //           />

// //           <button className="generate-btn" onClick={handlePaymentClick}>
// //             Make Payment
// //           </button>
// //         </div>

// //         {/* ✅ Fake Payment Gateway Popup */}
// //         {showGateway && (
// //           <div className="gateway-overlay">
// //             <div className="gateway-box">
// //               <h3>🔒 Secure Payment Gateway</h3>
// //               <p>Paying <b>₹{amountToPay}</b> via <b>{method}</b></p>

// //               {loading ? (
// //                 <p className="processing">Processing Payment...</p>
// //               ) : (
// //                 <>
// //                   {method === "Credit Card" && (
// //                     <>
// //                       <input type="text" placeholder="Card Number" className="gateway-input" />
// //                       <div className="gateway-flex">
// //                         <input type="text" placeholder="MM/YY" className="gateway-input" />
// //                         <input type="password" placeholder="CVV" className="gateway-input" />
// //                       </div>
// //                     </>
// //                   )}
// //                   {method === "UPI" && (
// //                     <input type="text" placeholder="yourupi@bank" className="gateway-input" />
// //                   )}
// //                   {method === "GPay" && (
// //                     <input type="text" placeholder="yourmobile@upi" className="gateway-input" />
// //                   )}

// //                   <button className="pay-btn" onClick={processPayment}>Pay Now</button>
// //                   <button className="cancel-btn" onClick={() => setShowGateway(false)}>Cancel</button>
// //                 </>
// //               )}
// //             </div>
// //           </div>
// //         )}

// //         {/* ✅ Success Animation */}
// //         {showSuccess && (
// //           <div className="success-overlay">
// //             <div className="success-box">
// //               <div className="thumbs-up">👍</div>
// //               <p>Payment Successful!</p>
// //             </div>
// //           </div>
// //         )}

// //         {receipt && (
// //           <>
// //             <div className="report-section" ref={receiptRef}>
// //               <h3>🏫 Campus Cool — Fee Receipt</h3>
// //               <p><strong>Date:</strong> {receipt.date}</p>
// //               <p><strong>Student ID:</strong> {receipt.studentId}</p>
// //               <p><strong>Semester:</strong> {receipt.semester}</p>
// //               <p><strong>Payment Method:</strong> {receipt.method}</p>
// //               <hr />
// //               <p><strong>Total Fees:</strong> ₹{receipt.total.toLocaleString()}</p>
// //               <p><strong>Amount Paid:</strong> ₹{receipt.paid.toLocaleString()}</p>
// //               <p><strong>Pending Amount:</strong> ₹{receipt.pending.toLocaleString()}</p>
// //               <p><strong>Transaction ID:</strong> {receipt.txnId}</p>
// //               <p><strong>Status:</strong> Payment Successful ✅</p>
// //             </div>

// //             <div className="download-buttons">
// //               <button className="pdf-btn" onClick={downloadPDF}>📥 Download Receipt (PDF)</button>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Fees;
// import React, { useRef, useState, useEffect } from "react";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import "../styles/fees.css";

// const TOTAL_FEES = 51000;
// const idPattern = /^(cs|ce|it)\d{3}$/i;
// const API_BASE = "http://localhost:5000";

// const Fees = () => {
//   const [studentId, setStudentId] = useState("");
//   const [semester, setSemester] = useState("");
//   const [method, setMethod] = useState("GPay");
//   const [amountToPay, setAmountToPay] = useState(TOTAL_FEES);
//   const [receipt, setReceipt] = useState(null);
//   const [showGateway, setShowGateway] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   // 🔒 Lock
//   const [locked, setLocked] = useState(false);
//   const [unlockPass, setUnlockPass] = useState("");
//   const [unlocked, setUnlocked] = useState(false);
//   const receiptRef = useRef(null);

//   useEffect(() => {
//     fetch(`${API_BASE}/api/locks`)
//       .then((res) => res.json())
//       .then((data) => setLocked(data.fees));
//   }, []);

//   if (locked && !unlocked) {
//     return (
//       <div className="lock-screen">
//         <h2>🔒 Fees Page Locked</h2>
//         <input
//           type="password"
//           value={unlockPass}
//           onChange={(e) => setUnlockPass(e.target.value)}
//         />
//         <button
//           onClick={() =>
//             unlockPass === "yash"
//               ? setUnlocked(true)
//               : alert("Wrong password!")
//           }
//         >
//           Unlock
//         </button>
//       </div>
//     );
//   }

//   const handlePaymentClick = () => {
//     if (!studentId.trim() || !idPattern.test(studentId))
//       return alert("Invalid Student ID");
//     if (!semester) return alert("Select semester");
//     if (!amountToPay || amountToPay <= 0) return alert("Invalid amount");
//     setShowGateway(true);
//   };

//   const processPayment = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setShowGateway(false);
//       const paid = Math.min(Number(amountToPay), TOTAL_FEES);
//       const pending = Math.max(0, TOTAL_FEES - paid);
//       const txnId = "TXN" + Math.floor(100000 + Math.random() * 900000);
//       const date = new Date().toLocaleString();
//       setShowSuccess(true);
//       setTimeout(() => {
//         setShowSuccess(false);
//         setReceipt({
//           studentId,
//           semester,
//           method,
//           paid,
//           pending,
//           total: TOTAL_FEES,
//           txnId,
//           date,
//         });
//       }, 2000);
//     }, 2000);
//   };

//   const downloadPDF = async () => {
//     if (!receiptRef.current) return;
//     const canvas = await html2canvas(receiptRef.current, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");
//     pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
//     pdf.save(`fees_${receipt.studentId}.pdf`);
//   };

//   return (
//     <div className="fees-page">
//       <h2>💳 Fees Payment</h2>
//       {/* keep original form, gateway, success and receipt UI */}
//     </div>
//   );
// };

// export default Fees;
import React, { useRef, useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../styles/fees.css";

const TOTAL_FEES = 51000;
const idPattern = /^(cs|ce|it)\d{3}$/i;
const API_BASE = "http://localhost:5000";

const Fees = () => {
  const [studentId, setStudentId] = useState("");
  const [semester, setSemester] = useState("");
  const [method, setMethod] = useState("GPay");
  const [amountToPay, setAmountToPay] = useState(TOTAL_FEES);
  const [receipt, setReceipt] = useState(null);
  const [showGateway, setShowGateway] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // 🔒 Lock system
  const [locked, setLocked] = useState(false);
  const [unlockPass, setUnlockPass] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const receiptRef = useRef(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/locks`)
      .then((res) => res.json())
      .then((data) => setLocked(data.fees));
  }, []);

  if (locked && !unlocked) {
    return (
      <div className="lock-screen">
        <h2>🔒 Fees Page Locked</h2>
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
    );
  }

  const handlePaymentClick = () => {
    if (!studentId.trim()) {
      alert("Please enter Student ID");
      return;
    }
    if (!idPattern.test(studentId)) {
      alert("❌ Invalid Student ID. Use format like cs101, it202, ce303");
      return;
    }
    if (!semester) {
      alert("Please select semester");
      return;
    }
    if (amountToPay <= 0) {
      alert("Enter valid amount");
      return;
    }
    setShowGateway(true);
  };

  const processPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowGateway(false);

      const paid = Math.min(Number(amountToPay), TOTAL_FEES);
      const pending = Math.max(0, TOTAL_FEES - paid);
      const txnId = "TXN" + Math.floor(100000 + Math.random() * 900000);
      const date = new Date().toLocaleString();

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setReceipt({
          studentId,
          semester,
          method,
          paid,
          pending,
          total: TOTAL_FEES,
          txnId,
          date,
        });
      }, 2000);
    }, 2000);
  };

  const downloadPDF = async () => {
    if (!receiptRef.current) return;
    const canvas = await html2canvas(receiptRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
    pdf.save(`fees_${receipt.studentId}_sem${receipt.semester}.pdf`);
  };

  return (
    <div className="fees-page">
      <div className="fees-container">
        <h2>💳 Fees Payment</h2>

        <div className="input-section">
          <label>Student ID (cs### / it### / ce###)</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="e.g. cs101"
          />

          <label>Semester</label>
          <select value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option value="">-- Select Semester --</option>
            {Array.from({ length: 8 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <label>Payment Method</label>
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option>GPay</option>
            <option>UPI</option>
            <option>Credit Card</option>
          </select>

          <label>Amount to Pay (₹)</label>
          <input
            type="number"
            value={amountToPay}
            onChange={(e) => setAmountToPay(e.target.value)}
          />

          <button className="generate-btn" onClick={handlePaymentClick}>
            Make Payment
          </button>
        </div>

        {/* Gateway */}
        {showGateway && (
          <div className="gateway-overlay">
            <div className="gateway-box">
              <h3>🔒 Secure Payment Gateway</h3>
              <p>Paying <b>₹{amountToPay}</b> via <b>{method}</b></p>

              {loading ? (
                <p>Processing...</p>
              ) : (
                <>
                  {method === "Credit Card" && (
                    <>
                      <input placeholder="Card Number" />
                      <input placeholder="MM/YY" />
                      <input placeholder="CVV" type="password" />
                    </>
                  )}
                  {method === "UPI" && <input placeholder="yourupi@bank" />}
                  {method === "GPay" && <input placeholder="yourmobile@upi" />}
                  <button onClick={processPayment}>Pay Now</button>
                  <button onClick={() => setShowGateway(false)}>Cancel</button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Success */}
        {showSuccess && (
          <div className="success-overlay">
            <div className="success-box">
              <div className="thumbs-up">👍</div>
              <p>Payment Successful!</p>
            </div>
          </div>
        )}

        {/* Receipt */}
        {receipt && (
          <>
            <div ref={receiptRef} className="report-section">
              <h3>🏫 Campus Cool — Fee Receipt</h3>
              <p><b>Date:</b> {receipt.date}</p>
              <p><b>ID:</b> {receipt.studentId}</p>
              <p><b>Semester:</b> {receipt.semester}</p>
              <p><b>Method:</b> {receipt.method}</p>
              <p><b>Total:</b> ₹{receipt.total}</p>
              <p><b>Paid:</b> ₹{receipt.paid}</p>
              <p><b>Pending:</b> ₹{receipt.pending}</p>
              <p><b>Txn:</b> {receipt.txnId}</p>
            </div>
            <button onClick={downloadPDF}>📥 Download Receipt</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Fees;

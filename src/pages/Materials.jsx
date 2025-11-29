
// import React, { useState, useEffect } from "react";
// import API from "../api";
// import { toast } from "react-toastify";
// import "../styles/materials.css";

// const Materials = () => {
//   const [file, setFile] = useState(null);
//   const [materials, setMaterials] = useState([]);

//   const fetchMaterials = async () => {
//     try {
//       const res = await API.get("/materials");
//       setMaterials(res.data || []);
//     } catch (err) {
//       console.error("Failed to fetch materials:", err);
//       toast.error("Could not load materials");
//     }
//   };

//   useEffect(() => {
//     fetchMaterials();
//   }, []);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file) return toast.error("Please select a file");

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       await API.post("/materials/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       toast.success("Material uploaded!");
//       setFile(null);
//       fetchMaterials();
//     } catch (err) {
//       console.error("Upload error:", err);
//       toast.error(err.response?.data?.msg || "Upload failed");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this material?")) return;
//     try {
//       await API.delete(`/materials/${id}`);
//       setMaterials((prev) => prev.filter((m) => m._id !== id));
//       toast.success("Material deleted");
//     } catch (err) {
//       console.error("Single delete error:", err);
//       toast.error(err.response?.data?.msg || "Delete failed");
//     }
//   };

//   const handleDeleteAll = async () => {
//     if (!window.confirm("Delete ALL materials?")) return;
//     try {
//       await API.delete("/materials/delete-all");
//       setMaterials([]);
//       toast.success("All materials deleted");
//     } catch (err) {
//       console.error("Delete all error:", err);
//       toast.error(err.response?.data?.msg || "Delete all failed");
//     }
//   };

//   return (
//     <div className="materials-page">
//       <div className="materials-container">
//         <h2 className="page-title">Upload Material</h2>

//         {/* Upload form */}
//         <form className="materials-upload-box" onSubmit={handleUpload}>
//           <input
//             type="file"
//             onChange={(e) => setFile(e.target.files[0])}
//             aria-label="Choose file"
//             className="file-input"
//           />
//           <button type="submit" className="upload-btn">
//             Upload
//           </button>
//         </form>

//         {/* Show chosen filename */}
//         {file && (
//           <p className="file-preview">
//             Selected file: <strong>{file.name}</strong>
//           </p>
//         )}

//         {/* Uploaded materials header */}
//         <div className="materials-header">
//           <h3>Uploaded Materials</h3>
//           {materials.length > 0 && (
//             <button
//               className="delete-all-button"
//               onClick={handleDeleteAll}
//             >
//               Delete All
//             </button>
//           )}
//         </div>

//         {/* File list */}
//         {materials.length === 0 ? (
//           <p className="no-materials">No materials uploaded yet.</p>
//         ) : (
//           <div className="uploaded-list">
//             {materials.map((mat) => (
//               <div key={mat._id} className="uploaded-file">
//                 <div className="uploaded-left">
//                   <a
//                     href={mat.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="file-link"
//                   >
//                     {mat.name || mat.title || "Untitled File"}
//                   </a>
//                   <div className="uploaded-by">
//                     Uploaded by:{" "}
//                     {mat.uploadedBy?.name || mat.uploadedBy?.email || "Unknown"}
//                   </div>
//                 </div>
//                 <div className="uploaded-actions">
//                   <button
//                     className="delete-single-button"
//                     onClick={() => handleDelete(mat._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Materials;

import React, { useState, useEffect } from "react";
import API from "../api";
import { toast } from "react-toastify";
import "../styles/materials.css";

const PAGE_PASSWORD = "yash";

const Materials = () => {
  const [file, setFile] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [locked, setLocked] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");

  const fetchMaterials = async () => {
    try {
      const res = await API.get("/materials");
      setMaterials(res.data || []);
    } catch {
      toast.error("Could not load materials");
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return toast.error("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await API.post("/materials/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Material uploaded!");
      setFile(null);
      fetchMaterials();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Upload failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this material?")) return;
    try {
      await API.delete(`/materials/${id}`);
      setMaterials((prev) => prev.filter((m) => m._id !== id));
      toast.success("Material deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  const checkLock = async () => {
    try {
      const res = await API.get("/locks");
      if (res.data?.materials) setLocked(true);
    } catch {}
  };

  useEffect(() => {
    checkLock();
    fetchMaterials();
  }, []);

  if (locked && !unlocked) {
    return (
      <div className="locked-page">
        <div className="locked-box">
          <h2>🔒 Materials Page Locked</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => {
              if (password === PAGE_PASSWORD) setUnlocked(true);
              else toast.error("Wrong password");
            }}
          >
            Unlock
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="materials-page">
      <div className="materials-container">
        <h2 className="page-title">Upload Material</h2>
        <form className="materials-upload-box" onSubmit={handleUpload}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            aria-label="Choose file"
            className="file-input"
          />
          <button type="submit" className="upload-btn">Upload</button>
        </form>
        {file && <p className="file-preview">Selected file: <strong>{file.name}</strong></p>}
        <div className="materials-header">
          <h3>Uploaded Materials</h3>
        </div>
        {materials.length === 0 ? (
          <p className="no-materials">No materials uploaded yet.</p>
        ) : (
          <div className="uploaded-list">
            {materials.map((mat) => (
              <div key={mat._id} className="uploaded-file">
                <div className="uploaded-left">
                  <a href={mat.url} target="_blank" rel="noopener noreferrer" className="file-link">
                    {mat.name || "Untitled File"}
                  </a>
                </div>
                <div className="uploaded-actions">
                  <button className="delete-single-button" onClick={() => handleDelete(mat._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Materials;

// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css";

// const Profile = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const [profile, setProfile] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     id: "",
//     photo: null, // base64 or file url
//   });

//   //const [isEditing, setIsEditing] = useState(!user?.name); // show edit form if no profile
//   const [isEditing, setIsEditing] = useState(true);


//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   // Handle file upload (convert to base64 for preview)
//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfile((prev) => ({ ...prev, photo: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     // Normally save to backend (API call). For now just store in state
//     setIsEditing(false);
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <h2 className="profile-title">Profile</h2>

//         {isEditing ? (
//           <>
//             {/* Profile creation form */}
//             <div className="form-group">
//               <label>Upload Photo:</label>
//               <input type="file" accept="image/*" onChange={handlePhotoChange} />
//               {profile.photo && (
//                 <div className="profile-photo-wrapper">
//                   <img
//                     src={profile.photo}
//                     alt="Preview"
//                     className="profile-photo"
//                   />
//                 </div>
//               )}
//             </div>
//             <div className="form-group">
//               <label>ID Number:</label>
//               <input
//                 type="text"
//                 name="id"
//                 value={profile.id}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={profile.name}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={profile.email}
//                 onChange={handleChange}
//               //  disabled
//               />
//             </div>
//             <button onClick={handleSave} className="save-button">
//               Save Profile
//             </button>
//           </>
//         ) : (
//           <>
//             {/* Profile display */}
//             {profile.photo && (
//               <div className="profile-photo-wrapper">
//                 <img
//                   src={profile.photo}
//                   alt="Profile"
//                   className="profile-photo"
//                 />
//               </div>
//             )}
//             <p className="profile-field">
//               <strong>ID:</strong> {profile.id || "N/A"}
//             </p>
//             <p className="profile-field">
//               <strong>Name:</strong> {profile.name || "N/A"}
//             </p>
//             <p className="profile-field">
//               <strong>Email:</strong> {profile.email || "N/A"}
//             </p>
//             <button onClick={() => setIsEditing(true)} className="edit-button">
//               Edit Profile
//             </button>
//           </>
//         )}

//         <button onClick={handleLogout} className="logout-button">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { toast } from "react-toastify";
import "./Profile.css";

const PAGE_PASSWORD = "yash";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [locked, setLocked] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    id: "",
    photo: null,
  });
  const [isEditing, setIsEditing] = useState(true);

  const checkLock = async () => {
    try {
      const res = await API.get("/locks");
      if (res.data?.profile) setLocked(true);
    } catch {}
  };

  useEffect(() => { checkLock(); }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (locked && !unlocked) {
    return (
      <div className="locked-page">
        <div className="locked-box">
          <h2>🔒 Profile Locked</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => {
            if (password === PAGE_PASSWORD) setUnlocked(true);
            else toast.error("Wrong password");
          }}>Unlock</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Profile</h2>
        {isEditing ? (
          <>
            <div className="form-group">
              <label>Upload Photo:</label>
              <input type="file" accept="image/*" onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setProfile((prev) => ({ ...prev, photo: reader.result }));
                  };
                  reader.readAsDataURL(file);
                }
              }} />
              {profile.photo && <img src={profile.photo} alt="Preview" className="profile-photo" />}
            </div>
            <div className="form-group">
              <label>ID Number:</label>
              <input type="text" name="id" value={profile.id} onChange={(e) => setProfile({ ...profile, id: e.target.value })}/>
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })}/>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })}/>
            </div>
            <button onClick={() => setIsEditing(false)} className="save-button">Save Profile</button>
          </>
        ) : (
          <>
            {profile.photo && <img src={profile.photo} alt="Profile" className="profile-photo" />}
            <p><strong>ID:</strong> {profile.id}</p>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
          </>
        )}
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Profile;

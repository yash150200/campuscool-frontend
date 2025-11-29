// // // // import React, { useState, useEffect } from "react";
// // // // import API from "../api";
// // // // import { toast } from "react-toastify";
// // // // import "../styles/Feed.css";

// // // // const Feed = () => {
// // // //   const [content, setContent] = useState("");
// // // //   const [image, setImage] = useState(null);
// // // //   const [feeds, setFeeds] = useState([]);
// // // //   const [horizontalView, ] = useState(false); // ✅ toggle state

// // // //   const fetchFeeds = async () => {
// // // //     try {
// // // //       const res = await API.get("/feed");
// // // //       setFeeds(res.data);
// // // //     } catch (err) {
// // // //       toast.error("Failed to fetch feeds");
// // // //     }
// // // //   };

// // // //   const addFeed = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!content.trim() && !image) return toast.error("Cannot post empty feed");

// // // //     const formData = new FormData();
// // // //     formData.append("content", content);
// // // //     if (image) formData.append("image", image);

// // // //     try {
// // // //       const res = await API.post("/feed", formData, {
// // // //         headers: { "Content-Type": "multipart/form-data" },
// // // //       });
// // // //       setFeeds([res.data, ...feeds]);
// // // //       setContent("");
// // // //       setImage(null);
// // // //       toast.success("Posted!");
// // // //     } catch (err) {
// // // //       toast.error(err.response?.data?.msg || "Failed to post feed");
// // // //     }
// // // //   };

// // // //   const deleteFeed = async (id) => {
// // // //     try {
// // // //       await API.delete(`/feed/${id}`);
// // // //       setFeeds(feeds.filter((f) => f._id !== id));
// // // //       toast.success("Feed deleted");
// // // //     } catch (err) {
// // // //       toast.error("Failed to delete feed");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchFeeds();
// // // //   }, []);

// // // //   return (
// // // //     <div className="main-container">
// // // //       <h2 className="page-title">Campus Feed</h2>

// // // //       <form
// // // //         onSubmit={addFeed}
// // // //         className="form-container"
// // // //         encType="multipart/form-data"
// // // //       >
// // // //         <textarea
// // // //           className="text-input"
// // // //           placeholder="What's on your mind?"
// // // //           value={content}
// // // //           onChange={(e) => setContent(e.target.value)}
// // // //           rows={3}
// // // //         />
// // // //         <input
// // // //           type="file"
// // // //           accept="image/*"
// // // //           onChange={(e) => setImage(e.target.files[0])}
// // // //         />
// // // //         <button className="btn-grey" type="submit">
// // // //           Post
// // // //         </button>
// // // //       </form>

// // // //       {/* ✅ Toggle button */}
// // // //       {/* <button
// // // //         className="btn-grey see-posts-btn"
// // // //         onClick={() => setHorizontalView(!horizontalView)}
// // // //       >
// // // //         {horizontalView?"Back to Vertical View" : "See Posts"}
// // // //       </button> */}

// // // //       {/* Feed cards */}
// // // //       <div className={`card-list ${horizontalView ? "horizontal" : ""}`}>
// // // //         {feeds.map((feed) => (
// // // //           <div key={feed._id} className="card">
// // // //             {feed.image && (
// // // //               <img
// // // //                 src={`http://localhost:5000${feed.image}`}
// // // //                 alt="feed"
// // // //                 className="feed-image"
// // // //               />
// // // //             )}
// // // //             <p>{feed.content}</p>
// // // //             <div className="card-footer">
// // // //               <small className="timestamp">
// // // //                 {new Date(feed.createdAt).toLocaleString()}
// // // //               </small>
// // // //               <button
// // // //                 className="btn-delete"
// // // //                 onClick={() => deleteFeed(feed._id)}
// // // //               >
// // // //                 Delete
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Feed;
// // // import React, { useState, useEffect } from "react";
// // // import API from "../api";
// // // import { toast } from "react-toastify";
// // // import "../styles/Feed.css";

// // // const Feed = () => {
// // //   const [content, setContent] = useState("");
// // //   const [image, setImage] = useState(null);
// // //   const [feeds, setFeeds] = useState([]);
// // //   const [horizontalView, ] = useState(false);

// // //   const fetchFeeds = async () => {
// // //     try {
// // //       const res = await API.get("/feed");
// // //       setFeeds(res.data);
// // //     } catch (err) {
// // //       toast.error("Failed to fetch feeds");
// // //     }
// // //   };

// // //   const addFeed = async (e) => {
// // //     e.preventDefault();
// // //     if (!content.trim() && !image) return toast.error("Cannot post empty feed");

// // //     const formData = new FormData();
// // //     formData.append("content", content);
// // //     if (image) formData.append("image", image);

// // //     try {
// // //       const res = await API.post("/feed", formData, {
// // //         headers: { "Content-Type": "multipart/form-data" },
// // //       });
// // //       setFeeds([res.data, ...feeds]);
// // //       setContent("");
// // //       setImage(null);
// // //       toast.success("Posted!");
// // //     } catch (err) {
// // //       toast.error(err.response?.data?.msg || "Failed to post feed");
// // //     }
// // //   };

// // //   const deleteFeed = async (id) => {
// // //     try {
// // //       await API.delete(`/feed/${id}`);
// // //       setFeeds(feeds.filter((f) => f._id !== id));
// // //       toast.success("Feed deleted");
// // //     } catch (err) {
// // //       toast.error("Failed to delete feed");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchFeeds();
// // //   }, []);

// // //   return (
// // //     <div className="main-container">
// // //       <h2 className="page-title">Campus Feed</h2>

// // //       {/* ✅ Add background wrapper here */}
// // //       <div className="feed-content">
// // //         <form
// // //           onSubmit={addFeed}
// // //           className="form-container"
// // //           encType="multipart/form-data"
// // //         >
// // //           <textarea
// // //             className="text-input"
// // //             placeholder="What's on your mind?"
// // //             value={content}
// // //             onChange={(e) => setContent(e.target.value)}
// // //             rows={3}
// // //           />
// // //           <input
// // //             type="file"
// // //             accept="image/*"
// // //             onChange={(e) => setImage(e.target.files[0])}
// // //           />
// // //           <button className="btn-grey" type="submit">
// // //             Post
// // //           </button>
// // //         </form>

// // //         {/* Feed cards */}
// // //         <div className={`card-list ${horizontalView ? "horizontal" : ""}`}>
// // //           {feeds.map((feed) => (
// // //             <div key={feed._id} className="card">
// // //               {feed.image && (
// // //                 <img
// // //                   src={`http://localhost:5000${feed.image}`}
// // //                   alt="feed"
// // //                   className="feed-image"
// // //                 />
// // //               )}
// // //               <p>{feed.content}</p>
// // //               <div className="card-footer">
// // //                 <small className="timestamp">
// // //                   {new Date(feed.createdAt).toLocaleString()}
// // //                 </small>
// // //                 <button
// // //                   className="btn-delete"
// // //                   onClick={() => deleteFeed(feed._id)}
// // //                 >
// // //                   Delete
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Feed;
// // import React, { useState, useEffect } from "react";
// // import API from "../api";
// // import { toast } from "react-toastify";
// // import "../styles/Feed.css";

// // const Feed = () => {
// //   const [content, setContent] = useState("");
// //   const [image, setImage] = useState(null);
// //   const [feeds, setFeeds] = useState([]);

// //   const fetchFeeds = async () => {
// //     try {
// //       const res = await API.get("/feed");
// //       setFeeds(res.data);
// //     } catch (err) {
// //       toast.error("Failed to fetch feeds");
// //     }
// //   };

// //   const addFeed = async (e) => {
// //     e.preventDefault();
// //     if (!content.trim() && !image)
// //       return toast.error("Cannot post empty feed");

// //     const formData = new FormData();
// //     formData.append("content", content);
// //     if (image) formData.append("image", image);

// //     try {
// //       const res = await API.post("/feed", formData, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });
// //       setFeeds([res.data, ...feeds]);
// //       setContent("");
// //       setImage(null);
// //       toast.success("Posted!");
// //     } catch (err) {
// //       toast.error(err.response?.data?.msg || "Failed to post feed");
// //     }
// //   };

// //   const deleteFeed = async (id) => {
// //     try {
// //       await API.delete(`/feed/${id}`);
// //       setFeeds(feeds.filter((f) => f._id !== id));
// //       toast.success("Feed deleted");
// //     } catch (err) {
// //       toast.error("Failed to delete feed");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchFeeds();
// //   }, []);

// //   return (
// //     <div className="main-container">
// //       <div className="feed-content">
// //         <h2 className="page-title">Campus Feed</h2>

// //         <form
// //           onSubmit={addFeed}
// //           className="form-container"
// //           encType="multipart/form-data"
// //         >
// //           <textarea
// //             className="text-input"
// //             placeholder="What's on your mind?"
// //             value={content}
// //             onChange={(e) => setContent(e.target.value)}
// //             rows={3}
// //           />
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={(e) => setImage(e.target.files[0])}
// //           />
// //           <button className="btn-grey" type="submit">
// //             Post
// //           </button>
// //         </form>

// //         {/* Feed cards */}
// //         <div className="card-list">
// //           {feeds.map((feed) => (
// //             <div key={feed._id} className="card">
// //               {feed.image && (
// //                 <img
// //                   src={`http://localhost:5000${feed.image}`}
// //                   alt="feed"
// //                   className="feed-image"
// //                 />
// //               )}
// //               <p>{feed.content}</p>
// //               <div className="card-footer">
// //                 <small className="timestamp">
// //                   {new Date(feed.createdAt).toLocaleString()}
// //                 </small>
// //                 <button
// //                   className="btn-delete"
// //                   onClick={() => deleteFeed(feed._id)}
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Feed;
// import React, { useState, useEffect } from "react";
// import API from "../api";
// import { toast } from "react-toastify";
// import "../styles/Feed.css";

// const Feed = () => {
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [feeds, setFeeds] = useState([]);

//   const fetchFeeds = async () => {
//     try {
//       const res = await API.get("/feed");
//       setFeeds(res.data);
//     } catch (err) {
//       toast.error("Failed to fetch feeds");
//     }
//   };

//   const addFeed = async (e) => {
//     e.preventDefault();
//     if (!content.trim() && !image)
//       return toast.error("Cannot post empty feed");

//     const formData = new FormData();
//     formData.append("content", content);
//     if (image) formData.append("image", image);

//     try {
//       const res = await API.post("/feed", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setFeeds([res.data, ...feeds]);
//       setContent("");
//       setImage(null);
//       toast.success("Posted!");
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Failed to post feed");
//     }
//   };

//   const deleteFeed = async (id) => {
//     try {
//       await API.delete(`/feed/${id}`);
//       setFeeds(feeds.filter((f) => f._id !== id));
//       toast.success("Feed deleted");
//     } catch (err) {
//       toast.error("Failed to delete feed");
//     }
//   };

//   useEffect(() => {
//     fetchFeeds();
//   }, []);

//   return (
//     <div className="main-container">
//       <div className="feed-content">
//         <h2 className="page-title">Campus Feed</h2>

//         <form
//           onSubmit={addFeed}
//           className="form-container"
//           encType="multipart/form-data"
//         >
//           <textarea
//             className="text-input"
//             placeholder="What's on your mind?"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             rows={3}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//           <button className="btn-grey" type="submit">
//             Post
//           </button>
//         </form>

//         <div className="card-list">
//           {feeds.map((feed) => (
//             <div key={feed._id} className="card">
//               {feed.image && (
//                 <img
//                   src={`http://localhost:5000${feed.image}`}
//                   alt="feed"
//                   className="feed-image"
//                 />
//               )}
//               <p>{feed.content}</p>
//               <div className="card-footer">
//                 <small className="timestamp">
//                   {new Date(feed.createdAt).toLocaleString()}
//                 </small>
//                 <button
//                   className="btn-delete"
//                   onClick={() => deleteFeed(feed._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feed;
// import React, { useState, useEffect } from "react";
// import API from "../api";
// import { toast } from "react-toastify";
// import "../styles/Feed.css";

// const Feed = ({ overlay = true }) => {   // ✅ overlay prop added
//   const [content, setContent] = useState("");
//   const [image, setImage] = useState(null);
//   const [feeds, setFeeds] = useState([]);

//   const fetchFeeds = async () => {
//     try {
//       const res = await API.get("/feed");
//       setFeeds(res.data);
//     } catch (err) {
//       toast.error("Failed to fetch feeds");
//     }
//   };

//   const addFeed = async (e) => {
//     e.preventDefault();
//     if (!content.trim() && !image)
//       return toast.error("Cannot post empty feed");

//     const formData = new FormData();
//     formData.append("content", content);
//     if (image) formData.append("image", image);

//     try {
//       const res = await API.post("/feed", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setFeeds([res.data, ...feeds]);
//       setContent("");
//       setImage(null);
//       toast.success("Posted!");
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Failed to post feed");
//     }
//   };

//   const deleteFeed = async (id) => {
//     try {
//       await API.delete(`/feed/${id}`);
//       setFeeds(feeds.filter((f) => f._id !== id));
//       toast.success("Feed deleted");
//     } catch (err) {
//       toast.error("Failed to delete feed");
//     }
//   };

//   useEffect(() => {
//     fetchFeeds();
//   }, []);

//   return (
//     <div
//       className={`main-container ${overlay ? "with-overlay" : "no-overlay"}`} 
//       style={{
//         backgroundImage: "url('/feed.png')", // ✅ background from public
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       <div className="feed-content">
//         <h2 className="page-title">Campus Feed</h2>

//         <form
//           onSubmit={addFeed}
//           className="form-container"
//           encType="multipart/form-data"
//         >
//           <textarea
//             className="text-input"
//             placeholder="What's on your mind?"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             rows={3}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//           <button className="btn-grey" type="submit">
//             Post
//           </button>
//         </form>

//         {/* Feed cards */}
//         <div className="card-list">
//           {feeds.map((feed) => (
//             <div key={feed._id} className="card">
//               {feed.image && (
//                 <img
//                   src={`http://localhost:5000${feed.image}`}
//                   alt="feed"
//                   className="feed-image"
//                 />
//               )}
//               <p>{feed.content}</p>
//               <div className="card-footer">
//                 <small className="timestamp">
//                   {new Date(feed.createdAt).toLocaleString()}
//                 </small>
//                 <button
//                   className="btn-delete"
//                   onClick={() => deleteFeed(feed._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feed;
import React, { useState, useEffect } from "react";
import API from "../api";
import { toast } from "react-toastify";
import "../styles/Feed.css";

const FEED_PASSWORD = "yash"; // 🔑 unlock password for locked page

const Feed = ({ overlay = true }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const [locked, setLocked] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");

  // Fetch feeds
  const fetchFeeds = async () => {
    try {
      const res = await API.get("/feed");
      setFeeds(res.data);
    } catch (err) {
      toast.error("Failed to fetch feeds");
    }
  };

  // Add a new feed
  const addFeed = async (e) => {
    e.preventDefault();
    if (!content.trim() && !image)
      return toast.error("Cannot post empty feed");

    const formData = new FormData();
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await API.post("/feed", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFeeds([res.data, ...feeds]);
      setContent("");
      setImage(null);
      toast.success("Posted!");
    } catch (err) {
      toast.error(err.response?.data?.msg || "Failed to post feed");
    }
  };

  // Delete feed
  const deleteFeed = async (id) => {
    try {
      await API.delete(`/feed/${id}`);
      setFeeds(feeds.filter((f) => f._id !== id));
      toast.success("Feed deleted");
    } catch (err) {
      toast.error("Failed to delete feed");
    }
  };

  // Check if feed page is locked
  const checkLock = async () => {
    try {
      const res = await API.get("/locks");
      if (res.data && res.data.feed) {
        setLocked(true);
      } else {
        setLocked(false);
      }
    } catch (err) {
      console.error("Failed to fetch lock status:", err);
    }
  };

  useEffect(() => {
    checkLock();
    fetchFeeds();
  }, []);

  // If locked and not yet unlocked → show lock screen
  if (locked && !unlocked) {
    return (
      <div className="locked-page">
        <div className="locked-box">
          <h2 className="locked-title">🔒 Feed Page Locked</h2>
          <input
            type="password"
            placeholder="Enter password to unlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="locked-input"
          />
          <button
            className="locked-btn"
            onClick={() => {
              if (password === FEED_PASSWORD) {
                setUnlocked(true);
              } else {
                toast.error("Incorrect password!");
              }
            }}
          >
            Unlock
          </button>
        </div>
      </div>
    );
  }

  // Normal feed UI
  return (
    <div
      className={`main-container ${overlay ? "with-overlay" : "no-overlay"}`}
      style={{
        backgroundImage: "url('/feed.png')", // ✅ background from public
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="feed-content">
        <h2 className="page-title">Campus Feed</h2>

        <form
          onSubmit={addFeed}
          className="form-container"
          encType="multipart/form-data"
        >
          <textarea
            className="text-input"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button className="btn-grey" type="submit">
            Post
          </button>
        </form>

        {/* Feed cards */}
        <div className="card-list">
          {feeds.map((feed) => (
            <div key={feed._id} className="card">
              {feed.image && (
                <img
                  src={`http://localhost:5000${feed.image}`}
                  alt="feed"
                  className="feed-image"
                />
              )}
              <p>{feed.content}</p>
              <div className="card-footer">
                <small className="timestamp">
                  {new Date(feed.createdAt).toLocaleString()}
                </small>
                <button
                  className="btn-delete"
                  onClick={() => deleteFeed(feed._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;

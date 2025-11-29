// import React, { useEffect, useState } from "react";
// import API from "../api";
// import { toast } from "react-toastify";
// import "../styles/Events.css";

// const Events = () => {
//   const [form, setForm] = useState({
//     title: "",
//     date: "",
//     location: "",
//   });
//   const [events, setEvents] = useState([]);

//   const fetchEvents = async () => {
//     try {
//       const res = await API.get("/events");
//       setEvents(res.data);
//     } catch (err) {
//       toast.error("Failed to fetch events");
//     }
//   };

//   const addEvent = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/events", form);
//       setEvents([res.data, ...events]);
//       setForm({ title: "", date: "", location: "" });
//       toast.success("Event added!");
//     } catch (err) {
//       toast.error("Failed to add event");
//     }
//   };

//   const deleteEvent = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this event?")) return;
//     try {
//       await API.delete(`/events/${id}`);
//       setEvents(events.filter((e) => e._id !== id));
//       toast.success("Event removed!");
//     } catch (err) {
//       toast.error("Failed to delete event");
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   return (
//     <div className="main-container">
//       <h2 className="page-title">Events</h2>
//       <form onSubmit={addEvent} className="form-container">
//         <input
//           type="text"
//           placeholder="Event Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           className="text-input"
//           required
//         />
//         <input
//           type="date"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//           className="text-input"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={form.location}
//           onChange={(e) => setForm({ ...form, location: e.target.value })}
//           className="text-input"
//           required
//         />
//         <button className="btn-grey" type="submit">
//           Add Event
//         </button>
//       </form>

//       <div className="card-list">
//         {events.map((event) => (
//           <div key={event._id} className="card">
//             <h3 className="card-title">{event.title}</h3>
//             <p>📍 {event.location}</p>
//             <p>📅 {new Date(event.date).toLocaleDateString()}</p>
//             <p className="timestamp">Created by: {event.createdBy?.name}</p>

//             {/* ✅ Delete Button */}
//             <button
//               className="btn-delete"
//               onClick={() => deleteEvent(event._id)}
//             >
//               ❌ Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Events;


import React, { useEffect, useState } from "react";
import API from "../api";
import { toast } from "react-toastify";
import "../styles/Events.css";

const PAGE_PASSWORD = "yash";

const Events = () => {
  const [form, setForm] = useState({ title: "", date: "", location: "" });
  const [events, setEvents] = useState([]);
  const [locked, setLocked] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (err) {
      toast.error("Failed to fetch events");
    }
  };

  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/events", form);
      setEvents([res.data, ...events]);
      setForm({ title: "", date: "", location: "" });
      toast.success("Event added!");
    } catch (err) {
      toast.error("Failed to add event");
    }
  };

  const deleteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await API.delete(`/events/${id}`);
      setEvents(events.filter((e) => e._id !== id));
      toast.success("Event removed!");
    } catch (err) {
      toast.error("Failed to delete event");
    }
  };

  const checkLock = async () => {
    try {
      const res = await API.get("/locks");
      if (res.data?.events) setLocked(true);
    } catch {}
  };

  useEffect(() => {
    checkLock();
    fetchEvents();
  }, []);

  if (locked && !unlocked) {
    return (
      <div className="locked-page">
        <div className="locked-box">
          <h2>🔒 Events Page Locked</h2>
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
    <div className="main-container">
      <h2 className="page-title">Events</h2>
      <form onSubmit={addEvent} className="form-container">
        <input
          type="text"
          placeholder="Event Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="text-input"
          required
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="text-input"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="text-input"
          required
        />
        <button className="btn-grey" type="submit">
          Add Event
        </button>
      </form>

      <div className="card-list">
        {events.map((event) => (
          <div key={event._id} className="card">
            <h3 className="card-title">{event.title}</h3>
            <p>📍 {event.location}</p>
            <p>📅 {new Date(event.date).toLocaleDateString()}</p>
            <p className="timestamp">Created by: {event.createdBy?.name}</p>
            <button className="btn-delete" onClick={() => deleteEvent(event._id)}>
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;

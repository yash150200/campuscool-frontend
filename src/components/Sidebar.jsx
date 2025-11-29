

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className="sidebar-container fixed h-full w-60 bg-blue-800 text-white p-4 flex flex-col justify-between">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">CampusConnect</h2>

        {/* Main Navigation */}
        <nav className="flex flex-col gap-3">
          <Link to="/" className={`sidebar-link ${location.pathname === "/" ? "active" : ""}`}>
            🏠 Home
          </Link>
          <Link to="/feed" className={`sidebar-link ${location.pathname === "/feed" ? "active" : ""}`}>
            📰 Feed
          </Link>
          <Link to="/events" className={`sidebar-link ${location.pathname === "/events" ? "active" : ""}`}>
            📅 Events
          </Link>
          <Link to="/materials" className={`sidebar-link ${location.pathname === "/materials" ? "active" : ""}`}>
            📚 Materials
          </Link>
          <Link to="/profile" className={`sidebar-link ${location.pathname === "/profile" ? "active" : ""}`}>
            👤 Profile
          </Link>
          <Link to="/attendance" className={`sidebar-link ${location.pathname === "/attendance" ? "active" : ""}`}>
            ✅ Attendance
          </Link>
          <Link to="/ai-chat" className={`sidebar-link ${location.pathname === "/ai-chat" ? "active" : ""}`}>
            🤖 AI Chat
          </Link>
          <Link to="/admin" className={`sidebar-link ${location.pathname === "/admin" ? "active" : ""}`}>
            🔑 Admin Panel
          </Link>
        </nav>
      </div>

      {/* Bottom Section: Logout + Mini Menu */}
      <div className="bottom-section flex flex-col items-start gap-3">
        <button
          className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded w-full transition-colors duration-200"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          Logout
        </button>

        {/* Mini Menu on Home */}
        {location.pathname === "/" && (
          <div className="mini-menu-wrapper relative">
            <button
              onClick={() => setShowExtra(!showExtra)}
              className="mini-menu-btn"
            >
              ☰
            </button>

            {showExtra && (
              <div className="mini-dropdown">
                <Link to="/fees" className="mini-link">💰 Fees</Link>
                <Link to="/result" className="mini-link">📄 Result</Link>
                <Link to="/career-choice" className="mini-link">🎯 Career Choice</Link>
                <Link to="/achievements" className="mini-link">🏆 Achievements</Link>
                <Link to="/timetable" className="mini-link">📅 Timetable</Link>
                <Link to="/quiz" className="mini-link">📝 Quiz</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

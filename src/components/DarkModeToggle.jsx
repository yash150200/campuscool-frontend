import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import "./DarkModeToggle.css"; // styling

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="dark-toggle">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span>{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
    </div>
  );
};

export default DarkModeToggle;

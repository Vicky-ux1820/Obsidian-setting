// ToggleButton.js
import React from 'react';
import "./../../styles/general.css"

const Toggler = ({ isDarkMode, toggleMode }) => {
  return (
    <button className="general-right-btn" onClick={toggleMode}>
      Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default Toggler;
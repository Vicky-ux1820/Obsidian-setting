// ToggleButton.js
import React from 'react';

const Toggler = ({ isDarkMode, toggleMode }) => {
  return (
    <button className="text-xs text-white bg-blue-500 h-8 px-2 w-36 rounded  hover:bg-blue-600 hover:shadow-sm hover:shadow-slate-400" onClick={toggleMode}>
      Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default Toggler;
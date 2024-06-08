import React, { useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import General from "./components/General";
import Editor from "./components/Editor";
import Hotkeys from "./components/Hotkeys";
import FileandLink from "./components/FileandLink";
import Appearance from "./components/Appearance";
import CorePlugins from "./components/CorePlugins";
import CommunityPlugins from "./components/CommunityPlugins"; 
import '../styles/index.css';

function App() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(true);

  const handleOpenClose = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  return (
    <Router>
      <div className="h-screen">
        <div
          className={`settings-left overflow-x-hidden overflow-y-hidden border  border-gray-400  flex opacity w-5/6 shadow-neutral-400 shadow-2xl rounded-xl h-5/6 translate-x-24 translate-y-12 items-start ${
            isSettingsVisible ? "" : "hidden"
          }`}
        >
          <div className="sidebar bg-stone-50 w-60 sidebar overflow-y-scroll h-full text-black border-r border-gray-200  p-4">
            <Sidebar />
          </div>
          <div className="settings-right h-full px-9 overflow-y-auto w-5/6">
            <div className="handleOnOff absolute top-2 right-2">
              <button
                onClick={handleOpenClose}
                className="h-7 w-7 hover:bg-neutral-200 rounded-md"
              >
                ✕
              </button>
            </div>

            <Routes>
              <Route path="/" element={<Navigate to="/general" />} />
              <Route path="/general" element={<General />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/fileandlink" element={<FileandLink />} />
              <Route path="/appearance" element={<Appearance />} />
              <Route path="/hotkeys" element={<Hotkeys />} />
              <Route path="/coreplugins" element={<CorePlugins />} />
              <Route path="/communityplugins" element={<CommunityPlugins />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

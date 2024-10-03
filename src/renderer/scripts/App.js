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
import '../styles/general.css'


function App() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(true);

  const handleOpenClose = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  return (
    <Router>
      <div className="setting-page h-screen">
        <div
          className={`settings-page-container ${
            isSettingsVisible ? "" : "settings-page-container-hidden"
          }`}
        >
          <div className="setting-page-sidebar">
            <Sidebar />
          </div>
          <div className="settings-page-right ">
            <div className="setting-handleOnOff">
              <button
                onClick={handleOpenClose}
                className="setting-handleOnOff-btn"
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

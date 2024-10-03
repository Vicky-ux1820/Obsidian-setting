import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/sidebar.css"
import "../../styles/general.css"
const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-option-container">
          <div className="sidebar-option-header">Options</div>
          <Link
            to="/general"
            className={` ${
              location.pathname === "/general" ? "option-link active" : "option-link"
            }`}
          >
            General
          </Link>
          <Link
            to="/editor"
            className={` ${
              location.pathname === "/editor" ? "option-link active" : "option-link"
            }`}
          >
            Editor
          </Link>
          <Link
            to="/fileandlink"
            className={` ${
              location.pathname === "/fileandlink"
                ?"option-link active" : "option-link"
            }`}
          >
            File and Links
          </Link>
          <Link
            to="/appearance"
            className={` ${
              location.pathname === "/appearance"
                ? "option-link active" : "option-link"
            }`}
          >
            Appearance
          </Link>
          <Link
            to="/hotkeys"
            className={`   ${
              location.pathname === "/hotkeys" ? "option-link active" : "option-link"
            }`}
          >
            Hotkeys
          </Link>
          <Link
            to="/coreplugins"
            className={` ${
              location.pathname === "/coreplugins"
                ?"option-link active" : "option-link"
            }`}
          >
            Core Plugins
          </Link>
          <Link
            to="/communityplugins"
            className={`  ${
              location.pathname === "/communityplugins"
                ?"option-link active" : "option-link"
            }`}
          >
            Community plugins
          </Link>
        </div>

        <div className="sidebar-core-plugins">
          <div className="sidebar-plugins-header">
            Core Plugins
          </div>
          <Link
            to="/"
            className="core-plugins-link"
          >
            General
          </Link>
          <Link
            to="/about"
            className="core-plugins-link"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="core-plugins-link"
          >
            Contact
          </Link>
          <Link
            to="/"
            className="core-plugins-link"
          >
            General
          </Link>
          <Link
            to="/about"
            className="core-plugins-link"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="core-plugins-link"
          >
            Contact
          </Link>
          <Link
            to="/"
            className="core-plugins-link"
          >
            General
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

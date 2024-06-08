import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex flex-col space-y-3">
        <div className="sidebar-top p-1 pt-5 h-72 flex flex-col">
          <h3 className="font-semibold pl-2  p-1 text-neutral-500 ">Options</h3>
          <Link
            to="/general"
            className={`w-full rounded-md pl-2 p-1  ${
              location.pathname === "/general" ? "bg-blue-500 text-white" : ""
            }`}
          >
            General
          </Link>
          <Link
            to="/editor"
            className={`w-full rounded-md pl-2  p-1  ${
              location.pathname === "/editor" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Editor
          </Link>
          <Link
            to="/fileandlink"
            className={`w-full rounded-md pl-2  p-1 ${
              location.pathname === "/fileandlink"
                ? "bg-blue-500 text-white "
                : ""
            }`}
          >
            File and Links
          </Link>
          <Link
            to="/appearance"
            className={`w-full rounded-md pl-2  p-1  ${
              location.pathname === "/appearance"
                ? "bg-blue-500 text-white "
                : ""
            }`}
          >
            Appearance
          </Link>
          <Link
            to="/hotkeys"
            className={`w-full rounded-md pl-2  p-1  ${
              location.pathname === "/hotkeys" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Hotkeys
          </Link>
          <Link
            to="/coreplugins"
            className={`w-full rounded-md pl-2  p-1 ${
              location.pathname === "/coreplugins"
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            Core Plugins
          </Link>
          <Link
            to="/communityplugins"
            className={`w-full rounded-md pl-2  p-1 ${
              location.pathname === "/communityplugins"
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            Community plugins
          </Link>
        </div>

        <div className="sidebar-bottom p-1 flex flex-col h-80">
          <h3 className="font-semibold pl-2  p-1 text-neutral-500 ">
            Core Plugins
          </h3>
          <Link
            to="/"
            className="w-full rounded-md pl-2 p-1 hover:bg-stone-100 "
          >
            General
          </Link>
          <Link
            to="/about"
            className={`w-full rounded-md pl-2  p-1 hover:bg-stone-100 ${
              location.pathname === "/about" ? "bg-blue-500 text-white" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`w-full rounded-md pl-2  p-1 hover:bg-stone-100 ${
              location.pathname === "/about" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/"
            className="w-full rounded-md pl-2 p-1 hover:bg-stone-100 "
          >
            General
          </Link>
          <Link
            to="/about"
            className={`w-full rounded-md pl-2  p-1 hover:bg-stone-100 ${
              location.pathname === "/about" ? "bg-blue-500 text-white" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`w-full rounded-md pl-2  p-1 hover:bg-stone-100 ${
              location.pathname === "/about" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/"
            className={`w-full rounded-md pl-2  p-1 hover:bg-stone-100 ${
              location.pathname === "/about" ? "bg-blue-500 text-white" : ""
            }`}
          >
            General
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

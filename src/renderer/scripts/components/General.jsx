import React, { useState, useEffect} from 'react';
import Toggler from './Toggler';
import Dropdown from './Dropdown';


const General = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply the current theme to the body element
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="general-setting-container flex flex-col">
        <div className="general-app-setting w-full pt-10 h-fit">
          <h2 className="text-black font-semibold">App</h2>
          <div className="app-settings-divs mt-2 w-full h-fit">
             <div className="app-element-updates py-2 h-20 flex justify-between items-center border-t border-gray-300 ">
                   <div className="left h-full w-1/2">
                       <h3>Current version: v 1.5.12</h3>
                       <p className="text-xs text-neutral-600 pt-1">(Installer version: v 1.5.12)</p>
                       <p className="text-xs text-neutral-600">Obsidian is up to date!</p>
                   </div>
                   <div className="right flex justify-end items-center h-full w-1/2">
                           <button className="text-xs text-white bg-blue-500 h-8 px-2 w-32 rounded  hover:bg-blue-600 hover:shadow-sm hover:shadow-slate-400">Check for updates</button>
                   </div>
             </div>
             <div className=" app-element-theme py-2 h-16 flex justify-between items-center border-t border-gray-300">
              <div className="left h-full w-1/2">
                <h3>Theme</h3>
                <p className="text-xs text-neutral-600 pt-1">Choose dark theme or light theme</p>
              </div>
              <div className="right flex justify-end items-center h-full w-1/2">
              <Toggler isDarkMode={isDarkMode} toggleMode={toggleMode}/>
              </div>
             </div>
             <div className=" h-16 app-element-lang flex justify-between items-center py-2 border-t border-gray-300">
              <div className="left h-full w-1/2">
                       <h3>Language</h3>
                       <p className="text-xs text-neutral-600 pt-1">Change the display language</p>
              </div>
              <div className="right flex flex-col items-end justify-center h-full w-1/2">
                       <Dropdown/>
              </div>
             </div>
             <div className="app-element-help py-2 h-16 flex justify-between items-center border-t border-gray-300 ">
                   <div className="left h-full w-1/2">
                       <h3>Help</h3>
                       <p className="text-xs text-neutral-600 pt-1"></p>
                       <p className="text-xs text-neutral-600">Obsidian is up to date!</p>
                   </div>
                   <div className="right flex justify-end items-center h-full w-1/2">
                           <button id="button-general" className="text-xs text-black  border border-gray-300 bg-gray-50 h-8 px-2 w-20 rounded  hover:shadow-sm hover:shadow-slate-400">Open</button>
                   </div>
             </div>
          </div>
        </div>
        <div className="general-account-setting pt-10 w-full h-fit">
        <h2 className="text-black font-semibold">Account</h2>
        
             <div className="account-element-account mt-2 py-2 h-20 flex justify-between items-center border-t border-gray-300 ">
                   <div className="left h-full w-1/2">
                       <h3>Your account</h3>
                       <p className="text-xs text-neutral-600 pt-1">You are not logged in now, an account is always needed for the access of our app.</p>
                       <p className="text-xs text-neutral-600"></p>
                   </div>
                   <div className="right flex justify-end space-x-2 items-center h-full w-1/2">
                           <button id="button-general" className="text-xs text-black  border border-gray-300 bg-gray-50 h-8 px-2 w-20 rounded  hover:shadow-sm hover:shadow-slate-400">Log In</button>
                           <button id="button-general" className="text-xs text-black  border border-gray-300 bg-gray-50 h-8 px-2 w-20 rounded  hover:shadow-sm hover:shadow-slate-400">Sign Up</button>
                   </div>
             </div>
             <div className="account-element-license py-2 h-20 flex justify-between items-center border-t border-gray-300 ">
                   <div className="left h-full w-1/2">
                       <h3>Commercial license</h3>
                       <p className="text-xs text-neutral-600 pt-1">A commercial license is must to use our app for wrok within a company.</p>
                       <p className="text-xs text-neutral-600"></p>
                   </div>
                   <div className="right flex justify-end space-x-2 items-center h-full w-1/2">
                           <button  className="text-xs text-white  border hover:bg-blue-600 border-blue-500 bg-blue-500 h-8 px-2 w-20 rounded  hover:shadow-sm hover:shadow-slate-400">Activate</button>
                           <button id="button-general" className="text-xs text-black  border border-gray-300 bg-gray-50 h-8 px-2 w-20 rounded  hover:shadow-sm hover:shadow-slate-400">Purchase</button>
                   </div>
             </div>
          </div>
        </div>
    
  );
};

export default General;

import React, { useState, useEffect} from 'react';
import Toggler from './Toggler';
import Dropdown from './Dropdown';
import "../../styles/general.css"


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
    <div className="general-setting-container">
        <div className="general-app-setting">
          <h4 className="general-app-header">App</h4>
          <div className="general-app-settings-divs">
             <div className="general-app-element-updates">
                   <div className="general-left">
                       <div>Current version: v 1.5.12</div>
                       <p className="general-left-text">(Installer version: v 1.5.12)</p>
                       <p className="general-left-text">Obsidian is up to date!</p>
                   </div>
                   <div className="general-right">
                           <button className="general-right-btn">Check for updates</button>
                   </div>
             </div>
             <div className=" general-app-element-theme">
              <div className="general-left h-full w-1/2">
                <div>Theme</div>
                <p className="general-left-text">Choose dark theme or light theme</p>
              </div>
              <div className="general-right flex justify-end items-center h-full w-1/2">
              <Toggler isDarkMode={isDarkMode} toggleMode={toggleMode}/>
              </div>
             </div>
             <div className="general-app-element-lang">
              <div className="general-left">
                       <div>Language</div>
                       <p className="general-left-text">Change the display language</p>
              </div>
              <div className="general-right">
                       <Dropdown/>
              </div>
             </div>
             <div className="general-app-element-help">
                   <div className="general-left">
                       <div>Help</div>
                       <p className="general-left-text">Obsidian is up to date!</p>
                   </div>
                   <div className="general-right">
                           <button id="button-general" className="general-right-btn-gray">Open</button>
                   </div>
             </div>
          </div>
        </div>
        <div className="general-account-setting">
        <h4 className="general-account-setting-header">Account</h4>
        
             <div className="general-account-element-account">
                   <div className="general-left">
                       <div>Your account</div>
                       <p className="general-left-text">You are not logged in now, an account is always needed for the access of our app.</p>
                   </div>
                   <div className="general-right">
                           <button id="button-general" className="general-right-btn-gray">Log In</button>
                           <button id="button-general" className="general-right-btn-gray">Sign Up</button>
                   </div>
             </div>
             <div className="general-account-element-license ">
                   <div className="general-left">
                       <div>Commercial license</div>
                       <p className="general-left-text">A commercial license is must to use our app for wrok within a company.</p>
                   </div>
                   <div className="general-right">
                           <button  className="general-right-btn">Activate</button>
                           <button id="button-general" className="general-right-btn-gray">Purchase</button>
                   </div>
             </div>
          </div>
    </div>
    
  );
};

export default General;

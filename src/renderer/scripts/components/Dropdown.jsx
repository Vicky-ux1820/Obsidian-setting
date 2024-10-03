import React from 'react';
import "./../../styles/dropdown.css"

const Dropdown =()=>{
return(
  <div className="general-langauge-dropdown">
    <form className="general-langauge-dropdown-form">
  <select id="languages" className="general-langauge-dropdown-selector">
    <option selected>English</option>
    <option value="US">French</option>
    <option value="CA">Hindi</option>
    <option value="DE">German</option>
  </select>
</form>
  </div>

    );
}
export default Dropdown;
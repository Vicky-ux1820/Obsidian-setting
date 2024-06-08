import React from 'react';

const Dropdown =()=>{
return(
  <div className="langauge-dropdown">
    <form className="lang-from">
  <select id="languages" className=" bg-gray-50 h-8  border border-gray-300 text-black text-xs rounded focus:ring-slate-400 focus:border-2 focus:border-slate-400 block w-36 px-2">
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
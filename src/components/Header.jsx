//import logo from "../assets/logo.png";
//import bullet from "../assets/bullet.png";
//import { contractAddress, abi } from ".././contractDetails";

import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/log0.svg";



const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedTab, setSelectedTab] = useState('live'); // New state

  const menuItems = ['live', 'cricket', 'football', 'tennis', 'election', 'sports book', 'teen patti', 'casino', 'slot']; // array to make rendering dynamic

  return (
    <div className="header">
      <div className="logo"><img src={logo} alt="Logo"></img></div>
      <div className="menu-section">
        {menuItems.map(item => (
          <div
            key={item}
            className={`menu-item ${selectedTab === item ? 'menu-item-selected' : ''}`} // conditionally adding the class
            onClick={() => setSelectedTab(item)} // updating the selectedTab on click
          >
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="mobile-menu"
      >
        ☰
      </button>
    </div>
  );
};

export default Header;

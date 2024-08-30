import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './menuDashboard.css';

const Menu = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const closeSub = () => {
    setIsSubMenuOpen(false) 
  }
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="menu">
      <div className="menu-item" onClick={toggleSubMenu}>
      <span className='btnMenu'>Menu <FontAwesomeIcon icon={faBars} /></span>
      </div>
      <div className={`submenu ${isSubMenuOpen ? 'open' : ''}`} onMouseLeave={closeSub}>
        <div className="submenu-item"><Link to="/editprofile">Edit Profile</Link></div>
        <div className="submenu-item"><Link to="/">Logout</Link></div>
      </div>
    </div>
  );
};

export default Menu;

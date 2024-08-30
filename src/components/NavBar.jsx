// src/components/NavBar.js
import React, { useState } from 'react';
import './NavBar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const NavBar = () => {
 

    return (
//  header area start here 
<header className='header-area'>
<div className='container'>
  <div className='header-row'>
    <div className='inside-header'>
      <nav className='main-nav'>
        {/* logo start here */}
        <div className="logo">
          <h1 className='name'>Villa</h1>
        </div>
        {/* logo end */}
        {/* menu start here */}
        <ul className="nav">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          <li><Link to="/property-details">Property Details</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="#"><i className="fa fa-calendar"></i> Schedule a visit</Link></li>
        </ul>
      
        {/* menu end */}
      </nav>
    </div>
  </div>
</div>
</header>
//    <!-- ***** Header Area End ***** -->
    );
};

export default NavBar;

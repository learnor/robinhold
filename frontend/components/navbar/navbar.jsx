import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-header">
      <a className="navbar-brand" >
        <img src="72870.png" /> 
      </a>
    </div>
    <div className="navbar-search">
      <input type="search" placeholder="Search for stocks" />
    </div>
    <ul className="navbar-nav">
      <li><a href="/">Home</a></li>
      <li><a href="/account">Account</a></li>
    </ul>
  </nav>
);

export default Navbar;

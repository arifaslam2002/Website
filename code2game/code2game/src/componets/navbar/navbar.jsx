import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="hero-container">
      <header className="navbar">
        <div className="logo">⚡ Code2game</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/admin/login">Admin</a>
          <a href="/registration">Register</a>

        </nav>
        <div className="nav-buttons">
          <button className="primary-btn" onClick={() => window.location.href = '/registration'}>Join With Us</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

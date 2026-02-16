import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="src/assets/kk.png" alt="Codru Logo" className="logo-icon" />
          <div className="logo-text">
            <strong>Codru Education</strong>
            <span>Learn, how to learn.</span>
          </div>
        </Link>
        <nav className="main-nav">
          <a href="/#about">About</a>
          <a href="/#courses">Courses</a>
          <a href="/#blogs">Blogs</a>
          <a href="/#contact">Contact</a>
        </nav>
        <Link to="/signin" className="signin-button">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
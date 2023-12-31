import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navigation = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light custom-navbar" >
      <Link className="navbar-brand" to="/">My Portfolio</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-link">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the menu when the location (URL) changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="Navbar">
      <div className="hamburger" onClick={toggleMenu}>
        {/* Hamburger icon */}
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="#home" onClick={() => scrollToSection('home')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="#partners" onClick={() => scrollToSection('partners')}>
            Partner & Associates Profiles
          </Link>
        </li>
        <li>
          <Link to="#overview" onClick={() => scrollToSection('overview')}>
            Firm Overview
          </Link>
        </li>
        <li>
          <Link to="#services" onClick={() => scrollToSection('services')}>
            Practice Areas
          </Link>
        </li>
        <li>
          <Link
            to="#testimonials"
            onClick={() => scrollToSection('testimonials')}
          >
            Partner Blogs & Opinions
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import "../../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>E. E. Prof. Yolanda Araujo Silva Paiva</h1>
        </div>
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#hero-slider">Home</a>
            </li>
            <li>
              <a href="#destaques">Destaques</a>
            </li>
            <li>
              <a href="#about-us">About</a>
            </li>
            <li>
              <a href="#footer-about">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;

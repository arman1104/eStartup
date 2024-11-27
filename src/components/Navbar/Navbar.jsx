import React, { useState } from "react";
import "./Navbar.css";
import { ChevronDown, X, Menu } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function handleClick() {
    setMenu(!menu);
  }

  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="h2-logo">
        <h2 className="startup">
          <span className="green-letter">e</span>Startup
        </h2>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li className="dropdown-container">
          <a href="#">
            Dropdown <ChevronDown size={20} />
          </a>
          <ul className="dropdown">
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">App Development</a>
            </li>
            <li>
              <a href="#">Iconography</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="ham-menu">
        {menu ? <X /> : <Menu />}
      </div>

      {/* Mobile Navigation Links */}
      {menu && (
        <div className="mobile-nav-list">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li className="dropdown-container">
              <a href="#">
                Dropdown <ChevronDown size={20} />
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">App Development</a>
                </li>
                <li>
                  <a href="#">Iconography</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

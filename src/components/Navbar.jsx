import React from "react";
import Drop from "../shared/Dropdown.jsx";
import ButtonWhite from "../shared/ButtonWhite/buttonWhite.jsx";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src="/Logo.svg" alt="Logo" />
        <h1 className="logo-name"> MobuisEngine.AI</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a> Home</a>
        </li>
        <li>
          <a> About Us</a>
        </li>
        <li>
          <a> Plans</a>
        </li>
        <li>
          <a> Testimonials</a>
        </li>
        <li>
          <a> Privacy Policy</a>
        </li>
        <li>
          <Drop />
        </li>
      </ul>
      <ButtonWhite />
    </nav>
  );
}
export default Navbar;

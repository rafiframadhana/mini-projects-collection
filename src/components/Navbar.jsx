import React from "react";
import "./../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Rafif's Mini Projects Collection</a>
      </div>
      <div className="navbar-link">
        <a
          href="https://github.com/rafiframadhana"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://rafiframadhana.site"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

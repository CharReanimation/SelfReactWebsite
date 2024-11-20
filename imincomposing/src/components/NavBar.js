import React from "react";
import { Link } from "react-router-dom";

// CSS
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/img/webPageLogo.png" alt="Logo" className="navbar-logo-image" />{" "}
      </Link>
      <h1 className="navbar-title">IMInComposing</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/upload" className="navbar-link">
            UPLOAD
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

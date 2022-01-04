import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="navbar-logo">
        <img src="img/nf.svg" alt="logo" className="navbar-logo" />
      </a>
      <ul className="navbar-menu">
        <li className="navbar-menu-elements">
          <a href="/info" className="text-navbar-elements">
            info
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

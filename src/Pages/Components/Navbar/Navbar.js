import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <img src="img/nf.svg" className="navbar-logo" alt="" />
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

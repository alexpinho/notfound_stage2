import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function Navbar() {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, ...transition },
      }}
    >
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
    </motion.div>
  );
}

export default Navbar;

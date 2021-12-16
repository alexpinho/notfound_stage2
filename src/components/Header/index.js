import React from 'react';
import { header } from './header.module.scss';

const Header = () => {
  return (
    <div className={header}>
      <h3></h3>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/work'>Work</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

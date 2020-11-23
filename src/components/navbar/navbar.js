import React, { Component } from 'react';
import { NavbarItems } from './NavbarItems';
import './navbar.scss';

function Navbar() {
  return (
    <nav className='navbar-container'>
      <a href='#'>AC</a>
      <ul>
        {NavbarItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.className} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <a href='#'>Resume</a>
    </nav>
  );
}

export default Navbar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavbarItems } from './NavbarItems';
import './navbar.scss';

function Navbar() {
  return (
    <nav className='navbar-container'>
      <Link to='/'>
        <h3>AC</h3>
      </Link>

      <ul>
        {NavbarItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>
                <a className={item.className}>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <a href='#'>Resume</a>
    </nav>
  );
}

export default Navbar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  NavigationItems } from './NavigationItems';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className='navbar-container'>
      <Link to='/'>
        <h3>AC</h3>
      </Link>
      <ul>
        {NavigationItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url}>
                <a className={item.className}>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
        <button className="nav-resume-btn">Resume</button>
    </nav>
  );
}

export default Navigation;

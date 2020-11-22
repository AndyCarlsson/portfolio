import React from 'react';
import { navbarItem } from './navbarItem';
import '../navbar/navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <p>AC</p>
      <ul className='navbar-link-container'>
        {navbarItem.map((item, index) => {
          return (
            <li>
              <a className={item.className} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <p>Resume</p>
    </nav>
  );
};

export default Navbar;

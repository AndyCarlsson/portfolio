import React from 'react';
import '../navbar/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p>AC</p>
      <div className='navbar-link-container'>
        <p>Work</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <p>Resume</p>
    </div>
  );
};

export default Navbar;

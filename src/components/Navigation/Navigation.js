import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import NavbarSmall from './NavbarSmall';
import Burger from './Burger';

export default function Navigation() {
  const [windowDimension, setWindowDimension] = useState(null);

  const isHamMenu = windowDimension <= 768;

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <>{isHamMenu ? <Burger /> : <Navbar />}</>;
}

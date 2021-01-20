import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import NavbarSmall from './NavbarSmall';

export default function Navigation() {
  const [windowDimension, setWindowDimension] = useState(null);

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

  const isMobile = windowDimension <= 480;

  return (
    <>
      {isMobile ? (
        <>
          <NavbarSmall />
        </>
      ) : (
        <>
          <Navbar />
        </>
      )}
    </>
  );
}

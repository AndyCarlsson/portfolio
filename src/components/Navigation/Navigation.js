import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import NavbarSmall from './NavbarSmall';
import { animated, useSpring } from 'react-spring';

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

  const isHamMenu = windowDimension <= 768;

  let pathName = window.location.pathname;

  // if ((pathName = '/')) {
  //   let menu = (
  //     <animated.div style={spring}>{isHamMenu ? <NavbarSmall /> : <Navbar />}</animated.div>
  //   );
  // }

  const spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 3000,
  });

  return <animated.div style={spring}>{isHamMenu ? <NavbarSmall /> : <Navbar />}</animated.div>;
}

import React from 'react';
import { SmallNavUlTest, SmallNavLi } from './styles/NavigationStyles';

const HamNav = ({ open }) => {
  return (
    <>
      <SmallNavUlTest open={open}>
        <SmallNavLi>Home</SmallNavLi>
        <SmallNavLi>Work</SmallNavLi>
        <SmallNavLi>About</SmallNavLi>
        <SmallNavLi>Contact</SmallNavLi>
      </SmallNavUlTest>
    </>
  );
};

export default HamNav;

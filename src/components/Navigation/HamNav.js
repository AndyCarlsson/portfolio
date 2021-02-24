import React from 'react';
import NavigationData from './data/NavigationData.json';
import { SmallNavUlTest, SmallNavLi, SmallStyledNavLink } from './styles/NavigationStyles';

const HamNav = ({ open }) => {
  return (
    <>
      <SmallNavUlTest open={open}>
        {NavigationData.map((item) => (
          <SmallNavLi key={item.id}>
            <SmallStyledNavLink to={item.url}>{item.page}</SmallStyledNavLink>
          </SmallNavLi>
        ))}
      </SmallNavUlTest>
    </>
  );
};

export default HamNav;

import React, { useState } from 'react';
import NavigationData from './data/NavigationData.json';
import HamNav from './HamNav';

import {
  StyledBurger,
  SmallNavUlTest,
  SmallNavLi,
  SmallStyledNavLink,
} from './styles/NavigationStyles';

const Burger = () => {
  const [open, setOpen] = useState(false);

  if (open === true) {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
  } else {
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = 'yes';
  }

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SmallNavUlTest open={open}>
        {NavigationData.map((item) => (
          <SmallNavLi key={item.id} onClick={() => setOpen(!open)}>
            <SmallStyledNavLink to={item.url}>{item.page}</SmallStyledNavLink>
          </SmallNavLi>
        ))}
      </SmallNavUlTest>
      {/* <HamNav open={open} /> */}
    </>
  );
};

export default Burger;
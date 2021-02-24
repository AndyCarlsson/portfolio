import React, { useState } from 'react';
import HamNav from './HamNav';

import { StyledBurger } from './styles/NavigationStyles';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <HamNav open={open} />
    </>
  );
};

export default Burger;

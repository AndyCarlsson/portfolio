import React, { useState } from 'react';
import { ContainerSmallScreen, MenuContainer } from './styles/NavigationStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavbarSmall() {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = <MenuContainer>The menu here!</MenuContainer>;
  }

  return (
    <>
      <ContainerSmallScreen>
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </ContainerSmallScreen>
      {menu}
    </>
  );
}

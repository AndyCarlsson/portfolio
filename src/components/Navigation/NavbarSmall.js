import React, { useState } from 'react';
import {
  ContainerSmallScreen,
  MenuContainer,
  MenuMask,
  SmallNavUl,
  SmallNavLi,
  SmallStyledNavLink,
} from './styles/NavigationStyles';
import NavigationData from './data/NavigationData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';

export default function NavbarSmall() {
  const [showMenu, setShowMenu] = useState(false);

  const sideMenuTransition = useTransition(showMenu, null, {
    from: { opacity: 1, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 1, transform: 'translateX(-100%)' },
  });

  let icon;

  if (showMenu) {
    icon = <FontAwesomeIcon icon={faTimes} onClick={() => setShowMenu(!showMenu)} />;
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
  } else {
    icon = <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />;
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = 'yes';
  }

  return (
    <>
      <ContainerSmallScreen>{icon}</ContainerSmallScreen>

      {sideMenuTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <MenuMask onClick={() => setShowMenu(false)}></MenuMask>
              <MenuContainer>
                <SmallNavUl>
                  {NavigationData.map((item) => (
                    <SmallNavLi onClick={() => setShowMenu(false)}>
                      <SmallStyledNavLink to={item.url}>{item.page}</SmallStyledNavLink>
                    </SmallNavLi>
                  ))}
                </SmallNavUl>
              </MenuContainer>
            </animated.div>
          )
      )}
    </>
  );
}

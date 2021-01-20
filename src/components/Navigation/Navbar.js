import React, { useState, useEffect } from 'react';
import {
  Container,
  Logo,
  ItemUl,
  ItemLi,
  Button,
  StyledNavLink,
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

export default function Navbar() {
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

  const [showMenu, setShowMenu] = useState(false);

  const sideMenuTransition = useTransition(showMenu, null, {
    from: { opacity: 1, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 1, transform: 'translateX(-100%)' },
  });

  const sideMenuMaskTransition = useTransition(showMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
      {isMobile ? (
        <>
          <ContainerSmallScreen>{icon}</ContainerSmallScreen>
          {sideMenuMaskTransition.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props} onClick={() => setShowMenu(false)}>
                  <MenuMask />
                </animated.div>
              )
          )}
          {sideMenuTransition.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <MenuContainer>
                    <SmallNavUl>
                      <SmallNavLi onClick={() => setShowMenu(false)}>
                        <SmallStyledNavLink exact to='/'>
                          Home
                        </SmallStyledNavLink>
                      </SmallNavLi>
                      {NavigationData.map((item) => (
                        <SmallNavLi key={item.id} onClick={() => setShowMenu(false)}>
                          <SmallStyledNavLink to={item.url}>{item.page}</SmallStyledNavLink>
                        </SmallNavLi>
                      ))}
                    </SmallNavUl>
                  </MenuContainer>
                </animated.div>
              )
          )}
        </>
      ) : (
        <Container>
          <StyledNavLink exact to='/'>
            <Logo>AC</Logo>
          </StyledNavLink>
          <ItemUl>
            {NavigationData.map((item) => (
              <ItemLi key={item.id}>
                <StyledNavLink to={item.url}>{item.page}</StyledNavLink>
              </ItemLi>
            ))}
          </ItemUl>
          <Button>Resume</Button>
        </Container>
      )}
    </>
  );
}

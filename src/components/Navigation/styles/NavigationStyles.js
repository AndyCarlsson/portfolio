import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 7vh;
  max-width: 100%;
  display: ${({ display }) => display};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
`;

export const Logo = styled.h2``;

export const ItemUl = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
`;

const activeClassName = 'nav-item-active';

export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  border: none;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: rgba(20, 20, 20, 0.5);
  border-bottom: transparent solid 2px;
  transition: all 0.3s ease-in-out;

  :hover {
    color: rgba(20, 20, 20, 1);
  }

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 40%;
    left: 0;
    background-color: #e85a4f;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
  }

  :hover::before {
    visibility: visible;
    transform: scaleX(1);
    /* border-bottom: #e85a4f solid 2px; */
  }

  &.${activeClassName} {
    color: rgba(20, 20, 20, 1);
    text-decoration: line-through #e85a4f 2px;
  }
`;

export const ItemLi = styled.li``;

export const Button = styled.button`
  font-weight: 700;
  padding: 5px;
  border-radius: 10px;
  color: rgba(20, 20, 20, 0.5);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    color: #e85a4f;
  }
`;

export const ContainerSmallScreen = styled.div`
  position: fixed;
  display: flex;
  top: 20px;
  right: 20px;
  font-size: 2.5rem;
  color: #e85a4f;
  transition: all 1s;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 75%;
  background-color: #eae7dc;
  box-shadow: 1px 0 10px 2px rgba(0, 0, 0, 0.4);
`;

export const SmallNavUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 20px;
  gap: 2.5rem;
  list-style: none;
  height: 100%;
`;

export const SmallNavLi = styled.li`
  font-size: 3rem;
  text-decoration: none;
`;

export const MenuMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const SmallStyledNavLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  text-transform: uppercase;
  color: #f3f3f3;

  &.${activeClassName} {
    color: #f3f3f3;
    text-decoration: line-through #e85a4f 3px;
  }
`;

// Här under är de nya stylarna

export const SmallNavUlTest = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  top: 0;
  left: 0;
  gap: 2.5rem;
  list-style: none;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  transition: all 0.3s ease-in-out;
`;

export const StyledBurger = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  div {
    width: 2.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#f3f3f3' : '#000')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'rotate(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

//Here goes all styled components for Nav menu
export const Container = styled.div`
  height: 7vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;

  @media (max-width: 480px) {
    display: none;
  }
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
  transition: all 0.3s;

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
  position: absolute;
  top: 0;
  right: 5%;
  font-size: 2.5rem;
  color: #e85a4f;
  height: 7vh;
  display: none;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 480px) {
    display: flex;
  }
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
  color: rgba(20, 20, 20, 1);
`;

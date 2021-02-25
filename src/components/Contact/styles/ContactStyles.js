import styled from 'styled-components/macro';
import { animated } from 'react-spring';

export const Container = styled.div`
  max-width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    min-height: 100vh;
    justify-content: center;
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 480px) {
    justify-content: center;
  }

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const ItemContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  width: 30%;
  border-radius: 10px;
  background-color: #dbd9d3;

  @media only screen and (max-width: 480px) {
    gap: 1rem;
    width: 90%;
  }

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    gap: 1rem;
    width: 70%;
  }
`;

export const Image = styled.img``;

export const Details = styled.h2`
  @media only screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

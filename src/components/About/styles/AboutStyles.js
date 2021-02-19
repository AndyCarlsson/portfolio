import styled from 'styled-components/macro';
import { animated } from 'react-spring';

export const Container = styled.div`
  min-height: 93vh;
  width: 100%;
  gap: 10rem;

  @media only screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 480px) {
    margin-top: 12vh;
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 93vh;

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled(animated.img)`
  height: 35%;
  width: 35%;
  border-radius: 10px;

  @media only screen and (max-width: 480px) {
    height: 90%;
    width: 90%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: 60%;
    width: 60%;
  }
`;

export const Text = styled(animated.p)`
  background-color: red;
`;

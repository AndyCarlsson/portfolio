import styled from 'styled-components/macro';
import { animated } from 'react-spring';

export const Container = styled.div`
  min-height: 93vh;
  width: 100%;
  gap: 10rem;

  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 768px) {
    margin-top: 12vh;
    flex-direction: column;
    gap: 0rem;
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

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 70vh;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const Image = styled(animated.img)`
  height: 100%;
  border-radius: 10px;
`;

export const TextContainer = styled(animated.div)`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  @media only screen and (max-width: 481px) {
    margin-bottom: 3rem;
    width: 80%;
  }

  @media only screen and (min-width: 481px) and (max-width: 1024px) {
    margin-bottom: 3rem;
    width: 60%;
  }
`;

export const Heading = styled.h1``;

export const Text = styled.p`
  @media only screen and (max-width: 1024px) {
  }
`;

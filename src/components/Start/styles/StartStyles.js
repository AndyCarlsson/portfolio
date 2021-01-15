import styled from 'styled-components/macro';
import { animated } from 'react-spring';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 93vh;
  width: 100%;

  @media (max-width: 480px) {
    min-height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  min-height: 100%;
  margin-bottom: 10vh;

  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
  }
`;

export const Title = styled(animated.h1)`
  font-weight: bold;
  font-size: 5rem;
  color: #e85a4f;
  padding: 0;
  margin: 0;

  @media (max-width: 480px) {
    line-height: 3.5rem;
    font-size: 4rem;
    width: 100%;
  }
`;

export const Description = styled(animated.p)`
  font-size: 2rem;
  margin-top: 3px;

  @media (max-width: 480px) {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    width: 100%;
  }
`;

export const Span = styled.span`
  color: #e85a4f;
`;

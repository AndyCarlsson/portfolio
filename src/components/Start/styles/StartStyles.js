import styled from 'styled-components/macro';

export const Container = styled.div`
  min-height: 93vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60%;
  min-height: 100%;
  margin-bottom: 10%;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 5rem;
  padding: 0;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 2rem;
  margin-top: 3px;
`;

export const Span = styled.span`
  color: #31dbff;
`;

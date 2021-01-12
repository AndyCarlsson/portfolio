import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 480px) {
    justify-content: flex-start;
    margin-top: 5rem;
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  width: 30%;
  border-radius: 10px;
  background-color: #dbd9d3;

  @media (max-width: 480px) {
    gap: 1rem;
    width: 90%;
  }
`;

export const Image = styled.img``;

export const Details = styled.h2`
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

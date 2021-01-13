import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 93vh;
  width: 100%;
  margin-top: 6rem;
  gap: 10rem;

  @media (max-width: 480px) {
    margin-top: 5rem;
    gap: 2rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 35%;
  width: 35%;
  border-radius: 10px;

  @media (max-width: 480px) {
    height: 90%;
    width: 90%;
  }
`;

export const Text = styled.p``;

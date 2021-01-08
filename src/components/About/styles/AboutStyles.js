import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 93vh;
  width: 100%;
  gap: 10rem;
  margin-top: 10rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Image = styled.img``;

export const Text = styled.p``;

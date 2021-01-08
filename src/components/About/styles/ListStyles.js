import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  width: 40%;
`;

export const ItemContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: lightcoral;
`;

export const SubTitle = styled.h2``;

export const Text = styled.p``;

export const Span = styled.span`
  margin: 0.2rem;
  font-size: 1.8rem;
`;

export const DurationContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1.8rem 1rem;
  row-gap: 0;
`;

export const InfoContainer = styled.div`
  min-width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

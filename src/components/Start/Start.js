import React from 'react';
import { Container, TextContainer, Title, Description, Span } from './styles/StartStyles';

function Start() {
  return (
    <Container>
      <TextContainer>
        <Title>Andreas Carlsson</Title>
        <Description>Aspiring front end developer</Description>
        <Description>Gothenburg, Sweden.</Description>
        <Description>
          Minigolf<Span>[</Span>semi<Span>]</Span>pro.
        </Description>

        <Description>Creative thinking.</Description>
      </TextContainer>
    </Container>
  );
}

export default Start;

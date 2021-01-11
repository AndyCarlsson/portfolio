import React from 'react';
import {
  Container,
  Title,
  ItemContainer,
  Year,
  Month,
  ItemTitle,
  Text,
  Span,
  DurationContainer,
  InfoContainer,
} from './styles/ListStyles';
import WorkData from './data/WorkData.json';

function WorkList() {
  return (
    <Container>
      <Title>Work Experience</Title>
      {WorkData.map((item) => {
        return (
          <ItemContainer key={item.id}>
            <DurationContainer>
              <Year>{item.startYear}</Year>
              <Span>-</Span>
              <Year>{item.endYear}</Year>
              <Month>{item.startMonth}</Month>
              <Span></Span>
              <Month>{item.endMonth}</Month>
            </DurationContainer>
            <InfoContainer>
              <ItemTitle>{item.title}</ItemTitle>
              <Text>{item.workPlace}</Text>
              <Text>{item.description}</Text>
            </InfoContainer>
          </ItemContainer>
        );
      })}
    </Container>
  );
}

export default WorkList;

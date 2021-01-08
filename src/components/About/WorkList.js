import React from 'react';
import {
  Container,
  Title,
  ItemContainer,
  SubTitle,
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
              <SubTitle>{item.startYear}</SubTitle>
              <Span>-</Span>
              <SubTitle>{item.endYear}</SubTitle>
              <Text>{item.startMonth}</Text>
              <Span></Span>
              <Text>{item.endMonth}</Text>
            </DurationContainer>
            <InfoContainer>
              <SubTitle>{item.title}</SubTitle>
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

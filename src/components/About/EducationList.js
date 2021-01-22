import React from 'react';
import {
  Year,
  Month,
  Container,
  ListWrapper,
  Title,
  ItemContainer,
  ItemInfoContainer,
  CourseList,
  CourseLi,
  ItemTitle,
  Text,
  Span,
  DurationContainer,
  InfoContainer,
} from './styles/ListStyles';
import EducationData from './data/EducationData.json';
import { useSpring } from 'react-spring';

function EducationList() {
  const containerSpring = useSpring({
    from: { marginTop: 40 },
    to: { marginTop: 0 },
  });

  return (
    <ListWrapper bgColor='#dbd9d3'>
      <Container>
        <Title>Education</Title>
        {EducationData.map((item) => {
          return (
            <ItemContainer key={item.id} style={containerSpring}>
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
                <ItemInfoContainer>
                  <Text>{item.degree}</Text>
                  <span>|</span>
                  <Text>{item.school}</Text>
                </ItemInfoContainer>
                <Text>{item.description}</Text>
                <CourseList>
                  {item.courses.map((course) => {
                    return <CourseLi key={course.id}>{course.title}</CourseLi>;
                  })}
                </CourseList>
              </InfoContainer>
            </ItemContainer>
          );
        })}
      </Container>
    </ListWrapper>
  );
}

export default EducationList;

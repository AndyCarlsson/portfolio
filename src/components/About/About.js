import React from 'react';
import { Container, InnerContainer, Image, Text, TestContainer } from './styles/AboutStyles';
import EducationList from './EducationList';
import WorkList from './WorkList';

function About() {
  return (
    <Container>
      <TestContainer>
        <InnerContainer direction='row' gap='5rem'>
          <Image src='/stockphotoTest.jpg' />
          <Text>Text om mig här</Text>
        </InnerContainer>
        <InnerContainer direction='column' gap='3rem'>
          <EducationList />
          <WorkList />
        </InnerContainer>
      </TestContainer>
    </Container>
  );
}

export default About;

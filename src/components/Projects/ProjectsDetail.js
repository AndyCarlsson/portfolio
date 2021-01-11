import React, { useState, useEffect } from 'react';
import {
  Container,
  TitleContainer,
  Title,
  StackList,
  ImageContainer,
  ImageContainerInner,
  Image,
  DescriptionContainer,
  Description,
  VideoContainer,
} from './styles/ProjectDetailStyles';

export default function ProjectDetail(props) {
  const [projectObject, setProjectObject] = useState({});

  useEffect(() => {
    console.log(props.location.state);
    setProject();
  }, []);

  const setProject = () => {
    // // const selectedProject = this.props.location.state;
    // console.log(this.props.location.state);
    // setProjectObject(selectedProject);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Title</Title>
        <StackList>C# CSS HTML</StackList>
      </TitleContainer>
      <ImageContainer>
        <ImageContainerInner align='flex-end'>
          <Image />
        </ImageContainerInner>
        <ImageContainerInner>
          <Image />
        </ImageContainerInner>
      </ImageContainer>
      <DescriptionContainer>
        <Description>Description</Description>
      </DescriptionContainer>
      <VideoContainer></VideoContainer>
    </Container>
  );
}

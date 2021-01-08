import React, { useState, useEffect } from 'react';
import {
  Container,
  TitleContainer,
  Title,
  StackList,
  ImageContainer,
  Image,
  DescriptionContainer,
  Description,
  VideoContainer,
} from './styles/ProjectDetailStyles';

export default function ProjectDetail(props) {
  // const [projectObject, setProjectObject] = useState({});

  // useEffect(() => {
  //   setProject();
  // }, []);

  // const setProject = () => {
  //   const selectedProject = props.location.state.object;
  //   setProjectObject(selectedProject);
  // };

  return (
    <Container>
      <TitleContainer>
        <Title>Title</Title>
        <StackList></StackList>
      </TitleContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <DescriptionContainer>
        <Description>Description</Description>
      </DescriptionContainer>
      <VideoContainer></VideoContainer>
    </Container>
  );
}

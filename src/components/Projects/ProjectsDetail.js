import React, { useState, useEffect } from 'react';
import {
  Container,
  BackButton,
  ContainerInner,
  TitleContainer,
  Title,
  TechStackItem,
  ImageContainer,
  ImageContainerInner,
  Image,
  DescriptionContainer,
  Description,
  VideoContainer,
  StackContainer,
} from './styles/ProjectDetailStyles';

export default function ProjectDetail(props) {
  const [project, setProject] = useState({});

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = () => {
    const selectedProject = props.location.state.object;
    setProject(selectedProject);
  };

  let stackListDiv;
  if (project.stackList) {
    stackListDiv = project.stackList.map((item) => {
      return <TechStackItem key={item}>{item}</TechStackItem>;
    });
  }

  let images;
  if (project.images) {
    images = project.images.map((image, index) => {
      return (
        <ImageContainerInner align='center' key={index}>
          <Image src={image} />
        </ImageContainerInner>
      );
    });
    console.log(project.images);
  }

  return (
    <Container>
      <BackButton to='/work'>Back</BackButton>
      <ContainerInner>
        <TitleContainer>
          <Title>{project.title}</Title>
          <StackContainer>{stackListDiv}</StackContainer>
        </TitleContainer>
        <ImageContainer>{images}</ImageContainer>
        <DescriptionContainer>
          <Description>Description</Description>
        </DescriptionContainer>
        <VideoContainer></VideoContainer>
      </ContainerInner>
    </Container>
  );
}

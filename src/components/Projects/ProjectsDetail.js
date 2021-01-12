import React, { useState, useEffect } from 'react';
import {
  Container,
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

  return (
    <Container>
      <TitleContainer>
        <Title>{project.title}</Title>
        <StackContainer>{stackListDiv}</StackContainer>
      </TitleContainer>
      <ImageContainer>
        <ImageContainerInner align='center'>
          <Image src={project.imgURL} />
        </ImageContainerInner>
        <ImageContainerInner align='flex-start'>
          <Image src={project.imgURL} />
        </ImageContainerInner>
      </ImageContainer>
      <DescriptionContainer>
        <Description>Description</Description>
      </DescriptionContainer>
      <VideoContainer></VideoContainer>
    </Container>
  );
}

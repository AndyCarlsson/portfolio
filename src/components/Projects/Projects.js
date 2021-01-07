import React from 'react';
// import './Projects.scss';
import {
  Container,
  GeneralText,
  ListContainer,
  ProjectContainer,
  Section,
  Title,
  Description,
  StackList,
  Image,
} from './styles/Projects';

export function Projects({ children, ...restProps }) {
  return <Container>{children}</Container>;
}

Projects.GeneralText = function ProjectsGeneralText({ children, ...restProps }) {
  return <GeneralText>{children}</GeneralText>;
};

Projects.ListContainer = function ProjectsListContainer({ children, ...restProps }) {
  return <ListContainer>{children}</ListContainer>;
};

Projects.ProjectContainer = function ProjectsProjectContainer({ children, ...restProps }) {
  return <ProjectContainer>{children}</ProjectContainer>;
};

Projects.Section = function ProjectsSection({ children, ...restProps }) {
  return <Section>{children}</Section>;
};

Projects.Title = function ProjectsTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Projects.Description = function ProjectsDescription({ children, ...restProps }) {
  return <Description>{children}</Description>;
};

Projects.StackList = function ProjectsStackList({ children, ...restProps }) {
  return <StackList>{children}</StackList>;
};

Projects.Image = function ProjectsImage({ ...restProps }) {
  return <Image {...restProps} />;
};

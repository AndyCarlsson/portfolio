import React from 'react';
import ProjectData from './data/ProjectData.json';

import {
  Container,
  GeneralText,
  ListContainer,
  ProjectContainer,
  TitleSektion,
  Section,
  Title,
  Description,
  StackList,
  Image,
} from './styles/ProjectStyle';

export default function Projects() {
  return (
    <Container>
      <GeneralText>Text om mina project</GeneralText>
      {ProjectData.map((item) => (
        <ListContainer item={item} key={item.id} bgColor={item.bgColor}>
          <ProjectContainer direction={item.direction}>
            <Section>
              <TitleSektion>
                <Title>{item.title}</Title>
                <StackList>{item.stackList}</StackList>
              </TitleSektion>
              <Description>{item.shortDescription}</Description>
              <Description>Github</Description>
            </Section>
            <Section>
              <Image src={item.imgURL} alt={item.Alt} />
            </Section>
          </ProjectContainer>
        </ListContainer>
      ))}
    </Container>
  );
}

// Projects.GeneralText = function ProjectsGeneralText({ children, ...restProps }) {
//   return <GeneralText>{children}</GeneralText>;
// };

// Projects.ListContainer = function ProjectsListContainer({ children, ...restProps }) {
//   return <ListContainer>{children}</ListContainer>;
// };

// Projects.ProjectContainer = function ProjectsProjectContainer({ children, ...restProps }) {
//   return <ProjectContainer>{children}</ProjectContainer>;
// };

// Projects.Section = function ProjectsSection({ children, ...restProps }) {
//   return <Section>{children}</Section>;
// };

// Projects.Title = function ProjectsTitle({ children, ...restProps }) {
//   return <Title>{children}</Title>;
// };

// Projects.Description = function ProjectsDescription({ children, ...restProps }) {
//   return <Description>{children}</Description>;
// };

// Projects.StackList = function ProjectsStackList({ children, ...restProps }) {
//   return <StackList>{children}</StackList>;
// };

// Projects.Image = function ProjectsImage({ ...restProps }) {
//   return <Image {...restProps} />;
// };

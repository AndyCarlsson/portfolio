import React from 'react';
import ProjectData from './data/ProjectData.json';

import {
  Container,
  ListContainer,
  ProjectContainer,
  TitleSektion,
  Section,
  Title,
  Description,
  LinkContainer,
  StyledLink,
  ExternalLink,
  TechStackContainer,
  TechStackItem,
  Image,
} from './styles/ProjectStyle';

export default function Projects() {
  return (
    <Container>
      {ProjectData.map((item) => (
        <ListContainer item={item} key={item.id} bgColor={item.bgColor}>
          <ProjectContainer direction={item.direction}>
            <Section>
              <TitleSektion>
                <Title>{item.title}</Title>
                <TechStackContainer>
                  {item.stackList.map((item) => (
                    <TechStackItem key={item}>{item}</TechStackItem>
                  ))}
                </TechStackContainer>
                <Description>{item.shortDescription}</Description>
              </TitleSektion>
              <LinkContainer>
                <ExternalLink href={item.githubLink} rel='noreferrer' target='_blank'>
                  Github
                </ExternalLink>
                <StyledLink
                  to={{
                    pathname: `/work/${item.title}`,
                    state: {
                      object: item,
                    },
                  }}>
                  More info
                </StyledLink>
              </LinkContainer>
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

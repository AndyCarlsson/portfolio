import React from 'react';
import './ProjectsList.scss';
import { ProjectsItems } from './ProjectsItems';
import ProjectsListItem from './ProjectsListItem';

function ProjectsList() {
  return (
    <ProjectsListItem.Container>
      {ProjectsItems.map((item) => (
        <ProjectsListItem item={item} key={item.id} direction={item.direction}>
          <ProjectsListItem.InnerDiv>
            <ProjectsListItem.Title>{item.title}</ProjectsListItem.Title>
            <ProjectsListItem.Description>{item.shortDescription}</ProjectsListItem.Description>
            <ProjectsListItem.StackList>{item.stackList}</ProjectsListItem.StackList>
          </ProjectsListItem.InnerDiv>
          <ProjectsListItem.InnerDiv>
            {/* C:\Users\andre\Projects\Personal\portfolio\src\images\stockphotoTest.jpg */}
            <ProjectsListItem.Image src={item.imgURL} alt={item.Alt} />
          </ProjectsListItem.InnerDiv>
        </ProjectsListItem>
      ))}
    </ProjectsListItem.Container>
  );
}

export default ProjectsList;

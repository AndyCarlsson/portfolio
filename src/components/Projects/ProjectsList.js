import React from 'react';
import './ProjectsList.scss';
import { ProjectsItems } from './ProjectsItems';
import ProjectsListItem from './ProjectsListItem';

function ProjectsList() {
  return (
    <div className='project-item-wrapper'>
      {ProjectsItems.map((item, index) => (
        <ProjectsListItem item={item} key={index} flexDirection={item.flexDirection} />
      ))}
    </div>
  );
}

export default ProjectsList;

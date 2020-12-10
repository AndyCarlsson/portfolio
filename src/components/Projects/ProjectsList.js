import React from 'react';
import './ProjectsList.scss';
import { ProjectsItems } from './ProjectsItems';

function ProjectsList() {
  return (
    <div className='project-item-wrapper'>
      {ProjectsItems.map((item, index) => {
        return (
          <div key={index} className="project-item">
            <div className='image-container'>{item.img}</div>
            <div className='info-container'>
              <p>{item.stackList}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;

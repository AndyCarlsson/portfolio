import React from 'react';
import './ProjectsList.scss';
import { ProjectsItems } from './ProjectsItems';

function ProjectsList() {
  return (
    <div className='project-item-wrapper'>
      {ProjectsItems.map((item, index) => {
        return (
            <div className="project-item" key={index}>
              <div className='image-container'>{item.imgURL}</div>
              <div className='info-container'>
                <p>{item.stackList}</p>
                <h2>{item.title}</h2>
                <p className="item-description">{item.description}</p>
              </div>
              <div className="button-container">
                <a href="/">More info</a>
                <a href={item.githubLink}>GitHub</a>
              </div>
            </div>
        );
      })}
    </div>
  );
}

export default ProjectsList;

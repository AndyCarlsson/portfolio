import React from 'react';
import ProjectItem from './ProjectItem';
import './projectpage.scss';

function ProjectPage() {
  return (
    <div className='project-wrapper'>
      <div className='projects-text-area'>
        <p>Här finns det allmän text om mina projekt</p>
      </div>
        <ProjectItem />
    </div>
  );
}

export default ProjectPage;

import React from 'react';
import ProjectsList from './ProjectsList';
import './Projects.scss';

function Projects() {
  return (
    <>
      <div className='projects-text-area'>
        <p>Här finns det allmän text om mina projekt</p>
      </div>
      <ProjectsList />
    </>
  );
}

export default Projects;

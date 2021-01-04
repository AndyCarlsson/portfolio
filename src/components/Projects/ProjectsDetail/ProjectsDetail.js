import React, { useState, useEffect } from 'react';
import './ProjectsDetail.scss';

function ProjectDetail(props) {
  const [projectObject, setProjectObject] = useState({});

  useEffect(() => {
    setProject();
  }, []);

  const setProject = () => {
    const selectedProject = props.location.state.object;
    setProjectObject(selectedProject);
    console.log(selectedProject);
  };

  return (
    <div className='detail-wrapper'>
      <div className='title-container'>
        <h1>{projectObject.title}</h1>
        <p>{projectObject.stackList}</p>
      </div>
      <div className='detail-image-container'>
        <div className='first-image-container'>
          <p>Image 1</p>
        </div>
        <div className='second-image-container'>
          <p>Image 2</p>
        </div>
      </div>
      <div className='description-wrapper'>
        <div className='description-container'>
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laborum reiciendis
            asperiores cumque similique dignissimos commodi. Voluptate perspiciatis accusamus
            sapiente impedit dignissimos optio, esse facilis recusandae, autem repellat corrupti
            enim! Aliquam obcaecati vero illum. Aspernatur eum aut sit tempora quidem, ea
            consequuntur amet, praesentium alias incidunt saepe mollitia reiciendis nemo tenetur
            ipsam earum vitae quos magni temporibus voluptatem corrupti accusantium.
          </p>
        </div>
      </div>
      <div className='video-container'>
        <p>Demovideo som loopar</p>
      </div>
    </div>
  );
}

export default ProjectDetail;

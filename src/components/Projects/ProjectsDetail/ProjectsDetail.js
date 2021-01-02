import React, { useState, useEffect } from 'react';

function ProjectDetail(props) {
  const [projectObject, setProjectObject] = useState({});

  useEffect(() => {
    setProject();
  });

  const setProject = () => {
    const selectedProject = props.location.state.object;
    setProjectObject(selectedProject);
  };

  return (
    <div>
      <h1>Details</h1>
      <h2>{projectObject.title}</h2>
    </div>
  );
}

export default ProjectDetail;

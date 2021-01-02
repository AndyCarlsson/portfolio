import React from 'react';

class ProjectDetail extends React.Component {
  state = {
    project: {},
  };

  componentDidMount() {
    const projectObject = this.props.location.state.object;

    this.setState({
      project: projectObject,
    });
  }

  render() {
    return (
      <div>
        <h1>Details</h1>
        <h2>{this.state.project.title}</h2>
        <h2>{this.state.project.longDescription}</h2>
      </div>
    );
  }
}

export default ProjectDetail;

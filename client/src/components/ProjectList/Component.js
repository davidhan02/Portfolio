import React from 'react';

const ProjectList = ({ list }) =>
  list.map(project => (
    <div key={project.id}>
      {project.title}
      <br />
      {project.url}
      <br />
      {project.code}
      <br />
      {project.created}
      <br />
      {project.text}
      <br />
      {project.categories.join(', ')}
      <br />
      <br />
    </div>
  ));

export default ProjectList;

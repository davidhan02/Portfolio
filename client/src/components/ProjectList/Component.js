import React from 'react';
import Project from '../Project/Component';

const ProjectList = ({ list }) => {
  return list.map(project => <Project key={project.id} project={project} />);
};

export default ProjectList;

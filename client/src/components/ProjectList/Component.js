import React from 'react';
import ProjectListItem from './Item';
import { ProjectListWrapper } from './style';

const ProjectList = ({ list }) => (
  <ProjectListWrapper>
    {list.map(project => (
      <ProjectListItem key={project.id} project={project} />
    ))}
  </ProjectListWrapper>
);

export default ProjectList;

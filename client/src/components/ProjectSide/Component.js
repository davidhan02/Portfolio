import React from 'react';
import ProjectSideList from './List';
import ProjectSideButton from './Button';
import { ProjectSideWrapper } from './style';

const ProjectSide = ({ token }) => (
  <ProjectSideWrapper>
    {token && <ProjectSideButton />}
    <ProjectSideList />
  </ProjectSideWrapper>
);

export default ProjectSide;

import React from 'react';
import ProjectSideList from './List';
import { Link } from 'react-router-dom';
import { ProjectSideWrapper } from './style';
import { CreateButton } from '../shared/CreateButton';

const ProjectSide = ({ token }) => (
  <ProjectSideWrapper>
    {token && (
      <CreateButton as={Link} to="/projects/form">
        new project
      </CreateButton>
    )}
    <ProjectSideList />
  </ProjectSideWrapper>
);

export default ProjectSide;

import React from 'react';
import { Link } from 'react-router-dom';
import { CreateButton } from './style';

const ProjectSideButton = () => (
  <CreateButton as={Link} to="/projects/form">
    create post
  </CreateButton>
);

export default ProjectSideButton;

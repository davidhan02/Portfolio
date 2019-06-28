import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button';

const CreateProjectButton = styled(Button)`
  padding: 16px;
  text-align: center;
  text-decoration: none;
  border-radius: 2px 2px 0 0;
`;

const ProjectSideCreateButton = () => (
  <CreateProjectButton as={Link} to="/projects/form">
    create post
  </CreateProjectButton>
);

export default ProjectSideCreateButton;

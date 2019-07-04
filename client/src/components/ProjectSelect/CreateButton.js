import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const CreateButton = styled(Button)`
  display: flex;
  font-weight: 500;
  padding: 0 16px;
  border-radius: 0;
  align-items: center;
  text-decoration: none;
`;

const ProjectSelectCreateButton = () => (
  <CreateButton as={Link} to="/projects/form">
    create post
  </CreateButton>
);

export default ProjectSelectCreateButton;

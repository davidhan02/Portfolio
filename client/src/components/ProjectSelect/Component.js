import React from 'react';
import styled from 'styled-components/macro';
import { Route } from 'react-router-dom';
import ProjectSelectDropdown from './Dropdown';
import ProjectSelectCreateButton from './CreateButton';

import { ProjectSelectLabel } from './style';

const Menu = styled.nav`
  display: none;
  border: none;
  margin: 0 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ProjectSelect = ({ token }) => (
  <Menu>
    <ProjectSelectLabel>Select:</ProjectSelectLabel>
    <Route
      path="/projects/cat/:category"
      children={({ match, history }) => (
        <ProjectSelectDropdown
          category={match ? match.params.category : 'all'}
          history={history}
        />
      )}
    />
    {token && <ProjectSelectCreateButton />}
  </Menu>
);

export default ProjectSelect;

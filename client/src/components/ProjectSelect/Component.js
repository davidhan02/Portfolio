import React from 'react';
import { Route, Link } from 'react-router-dom';
import ProjectSelectDropdown from './Dropdown';
import { ProjectSelectMenu, ProjectSelectLabel, CreateButton } from './style';

const ProjectSelect = ({ token }) => (
  <ProjectSelectMenu>
    <ProjectSelectLabel>Select:</ProjectSelectLabel>
    <Route
      path="/projects/cat/:category"
      children={({ match, history }) => (
        <ProjectSelectDropdown
          category={match ? match.params.category : 'All'}
          history={history}
          token={token}
        />
      )}
    />
    {token && (
      <CreateButton as={Link} to="/projects/form">
        add new
      </CreateButton>
    )}
  </ProjectSelectMenu>
);

export default ProjectSelect;

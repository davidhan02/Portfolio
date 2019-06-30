import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../shared/PrivateRoute';
import ProjectSearchContainer from '../Project/Search/Container';
import ProjectFormContainer from '../ProjectForm/Container';
import ProjectRoutesBody from './Body';

const ProjectRoutes = () => (
  <>
    <Route
      exact
      path={['/projects', '/projects/:projectId', '/projects/cat/:category']}
      component={ProjectSearchContainer}
    />
    <Switch>
      <PrivateRoute
        exact
        path={['/projects/form', '/projects/form/:projectId']}
        component={ProjectFormContainer}
      />
      <Route component={ProjectRoutesBody} />
    </Switch>
  </>
);

export default ProjectRoutes;

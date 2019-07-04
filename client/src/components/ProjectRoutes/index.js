import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../shared/PrivateRoute';
import ProjectSearchContainer from '../ProjectSearch/Container';
import ProjectFormContainer from '../ProjectForm/Container';
import ProjectListContainer from '../ProjectList/Container';
import ProjectSideContainer from '../ProjectSide/Container';
import ProjectSelectContainer from '../ProjectSelect/Container';
import ProjectContainer from '../Project/Container';
import { BodyWrapper, MainSection } from './style';

const ProjectRoutes = () => (
  <>
    <Route
      exact
      path={['/projects', '/projects/:projectId', '/projects/cat/:category']}
      component={ProjectSearchContainer}
    />
    <Route
      exact
      path={['/projects', '/projects/:projectId', '/projects/cat/:category']}
      component={ProjectSelectContainer}
    />
    <Switch>
      <PrivateRoute
        exact
        path={['/projects/form', '/projects/form/:projectId']}
        component={ProjectFormContainer}
      />
      <Route
        render={() => (
          <BodyWrapper>
            <MainSection>
              <Switch>
                <Route exact path="/projects" component={ProjectListContainer} />
                <Route
                  exact
                  path="/projects/cat/:category"
                  render={({ match }) => (
                    <ProjectListContainer category={match.params.category} />
                  )}
                />
                <Route
                  exact
                  path="/projects/:projectId"
                  render={({ match }) => (
                    <ProjectContainer projectId={match.params.projectId} />
                  )}
                />
              </Switch>
            </MainSection>
            <ProjectSideContainer />
          </BodyWrapper>
        )}
      />
    </Switch>
  </>
);

export default ProjectRoutes;

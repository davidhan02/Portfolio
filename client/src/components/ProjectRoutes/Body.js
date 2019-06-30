import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectContainer from '../Project/Container';
import ProjectListContainer from '../ProjectList/Container';
import ProjectSideContainer from '../Project/Side/Container';
import { BodyWrapper, MainSection } from './style';

const ProjectRoutesBody = () => (
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
);

export default ProjectRoutesBody;

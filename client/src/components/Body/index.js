import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';
import NotFound from '../shared/NotFound';
import PrivateRoute from '../shared/PrivateRoute';
import ProfileContainer from '../Profile/Container';
import ProjectContainer from '../Project/Container';
import ProjectListContainer from '../ProjectList/Container';
import { BodyWrapper, MainSection, Placeholder } from './style';

import ProjectSide from '../Project/Side';
const Success = () => <Placeholder>Success</Placeholder>;
const Landing = () => <Placeholder>Landing</Placeholder>;

const Body = () => (
  <BodyWrapper>
    <MainSection>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/success" component={Success} />
        <Route path="/profile" component={ProfileContainer} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
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
        <Route component={NotFound} />
      </Switch>
    </MainSection>
    <Route path="/projects" component={ProjectSide} />
  </BodyWrapper>
);

export default Body;

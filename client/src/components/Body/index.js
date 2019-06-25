import React from 'react';
import NotFound from '../shared/NotFound';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';
import PrivateRoute from '../shared/PrivateRoute';
import ProfileContainer from '../Profile/Container';
import ProjectContainer from '../Project/Container';
import ProjectListContainer from '../ProjectList/Container';
import { BodyWrapper, MainSection, Placeholder } from './style';

const Landing = () => <Placeholder>Landing</Placeholder>;
const Contact = () => <Placeholder>Contact</Placeholder>;

const Body = () => (
  <BodyWrapper>
    <MainSection>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
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
  </BodyWrapper>
);

export default Body;

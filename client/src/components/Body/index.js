import React from 'react';
import NotFound from '../shared/NotFound';
import { Route, Switch } from 'react-router-dom';
import FullProjectContainer from '../FullProject/Container';
import ProjectListContainer from '../ProjectList/Container';
import { BodyWrapper, MainSection, Placeholder } from './style';

const Profile = () => <Placeholder>Profile</Placeholder>;
const Landing = () => <Placeholder>Landing</Placeholder>;
const Contact = () => <Placeholder>Contact</Placeholder>;

const Body = () => (
  <BodyWrapper>
    <MainSection>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
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
            <FullProjectContainer projectId={match.params.projectId} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </MainSection>
  </BodyWrapper>
);

export default Body;

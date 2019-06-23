import React from 'react';
import { Route } from 'react-router-dom';
import ProjectContainer from '../Project/Container';
import { BodyWrapper, MainSection, Placeholder } from './style';

const Profile = () => <Placeholder>Profile</Placeholder>;
const Landing = () => <Placeholder>Landing</Placeholder>;
const Projects = () => <Placeholder>Projects</Placeholder>;
const Contact = () => <Placeholder>Contact</Placeholder>;

const Body = () => (
  <BodyWrapper>
    <MainSection>
      <Route exact path="/" component={Landing} />
      <Route path="/profile" component={Profile} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route
        exact
        path="/project/:projectId"
        render={({ match }) => (
          <ProjectContainer projectId={match.params.projectId} />
        )}
      />
    </MainSection>
  </BodyWrapper>
);

export default Body;

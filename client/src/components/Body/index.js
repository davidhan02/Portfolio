import React from 'react';
import { Route } from 'react-router-dom';
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
    </MainSection>
  </BodyWrapper>
);

export default Body;

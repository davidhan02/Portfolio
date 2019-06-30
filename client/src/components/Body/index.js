import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';
import NotFound from '../shared/NotFound';
import PrivateRoute from '../shared/PrivateRoute';
import ProfileContainer from '../Profile/Container';
import { BodyWrapper, MainSection, Placeholder } from './style';

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
        <Route component={NotFound} />
      </Switch>
    </MainSection>
  </BodyWrapper>
);

export default Body;

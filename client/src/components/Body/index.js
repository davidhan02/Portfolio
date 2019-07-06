import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';
import NotFound from '../shared/NotFound';
import PrivateRoute from '../shared/PrivateRoute';
import { BodyWrapper, MainSection } from '../shared/BodyMain';
import { Placeholder } from './style';

const Success = () => <Placeholder>Success</Placeholder>;

const Body = () => (
  <BodyWrapper>
    <MainSection>
      <Switch>
        <Route path="/success" component={Success} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </MainSection>
  </BodyWrapper>
);

export default Body;

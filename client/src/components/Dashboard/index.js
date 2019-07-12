import React from 'react';
import DashboardLinks from './Links';
import MessageContainer from '../Message/Container';
import MessageListContainer from '../MessageList/Container';
import { BodyWrapper, MainSection } from '../shared/BodyMain';
import { Switch, Route } from 'react-router-dom';

const Dashboard = () => (
  <BodyWrapper>
    <DashboardLinks />
    <MainSection>
      <Switch>
        <Route exact path="/dashboard" component={MessageListContainer} />
        <Route exact path="/dashboard/:messageId" component={MessageContainer} />
      </Switch>
    </MainSection>
  </BodyWrapper>
);

export default Dashboard;

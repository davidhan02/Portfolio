import React from 'react';
import DashboardLinks from './Links';
import MessageContainer from '../Message/Container';
import MessageListContainer from '../MessageList/Container';
import { Switch, Route } from 'react-router-dom';

const Dashboard = () => (
  <>
    <DashboardLinks />
    <br />
    Messages:
    <br />
    <Switch>
      <Route exact path="/dashboard" component={MessageListContainer} />
      <Route exact path="/dashboard/:messageId" component={MessageContainer} />
    </Switch>
  </>
);

export default Dashboard;

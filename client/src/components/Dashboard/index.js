import React from 'react';
import DashboardLinks from './Links';
import MessageListContainer from '../MessageList/Container';

const Dashboard = () => (
  <>
    <DashboardLinks />
    <br />
    Messages:
    <br />
    <MessageListContainer />
  </>
);

export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';
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

import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as Theme } from 'styled-components';
import ErrorDisplayContainer from '../ErrorDisplay/Container';
import ProjectFormContainer from '../ProjectForm/Container';
import ProfileFormContainer from '../ProfileForm/Container';
import RegisterContainer from '../Register/Container';
import GlobalStyle from '../../styles/globalStyle';
import PrivateRoute from '../shared/PrivateRoute';
import NavbarContainer from '../Navbar/Container';
import LoginContainer from '../Login/Container';
import history from '../../util/history';
import theme from '../../styles/theme';
import Body from '../Body';
import React from 'react';

import styled from 'styled-components/macro';

const Placeholder = styled.h2`
  text-align: center;
  color: ${props => props.theme.normalText};
`;
const Dashboard = () => <Placeholder>Dashboard</Placeholder>;

const App = ({ dark }) => (
  <Theme theme={theme(dark)}>
    <Router history={history}>
      <>
        <GlobalStyle />
        <NavbarContainer />
        <ErrorDisplayContainer />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/form/project" component={ProjectFormContainer} />
          <PrivateRoute path="/form/profile" component={ProfileFormContainer} />
          <Route path="/" component={Body} />
        </Switch>
      </>
    </Router>
  </Theme>
);

export default App;

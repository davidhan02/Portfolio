import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as Theme } from 'styled-components';
import ErrorDisplayContainer from '../ErrorDisplay/Container';
import ProjectFormContainer from '../ProjectForm/Container';
import RegisterContainer from '../Register/Container';
import GlobalStyle from '../../styles/globalStyle';
import PrivateRoute from '../shared/PrivateRoute';
import NavbarContainer from '../Navbar/Container';
import LoginContainer from '../Login/Container';
import history from '../../util/history';
import theme from '../../styles/theme';
import React from 'react';

import styled from 'styled-components/macro';

const Placeholder = styled.h2`
  text-align: center;
  color: ${props => props.theme.normalText};
`;

const Dashboard = () => <Placeholder>Dashboard</Placeholder>;
const Profile = () => <Placeholder>Profile</Placeholder>;
const Landing = () => <Placeholder>Landing</Placeholder>;
const Projects = () => <Placeholder>Projects</Placeholder>;
const Contact = () => <Placeholder>Contact</Placeholder>;
const NotFound = () => <Placeholder>404: Not Found</Placeholder>;

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
          <Route exact path="/" component={Landing} />
          <Route path="/profile" component={Profile} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  </Theme>
);

export default App;

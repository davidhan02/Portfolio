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
          <PrivateRoute
            exact
            path="/projects/form"
            component={ProjectFormContainer}
          />
          <PrivateRoute
            exact
            path="/projects/form/:projectId"
            component={ProjectFormContainer}
          />
          <PrivateRoute
            exact
            path="/profile/form"
            component={ProfileFormContainer}
          />
          <Route path="/" component={Body} />
        </Switch>
      </>
    </Router>
  </Theme>
);

export default App;

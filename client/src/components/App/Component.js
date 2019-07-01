import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as Theme } from 'styled-components';
import ErrorDisplayContainer from '../ErrorDisplay/Container';
import ProfileFormContainer from '../ProfileForm/Container';
import LinksFormContainer from '../LinksForm/Container';
import ContactContainer from '../Contact/Container';
import EduFormContainer from '../EduForm/Container';
import ExpFormContainer from '../ExpForm/Container';
import RegisterContainer from '../Register/Container';
import GlobalStyle from '../../styles/globalStyle';
import PrivateRoute from '../shared/PrivateRoute';
import NavbarContainer from '../Navbar/Container';
import LoginContainer from '../Login/Container';
import ProjectRoutes from '../ProjectRoutes';
import ProfileRoutes from '../ProfileRoutes'; //
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
          <Route path="/profile" component={ProfileRoutes} />
          <Route path="/projects" component={ProjectRoutes} />
          <Route path="/contact" component={ContactContainer} />
          <Route path="/" component={Body} />
        </Switch>
      </>
    </Router>
  </Theme>
);

export default App;

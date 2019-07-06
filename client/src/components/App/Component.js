import { Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as Theme } from 'styled-components';
import ErrorDisplayContainer from '../ErrorDisplay/Container';
import ContactContainer from '../Contact/Container';
import RegisterContainer from '../Register/Container';
import GlobalStyle from '../../styles/globalStyle';
import NavbarContainer from '../Navbar/Container';
import FooterContainer from '../Footer/Container';
import LoginContainer from '../Login/Container';
import ProjectRoutes from '../ProjectRoutes';
import ProfileRoutes from '../ProfileRoutes';
import ScrollToTop from '../ScrollToTop';
import history from '../../util/history';
import theme from '../../styles/theme';
import Landing from '../Landing';
import Body from '../Body';
import React from 'react';

const App = ({ dark }) => (
  <Theme theme={theme(dark)}>
    <Router history={history}>
      <ScrollToTop>
        <>
          <GlobalStyle />
          <NavbarContainer />
          <ErrorDisplayContainer />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/profile" component={ProfileRoutes} />
            <Route path="/projects" component={ProjectRoutes} />
            <Route path="/contact" component={ContactContainer} />
            <Route path="/success" render={() => <Landing success />} />
            <Route path="/" component={Body} />
          </Switch>
          <FooterContainer />
        </>
      </ScrollToTop>
    </Router>
  </Theme>
);

export default App;

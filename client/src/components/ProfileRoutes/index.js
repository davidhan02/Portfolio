import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../shared/PrivateRoute';

import ProfileFormContainer from '../ProfileForm/Container';
import LinksFormContainer from '../LinksForm/Container';
import CertFormContainer from '../CertForm/Container';
import EduFormContainer from '../EduForm/Container';
import ExpFormContainer from '../ExpForm/Container';
import ProfileContainer from '../Profile/Container';

const ProfileRoutes = () => (
  <>
    <Switch>
      <Route exact path="/profile" component={ProfileContainer} />
      <PrivateRoute path="/profile/form" component={ProfileFormContainer} />
      <PrivateRoute path="/profile/linksform/" component={LinksFormContainer} />
      <PrivateRoute
        exact
        path={['/profile/eduform/', '/profile/eduform/:eduId']}
        component={EduFormContainer}
      />
      <PrivateRoute
        exact
        path={['/profile/expform/', '/profile/expform/:expId']}
        component={ExpFormContainer}
      />
      <PrivateRoute
        exact
        path={['/profile/certform/', '/profile/certform/:certId']}
        component={CertFormContainer}
      />
    </Switch>
  </>
);

export default ProfileRoutes;

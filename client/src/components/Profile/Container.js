import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Profile from './Component';
import Loading from '../shared/Loading';
import NotFoundWrap from '../shared/NotFoundWrap';
import { getFirstProfile, clearProfile } from '../../actions/profile';

class ProfileContainer extends Component {
  render() {
    const { loading, profile, token } = this.props;
    if (loading) return <Loading />;
    if (!profile) return <NotFoundWrap />;
    return <Profile token={token} profile={profile} />;
  }
}

const mapStateToProps = ({ auth, profile }) => ({
  token: auth.token,
  profile: profile.single,
  loading: profile.loading
});

const mapDispatchToProps = { getFirstProfile, clearProfile };

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProfileContainer);

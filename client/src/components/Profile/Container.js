import React, { Component } from 'react';
import { compose } from 'redux';
import Profile from './Component';
import { connect } from 'react-redux';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';
import ProfileEduList from './EduList';
import { clearError } from '../../actions/error';
import { getFirstProfile, clearProfile } from '../../actions/profile';
import ProfileAuthLinks from './AuthLinks';

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.getFirstProfile();
  }

  componentWillUnmount() {
    this.props.clearError();
    this.props.clearProfile();
  }

  render() {
    const { loading, profile, token } = this.props;
    if (loading) return <Loading />;
    if (!profile) return <NotFound />;
    return (
      <>
        {token && <ProfileAuthLinks />}
        <Profile profile={profile} />
        {profile.education.length > 1 && (
          <ProfileEduList education={profile.education} />
        )}
      </>
    );
  }
}

const mapStateToProps = ({ auth, profile }) => ({
  token: auth.token,
  profile: profile.single,
  loading: profile.loading
});

const mapDispatchToProps = { getFirstProfile, clearProfile, clearError };

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProfileContainer);

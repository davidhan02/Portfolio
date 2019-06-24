import React, { Component } from 'react';
import { compose } from 'redux';
import Profile from './Component';
import { connect } from 'react-redux';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';
import { clearError } from '../../actions/error';
import { getFirstProfile, clearProfile } from '../../actions/profile';

class ProfileContainer extends Component {
  componentDidMount() {
    if (!this.props.profile) this.props.getFirstProfile();
  }

  componentWillUnmount() {
    this.props.clearError();
    this.props.clearProfile();
  }

  render() {
    const { loading, profile } = this.props;
    if (loading) return <Loading />;
    if (!profile) return <NotFound />;
    return <Profile loading={loading} profile={profile} />;
  }
}

const mapStateToProps = ({ profile }) => ({
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

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Loading from '../shared/Loading';
import Footer from './Component';
import { logout } from '../../actions/auth';
import { getFirstProfile, clearProfile } from '../../actions/profile';

class FooterContainer extends Component {
  componentDidMount() {
    if (!this.props.profile) {
      this.props.getFirstProfile();
    }
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }

  render() {
    const { loading, profile, token, logout } = this.props;
    if (loading) return <Loading />;
    if (!profile) return null;
    return <Footer token={token} profile={profile} logout={logout} />;
  }
}

const mapStateToProps = ({ auth, profile }) => ({
  token: auth.token,
  profile: profile.single,
  loading: profile.loading
});

const mapDispatchToProps = { getFirstProfile, clearProfile, logout };

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(FooterContainer);

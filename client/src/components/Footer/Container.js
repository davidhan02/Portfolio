import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Loading from '../shared/Loading';
import Footer from './Component';
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

  componentDidUpdate(prevProps) {
    if (!this.props.profile) {
      this.props.getFirstProfile();
    }
  }

  render() {
    const { loading, profile, token } = this.props;
    if (loading) return <Loading />;
    if (!profile) return null;
    return <Footer token={token} profile={profile} />;
  }
}

const mapStateToProps = ({ profile }) => ({
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

export default enhance(FooterContainer);

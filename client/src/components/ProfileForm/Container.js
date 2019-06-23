import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitProfile } from '../../actions/profile';
import { clearError } from '../../actions/error';
import ProfileForm from './Component';

class ProfileFormContainer extends Component {
  componentWillUnmount() {
    this.props.clearError();
  }

  onSubmit = formValues => {
    this.props.submitProfile(formValues);
  };

  render() {
    const { handleSubmit, loading } = this.props;
    return (
      <ProfileForm loading={loading} handleSubmit={handleSubmit(this.onSubmit)} />
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile: profile.single,
  loading: profile.loading
});

const mapDispatchToProps = { submitProfile, clearError };

const enhance = compose(
  reduxForm({ form: 'profile' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProfileFormContainer);

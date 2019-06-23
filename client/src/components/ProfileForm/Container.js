import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import {
  getFirstProfile,
  submitProfile,
  updateProfile
} from '../../actions/profile';
import { clearError } from '../../actions/error';
import ProfileForm from './Component';

class ProfileFormContainer extends Component {
  state = { editMode: false };

  componentDidMount = async () => {
    await this.props.getFirstProfile();
    if (this.props.profile) {
      console.log(this.props.profile);
      this.setState({ editMode: true });
      this.props.initialize({
        ...this.props.profile
      });
    }
  };

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

const mapDispatchToProps = {
  getFirstProfile,
  submitProfile,
  updateProfile,
  clearError
};

const enhance = compose(
  reduxForm({ form: 'profile' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProfileFormContainer);

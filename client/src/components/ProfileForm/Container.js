import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { clearError } from '../../actions/error';
import ProfileForm from './Component';
import {
  getFirstProfile,
  submitProfile,
  updateProfile
} from '../../actions/profile';

class ProfileFormContainer extends Component {
  state = { editMode: false };

  componentDidMount = async () => {
    await this.props.getFirstProfile();
    const myProfile = this.props.profile;
    if (myProfile) {
      this.setState({ editMode: true });
      this.props.initialize({
        ...myProfile,
        birthday: myProfile.birthday.split('T')[0],
        skills: myProfile.skills.join(', ')
      });
    }
  };

  componentWillUnmount() {
    this.props.clearError();
  }

  onSubmit = formValues => {
    const { user, submitProfile, updateProfile } = this.props;
    if (this.state.editMode) {
      return updateProfile({ ...formValues, user }, this.props.profile.id);
    }
    submitProfile(formValues);
  };

  render() {
    const { handleSubmit, loading } = this.props;
    return (
      <ProfileForm loading={loading} handleSubmit={handleSubmit(this.onSubmit)} />
    );
  }
}

const mapStateToProps = ({ auth, profile }) => ({
  user: auth.user.id,
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

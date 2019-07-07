import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ProfileForm from './Component';
import {
  getFirstProfile,
  submitProfile,
  updateProfile,
  clearProfile
} from '../../actions/profile';

class ProfileFormContainer extends Component {
  state = { editMode: false };

  componentDidMount = async () => {
    await this.props.getFirstProfile();
    if (this.props.profile) {
      this.setState({ editMode: true });
      const { profile } = this.props;
      await this.props.initialize({
        ...profile,
        birthday: profile.birthday.split('T')[0],
        skills: profile.skills.join(', ')
      });
    }
  };

  componentWillUnmount() {
    this.props.getFirstProfile();
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
  clearProfile
};

const enhance = compose(
  reduxForm({ form: 'profile' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProfileFormContainer);

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { clearError } from '../../actions/error';
import EduForm from './Component';
import { submitEdu, updateEdu } from '../../actions/edu';
import { getFirstProfile, clearProfile } from '../../actions/profile';

class EduFormContainer extends Component {
  state = { editMode: false };

  componentDidMount = async () => {
    await this.props.getFirstProfile();
    const { profile, match } = this.props;
    if (match.params.eduId) {
      const lyst = profile.education.filter(edu => edu.id === match.params.eduId);
      if (lyst.length === 1) {
        this.setState({ editMode: true });
        const edu = lyst[0];
        await this.props.initialize({
          ...edu,
          current: edu.current.toString(),
          from: edu.from.split('T')[0],
          to: edu.to ? edu.to.split('T')[0] : ''
        });
      }
    }
  };

  componentWillUnmount() {
    this.props.clearError();
    this.props.clearProfile();
  }

  onSubmit = formValues => {
    const { match, profile, submitEdu, updateEdu } = this.props;
    if (this.state.editMode) {
      return updateEdu(formValues, profile.id, match.params.eduId);
    }
    submitEdu(formValues, profile.id);
  };

  render() {
    const { handleSubmit, loading, form } = this.props;
    return (
      <EduForm
        form={form}
        loading={loading}
        handleSubmit={handleSubmit(this.onSubmit)}
      />
    );
  }
}

const mapStateToProps = ({ profile, form }) => ({
  form: form.edu,
  profile: profile.single,
  loading: profile.loading
});

const mapDispatchToProps = {
  getFirstProfile,
  submitEdu,
  updateEdu,
  clearError,
  clearProfile
};

const enhance = compose(
  reduxForm({ form: 'edu', initialValues: { current: 'false' } }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(EduFormContainer);

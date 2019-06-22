import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitProject } from '../../actions/project';
import { clearError } from '../../actions/error';
import ProjectForm from './Component';

class ProjectFormContainer extends Component {
  componentWillUnmount() {
    this.props.clearError();
  }

  onSubmit = formValues => {
    this.props.submitLogin(formValues);
  };

  render() {
    const { handleSubmit, loading } = this.props;
    return (
      <ProjectForm loading={loading} handleSubmit={handleSubmit(this.onSubmit)} />
    );
  }
}

const mapStateToProps = ({ project }) => ({
  project: project.single,
  loading: project.loading
});

const mapDispatchToProps = { submitProject, clearError };

const enhance = compose(
  reduxForm({ form: 'project' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProjectFormContainer);

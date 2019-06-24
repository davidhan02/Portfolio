import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { getProject, submitProject, updateProject } from '../../actions/project';
import { clearError } from '../../actions/error';
import ProjectForm from './Component';
import validate from './validate';

class ProjectFormContainer extends Component {
  state = { editMode: false };

  componentDidMount = async () => {
    const { match, getProject } = this.props;
    if (match.params.projectId) {
      this.setState({ editMode: true });
      await getProject(match.params.projectId);
      const { project } = this.props;
      if (project) {
        await this.props.initialize({
          ...project,
          created: project.created.split('T')[0],
          categories: project.categories.join(', ')
        });
      }
    }
  };

  componentWillUnmount() {
    this.props.clearError();
  }

  onSubmit = formValues => {
    const { user, project, submitProject, updateProject } = this.props;
    if (this.state.editMode) {
      return updateProject({ ...formValues, user }, project.id);
    }
    submitProject(formValues);
  };

  render() {
    const { handleSubmit, loading } = this.props;
    return (
      <ProjectForm loading={loading} handleSubmit={handleSubmit(this.onSubmit)} />
    );
  }
}

const mapStateToProps = ({ auth, project }) => ({
  user: auth.user.id,
  project: project.single,
  loading: project.loading
});

const mapDispatchToProps = { getProject, submitProject, updateProject, clearError };

const enhance = compose(
  reduxForm({ form: 'project', validate }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProjectFormContainer);

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getProject, clearProject } from '../../actions/project';
import { clearError } from '../../actions/error';
import FullProject from './Component';

class FullProjectContainer extends Component {
  componentDidMount() {
    const { project, projectId, getProject } = this.props;
    if (!project) {
      getProject(projectId);
    }
  }

  componentWillUnmount() {
    this.props.clearError();
    this.props.clearProject();
  }

  render() {
    const { loading, project } = this.props;
    return <FullProject loading={loading} project={project} />;
  }
}

const mapStateToProps = ({ project }) => ({
  project: project.single,
  loading: project.loading
});

const mapDispatchToProps = { getProject, clearProject, clearError };

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(FullProjectContainer);

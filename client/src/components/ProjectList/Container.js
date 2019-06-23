import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { clearError } from '../../actions/error';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';
import ProjectList from './Component';
import {
  getProjectList,
  getProjectsByCat,
  clearProject
} from '../../actions/project';

class ProjectListContainer extends Component {
  componentDidMount() {
    const { list, category, getProjectList, getProjectsByCat } = this.props;
    if (list.length < 1) {
      category ? getProjectsByCat(category) : getProjectList();
    }
  }

  componentWillUnmount() {
    this.props.clearError();
    this.props.clearProject();
  }

  render() {
    const { loading, list } = this.props;
    if (loading) return <Loading />;
    if (!list) return <NotFound />;
    return <ProjectList list={list} />;
  }
}

const mapStateToProps = ({ project }) => ({
  list: project.list,
  loading: project.loading
});

const mapDispatchToProps = {
  getProjectList,
  getProjectsByCat,
  clearProject,
  clearError
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProjectListContainer);

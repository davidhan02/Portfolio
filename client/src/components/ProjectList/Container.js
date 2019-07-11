import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
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
    const { category, getProjectList, getProjectsByCat } = this.props;
    if (category) return getProjectsByCat(category);
    getProjectList();
  }

  componentDidUpdate(prevProps) {
    const { category, getProjectList, getProjectsByCat } = this.props;
    if (prevProps.category && !category) getProjectList();
    if (category && category !== prevProps.category) getProjectsByCat(category);
  }

  componentWillUnmount() {
    this.props.clearProject();
  }

  render() {
    const { loading, list } = this.props;
    if (loading) return <Loading />;
    if (list.length < 1) return <NotFound />;
    return <ProjectList list={list} />;
  }
}

const mapStateToProps = ({ auth, project }) => ({
  token: auth.token,
  list: project.list,
  loading: project.loading
});

const mapDispatchToProps = {
  getProjectList,
  getProjectsByCat,
  clearProject
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProjectListContainer);

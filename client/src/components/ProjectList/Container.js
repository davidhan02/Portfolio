import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { clearError } from '../../actions/error';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';
import ProjectList from './Component';
import { Link } from 'react-router-dom';
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
    this.props.clearError();
    this.props.clearProject();
  }

  render() {
    const { loading, category, token, list } = this.props;
    if (loading) return <Loading />;
    if (!list) return <NotFound />;
    return (
      <>
        {token && <Link to="/projects/form">Add New Project</Link>}
        <br />
        {category && <h3>Category: {category}</h3>}
        <br />
        <ProjectList list={list} />
      </>
    );
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

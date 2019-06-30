import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ProjectSearch from './Component';

class ProjectSearchContainer extends Component {
  componentDidMount = async () => {
    const { match } = this.props;
    if (match.params.category) {
      await this.props.initialize({
        category: match.params.category
      });
    }
  };

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match.params.category !== prevProps.match.params.category) {
      this.props.initialize({
        category: match.params.category
      });
    }
  }

  onSubmit = formValues => {
    const { history } = this.props;
    if (!formValues.category) {
      return history.push('/projects');
    }
    const modifiedCategory =
      formValues.category.charAt(0).toUpperCase() + formValues.category.slice(1);
    history.push(`/projects/cat/${modifiedCategory}`);
  };

  render() {
    const { handleSubmit } = this.props;
    return <ProjectSearch handleSubmit={handleSubmit(this.onSubmit)} />;
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

const enhance = compose(
  reduxForm({ form: 'search' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ProjectSearchContainer);

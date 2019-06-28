import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { clearError } from '../../../actions/error';
import Search from './Component';

class SearchContainer extends Component {
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

  componentWillUnmount() {
    this.props.clearError();
  }

  onSubmit = formValues => {
    const { history } = this.props;
    if (!formValues.category) {
      return history.push('/projects');
    }
    history.push(`/projects/cat/${formValues.category}`);
  };

  render() {
    const { handleSubmit } = this.props;
    return <Search handleSubmit={handleSubmit(this.onSubmit)} />;
  }
}

const mapStateToProps = null;

const mapDispatchToProps = { clearError };

const enhance = compose(
  reduxForm({ form: 'search' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(SearchContainer);

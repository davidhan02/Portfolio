import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { clearError } from '../../actions/error';
import { submitMessage, clearMessage } from '../../actions/message';
import Contact from './Component';

class ContactContainer extends Component {
  componentWillUnmount() {
    this.props.clearError();
    this.props.clearMessage();
  }

  onSubmit = formValues => {
    this.props.submitMessage(formValues);
  };

  render() {
    const { handleSubmit, loading } = this.props;
    return <Contact loading={loading} handleSubmit={handleSubmit(this.onSubmit)} />;
  }
}

const mapStateToProps = ({ message }) => ({
  loading: message.loading
});

const mapDispatchToProps = {
  submitMessage,
  clearError,
  clearMessage
};

const enhance = compose(
  reduxForm({ form: 'message' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ContactContainer);

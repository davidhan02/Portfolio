import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitMessage, clearMessage } from '../../actions/message';
import Contact from './Component';
import validate from './validate';

class ContactContainer extends Component {
  componentWillUnmount() {
    this.props.clearMessage();
  }

  onSubmit = formValues => {
    this.props.submitMessage(formValues);
  };

  render() {
    const { handleSubmit, loading, profile } = this.props;
    return (
      <Contact
        profile={profile}
        loading={loading}
        handleSubmit={handleSubmit(this.onSubmit)}
      />
    );
  }
}

const mapStateToProps = ({ profile, message }) => ({
  profile: profile.single,
  loading: message.loading
});

const mapDispatchToProps = {
  submitMessage,
  clearMessage
};

const enhance = compose(
  reduxForm({ form: 'message', validate }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(ContactContainer);

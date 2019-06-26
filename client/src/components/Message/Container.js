import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';
import { getMessage, clearMessage } from '../../actions/message';
import { clearError } from '../../actions/error';
import Message from './Component';

class MessageContainer extends Component {
  componentDidMount() {
    const { getMessage, match } = this.props;
    getMessage(match.params.messageId);
  }

  componentWillUnmount() {
    this.props.clearError();
    this.props.clearMessage();
  }

  render() {
    const { loading, message } = this.props;
    if (loading) return <Loading />;
    if (!message) return <NotFound />;
    return <Message message={message} />;
  }
}

const mapStateToProps = ({ message }) => ({
  message: message.single,
  loading: message.loading
});

const mapDispatchToProps = { getMessage, clearMessage, clearError };

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(MessageContainer);

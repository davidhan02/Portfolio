import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import MessageList from './Component';
import Loading from '../shared/Loading';
import NotFound from '../shared/NotFound';
import { clearError } from '../../actions/error';
import { getMessageList, clearMessage } from '../../actions/message';

class MessageListContainer extends Component {
  componentDidMount() {
    this.props.getMessageList();
  }

  componentWillUnmount() {
    this.props.clearMessage();
    this.props.clearError();
  }

  render() {
    const { loading, messages } = this.props;
    if (loading) return <Loading />;
    if (messages.length < 1) return <NotFound />;
    return <MessageList messages={messages} />;
  }
}

const mapStateToProps = ({ message }) => ({
  messages: message.list,
  loading: message.loading
});

const mapDispatchToProps = { getMessageList, clearMessage, clearError };

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(MessageListContainer);

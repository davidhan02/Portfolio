import { connect } from 'react-redux';
import MessageHeader from './Component';
import { deleteMessage } from '../../../actions/message';

const mapStateToProps = null;

const mapDispatchToProps = { deleteMessage };

const MessageHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageHeader);

export default MessageHeaderContainer;

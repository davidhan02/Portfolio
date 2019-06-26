import { connect } from 'react-redux';
import MessageListItem from './Component';
import { deleteMessage } from '../../../actions/message';

const mapStateToProps = null;

const mapDispatchToProps = { deleteMessage };

const MessageListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListItem);

export default MessageListItemContainer;

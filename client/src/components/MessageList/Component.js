import React from 'react';
import MessageListItemContainer from './Item/Container';

const MessageList = ({ messages }) =>
  messages.map(msg => <MessageListItemContainer message={msg} />);

export default MessageList;

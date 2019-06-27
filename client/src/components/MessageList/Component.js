import React from 'react';
import MessageHeaderContainer from '../Message/Header/Container';

const MessageList = ({ messages }) =>
  messages.map(msg => <MessageHeaderContainer message={msg} details />);

export default MessageList;

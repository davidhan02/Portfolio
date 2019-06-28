import React from 'react';
import MessageHeaderContainer from '../Message/Header/Container';

const MessageList = ({ messages }) =>
  messages.map(msg => <MessageHeaderContainer key={msg.id} message={msg} details />);

export default MessageList;

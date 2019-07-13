import React from 'react';
import { MessageListItem } from './style';
import { ListWrapper } from '../shared/ListAssets';
import MessageHeaderContainer from '../Message/Header/Container';

const MessageList = ({ messages }) => (
  <ListWrapper as="ol">
    {messages.map(msg => (
      <MessageListItem key={msg.id}>
        <MessageHeaderContainer message={msg} details />
      </MessageListItem>
    ))}
  </ListWrapper>
);

export default MessageList;

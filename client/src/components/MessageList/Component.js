import React from 'react';
import { ListWrapper, ListItem } from '../shared/ListAssets';
import MessageHeaderContainer from '../Message/Header/Container';

const MessageList = ({ messages }) => (
  <ListWrapper as="ol">
    {messages.map(msg => (
      <ListItem key={msg.id}>
        <MessageHeaderContainer message={msg} details />
      </ListItem>
    ))}
  </ListWrapper>
);

export default MessageList;

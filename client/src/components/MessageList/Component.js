import React from 'react';

const MessageList = ({ messages }) =>
  messages.map(msg => (
    <>
      <br />
      Subject: {msg.subject}
      <br />
      Name: {msg.name}
      <br />
      Email: {msg.email}
      <br />
      Body: {msg.body}
      <br />
      Read: {msg.read.toString()}
      <br />
    </>
  ));

export default MessageList;

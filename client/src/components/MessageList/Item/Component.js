import React from 'react';
import { Link } from 'react-router-dom';

const MessageListItem = ({ message, deleteMessage }) => (
  <>
    <br />
    <Link to={`/dashboard/${message.id}`}>{message.subject}</Link>
    &nbsp; From: {message.name}
    &nbsp; Sent: {message.sent.split('T')[0]}&nbsp;
    <Link to="/dashboard" onClick={() => deleteMessage(message.id)}>
      Delete
    </Link>
    <br />
  </>
);

export default MessageListItem;

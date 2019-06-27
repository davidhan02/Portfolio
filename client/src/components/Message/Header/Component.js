import React from 'react';
import { Link } from 'react-router-dom';

const MessageHeader = ({ details, message, deleteMessage }) => (
  <>
    <br />
    <Link
      to={`/dashboard/${message.id}`}
      style={{ fontWeight: message.read ? '400' : '600' }}
    >
      {message.subject}
    </Link>
    {details && (
      <>
        &nbsp; From: {message.name}
        &nbsp; Sent: {message.sent.split('T')[0]}
      </>
    )}
    &nbsp;
    <Link to="/dashboard" onClick={() => deleteMessage(message.id)}>
      Delete
    </Link>
    <br />
  </>
);

export default MessageHeader;

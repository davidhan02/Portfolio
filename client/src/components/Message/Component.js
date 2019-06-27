import React from 'react';
import { Link } from 'react-router-dom';
import MessageHeaderContainer from './Header/Container';

const Message = ({ message }) => (
  <>
    <br />
    <Link to="/dashboard">Back to Message List</Link>
    <br />
    <MessageHeaderContainer message={message} />
    From: {message.name}
    <br />
    Email: {message.email}
    <br />
    Sent: {message.sent.split('T')[0]}
    <br />
    Body: <br />
    <span style={{ whiteSpace: 'pre-wrap' }}>{message.body}</span>
    <br />
  </>
);

export default Message;

import React from 'react';
import { Link } from 'react-router-dom';
import MessageHeaderContainer from './Header/Container';

const Message = ({ message }) => (
  <>
    <br />
    <Link to="/dashboard">Back to Message List</Link>
    <br />
    <MessageHeaderContainer message={message} />
    {message.email}
    <br />
    {message.body}
    <br />
  </>
);

export default Message;

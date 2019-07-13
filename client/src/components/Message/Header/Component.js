import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
`;

const MessageHeader = ({ details, message, deleteMessage }) => (
  <Wrapper>
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
  </Wrapper>
);

export default MessageHeader;

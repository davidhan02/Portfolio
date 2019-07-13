import React from 'react';
import { TitleLink, DeleteLink } from '../../shared/CommonLinks';

import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
`;

const MessageHeader = ({ details, message, deleteMessage }) => (
  <Wrapper>
    <TitleLink
      to={`/dashboard/${message.id}`}
      style={{ fontWeight: message.read ? '400' : '600' }}
    >
      {message.subject}
    </TitleLink>
    {details && (
      <>
        &nbsp; from {message.name} on {message.sent.split('T')[0]}
      </>
    )}
    &nbsp;
    <DeleteLink to="/dashboard" onClick={() => deleteMessage(message.id)}>
      Delete
    </DeleteLink>
  </Wrapper>
);

export default MessageHeader;

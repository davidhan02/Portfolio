import React from 'react';
import MessageHeaderContainer from './Header/Container';

import styled from 'styled-components/macro';
const Wrapper = styled.div`
  padding: 10px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 3px;
  background: ${props => props.theme.foreground};
  color: ${props => props.theme.mutedText};
  line-height: 30px;
`;

const Message = ({ message }) => (
  <Wrapper>
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
  </Wrapper>
);

export default Message;

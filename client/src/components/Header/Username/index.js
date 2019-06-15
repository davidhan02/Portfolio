import React from 'react';
import styled from 'styled-components/macro';
import HeaderUsernameWrapper from './Wrapper';
import { wideFont, overflow } from '../../../styles/helpers';

const HeaderUsernameText = styled.span`
  ${wideFont};
  ${overflow};

  color: ${props => props.theme.mutedText};
`;

const HeaderUsername = ({ user }) => (
  <HeaderUsernameWrapper to="/dashboard">
    <HeaderUsernameText>{user.name}</HeaderUsernameText>
  </HeaderUsernameWrapper>
);

export default HeaderUsername;

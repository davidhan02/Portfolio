import React from 'react';
import styled from 'styled-components/macro';

const Header = styled.span`
  color: ${props => props.theme.mutedText};
  text-transform: uppercase;
  font-size: 14px;
  padding: 16px 12px;
  display: block;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.mutedText};
`;

const SideCategoryListHeader = () => <Header>categories</Header>;

export default SideCategoryListHeader;

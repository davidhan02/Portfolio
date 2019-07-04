import styled from 'styled-components/macro';
import React from 'react';

const OutLink = styled.a`
  text-decoration: none;
  &:hover,
  &:active {
    & path {
      fill: ${props => props.theme.accent};
    }
  }
`;

const LogoLink = props => (
  <OutLink href={props.href} target="_blank" rel="noreferrer noopener">
    {props.children}
  </OutLink>
);

export default LogoLink;

import React from 'react';
import { LogoRow } from '../shared/Line';
import GithubLogo from '../shared/GithubLogo';
import LinkedinLogo from '../shared/LinkedinLogo';
import InstagramLogo from '../shared/InstagramLogo';
import CodepenLogo from '../shared/CodepenLogo';
import GlitchLogo from '../shared/GlitchLogo';

import styled from 'styled-components/macro';

const LogoLink = styled.a`
  text-decoration: none;
  &:hover,
  &:active {
    & path {
      fill: ${props => props.theme.accent};
    }
  }
`;

const Links = ({ social }) => (
  <LogoRow>
    {social.codepen && (
      <LogoLink href={social.codepen} target="_blank" rel="noreferrer noopener">
        <CodepenLogo />
      </LogoLink>
    )}
    {social.github && (
      <LogoLink href={social.github} target="_blank" rel="noreferrer noopener">
        <GithubLogo />
      </LogoLink>
    )}
    {social.linkedin && (
      <LogoLink href={social.linkedin} target="_blank" rel="noreferrer noopener">
        <LinkedinLogo />
      </LogoLink>
    )}
    {social.instagram && (
      <LogoLink href={social.instagram} target="_blank" rel="noreferrer noopener">
        <InstagramLogo />
      </LogoLink>
    )}
    {social.glitch && (
      <LogoLink href={social.glitch} target="_blank" rel="noreferrer noopener">
        <GlitchLogo />
      </LogoLink>
    )}
  </LogoRow>
);

export default Links;

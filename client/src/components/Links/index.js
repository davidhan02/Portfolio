import React from 'react';
import { LogoRow } from '../shared/Line';
import GithubLogo from '../shared/GithubLogo';
import LinkedinLogo from '../shared/LinkedinLogo';
import InstagramLogo from '../shared/InstagramLogo';
import CodepenLogo from '../shared/CodepenLogo';
import GlitchLogo from '../shared/GlitchLogo';
import LogoLink from '../shared/LogoLink';

const Links = ({ social }) => (
  <LogoRow>
    {social.codepen && (
      <LogoLink href={social.codepen}>
        <CodepenLogo />
      </LogoLink>
    )}
    {social.github && (
      <LogoLink href={social.github}>
        <GithubLogo />
      </LogoLink>
    )}
    {social.linkedin && (
      <LogoLink href={social.linkedin}>
        <LinkedinLogo />
      </LogoLink>
    )}
    {social.instagram && (
      <LogoLink href={social.instagram}>
        <InstagramLogo />
      </LogoLink>
    )}
    {social.glitch && (
      <LogoLink href={social.glitch}>
        <GlitchLogo />
      </LogoLink>
    )}
  </LogoRow>
);

export default Links;

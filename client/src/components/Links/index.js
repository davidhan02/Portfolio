import React from 'react';
import { LogoRow } from '../shared/Line';
import GithubLogo from '../shared/Logos/GithubLogo';
import LinkedinLogo from '../shared/Logos/LinkedinLogo';
import InstagramLogo from '../shared/Logos/InstagramLogo';
import CodepenLogo from '../shared/Logos/CodepenLogo';
import GlitchLogo from '../shared/Logos/GlitchLogo';
import LogoLink from '../shared/LogoLink';

const Links = ({ social }) => (
  <LogoRow>
    {social.codepen && (
      <LogoLink href={social.codepen}>
        <CodepenLogo />
      </LogoLink>
    )}
    {social.linkedin && (
      <LogoLink href={social.linkedin}>
        <LinkedinLogo />
      </LogoLink>
    )}
    {social.github && (
      <LogoLink href={social.github}>
        <GithubLogo />
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

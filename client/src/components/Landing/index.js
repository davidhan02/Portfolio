import React from 'react';
import LandingLink from './Link';
import {
  LandingWrapper,
  LandingBox,
  LandingItemSm,
  LandingItemLg,
  LandingLinksWrapper
} from './style';

const Landing = () => (
  <LandingWrapper>
    <LandingBox>
      <LandingItemSm>Hi, I'm a full stack developer.</LandingItemSm>
      <LandingItemLg>I build web apps.</LandingItemLg>
      <LandingLinksWrapper>
        <LandingLink to="/profile" text="about me" />
        <LandingLink to="/projects" text="my work" />
      </LandingLinksWrapper>
      <LandingLink to="/contact" text="contact me" />
    </LandingBox>
  </LandingWrapper>
);

export default Landing;

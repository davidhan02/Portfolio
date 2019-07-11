import React from 'react';
import Links from '../Links';
import FooterLinksOne from './LinksOne';
import FooterAuthLinks from './AuthLinks';
import { FooterWrapper, FooterSection } from './style';

const Footer = ({ token, profile, logout }) => (
  <FooterWrapper>
    <FooterLinksOne />
    <FooterSection>
      <Links social={profile.social} footer />
    </FooterSection>
    <FooterAuthLinks token={token} logout={logout} />
    <FooterLinksOne />
  </FooterWrapper>
);

export default Footer;

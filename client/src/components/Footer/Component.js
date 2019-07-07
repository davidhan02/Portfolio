import React from 'react';
import Links from '../Links';
import { FooterWrapper, FooterSection, FooterLink } from './style';

const Footer = ({ profile }) => (
  <FooterWrapper>
    <FooterSection>
      <FooterLink to="/">HOME</FooterLink>
      <FooterLink to="/profile">PROFILE</FooterLink>
      <FooterLink to="/projects">PROJECTS</FooterLink>
      <FooterLink to="/contact">CONTACT ME</FooterLink>
    </FooterSection>
    <FooterSection>
      <Links social={profile.social} footer />
    </FooterSection>
    <FooterSection>
      <span>&copy; David Han, Arctara LLC</span>
      <span>Icons from FlatIcon</span>
      <FooterLink to="/register">REGISTER</FooterLink>
      <FooterLink to="/login">LOGIN</FooterLink>
    </FooterSection>
    <FooterSection>
      <FooterLink to="/">HOME</FooterLink>
      <FooterLink to="/profile">PROFILE</FooterLink>
      <FooterLink to="/projects">PROJECTS</FooterLink>
      <FooterLink to="/contact">CONTACT ME</FooterLink>
    </FooterSection>
  </FooterWrapper>
);

export default Footer;
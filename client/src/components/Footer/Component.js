import React from 'react';

import styled from 'styled-components/macro';
import Links from '../Links';

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1151px;
  margin: 24px auto;
  display: flex;
  border-top: 1px solid ${props => props.theme.border};
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  margin-top: 24px;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  line-height: 25px;
  text-align: center;
  color: ${props => props.theme.mutedText};
  &:not(:first-child) {
    margin-left: 48px;
    }
  }
  @media (max-width: 800px) {
    &:not(:first-child) {
      margin-left: 0;
      }
    }
  }
  @media (max-width: 650px) {
    &:nth-child(2) {
      margin-top: 0;
    }
  }
`;

const Footer = ({ profile }) => (
  <FooterWrapper>
    <FooterSection>
      <span>HOME</span>
      <span>PROFILE</span>
      <span>PROJECTS</span>
      <span>CONTACT ME</span>
    </FooterSection>
    <FooterSection>
      <Links social={profile.social} />
    </FooterSection>
    <FooterSection>
      <span>David Han, Arctara LLC</span>
      <span>Icons from FlatIcon</span>
      <span>REGISTER</span>
      <span>LOGIN</span>
    </FooterSection>
  </FooterWrapper>
);

export default Footer;

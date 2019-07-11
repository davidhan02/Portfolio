import React from 'react';
import { HeaderWrapper, HeaderRow, HeaderLabel, HeaderContent } from './style';

const ContactHeader = ({ profile }) => (
  <HeaderWrapper>
    <HeaderRow>
      <HeaderLabel>number: </HeaderLabel>
      <HeaderContent>{profile.number}</HeaderContent>
    </HeaderRow>
    <HeaderRow>
      <HeaderLabel>available: </HeaderLabel>
      <HeaderContent>{profile.hours}</HeaderContent>
    </HeaderRow>
    <HeaderRow>
      <HeaderLabel>email: </HeaderLabel>
      <HeaderContent>{profile.email}</HeaderContent>
    </HeaderRow>
    <HeaderRow>
      <HeaderLabel>location: </HeaderLabel>
      <HeaderContent>{profile.location}</HeaderContent>
    </HeaderRow>
  </HeaderWrapper>
);

export default ContactHeader;

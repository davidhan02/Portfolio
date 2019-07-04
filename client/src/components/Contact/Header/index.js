import React from 'react';
import { HeaderWrapper, HeaderRow, HeaderLabel, HeaderContent } from './style';

const ContactHeader = () => (
  <HeaderWrapper>
    <HeaderRow>
      <HeaderLabel>number: </HeaderLabel>
      <HeaderContent>650 - 815- 9091</HeaderContent>
    </HeaderRow>
    <HeaderRow>
      <HeaderLabel>available: </HeaderLabel>
      <HeaderContent>Mon - Fri, 9am - 5pm</HeaderContent>
    </HeaderRow>
    <HeaderRow>
      <HeaderLabel>email: </HeaderLabel>
      <HeaderContent>davidhan.5.25@gmail.com</HeaderContent>
    </HeaderRow>
    <HeaderRow>
      <HeaderLabel>location: </HeaderLabel>
      <HeaderContent>Santa Clara, California</HeaderContent>
    </HeaderRow>
  </HeaderWrapper>
);

export default ContactHeader;

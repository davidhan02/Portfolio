import React from 'react';
import { LabelWrapper, LabelLink } from './style';

const ProfileLabel = ({ token, text, link, linkText }) => (
  <LabelWrapper>
    {text}{' '}
    {token && (
      <LabelLink to={`/profile/${link}`}>
        {linkText ? linkText : '[add new]'}
      </LabelLink>
    )}
  </LabelWrapper>
);

export default ProfileLabel;

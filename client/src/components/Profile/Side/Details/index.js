import React from 'react';
import moment from 'moment';
import Links from '../../../Links';
import { Line, LineWrapper } from '../../../shared/Line';

const ProfileSideDetails = ({ profile }) => (
  <LineWrapper>
    <Line>A {profile.status}</Line>
    <Line>at {profile.company}</Line>
    <Line>in {profile.location}</Line>
    <Line>Born {moment(profile.birthday).fromNow()}</Line>
    {profile.social && <Links social={profile.social} />}
  </LineWrapper>
);

export default ProfileSideDetails;

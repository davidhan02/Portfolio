import React from 'react';
import ProfileSidePicture from './Picture';
import ProfileSideDetails from './Details';
import {
  ProfileSideWrapper,
  ProfileSideContent,
  ProfileSideName,
  ProfileSideLink
} from './style';

const ProfileSide = ({ profile }) => (
  <ProfileSideWrapper>
    <ProfileSidePicture photo={profile.photo} name={profile.name} />
    <ProfileSideContent>
      <ProfileSideName>{profile.name}</ProfileSideName>
      <ProfileSideDetails profile={profile} />
      <ProfileSideLink to="/projects">my projects</ProfileSideLink>
    </ProfileSideContent>
  </ProfileSideWrapper>
);

export default ProfileSide;

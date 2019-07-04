import React from 'react';
import { PictureBox, ProfilePicture } from './style';

const ProfileSidePicture = ({ photo, name }) => (
  <PictureBox>
    <ProfilePicture src={photo} alt={name} />
  </PictureBox>
);

export default ProfileSidePicture;

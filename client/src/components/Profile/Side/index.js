import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileSideWrapper } from './style';
import { CreateButton } from '../../shared/CreateButton';

const ProjectSide = ({ token, profile }) => (
  <ProfileSideWrapper>
    {token && (
      <CreateButton as={Link} to="/profile/form">
        edit profile
      </CreateButton>
    )}
    <>
      {profile.name}
      <br />
      {profile.birthday.split('T')[0]}
      <br />
      {profile.status}
      <br />
      {profile.company}
      <br />
      {profile.location}
      <br />
      {profile.skills.join(', ')}
    </>
  </ProfileSideWrapper>
);

export default ProjectSide;

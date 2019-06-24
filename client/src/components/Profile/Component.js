import React from 'react';

const Profile = ({ profile }) => {
  return (
    <>
      <br />
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
      <br />
      {profile.bio}
      <br />
    </>
  );
};
export default Profile;

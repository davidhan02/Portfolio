import React from 'react';

const Profile = ({ profile }) => {
  return (
    <>
      {profile.name}
      <br />
      {profile.birthday}
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
      {profile.education.length > 1 && <div eduList={profile.education} />}
    </>
  );
};
export default Profile;

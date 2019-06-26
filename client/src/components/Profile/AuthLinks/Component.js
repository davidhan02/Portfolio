import React from 'react';
import { Link } from 'react-router-dom';

const ProfileAuthLinks = ({ id, deleteProfile }) => (
  <>
    <Link to="/profile/form">Edit Profile</Link>
    &nbsp;
    <button onClick={() => deleteProfile(id)}>Delete Profile</button>
    &nbsp;
    <Link to="/profile/eduform">New Education</Link>
    <br />
  </>
);

export default ProfileAuthLinks;

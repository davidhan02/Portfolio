import React from 'react';
import { Link } from 'react-router-dom';

const ProfileAuthLinks = ({ id, deleteProfile }) => (
  <>
    <Link to="/profile/form">Edit Profile</Link>
    <br />
    <Link to="/dashboard" onClick={() => deleteProfile(id)}>
      Delete Profile
    </Link>
    <br />
    <Link to="/profile/eduform">New Education</Link>
    <br />
  </>
);

export default ProfileAuthLinks;

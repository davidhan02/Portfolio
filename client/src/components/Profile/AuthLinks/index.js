import React from 'react';
import { Link } from 'react-router-dom';

const ProfileAuthLinks = () => (
  <>
    <Link to="/profile/form">Edit Profile</Link>
    <br />
    <Link to="/profile/eduform">New Education</Link>
    <br />
  </>
);

export default ProfileAuthLinks;

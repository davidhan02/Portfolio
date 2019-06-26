import React from 'react';
import { Link } from 'react-router-dom';

const ProfileAuthLinks = ({ id, deleteProfile, deleteSocial }) => (
  <>
    <Link to="/profile/form">Edit Profile</Link>
    &nbsp;
    <Link to="/profile/eduform">New Education</Link>
    &nbsp;
    <Link to="/profile/expform">New Experience</Link>
    &nbsp;
    <Link to="/profile/linksform">Edit Links</Link>
    &nbsp;
    <Link to="/profile" onClick={() => deleteSocial(id)}>
      Delete Links
    </Link>
    &nbsp;
    <Link to="/profile" onClick={() => deleteProfile(id)}>
      Delete Profile
    </Link>
    <br />
  </>
);

export default ProfileAuthLinks;
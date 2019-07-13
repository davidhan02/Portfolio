import React from 'react';
import { Link } from 'react-router-dom';
import { DashboardSideWrapper } from './style';

const DashboardLinks = () => (
  <DashboardSideWrapper>
    <Link to="/dashboard">Inbox</Link>
    <Link to="/profile">Delete Profile</Link>
    <Link to="/profile/form">Edit Profile</Link>
    <Link to="/projects/form">Add New Project</Link>
    <Link to="/projects">Edit Existing Project</Link>
    <Link to="/profile/eduform">Add New Education</Link>
    <Link to="/profile">Edit Existing Education</Link>
    <Link to="/profile/linksform">Edit Social Links</Link>
  </DashboardSideWrapper>
);

export default DashboardLinks;

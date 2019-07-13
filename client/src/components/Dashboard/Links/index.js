import React from 'react';
import { TitleLink } from '../../shared/CommonLinks';
import { DashboardSideWrapper } from './style';

const DashboardLinks = () => (
  <DashboardSideWrapper>
    <TitleLink to="/dashboard">Inbox</TitleLink>
    <TitleLink to="/profile/form">Edit Profile</TitleLink>
    <TitleLink to="/projects/form">Add New Project</TitleLink>
    <TitleLink to="/projects">Edit Existing Project</TitleLink>
    <TitleLink to="/profile/eduform">Add New Education</TitleLink>
    <TitleLink to="/profile">Edit Existing Education</TitleLink>
    <TitleLink to="/profile/linksform">Edit Social Links</TitleLink>
  </DashboardSideWrapper>
);

export default DashboardLinks;

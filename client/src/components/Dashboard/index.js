import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <>
    <Link to="/profile/form">Edit Profile</Link>
    <br />
    <Link to="/projects/form">Add New Project</Link>
    <br />
    <Link to="/projects">Edit Existing Project</Link>
    <br />
  </>
);

export default Dashboard;

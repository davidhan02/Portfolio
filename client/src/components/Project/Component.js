import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => (
  <>
    <br />
    <Link to={`/projects/${project.id}`}>{project.title}</Link>
    <br />
    {project.categories.join(', ')}
    <br />
    ID: {project.id}
    <br />
    {project.url}
    <br />
    {project.code}
    <br />
    {project.created}
    <br />
    {project.text}
    <br />
  </>
);

export default Project;

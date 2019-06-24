import React from 'react';

const FullProject = ({ project }) => (
  <>
    {project.title}
    <br />
    {project.url}
    <br />
    {project.code}
    <br />
    {project.created}
    <br />
    {project.text}
    <br />
    {project.categories.join(', ')}
  </>
);

export default FullProject;

import React from 'react';
import ProjectHeaderContainer from './Header/Container';

const Project = ({ project }) => (
  <>
    <br />
    <ProjectHeaderContainer project={project} />
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

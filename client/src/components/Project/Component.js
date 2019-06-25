import React from 'react';
import { Link } from 'react-router-dom';
import ProjectHeaderContainer from './Header/Container';

const Project = ({ project }) => (
  <>
    <br />
    <ProjectHeaderContainer project={project} />
    <br />
    {project.categories.map(category => (
      <Link key={category + project.id} to={`/projects/cat/${category}`}>
        {category}
      </Link>
    ))}
    <br />
    ID: {project.id}
    <br />
    {project.url}
    <br />
    {project.code}
    <br />
    {project.created.split('T')[0]}
    <br />
    {project.text}
    <br />
  </>
);

export default Project;

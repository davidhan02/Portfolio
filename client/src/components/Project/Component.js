import React from 'react';
import ProjectHeaderContainer from './Header/Container';
import Category from '../shared/Category';

const Project = ({ project }) => (
  <>
    <br />
    <ProjectHeaderContainer project={project} />
    <br />
    {project.categories.map(category => (
      <Category key={category + project.id} category={category} />
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

import React from 'react';
import { AuthLinks, AuthLink } from './style';

const ProjectHeaderLinks = ({ project, deleteProject }) => (
  <AuthLinks>
    <AuthLink to={`/projects/form/${project.id}`}>edit</AuthLink>
    <AuthLink to="/projects" onClick={() => deleteProject(project.id)}>
      delete
    </AuthLink>
  </AuthLinks>
);

export default ProjectHeaderLinks;

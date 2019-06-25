import React from 'react';
import { Link } from 'react-router-dom';

const ProjectHeader = ({ token, project, deleteProject }) => (
  <>
    <Link to={`/projects/${project.id}`}>{project.title}</Link>&nbsp;
    {token && (
      <>
        <Link to={`/projects/form/${project.id}`}>Edit</Link>&nbsp;
        <Link to="/projects" onClick={() => deleteProject(project.id)}>
          Delete
        </Link>
      </>
    )}
  </>
);

export default ProjectHeader;

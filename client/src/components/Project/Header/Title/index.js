import React from 'react';
import { TitleLink, BackLink, BigTitle } from './style';

const ProjectHeaderTitle = ({ preview, project }) =>
  preview ? (
    <TitleLink to={`/projects/${project.id}`}>{project.title}</TitleLink>
  ) : (
    <>
      <BackLink to="/projects">&larr; to projects</BackLink>
      <BigTitle>{project.title}</BigTitle>
    </>
  );

export default ProjectHeaderTitle;

import React from 'react';
import moment from 'moment';
import ProjectHeaderTitle from './Title';
import ProjectHeaderLinks from './Links';
import { ProjectHeaderWrapper, ProjectHeaderDate } from './style';

const ProjectHeader = ({ token, preview, project, deleteProject }) => (
  <ProjectHeaderWrapper>
    <ProjectHeaderTitle preview={preview} project={project} />
    {token ? (
      <ProjectHeaderLinks project={project} deleteProject={deleteProject} />
    ) : (
      <ProjectHeaderDate>made {moment(project.created).fromNow()}</ProjectHeaderDate>
    )}
  </ProjectHeaderWrapper>
);

export default ProjectHeader;

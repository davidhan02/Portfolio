import React from 'react';
import ProjectLinks from './Links';
import ProjectCategories from './Categories';
import ProjectHeaderContainer from './Header/Container';
import { ProjectWrapper, ProjectText, ProjectImage } from './style';

const Project = ({ project, preview }) => (
  <ProjectWrapper preview={preview}>
    <ProjectHeaderContainer preview={preview} project={project} />
    <ProjectCategories preview={preview} project={project} />
    {!preview && project.screenshot && (
      <ProjectImage src={project.screenshot} alt={project.title + ' screenshot'} />
    )}
    <ProjectText preview={preview}>{project.text}</ProjectText>
    <ProjectLinks url={project.url} code={project.code} />
  </ProjectWrapper>
);

export default Project;

import React from 'react';
import Project from '../../Project/Component';
import { ListItem, Wrapper, ThumbnailBox, Thumbnail, NoImage } from './style';

const ProjectListItem = ({ project }) => (
  <ListItem>
    <Wrapper>
      <ThumbnailBox to={`/projects/${project.id}`}>
        {project.screenshot ? (
          <Thumbnail src={project.screenshot} alt={`${project.title} thumbnail`} />
        ) : (
          <NoImage>NO IMAGE YET</NoImage>
        )}
      </ThumbnailBox>
      <Project project={project} preview />
    </Wrapper>
  </ListItem>
);

export default ProjectListItem;

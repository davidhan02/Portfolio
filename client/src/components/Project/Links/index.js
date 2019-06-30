import React from 'react';
import { LinksWrapper, ProjectLink } from './style';

const ProjectLinks = ({ url, code }) => (
  <LinksWrapper>
    <ProjectLink href={url} target="_blank" rel="noreferrer noopener">
      Go to Site
    </ProjectLink>
    <ProjectLink href={code} target="_blank" rel="noreferrer noopener">
      View the Code
    </ProjectLink>
  </LinksWrapper>
);

export default ProjectLinks;

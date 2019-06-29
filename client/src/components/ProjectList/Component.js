import React from 'react';
import Project from '../Project/Component';
import { List, ListItem } from './style';
import { trueCenter } from '../shared/helpers';

import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
`;

const ThumbnailBox = styled(Link)`
  ${trueCenter};
  min-width: 198px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.mutedText};
  border-right: 1px solid ${props => props.theme.border};
  &:hover {
    img {
      filter: brightness(80%);
    }
  }
  @media (max-width: 575px) {
    display: none;
  }
`;

const Thumbnail = styled.img`
  max-height: 135px;
  width: auto;
  border-radius: 3px;
`;

const NoImage = styled.span`
  white-space: nowrap;
`;

const ProjectList = ({ list }) => (
  <List>
    {list.map(project => (
      <ListItem key={project.id}>
        <Wrapper>
          <ThumbnailBox to={`/projects/${project.id}`}>
            {project.screenshot ? (
              <Thumbnail
                src={project.screenshot}
                alt={`${project.title} thumbnail`}
              />
            ) : (
              <NoImage>NO IMAGE YET</NoImage>
            )}
          </ThumbnailBox>
          <Project project={project} preview />
        </Wrapper>
      </ListItem>
    ))}
  </List>
);

export default ProjectList;

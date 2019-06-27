import React from 'react';
import { Link } from 'react-router-dom';
import { link, wideFont } from '../../shared/helpers';

import styled from 'styled-components/macro';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthLinks = styled.span`
  width: 90px;
  display: flex;
  justify-content: space-between;
`;

const AuthLink = styled(Link)`
  ${link};
  ${wideFont};
  color: ${props => props.theme.mutedText};
`;

const TitleLink = styled(Link)`
  font-size: 18px;
  color: ${props => props.theme.normalText};
  text-decoration: none;
  &:hover {
    text-decoration: underline !important;
  }
`;

const ProjectHeader = ({ token, project, deleteProject }) => (
  <HeaderWrapper>
    <TitleLink to={`/projects/${project.id}`}>{project.title}</TitleLink>
    {token && (
      <AuthLinks>
        <AuthLink to={`/projects/form/${project.id}`}>Edit</AuthLink>
        <AuthLink to="/projects" onClick={() => deleteProject(project.id)}>
          Delete
        </AuthLink>
      </AuthLinks>
    )}
  </HeaderWrapper>
);

export default ProjectHeader;

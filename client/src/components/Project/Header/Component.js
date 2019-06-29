import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { link } from '../../shared/helpers';

import styled from 'styled-components/macro';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0px 7px;
`;

const AuthLinks = styled.span`
  min-width: 90px;
  display: flex;
  justify-content: space-between;
`;

const AuthLink = styled(Link)`
  ${link};
  font-size: 14px;
  text-transform: uppercase;
  color: ${props => props.theme.normalText};
`;

const TitleLink = styled(Link)`
  font-size: 18px;
  color: ${props => props.theme.normalText};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: ${props => props.theme.accent};
  }
`;

const BigTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin: 0 auto;
  text-align: center;
  color: ${props => props.theme.normalText};
`;

const BackLink = styled(Link)`
  ${link};
  min-width: 90px;
  font-size: 14px;
`;

const DateInfo = styled.span`
  font-size: 14px;
  color: ${props => props.theme.mutedText};
`;

const ProjectHeader = ({ token, preview, project, deleteProject }) => (
  <HeaderWrapper>
    {preview ? (
      <TitleLink to={`/projects/${project.id}`}>{project.title}</TitleLink>
    ) : (
      <>
        <BackLink to="/projects">&larr; to projects</BackLink>
        <BigTitle>{project.title}</BigTitle>
      </>
    )}
    {token ? (
      <AuthLinks>
        <AuthLink to={`/projects/form/${project.id}`}>edit</AuthLink>
        <AuthLink to="/projects" onClick={() => deleteProject(project.id)}>
          delete
        </AuthLink>
      </AuthLinks>
    ) : (
      <DateInfo>made {moment(project.created).fromNow()}</DateInfo>
    )}
  </HeaderWrapper>
);

export default ProjectHeader;

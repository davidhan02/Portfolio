import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { link, wideFont } from '../../shared/helpers';

import styled from 'styled-components/macro';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2px;
`;

const AuthLinks = styled.span`
  width: 90px;
  display: flex;
  justify-content: space-between;
`;

const AuthLink = styled(Link)`
  ${link};
  ${wideFont};
  font-weight: 400;
  color: ${props => props.theme.normalText};
`;

const TitleLink = styled(Link)`
  font-size: 18px;
  color: ${props => props.theme.normalText};
  text-decoration: none;
  &:hover {
    text-decoration: underline !important;
  }
`;

const DateInfo = styled.span`
  ${wideFont};
  font-weight: 400;
  color: ${props => props.theme.normalText};
`;

const ProjectHeader = ({ token, project, deleteProject }) => (
  <HeaderWrapper>
    <TitleLink to={`/projects/${project.id}`}>{project.title}</TitleLink>
    {token ? (
      <AuthLinks>
        <AuthLink to={`/projects/form/${project.id}`}>Edit</AuthLink>
        <AuthLink to="/projects" onClick={() => deleteProject(project.id)}>
          Delete
        </AuthLink>
      </AuthLinks>
    ) : (
      <DateInfo>created {moment(project.created).fromNow()}</DateInfo>
    )}
  </HeaderWrapper>
);

export default ProjectHeader;

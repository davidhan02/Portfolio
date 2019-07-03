import React from 'react';
import Links from '../Links';
import EduItem from '../EduItem';
import ExpItem from '../ExpItem';
import Label from '../shared/form/Label';
import { BodyWrapper, MainSection } from './style';
import AuthLinksContainer from './AuthLinks/Container';
import ProfileSide from './Side';

import styled from 'styled-components/macro';

const ProfileLabel = styled(Label)`
  font-size: 16px;
  margin-top: 8px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const BorderWrapper = styled.div`
  padding: 10px;
  line-height: 25px;
  white-space: pre-wrap;
  margin-bottom: 24px;
  list-style: none;
  color: ${props => props.theme.mutedText};
  background: ${props => props.theme.foreground};
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-radius: 4px;
`;

const ListWrapper = styled(BorderWrapper)`
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  :not(:first-child) {
    border-top: 1px solid ${props => props.theme.border};
  }
`;

const Profile = ({ token, profile }) => (
  <BodyWrapper>
    <ProfileSide profile={profile} />
    <MainSection>
      {token && <AuthLinksContainer id={profile.id} />}
      <ProfileLabel>about me</ProfileLabel>
      <BorderWrapper>{profile.bio}</BorderWrapper>
      {profile.social && <Links social={profile.social} />}
      <ProfileLabel>education</ProfileLabel>
      {profile.education.length > 0 && (
        <ListWrapper as="ol">
          {profile.education.map(edu => (
            <ListItem key={edu.id}>
              <EduItem edu={edu} />
            </ListItem>
          ))}
        </ListWrapper>
      )}
      <ProfileLabel>experience</ProfileLabel>
      {profile.experience.length > 0 && (
        <ListWrapper as="ol">
          {profile.experience.map(exp => (
            <ListItem key={exp.id}>
              <ExpItem exp={exp} />
            </ListItem>
          ))}
        </ListWrapper>
      )}
    </MainSection>
  </BodyWrapper>
);
export default Profile;

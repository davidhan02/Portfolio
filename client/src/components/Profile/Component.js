import React from 'react';
import EduItem from '../EduItem';
import ExpItem from '../ExpItem';
import Label from '../shared/form/Label';
import { BodyWrapper, MainSection } from './style';
import AuthLinksContainer from './AuthLinks/Container';
import ProfileSide from './Side';

import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from '../shared/helpers';

const ProfileLabel = styled(Label)`
  font-size: 16px;
  &:not(:first-child) {
    margin-top: 8px;
  }
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
  letter-spacing: 0.02rem;
  color: ${props => props.theme.mutedText};
  background: ${props => props.theme.foreground};
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-radius: 4px;
`;

const ListWrapper = styled(BorderWrapper)`
  padding: 0;
`;

const SkillsWrapper = styled(BorderWrapper)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding-bottom: 0px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  :not(:first-child) {
    border-top: 1px solid ${props => props.theme.border};
  }
`;

const SkillsItem = styled.li`
  display: inline;
  margin-bottom: 10px;
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

const SkillLink = styled(Link)`
  ${link}
  color: ${props => props.theme.mutedText};
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  &:hover {
    border: 1px solid ${props => props.theme.accent};
    color: ${props => props.theme.accent};
  }
`;

const Skill = ({ skill }) => (
  <SkillLink to={`/projects/cat/${skill}`}>{skill}</SkillLink>
);

const Profile = ({ token, profile }) => (
  <BodyWrapper>
    <ProfileSide profile={profile} />
    <MainSection>
      {token && <AuthLinksContainer id={profile.id} />}
      <ProfileLabel>about me</ProfileLabel>
      <BorderWrapper>{profile.bio}</BorderWrapper>
      <ProfileLabel>my skills</ProfileLabel>
      <SkillsWrapper as="ul">
        {profile.skills.map(skill => (
          <SkillsItem key={skill}>
            <Skill skill={skill} />
          </SkillsItem>
        ))}
      </SkillsWrapper>
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

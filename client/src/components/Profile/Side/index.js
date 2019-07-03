import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileSideWrapper } from './style';

import moment from 'moment';
import { link } from '../../shared/helpers';
import { Line, LineWrapper } from '../../shared/Line';
import Links from '../../Links';
import styled from 'styled-components/macro';

const PictureBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 280px;
  }
  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

const ProfilePicture = styled.img`
  width: auto;
  max-height: 100%;
  @media (max-width: 600px) {
    border: 1px solid ${props => props.theme.border};
    border-radius: 50%;
    margin-left: 10px;
  }
  @media (max-width: 420px) {
    border-radius: 0;
    border: none;
    margin: 0;
    padding: 0;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 280px;
    flex-basis: 1;
    text-align: center;
  }
`;

export const NameLine = styled(Line)`
  font-size: 18px;
  padding: 10px 15px;
  color: ${props => props.theme.normalText};
  border-bottom: 1px solid ${props => props.theme.border};
`;

const SideLink = styled(Link)`
  ${link};
  color: ${props => props.theme.mutedText};
  text-transform: uppercase;
  padding: 10px 8px;
  margin: 10px;
  margin-top: auto;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  text-align: center;
  :hover {
    border: 1px solid ${props => props.theme.accent};
  }
`;

const ProfileSide = ({ profile }) => (
  <ProfileSideWrapper>
    <InnerWrapper>
      <PictureBox>
        <ProfilePicture src="https://avatars0.githubusercontent.com/u/47205512?s=400&u=558c61c1320cadc2f4eb9beb5b7196cc871bbc70&v=4" />
      </PictureBox>
      <SideContent>
        <NameLine>{profile.name}</NameLine>
        <LineWrapper>
          <Line>A {profile.status}</Line>
          <Line>at {profile.company}</Line>
          <Line>in {profile.location}</Line>
          <Line>Born {moment(profile.birthday).fromNow()}</Line>
          {profile.social && <Links social={profile.social} />}
        </LineWrapper>
        <SideLink to="/projects">my projects</SideLink>
      </SideContent>
    </InnerWrapper>
  </ProfileSideWrapper>
);

export default ProfileSide;

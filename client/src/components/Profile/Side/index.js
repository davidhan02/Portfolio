import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileSideWrapper } from './style';
import { CreateButton } from '../../shared/CreateButton';

import moment from 'moment';
import styled from 'styled-components/macro';

const ProfilePicture = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 768px) {
    max-width: 280px;
  }
  @media (max-width: 525px) {
    max-width: 100%;
    border-radius: 4px;
    margin: 30px auto;
  }
  @media (max-width: 420px) {
    border-radius: 0;
    margin: 0 auto;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 525px) {
    flex-direction: column;
  }
`;

const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 525px) {
    text-align: center;
  }
`;

const Line = styled.span`
  width: 100%;
  padding: 5px 15px;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.mutedText};
  &:nth-child(2) {
    margin-top: 10px;
  }
  &:last-child {
    margin-bottom: 10px;
  }
`;

const NameLine = styled(Line)`
  font-size: 18px;
  padding: 10px 15px;
  color: ${props => props.theme.normalText};
  border-bottom: 1px solid ${props => props.theme.border};
  @media (max-width: 525px) {
    border-top: 1px solid ${props => props.theme.border};
  }
`;

const ProfileSide = ({ token, profile }) => (
  <ProfileSideWrapper>
    <InnerWrapper>
      <ProfilePicture src="https://avatars0.githubusercontent.com/u/47205512?s=400&u=558c61c1320cadc2f4eb9beb5b7196cc871bbc70&v=4" />
      <SideContent>
        {token && (
          <CreateButton as={Link} to="/profile/form">
            edit profile
          </CreateButton>
        )}
        <NameLine>{profile.name}</NameLine>
        <Line>A {profile.status}</Line>
        <Line>at {profile.company}</Line>
        <Line>in {profile.location}</Line>
        <Line>Born {moment(profile.birthday).fromNow()}</Line>
      </SideContent>
    </InnerWrapper>
  </ProfileSideWrapper>
);

export default ProfileSide;

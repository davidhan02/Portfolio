import React from 'react';
import Links from '../Links';
import EduItem from '../EduItem';
import ExpItem from '../ExpItem';
import { BodyWrapper, MainSection } from './style';
import AuthLinksContainer from './AuthLinks/Container';
import ProfileSide from './Side';

const Profile = ({ token, profile }) => (
  <BodyWrapper>
    <ProfileSide token={token} profile={profile} />
    <MainSection>
      {token && <AuthLinksContainer id={profile.id} />}
      {profile.bio}
      <br />
      {profile.social && <Links social={profile.social} />}
      <br />
      Education:
      <hr />
      {profile.education.length > 0 &&
        profile.education.map(edu => <EduItem key={edu.id} edu={edu} />)}
      <br />
      Experience:
      <hr />
      {profile.experience.length > 0 &&
        profile.experience.map(exp => <ExpItem key={exp.id} exp={exp} />)}
    </MainSection>
  </BodyWrapper>
);
export default Profile;

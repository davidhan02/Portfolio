import React from 'react';
import ProfileExp from './Exp';
import ProfileEdu from './Edu';
import ProfileSide from './Side';
import ProfileSkills from './Skills';
import { BodyWrapper, MainSection } from '../shared/BodyMain';
import { ProfileSection, ProfileLabel, LabelLink } from './style';

const Profile = ({ token, profile }) => (
  <BodyWrapper>
    <ProfileSide profile={profile} />
    <MainSection>
      <ProfileLabel>
        about me {token && <LabelLink to="/profile/form">[edit profile]</LabelLink>}
      </ProfileLabel>
      <ProfileSection>{profile.bio}</ProfileSection>
      <ProfileLabel>
        my skills {token && <LabelLink to="/profile/form">[edit profile]</LabelLink>}
      </ProfileLabel>
      <ProfileSkills skills={profile.skills} />
      <ProfileLabel>
        experience {token && <LabelLink to="/profile/expform">[add new]</LabelLink>}
      </ProfileLabel>
      {profile.experience.length > 0 && <ProfileExp expList={profile.experience} />}
      <ProfileLabel>
        education {token && <LabelLink to="/profile/eduform">[add new]</LabelLink>}
      </ProfileLabel>
      {profile.education.length > 0 && <ProfileEdu eduList={profile.education} />}
    </MainSection>
  </BodyWrapper>
);
export default Profile;

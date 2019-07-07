import React from 'react';
import ProfileExp from './Exp';
import ProfileEdu from './Edu';
import ProfileSide from './Side';
import ProfileCerts from './Certs';
import ProfileSkills from './Skills';
import { ProfileSection } from './style';
import { BodyWrapper, MainSection } from '../shared/BodyMain';
import ProfileLabelContainer from './Label/Container';

const Profile = ({
  profile,
  profile: { bio, skills, experience, education, certificates }
}) => (
  <BodyWrapper>
    <ProfileSide profile={profile} />
    <MainSection>
      <ProfileLabelContainer text="about me" link="form" linkText="[edit profile]" />
      <ProfileSection>{bio}</ProfileSection>
      <ProfileLabelContainer text="my skills" link="form" linkText="[edit skills]" />
      <ProfileSkills skills={skills} />
      <ProfileLabelContainer text="experience" link="expform" />
      {experience.length > 0 && <ProfileExp expList={experience} />}
      <ProfileLabelContainer text="education" link="eduform" />
      {education.length > 0 && <ProfileEdu eduList={education} />}
      <ProfileLabelContainer text="certifications" link="certform" />
      {certificates.length > 0 && <ProfileCerts certList={certificates} />}
    </MainSection>
  </BodyWrapper>
);
export default Profile;

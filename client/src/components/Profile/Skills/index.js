import React from 'react';
import Skill from '../../shared/Skill';
import { SkillsWrapper, SkillsItem } from './style';

const ProfileSkills = ({ skills }) => (
  <SkillsWrapper as="ul">
    {skills.map(skill => (
      <SkillsItem key={skill}>
        <Skill skill={skill} />
      </SkillsItem>
    ))}
  </SkillsWrapper>
);

export default ProfileSkills;

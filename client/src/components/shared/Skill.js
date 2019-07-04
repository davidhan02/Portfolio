import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from './helpers';

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

export default Skill;

import styled from 'styled-components/macro';
import { ProfileSection } from '../style';

export const SkillsWrapper = styled(ProfileSection)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding-bottom: 0px;
`;

export const SkillsItem = styled.li`
  display: inline;
  margin-bottom: 10px;
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

import styled from 'styled-components/macro';
import { wideFont } from '../shared/helpers';

export const ProjectSelectLabel = styled.div`
  ${wideFont};
  width: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  display: flex;
  padding: 0 16px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 3px 0 0 0;
  background-color: ${props => props.theme.foreground};
  align-items: center;
  color: ${props => props.theme.mutedText};
`;

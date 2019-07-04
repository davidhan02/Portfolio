import styled from 'styled-components/macro';
import { wideFont } from '../shared/helpers';
import Button from '../shared/Button';

export const ProjectSelectMenu = styled.nav`
  display: none;
  border: none;
  margin: 0 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

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

export const CreateButton = styled(Button)`
  display: flex;
  font-weight: 500;
  padding: 0 20px;
  border-radius: 0 3px 0 0;
  align-items: center;
  text-decoration: none;
`;

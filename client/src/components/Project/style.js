import styled from 'styled-components/macro';
import { overflow } from '../shared/helpers';

export const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 10px;
  background-color: ${props => props.theme.foreground};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border 1px solid ${props => props.theme.border};
  ${props => props.preview && 'border: none; box-shadow: none'};
  border-radius: 3px;
  overflow: hidden;
`;

export const ProjectText = styled.div`
  width: 100%;
  display: block;
  padding: 15px;
  padding-right: 20px;
  border 1px solid ${props => props.theme.border};
  border-radius: 4px;
  white-space: pre-wrap;
  margin: 10px 0;
  background: ${props => props.theme.pageBackground};
  color: ${props => props.theme.normalText};
  ${props =>
    props.preview &&
    `${overflow} color: ${
      props.theme.mutedText
    }; background: none; border: none; margin: 0; padding: 10px 5px`};
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-top: 10px;
`;

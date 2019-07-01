import styled from 'styled-components/macro';

export const ProjectHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 5px 0px 7px;
`;

export const ProjectHeaderDate = styled.span`
  font-size: 14px;
  color: ${props => props.theme.mutedText};
`;

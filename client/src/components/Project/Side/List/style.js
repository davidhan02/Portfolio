import styled from 'styled-components/macro';

export const ProjectSideListHeader = styled.span`
  color: ${props => props.theme.mutedText};
  text-transform: uppercase;
  font-size: 14px;
  padding: 16px 12px;
  display: block;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.border};
`;

export const ProjectSideListWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`;

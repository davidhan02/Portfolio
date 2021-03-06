import styled from 'styled-components/macro';

export const ProfileSection = styled.div`
  padding: 10px 15px;
  line-height: 25px;
  white-space: pre-wrap;
  margin-bottom: 24px;
  list-style: none;
  letter-spacing: 0.01rem;
  color: ${props => props.theme.mutedText};
  background: ${props => props.theme.foreground};
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-radius: 4px;
`;

export const ListWrapper = styled(ProfileSection)`
  padding: 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  :not(:first-child) {
    border-top: 1px solid ${props => props.theme.border};
  }
`;

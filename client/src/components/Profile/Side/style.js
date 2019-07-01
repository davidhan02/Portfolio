import styled from 'styled-components/macro';

export const ProfileSideWrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex-basis: 280px;
  margin: 24px;
  margin-left: 0;

  border-radius: 3px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 24px;
  }
`;

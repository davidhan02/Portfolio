import styled from 'styled-components/macro';

export const ProjectSideWrapper = styled.aside`
  display: flex;
  flex-direction: column;

  flex-basis: 240px;
  margin-left: 24px;

  border-radius: 3px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};

  @media (max-width: 768px) {
    display: none;
  }
`;

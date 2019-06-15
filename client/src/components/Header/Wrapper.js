import styled from 'styled-components/macro';

const HeaderWrapper = styled.header`
  position: sticky;
  z-index: 10;
  width: 100%;
  top: 0;

  margin-bottom: 20px;
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-bottom: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};

  @media (max-width: 425px) {
    margin-bottom: 16px;
  }
`;

export default HeaderWrapper;

import styled from 'styled-components/macro';

export const NavWrapper = styled.nav`
  background: ${props => props.theme.foreground};
  display: flex;
  justify-content: center;
  user-select: none;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  width: 100%;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1150px;
  height: 65px;
  padding: 0 10px;
`;

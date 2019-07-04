import styled from 'styled-components/macro';

export const HeaderWrapper = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 24px;
  line-height: 30px;
  padding: 18px 0;
  border: 1px solid ${props => props.theme.border};
  background: ${props => props.theme.foreground};
  border-radius: 2px;
  @media (max-width: 600px) {
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }
`;

export const HeaderRow = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 0 24px;
`;

export const HeaderLabel = styled.span`
  margin-right: 50px;
  text-transform: uppercase;
  color: ${props => props.theme.mutedText};
`;

export const HeaderContent = styled.span`
  font-size: 15px;
  letter-spacing: 0.02rem;
  color: ${props => props.theme.normalText};
`;

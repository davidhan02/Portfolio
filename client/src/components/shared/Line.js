import styled from 'styled-components/macro';

export const Line = styled.span`
  width: 100%;
  padding: 1px 15px;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.mutedText};
`;

export const Title = styled.span`
  color: ${props => props.theme.normalText};
  font-size: 18px;
  font-weight: 400;
`;

export const Row = styled(Line)`
  display: flex;
  justify-content: space-between;
`;

export const LogoRow = styled(Line)`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin: 0;
`;

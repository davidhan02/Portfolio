import styled from 'styled-components/macro';

export const Line = styled.span`
  width: 100%;
  padding: 1px 15px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01rem;
  color: ${props => props.theme.mutedText};
`;

export const Title = styled.span`
  color: ${props => props.theme.normalText};
  font-size: 18px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0.01rem;
`;

export const Row = styled(Line)`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
`;

export const LogoRow = styled(Line)`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 768px) {
    justify-content: space-around;
    margin-top: 20px;
  }
  @media (max-width: 590px) {
    margin-top: 15px;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin: 0;
`;

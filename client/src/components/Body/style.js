import styled from 'styled-components/macro';

export const BodyWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  margin: 0 auto;
  width: 100%;
  max-width: 1150px;

  padding: 0 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MainSection = styled.main`
  flex: 1;
  min-width: 0;
`;

export const Placeholder = styled.h2`
  text-align: center;
  color: ${props => props.theme.normalText};
`;

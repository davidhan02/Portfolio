import styled from 'styled-components';
import { trueCenter } from '../shared/helpers';

export const LandingWrapper = styled.header`
  ${trueCenter};
  top: 0;
  width: 100%;
  height: 87vh;
  min-height: 600px;
  flex-direction: column;
  text-transform: uppercase;
  transition: height 0.3s ease;
  text-align: center;
  font-family: Roboto;
`;

export const LandingBox = styled.section`
  height: 40%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 400px;
`;

export const LandingItemSm = styled.p`
  color: ${props => props.theme.normalText};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
`;

export const LandingItemLg = styled.h2`
  color: ${props => props.theme.normalText};
  font-size: 3.9rem;
  font-weight: 100;
  @media (max-width: 991px) {
    font-size: 3rem;
  }
  @media (max-width: 575px) {
    font-size: 2.4rem;
    font-weight: 300;
  }
`;

export const LandingLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

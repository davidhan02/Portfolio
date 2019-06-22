import styled from 'styled-components/macro';
import { trueCenter } from '../../shared/helpers';

export const Brand = styled.div`
  margin-right: auto;
  ${trueCenter};
  transition: transform 0.1s linear;
  :hover,
  :focus,
  :active {
    transform: skew(-10deg);
  }
`;

export const BrandLink = styled.a`
  text-decoration: none;
  ${trueCenter};
  color: #000;
`;

export const BrandLogo = styled.img`
  height: 45px;
  width: auto;
  ${props => props.theme.imageFilter}
`;

export const BrandText = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${props => props.theme.normalText};
`;

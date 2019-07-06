import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { trueCenter } from '../../shared/helpers';

export const SpanLink = styled(Link)`
  ${trueCenter};
  border-radius: 0;
  position: relative;
  display: inline-block;
  margin: 0px;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;

  span {
    display: block;
    position: absolute;
    transform: rotate(0deg);
    background: ${props => props.theme.accent};
  }
  span:nth-child(1),
  span:nth-child(3) {
    width: 100%;
    height: 1px;
    transition: all 0.4s ease;
  }
  span:nth-child(2),
  span:nth-child(4) {
    width: 1px;
    height: 100%;
    transition: all 0.3s ease 0.4s;
  }
  span:nth-child(1) {
    bottom: 0;
    left: 0;
  }
  span:nth-child(2) {
    bottom: 0;
    right: 0;
  }
  span:nth-child(3) {
    top: 0;
    right: 0;
  }
  span:nth-child(4) {
    top: 0;
    left: 0;
  }
  p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;

    color: ${props => props.theme.normalText};
    transition: transform 0.3s ease;
  }

  &:active,
  &:hover {
    text-decoration: none;
    span:nth-child(1),
    span:nth-child(3) {
      width: 0;
    }
    span:nth-child(2),
    span:nth-child(4) {
      height: 0;
    }
    p {
      transform: skew(-10deg);
    }
  }
`;

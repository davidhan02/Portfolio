import styled from 'styled-components/macro';
import { trueCenter } from '../../shared/helpers';

export const List = styled.ul`
  list-style-type: none;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  ${trueCenter};
  position: relative;

  @media (max-width: 800px) {
    ${trueCenter};
    position: absolute;
    top: 65px;
    background: ${props => props.theme.foreground};
    box-shadow: 2px 8px 10px ${props => props.theme.shadow};

    width: 80%;
    left: 10%;
    height: 0;

    overflow: hidden;
    text-align: center;
    transition: box-shadow 0.1s ease, height 0.5s ease;
    border: 1px solid ${props => props.theme.border};
    border-top: 0px;
    ${props =>
      props.open &&
      `
      border-top: 1px solid ${props.theme.foreground};
      height: ${props.token ? '385px' : '280px'}; 
      `}
  }
`;

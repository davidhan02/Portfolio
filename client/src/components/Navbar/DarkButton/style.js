import styled from 'styled-components/macro';
import { headerItem, transition } from '../../shared/helpers';

export const DarkIcon = styled.svg`
  width: 20px;
  height: 20px;

  & path {
    ${transition('fill')};
    fill: ${props => props.theme.mutedText};
  }

  @media (max-width: 425px) {
    width: 18px;
    height: 18px;
  }
`;

export const DarkButton = styled.span`
  ${headerItem};

  padding: 0 8px;
  cursor: pointer;

  @media (hover: hover) {
    :hover path {
      fill: ${props => props.theme.accent};
    }
  }
`;

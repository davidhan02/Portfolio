import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { trueCenter } from '../../shared/helpers';

export const ListItem = styled.li`
  :not(:first-child) {
    border-top: 1px solid ${props => props.theme.border};
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const ThumbnailBox = styled(Link)`
  ${trueCenter};
  min-width: 198px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.mutedText};
  border-right: 1px solid ${props => props.theme.border};
  &:hover {
    img {
      filter: brightness(80%);
    }
  }
  @media (max-width: 575px) {
    display: none;
  }
`;

export const Thumbnail = styled.img`
  max-height: 135px;
  width: auto;
  border-radius: 3px;
`;

export const NoImage = styled.span`
  white-space: nowrap;
`;

import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from '../../shared/helpers';
import { Line } from '../../shared/Line';

export const ProfileSideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  flex-basis: 280px;
  margin: 24px;
  margin-left: 0;
  overflow: hidden;

  border-radius: 3px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};
  box-shadow: 0 4px 12px ${props => props.theme.shadow};

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 24px;
    flex-direction: row;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const ProfileSideContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 280px;
    flex-basis: 1;
    text-align: center;
  }
`;

export const ProfileSideName = styled(Line)`
  font-size: 20px;
  padding: 10px 15px;
  letter-spacing: 0.02rem;
  color: ${props => props.theme.normalText};
  border-bottom: 1px solid ${props => props.theme.border};
`;

export const ProfileSideLink = styled(Link)`
  ${link};
  color: ${props => props.theme.mutedText};
  text-transform: uppercase;
  padding: 10px 8px;
  margin: 10px;
  margin-top: auto;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  text-align: center;
  :hover {
    border: 1px solid ${props => props.theme.accent};
  }
`;

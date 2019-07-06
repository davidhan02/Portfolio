import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1151px;
  margin: 24px auto;
  padding: 0 10px;
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const FooterSection = styled.div`
  margin-top: 24px;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  line-height: 35px;
  color: ${props => props.theme.mutedText};
  &:not(:first-child) {
    margin-left: 48px;
    }
  }
  &:last-child {
    text-align: right;
  }
  @media (max-width: 800px) {
    &:not(:first-child) {
      margin-left: 0;
      }
    }
  }
  @media (max-width: 650px) {
    &:nth-child(2) {
      margin-top: 0;
    }
    text-align: center !important;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mutedText};
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

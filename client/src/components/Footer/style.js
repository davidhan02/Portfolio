import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1150px;
  margin: 48px auto;
  margin-bottom: 0;
  padding: 0 10px;
  padding-bottom: 24px;
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
    border-top: 1px solid ${props => props.theme.border};
  }
`;

export const FooterSection = styled.div`
  margin-top: 24px;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 35px;
  color: ${props => props.theme.mutedText};
  &:not(:first-child) {
    margin-left: 48px;
    }
  }
  &:nth-child(3) {
    text-align: right;
    align-items: flex-end;
  }
  &:last-child {
    display: none;
  }
  @media (max-width: 800px) {
    &:not(:first-child) {
      margin-left: 0;
      }
    }
  }
  @media (max-width: 650px) {
    &:first-child {
      display: none;
    }
    &:nth-child(2) {
      margin-top: 0;
    }
    &:last-child {
      display: flex;
      margin-top: 0;
    }
    text-align: center !important;
    align-items: center !important;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  width: auto;
  color: ${props => props.theme.mutedText};
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

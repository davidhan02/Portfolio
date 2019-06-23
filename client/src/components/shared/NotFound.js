import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 48px 0;
  border-radius: 2px;
  text-align: center;

  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.mutedText};

  @media (max-width: 768px) {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;

const NotFound = () => {
  const message = '404: Not Found';
  return <Wrapper>{message}</Wrapper>;
};

export default NotFound;
